/****************************************************************************
 JSCommunicator
 http://jscommunicator.org

 Copyright (C) 2013  Daniel Pocock http://danielpocock.com

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

    if(!WebRTCSupported()) {
      JSCommUI.show_error('webrtc');
      return;
    }

    if(!window.JSCommSettings) {
      JSCommUI.show_error('no-config');
      return false;
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

    this.phone.on('newMessage', function(e) {
      JSCommManager.message_received(e);
    });

    this.phone.start();

  },

  init_first_connection : function() {
    console.log("First connection");
    this.first_run = false;

    var default_dest = JSCommSettings.dialing.auto_dial.default_destination;
    if(default_dest) {
      var edit_dest = JSCommSettings.dialing.edit_destination;
      var show_dest = JSCommSettings.dialing.show_destination;
      JSCommUI.set_destination(default_dest, !edit_dest, show_dest);

      var with_video = JSCommSettings.dialing.auto_dial.use_video;

      if(JSCommSettings.dialing.auto_dial.on_startup) {
        this.make_call(default_dest, with_video);
      }
    } else {
      JSCommUI.set_destination('', false, true);
    }
  },

  /*
   * These are callbacks for events from the SIP stack
   */

  link_up : function() {
    JSCommUI.link_up();

    if(this.first_run) {
      this.init_first_connection();
    }
  },

  link_down : function() {
    JSCommUI.link_down();
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

    var peer_name = '<' + call.remote_identity.uri.toAor().toString() + '>';
    if(call.remote_identity.display_name) {
       peer_name = call.remote_identity.display_name + ' ' + peer_name;
    }
    console.log("peer_name: " + peer_name);

    var status;
    if (call.direction === 'incoming') {
      status = "incoming";
    } else {
      status = "trying";
    }

    var with_video = (call.getLocalStreams().length > 0 &&
                      call.getLocalStreams()[0].getVideoTracks().length > 0) ||
                     (call.getRemoteStreams().length > 0 &&
                      call.getRemoteStreams()[0].getVideoTracks().length > 0);

    JSCommUI.session_start(status, peer_name, with_video);

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
    });

    call.on('started', function(e) {
      JSCommUI.session_connect(call, e);
    });

    call.on('newDTMF', function(e) {
      if (e.data.originator === 'remote') {
        dtmf_char = e.data.dtmf.tone;
        JSCommUI.incoming_dtmf(dtmf_char);
      }
    }); 

    call.on('ended', function(e) {
      JSCommUI.session_end();
      delete JSCommManager.current_session;
    });
  },

  message_received : function(e) {
    // FIXME: implement MESSAGE support
    console.log("received message, not handled: " + e);
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
      this.phone.call(destination_address, {
        mediaConstraints: { audio: true, video: with_video },
        RTCConstraints: {"optional": [{'DtlsSrtpKeyAgreement': 'true'}]},
        turn_servers: this.JsSIPSettings.turn_servers
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
    this.current_session.sendDTMF(dtmf_char);
  }

};

})(jQuery);

