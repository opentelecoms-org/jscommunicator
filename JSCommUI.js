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

window.JSCommUI = {
 
  soundPlayer : null,

  soundLoop : null,

  url_prefix : '',

  init_done : false,

  init : function() {

    if(this.init_done) {
      console.log("JSCommUI.init() called more than once");
      return;
    }

    console.log("starting init");

    // Hide the message "This service requires JavaScript"
    $("#network-controls #error #js").hide();
 
 

    if(JSCommSettings.webserver.url_prefix) {
      this.url_prefix = JSCommSettings.webserver.url_prefix;
    }

    JSCommUI.link_down();

    soundPlayer = document.createElement("audio");

    $("#jsc-login-display-name-field").keypress(function(e) {
      if (e.which == 13) {
        $("#jsc-login-sip-address-field").focus();
      }
    });

    $("#jsc-login-sip-address-field").keypress(function(e) {
      if (e.which == 13) {
        $("#jsc-login-password-field").focus();
      }
    });

    $("#jsc-login-password-field").keypress(function(e) {
      if (e.which == 13) {
        JSCommUI.do_login();
      }
    });

    $("#reg-button").click(function() {
      JSCommManager.register();
    });

    $("#de-reg-button").click(function() {
      JSCommManager.deregister();
    });

    $("#dest #address").keypress(function(e) {
      if (e.which == 13) {
        JSCommUI.make_call(JSCommSettings.dialing.prefer_video);
      }
    });

    $("#call-audio").click(function() {
      JSCommUI.make_call(false);
    });

    $("#call-video").click(function() {
      JSCommUI.make_call(true);
    });

    $("#session-cancel").click(function() {
      JSCommManager.cancel_call();
    });

    $("#session-reject").click(function() {
      JSCommManager.reject_call();
    });

    $("#session-answer").click(function() {
      JSCommUI.answer_call(false);
    });

    $("#session-answer-video").click(function() {
      JSCommUI.answer_call(true);
    });

    $("#session-hangup").click(function() {
      JSCommManager.hangup_call();
    });

    $("#dtmf-pad input:button").click(function() {
      var dtmf_char = $(this).val();
      JSCommUI.send_dtmf(dtmf_char);
    });

    $("#video-control-self-view").click(function() {
      JSCommUI.self_view(true);
    });

    $("#video-control-self-hide").click(function() {
      JSCommUI.self_view(false);
    });

    $("#video-control-fullscreen").click(function() {
      JSCommUI.video_fullscreen(true);
    });
 
	$("#chat-address").focus(function() {
		$(this).val("");
		$("#chat-error #no-contact").hide();
	});
 
	$("#start-chat").click(function () {
		var destination = $("#chat-address").val();
		if(destination!="Enter contact" && destination) {
      session = JSCommUI.getSession(destination, destination);
      if (!session) {
        JSCommUI.createChatSession(destination, destination);
      }
		} else {
			$("#chat-error #no-contact").show();
		}
	});
 
    if(!JSCommSettings.registration.user_control) {
      $("#reg #control").hide();
    }

    this.init_done = true;
  },

  show_login : function() {
    $("#jsc-login-display-name-field").val(JSCommManager.credentials.display_name);
    if(JSCommManager.credentials.uri.length > 4) {
       // strip off the "sip:" URI prefix, it is not shown in the login form
       $("#jsc-login-sip-address-field").val(JSCommManager.credentials.uri.substr(4));
    }
    $("#jsc-login-password-field").val(JSCommManager.credentials.sip_auth_password);
    $("#jsc-login").show();
    $("#jsc-login-button").click(JSCommUI.do_login);
    $("#tabs").hide();
  },

  do_login : function() {
    $("#jsc-login").hide();
    $("#tabs").show();
    JSCommUI.load_tabs();
    JSCommManager.credentials.display_name = $("#jsc-login-display-name-field").val();
    JSCommManager.credentials.uri = 'sip:' + $("#jsc-login-sip-address-field").val();
    JSCommManager.credentials.sip_auth_password = $("#jsc-login-password-field").val();
    JSCommManager.start_ua();
  },

  show_error : function(err_name) {

    // Hide the message "This service requires JavaScript"
    $("#network-controls #error #js").hide();

    $("#network-controls #error #" + err_name).show();
  },

  show_error_tmp : function(err_name) {

    // Hide the message "This service requires JavaScript"
    $("#network-controls #error #js").hide();

    $("#network-controls #error #" + err_name).show();
    $("#network-controls #error #" + err_name).fadeTo(5000, 1, function() {
      $(this).hide();
    });
  },

  set_link_state : function(connected) {
    $("#network-controls #ws").show();
    $("#network-controls #ws .state").hide();
    if(connected) {
      $(".ws-disconnected").hide();
      $("#network-controls #ws #connected").show();
      //re-enables phone 
      $("#dest :input").prop('disabled', false);
      $("#dialing-actions :input").prop('disabled', false);
    } else {
      $(".ws-connected").hide();
      $("#network-controls #ws #disconnected").show();
      //keep phone visible but disabled.
      $("#dial-controls").show();
	  $("#dialing-actions :input").prop('disabled', true);
      $("#dest :input").prop('disabled', true);
    }
  },

  ready_to_dial : function() {
    $("#dial-controls").show();
    $("#dialing-actions input:button").hide();
    if(JSCommSettings.dialing.audio_dialing) {
      $("#dialing-actions #call-audio").show();
    }
    if(JSCommSettings.dialing.video_dialing) {
      $("#dialing-actions #call-video").show();
    }
    $("#dest #address").focus();
  },

  make_call : function(with_video) {
    var destination_address = $("#address").val();
    if(destination_address.length < 1) {
      console.log("no destination specified, can't make call");
      return;
    }
    JSCommManager.make_call(destination_address, with_video);
  },

  answer_call : function(with_video) {

    // Stop the ringback and hide the answer controls as soon as the user
    // clicks answer.  Notice that sometimes there is a delay of several
    // seconds between the time that the user clicks answer and the time
    // the callback to session_connect() occurs.  This delay can occur when the
    // ICE negotiation happens too slowly.
    clearInterval(JSCommUI.soundLoop);
    soundPlayer.pause();
    $("#session-controls #state span").hide();
    $("#session-controls #state .session-accepted").show();
    $("#session-actions input:button").hide();

    JSCommManager.answer_call(with_video);
  },

  set_destination : function(dest, locked, display) {
    $("#address").val(dest);
    $("#address").attr('disabled', locked);
    if(display) {
      $("#dest").show();
    }
  },

  incoming_dtmf : function(dtmf_char) {
    this.play_dtmf_sound(dtmf_char);
  },

  link_up : function() {
    JSCommUI.set_link_state(true);
    JSCommUI.ready_to_dial();
  },

  link_down : function() {
    JSCommUI.set_link_state(false);
  },

  registration_up : function() {
    // Clear any error from earlier failure:
    $("#network-controls #error #reg-fail").hide();

    $("#network-controls #reg .down").hide();
    $("#network-controls #reg .up").show();
    $("#network-controls #reg").show();
  },

  registration_down : function() {
    $("#network-controls #reg .up").hide();
    $("#network-controls #reg .down").show();
    $("#network-controls #reg").show();
  },

  registration_failure : function() {
    $("#network-controls #error #reg-fail").show();
    $("#network-controls #reg").show();
  },

  play_again : function() {
    soundPlayer.play();
  },

  session_start : function(status, peer_name, peer_display, peer_uri, with_video) {
    $("#dial-controls").hide();
    $(".session-active").hide();
    $("#session-controls #state span").hide();
    $("#session-controls #peer").empty();
    $("#session-controls #peer").text(peer_name);
    $("#session-actions input:button").hide();
    session = JSCommUI.getSession(peer_uri, peer_display);
    if (!session) {
      JSCommUI.createChatSession(peer_display, peer_uri);
    }
    if(status == 'incoming') {
      $("#session-controls #state .session-incoming").show();
      $("#session-actions input.session-incoming:button").show();
      soundPlayer.setAttribute("src", this.get_sound_url("incoming-call2"));
      soundPlayer.play();
      clearInterval(JSCommUI.soundLoop);
      JSCommUI.soundLoop = setInterval(JSCommUI.play_again, 3000);
    } else if(status == 'trying') {
      $("#session-controls #state .session-outgoing").show();
      $("#session-actions input.session-outgoing:button").show();
    } else {
      console.log("Unexpected status: " + status);
    }
    $("#session-controls").show();

    if(with_video) {
      $('#video-session').show();
      JSCommUI.self_view(true);
    }
  },

  session_failed : function(cause) {
    clearInterval(JSCommUI.soundLoop);
    soundPlayer.pause();
    if(!cause) {
      this.show_error_tmp('call-attempt-failed');
    } else {
      $("#network-controls #error #dynamic").empty();
      $("#network-controls #error #dynamic").append(cause);
      this.show_error_tmp('dynamic');
    }
    soundPlayer.setAttribute("src", this.get_sound_url("outgoing-call-rejected"));
    soundPlayer.play();
    this.session_cleanup();
  },

  session_cleanup : function() {
    clearInterval(JSCommUI.soundLoop);
    soundPlayer.pause();
    $("#session-controls").hide();
    $('#video-session').hide();
    JSCommUI.ready_to_dial();
  },

  session_progress : function(status) {
    if(status == 'trying') {
      console.log("starting ringback...");
      soundPlayer.setAttribute("src", this.get_sound_url("outgoing-call2"));
      soundPlayer.play();
      clearInterval(JSCommUI.soundLoop);
      JSCommUI.soundLoop = setInterval(JSCommUI.play_again, 5000);
    }
  },

  session_connect : function(call, e) {
    clearInterval(JSCommUI.soundLoop);
    soundPlayer.pause();
    $("#session-controls #state span").hide();
    $("#session-controls .session-active").show();
    if(JSCommSettings.session.show_dtmf_pad) {
      $("#session-controls #dtmf-pad").show();
    } else {
      $("#session-controls #dtmf-pad").hide();
    }
    $("#session-actions input:button").hide();
    $("#session-actions input.session-active:button").show();

    var local_stream_count = call.getLocalStreams().length;
    var remote_stream_count = call.getRemoteStreams().length;

    console.log("local stream count = " + local_stream_count +
                ", remote stream count = " + remote_stream_count);

    if(local_stream_count > 0) {
      $('#selfView').attr('src', window.URL.createObjectURL(call.getLocalStreams()[0]));
      $('#selfView').attr('volume', 0);
    }

    if(remote_stream_count > 0) {
      $('#remoteView').attr('src',  window.URL.createObjectURL(call.getRemoteStreams()[0]));
    }

    var with_video = (local_stream_count > 0 &&
                      call.getLocalStreams()[0].getVideoTracks().length > 0) ||
                     (remote_stream_count > 0 &&
                      call.getRemoteStreams()[0].getVideoTracks().length > 0);

    if(with_video) {
      $('#video-session').show();
      JSCommUI.self_view(true);
    } else {
      $('#video-session').hide();
    }
  },

  session_end : function() {
    this.session_cleanup();
  },

  send_dtmf : function(dtmf_char) {
    console.log("DTMF press: " + dtmf_char);
    JSCommManager.send_dtmf(dtmf_char);
    // Local sound effects:
    this.play_dtmf_sound(dtmf_char);
  },

  self_view : function(see_self) {
    $("#video-controls input.self:button").hide();
    if(see_self) {
      $("#video-control-self-hide").show();
      $("#video-session #selfView").show();
    } else {
      $("#video-control-self-view").show();
      $("#video-session #selfView").hide();
    }
  },

  video_fullscreen : function(see_fullscreen) {
    if(see_fullscreen) {
      console.log("Going fullscreen...");
      // FIXME: add the full-screen class in the CSS
      $("#video-session").attr('class', 'full-screen');
    } else {
      console.log("Leaving fullscreen...");
      $("#video-session").attr('class', '');
    }
  },

  get_sound_url : function(sound_name) {
    return this.url_prefix + 'sounds/' + sound_name + '.ogg';
  },

  play_dtmf_sound : function(dtmf_char) {
    var sound_name = dtmf_char;
    if(dtmf_char == '*') {
      sound_name = 'asterisk';
    } else if(dtmf_char == '#') {
      sound_name = 'hash';
    }
    console.log("Playing sound: " + sound_name);
    soundPlayer.setAttribute("src", this.get_sound_url('dialpad/' + sound_name));
    soundPlayer.play();
  },
 
  load_tabs : function() {
    $("#label-1").addClass("active-tab");
    $(".tab-page").hide();
	$("#chat-error #no-contact").hide();
    $("#tab-1").show();
    $(".tab-label").click(function() {
       JSCommUI.change_tab($(this).attr("id"),$(this).attr("value"));
    });
  },
 
  change_tab : function(label, tab) {
    $(".tab-page").hide();
    $(".active-tab").removeClass("active-tab");
    $(".tab-page").hide();
    $(tab).show();
    label = '#' + label;
    $(label).addClass("active-tab");
    $("#chat-address").val("Enter contact");
  },
 
 //adapted from try.jssip.net
 createChatSession : function(display_name, uri) {
	 var session_div = $('\
	 <div class="chatSession"> \
		<div class="close">x</div> \
	    <div class="peer"> \
			<span class="display-name">' + display_name + '</span> \
			<span>&lt;</span><span class="uri">' + uri + '</span><span>&gt;</span> \
		</div> \
		<div class="chat"> \
			<div class="chatting"></div> \
			<input class="inactive" type="text" name="chat-input" value="type to chat..."/>\
			<div class="iscomposing"></div> \
		</div> \
	 </div> \
	 ');
	 if(!uri) {
		uri = display_name;
	 }
	 $("#tab-2").append(session_div);
	 
	 var session = $("#tab-2 .chatSession").filter(":last");
	 var close = $(session).find("> .close");
	 var chat_input = $(session).find(".chat > input[type='text']");
	
	 close.click(function() {
		JSCommUI.removeSession(session);
	 });
	 
	 chat_input.focus(function(e) {
		if ($(this).hasClass("inactive")) {
			$(this).val("");
			$(this).removeClass("inactive");
		}
	 });
	 
	 chat_input.blur(function(e) {
		if ($(this).val() == "") {
			$(this).addClass("inactive");
			$(this).val("type to chat...");
		}
	 });
	
	
	 chat_input.keydown(function(e) {
		// Ignore TAB and ESC.
		if (e.which == 9 || e.which == 27) {
			return false;
		}
		// Enter pressed? so send chat.
		else if (e.which == 13 && $(this).val() != "") {
			var text = chat_input.val();
			JSCommUI.addChatMessage(session, "me", text);
			chat_input.val("");
			JSCommUI.jssipMessage(uri, text);
		}
		// Ignore Enter when empty input.
		else if (e.which == 13 && $(this).val() == "") {
			return false;
		}
		// NOTE is-composing stuff.
		// Ignore "windows" and ALT keys, DEL, mayusculas and 0 (que no sÃ© quÃ© es).
		else if (e.which == 18 || e.which == 91 || e.which == 46 || e.which == 16 || e.which == 0)
			return false;
	 });
	 
	 $(session).fadeIn(100);
	 
	 // Return the jQuery object for the created session div.
	 return session;
 },
 
 removeSession : function(session) {
	$(session).remove();
 },
 
 addChatMessage : function(session, who, text) {
	 var chatting = $(session).find(".chat > .chatting");
	 $(chatting).removeClass("inactive");
	 if (who != "error") {
		var who_text = ( who == "me" ? "me" : $(session).find(".peer > .display-name").text() );
		var message_div = $('<p class="' + who + '"><b>' + who_text + '</b>: ' + text + '</p>');
	 }
	 // ERROR sending the MESSAGE.
	 else {
		var message_div = $('<p class="error"><i>message failed: ' + text + '</i>');
	 }
	 $(chatting).append(message_div);
	 $(chatting).scrollTop(1e4);
 },
 
 /*
  * JsSIP.UA new_message event listener
  */
 new_message : function(e) {
	var display_name, text,
	message = e.data.message,
	request = e.data.request,
	uri = request.from.uri;
	display_name = request.from.display_name || request.from.uri.user;
	text = request.body;
	if(e.data.message.direction == 'incoming') {
		session = JSCommUI.getSession(uri, display_name);
		if (!session) {
			session = JSCommUI.createChatSession(display_name, uri);
		}
		$(session).find(".peer > .display-name").text(display_name);
		$(session).find(".peer > .uri").text(uri);
		JSCommUI.addChatMessage(session, "peer", text);
		$(session).find(".chat input").focus();
	}
 },
 
 getSession : function(uri, display_name) {
	var session_found = null;
	$("#tab-2 > .chatSession").each(function(i, session) {
		if (uri == $(this).find(".peer > .uri").text()) {
			session_found = session;
		} else if (display_name == $(this).find(".peer > .display-name").text()) {
			session_found = session;
		}
	});
	if (session_found)
		return session_found;
	else
		return false;
 },
 
 jssipMessage : function(uri, text) {
	 JSCommManager.sendMessage(uri, text);
 },

 
 /* End of adapted from try.jssip.net */

};

})(jQuery);

