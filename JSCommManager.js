/****************************************************************************
 JSCommunicator
 http://jscommunicator.org

 Copyright (C) 2013  Daniel Pocock http://danielpocock.com
 Copyright (C) 2014  Juliana Louback http://julianalouback.com

 The JavaScript code in this page is free software: you can
 redistribute it and/or modify it under the terms of the GNU
 General Public License (GNU GPL) as published by the Free Software
 Foundation, either version 2 of the License, or (at your option)
 any later version.  The code is distributed WITHOUT ANY WARRANTY;
 without even the implied warranty of MERCHANTABILITY or FITNESS
 FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

 You may distribute non-source (e.g., minimized or compacted) forms of
 that code without the full copy of the GNU GPL normally required
 provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.
****************************************************************************/

(function($) {

window.JSCommManager = {

  currentURL : null,

  phone : null,

  current_session : null,

  first_run : true,

  credentials : {
    display_name: null,
    uri: null,
    sip_auth_user: null,
    sip_auth_password: null,
    sip_auth_user_full_uri: true
  },

  init : function() {

    /* We like to use console.log, so make sure it exists */
    if(!window.console) {
      window.console = {};
    }
    if(!window.console.log) {
      window.console.log = function() {};
    }
    if(!window.console.error) {
      window.console.error = function() {};
    }

    if(!WebRTCSupported()) {
      JSCommUI.show_error('webrtc');
      Arbiter.publish("jsc/unavailable/webrtc", null, {async:true});
      return;
    }

    if(!window.JSCommSettings) {
      JSCommUI.show_error('no-config');
      Arbiter.publish("jsc/unavailable/config", null, {async:true});
      return false;
    }

    /* load internationalization options */
    if(JSCommSettings.i18n.translate) {
        i18n.initI18n(JSCommSettings.i18n.show_menu);
    }

    this.currentURL = parseUri(window.location.toString());
    if(this.currentURL.queryKey["dial"]) {
      var with_video = JSCommSettings.dialing.auto_dial.use_video;
      if(this.currentURL.queryKey["video"]) {
        with_video = $.parseJSON(decodeURIComponent(this.currentURL.queryKey["video"]));
      }
      // Let the URL settings overwrite any auto-dial settings from
      // the static configuration:
      JSCommSettings.dialing.auto_dial = {
        default_destination: decodeURIComponent(this.currentURL.queryKey["dial"]),
        on_startup: true,
        use_video: with_video
      };
    }
 
    // Copy the credentials from the settings into a local object
    // for use with the login form
    this.credentials = JSCommSettings.user;

    this.start_ua();
  },

  start_login : function() {
    JSCommUI.show_login();
  },

  /**
   * Try to start the user agent.
   *
   * Will go to the login box if credentials are not available.
   */
  start_ua : function() {

    var have_credentials = false;

    // The essential credentials are the SIP URI and a password
    // Leave the password empty ('') if using client certificates
    // and make it null to force the login box to appear.
    if(this.credentials.uri && this.credentials.sip_auth_password) {
      have_credentials = true;
    }

    if(!have_credentials) {
      // If no credentials were found from config or a previous attempt
      // in the login box, display the login box
      JSCommUI.init();
      this.start_login();
      return;
    }

    if(!this.credentials.sip_auth_user || this.credentials.sip_auth_user.length == 0) {
      // An auth username has not been specified
      // Therefore, we will try to construct the auth username
      // automatically from the SIP URI
      if(this.credentials.sip_auth_user_full_uri) {
         this.credentials.sip_auth_user = this.credentials.uri.substr(4);
      } else {
         var pos = this.credentials.uri.indexOf('@') - 4;
         this.credentials.sip_auth_user = this.credentials.uri.substr(4, pos);
      }
      console.log("auth username has been automatically derived from the user SIP address: " + this.credentials.uri + " => " + this.credentials.sip_auth_user);
    }

    // Apply the credentials from SIP settings to any TURN server configuration
    // that has no credentials yet
    var turn_servers = JSCommSettings.turn_servers;
    if(Object.prototype.toString.call(turn_servers) === '[object Array]') {
      // for an array of TURN servers:
      for(var i = 0; i < turn_servers.length; i++) {
        if(!turn_servers[i].username || turn_servers[i].username.length == 0) {
          turn_servers[i].username = this.credentials.sip_auth_user;
          turn_servers[i].password = this.credentials.sip_auth_password;
        }
      }
    } else {
      // for just a single TURN server entry not in an array:
      if(!turn_servers.username || turn_servers.username.length == 0) {
        turn_servers.username = this.credentials.sip_auth_user;
        turn_servers.password = this.credentials.sip_auth_password;
      }
    }

    // Apply the user credentials from our local object back to
    // the main settings object used to configure the JsSIP stack
    JSCommSettings.user = this.credentials;

    try {
      this.JsSIPSettings = getJsSIPSettings(JSCommSettings);
      this.phone = new JsSIP.UA(this.JsSIPSettings);
    } catch(e) {
      console.log(e.toString());
      JSCommUI.show_error('ua-init-failure');
      return false;
    }

    JSCommUI.init();

    this.phone.on('connected', function(e) {
      JSCommManager.link_up();
    });

    this.phone.on('disconnected', function(e) {
      JSCommManager.link_down();
    });

    this.phone.on('registered', function(e) {
      JSCommManager.registration_up();
    });

    this.phone.on('unregistered', function(e) {
      JSCommManager.registration_down();
    });

    this.phone.on('registrationFailed', function(e){
      console.log("Registration failure: " + e.toString());
      JSCommManager.registration_failure();
    });

    this.phone.on('newRTCSession', function(e) {
      // TODO: map JsSIP session to some local session definition
      JSCommManager.session_start(e);
    });

    this.phone.on('newTransaction', function(e) {
      // TODO: map JsSIP session to some local session definition
      console.log("newTransaction");
      var tx = e.data.transaction;
      if(tx && tx.request_sender && tx.request_sender.applicant &&
          tx.request_sender.applicant.direction == "outgoing") {
        console.log("outgoing call");
        var request = tx.request;
        if(request && request.method && request.method == 'INVITE' &&
          request.body) {
          // search for a relay candidate
          var pos = request.body.search("typ relay");
          if(pos < 0) {
            console.log("No relay candidate found in SDP");
            if(JSCommSettings.session.require_relay_candidate) {
              console.log("require_relay_candidate is set yet no relay candidate found, call prohibited");
              tx.onTransportError();
              Arbiter.publish("jsc/unavailable/relay", null, {async:true});
            }
          }

          // search for a=crypto, if it is missing, it means this
          // browser does not want to do SDES and a workaround
          // may be needed for Asterisk
          pos = request.body.search("a=crypto");
          console.log("pos = " + pos);
          if(pos < 0) {
            console.log("Doing workaround for Asterisk issue 22961");
            // Looks like Firefox, implement hack for Asterisk issue 22961
            var new_body = request.body.replace(/ RTP/g, ' UDP/TLS/RTP');
            request.body = new_body;
          }
        }
      } else if(tx) {
        var request = tx.request;
        if(request && request.method && request.method == 'INVITE' &&
          request.body) {
          console.log("fixing incoming SDP if necessary...");
          // Fix the media descriptor, undo the hack below
          var new_body = request.body.replace(/ UDP.TLS.RTP/g, ' RTP');
          request.body = new_body;
        }
      }
    });

    this.phone.on('newMessage', function(e) {
      // FIXME: if JSCommSettings.chat.enable == false,
      // we should rejecting incoming messages and send back
      // a SIP error code.
      JSCommManager.message_received(e);
    });

    Arbiter.subscribe(
      "jsc/destination/set",
      { async:true },
      function(data) {
        var new_dest = data;
        JSCommManager.set_destination(new_dest);
      }
    );

    this.phone.start();

  },

  init_first_connection : function() {
    console.log("First connection");
    this.first_run = false;

    var default_dest = JSCommSettings.dialing.auto_dial.default_destination;
    if(default_dest) {
      this.set_destination(default_dest);

      var with_video = JSCommSettings.dialing.auto_dial.use_video;

      if(JSCommSettings.dialing.auto_dial.on_startup) {
        this.make_call(default_dest, with_video);
      }
    } else {
      var edit_dest = JSCommSettings.dialing.edit_destination;
      var show_dest = JSCommSettings.dialing.show_destination;
      JSCommUI.set_destination('', !edit_dest, show_dest);
    }
  },

  set_destination : function(dest) {
    // FIXME: should check state, only change destination
    // box if idle (no call in progress)
    var edit_dest = JSCommSettings.dialing.edit_destination;
    var show_dest = JSCommSettings.dialing.show_destination;
    JSCommUI.set_destination(dest, !edit_dest, show_dest);
  },

  /*
   * These are callbacks for events from the SIP stack
   */

  link_up : function() {
    JSCommUI.link_up();

    if(this.first_run) {
      this.init_first_connection();
    }

    // Signal that we are ready to make or receive calls
    Arbiter.publish("jsc/ua/idle", null, {async:true});
  },

  link_down : function() {
    JSCommUI.link_down();

    // Signal that we are not ready to make or receive calls
    Arbiter.publish("jsc/ua/notready", null, {async:true});
  },

  registration_up : function() {
    JSCommUI.registration_up();
  },

  registration_down : function() {
    JSCommUI.registration_down();
  },

  registration_failure : function() {
    JSCommUI.registration_failure();
  },

  session_start : function(e) {

    var call = e.data.session;

    if(this.current_session != null) {
      console.log("rejecting new session, a session is already active");
      call.terminate();
      return;
    }

    this.current_session = call;

    // Signal that we are no longer idle
    Arbiter.publish("jsc/ua/incall", null, {async:true});

    var peer_uri = call.remote_identity.uri.toAor().toString();
    var peer_name = '<' + peer_uri + '>';
	  var peer_display = '';
    if(call.remote_identity.display_name) {
      peer_name = call.remote_identity.display_name + ' ' + peer_name;
	    peer_display = call.remote_identity.display_name;
    }
    console.log("peer_name: " + peer_name);

    var status;
    if (call.direction === 'incoming') {
      status = "incoming";
      // Signal that an incoming call is ringing
      Arbiter.publish("jsc/call/incoming", peer_uri, {async:true});
    } else {
      status = "trying";
      // Signal that an outgoing call is starting
      Arbiter.publish("jsc/call/outgoing", peer_uri, {async:true});
    }

    var with_video = (call.getLocalStreams().length > 0 &&
                      call.getLocalStreams()[0].getVideoTracks().length > 0) ||
                     (call.getRemoteStreams().length > 0 &&
                      call.getRemoteStreams()[0].getVideoTracks().length > 0);

    JSCommUI.session_start(status, peer_name, peer_display, peer_uri, with_video);

    call.on('progress', function(e) {
      var status;
      if (call.direction === 'incoming') {
        status = "incoming";
      } else {
        status = "trying";
      }
      JSCommUI.session_progress(status);
    });

    call.on('failed', function(e) {
      var cause = e.data.cause, response = e.data.response;
      JSCommUI.session_failed(cause);
      delete JSCommManager.current_session;
      // Signal that a call failed
      Arbiter.publish("jsc/call/failed", null, {async:true});
      Arbiter.publish("jsc/ua/idle", null, {async:true});
    });

    call.on('started', function(e) {
      JSCommUI.session_connect(call, e);
      // Signal that a call connected
      Arbiter.publish("jsc/call/connected", null, {async:true});
    });

    call.on('newDTMF', function(e) {
      if (e.data.originator === 'remote') {
        dtmf_char = e.data.dtmf.tone;
        JSCommUI.incoming_dtmf(dtmf_char);
        // Signal that a DTMF tone arrived
        Arbiter.publish("jsc/call/dtmf", dtmf_char, {async:true});
      }
    }); 

    call.on('ended', function(e) {
      JSCommUI.session_end();
      delete JSCommManager.current_session;
      // Signal that a call finished
      Arbiter.publish("jsc/call/end", null, {async:true});
      Arbiter.publish("jsc/ua/idle", null, {async:true});
    });
  },

  message_received : function(e) {
	JSCommUI.new_message(e);
  },

  /*
   * These are commands executed from the local user environment
   */

  register : function() {
    this.phone.register();
  },

  deregister : function() {
    this.phone.unregister();
  },

  make_call : function(destination_address, with_video) {
    try {
      var extra_headers = [];
      if(JSCommSettings.extra_headers) {
        extra_headers = JSCommSettings.extra_headers;
      }
      this.phone.call(destination_address, {
        mediaConstraints: { audio: true, video: with_video },
        RTCConstraints: {"optional": [{'DtlsSrtpKeyAgreement': 'true'}]},
        turn_servers: this.JsSIPSettings.turn_servers,
        extraHeaders: extra_headers
      });
    } catch(e){
      JSCommUI.show_error_tmp('call-attempt-failed');
      console.log("make_call failed: " + e.toString());
      console.log(e);
    }
  },

  cancel_call : function() {
    this.current_session.terminate();
  },

  reject_call : function() {
    this.current_session.terminate();
  },

  answer_call : function(with_video) {
    this.current_session.answer(
      { mediaConstraints:
          { audio: true, video: with_video }
      });
  },

  hangup_call : function() {
    this.current_session.terminate();
  },

  send_dtmf : function(dtmf_char) {
    var duration = 100;
    if(JSCommSettings.session.dtmf_duration) {
      duration = JSCommSettings.session.dtmf_duration;
    }
    var dtmf_opts = {
      duration : duration
    }
    this.current_session.sendDTMF(dtmf_char, dtmf_opts);
  },
 
  sendMessage : function(uri, text) {
  	try {
  		this.phone.sendMessage(uri,text);
  	} catch(e){
  		throw(e);
  		return;
  	}
  }

};

})(jQuery);
