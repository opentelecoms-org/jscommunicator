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

 Portions of this file adapted from JsSIP, http://jssip.net

 Copyright © 2012-2013 José Luis Millán – Versatica <http://www.versatica.com>

 JsSIP code was originally distributed under the following terms:

MIT License 

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
“Software”), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

The original MIT License text can be found at opensource.org.

*****************************************************************************/

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
    $("#error #js").hide();
 
 

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
      $("#dtmf-pad").hide();
      JSCommManager.hangup_call();
    });

    $("#dtmf-pad input:button").mousedown(function() {
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

    $("#dtmf-button").click(function() {
      $("#dtmf-pad").toggle();
    });
 
	$("#chat-address").focus(function() {
		$(this).val("");
		$("#chat-contact-error").hide();
	});

  $("#address").focus(function() {
    $(this).val("");
    $("#call-contact-error").hide();
  });
 
	$("#start-chat").click(function () {
		var destination = $("#chat-address").val();
		if(destination!="Enter contact" && destination) {
      session = JSCommUI.getSession(destination, destination);
      if (!session) {
        JSCommUI.createChatSession(destination, destination);
      }
		} else {
			$("#chat-contact-error").show();
		}
	});

    if(!JSCommSettings.chat || !JSCommSettings.chat.enable) {
      $("#communicator #chat").hide();
    }
 
    if(!JSCommSettings.registration.user_control) {
      $("#reg #control").text("");
    }

    this.init_done = true;
  },

  show_login : function() {
    $("#welcome").hide();
    $("#welcome_name").hide();
    $("#communicator").hide();
    $("#jsc-logout-button").hide();
    if(JSCommManager.credentials.uri) {
        $("#jsc-login-display-name-field").val(JSCommManager.credentials.display_name);
        if(JSCommManager.credentials.uri.length > 4) {
            // strip off the "sip:" URI prefix, it is not shown in the login form
            $("#jsc-login-sip-address-field").val(JSCommManager.credentials.uri.substr(4));
        }
    }
    else {
        if(this.get_cookie("displayName")) {
            $("#jsc-login-display-name-field").val(this.get_cookie("displayName"));
            $("#jsc-login-sip-address-field").val(this.get_cookie("sipAddress"));
        }
    }
    $("#jsc-login-password-field").val("");
    $("#jsc-login").show();
    $("#jsc-login-button").click(JSCommUI.do_login);
  },

  do_login : function() {
    $("#jsc-login").hide();
    $("#communicator").show();
    JSCommManager.credentials.display_name = $("#jsc-login-display-name-field").val();
    JSCommManager.credentials.uri = 'sip:' + $("#jsc-login-sip-address-field").val();
    JSCommManager.credentials.sip_auth_password = $("#jsc-login-password-field").val();
    if(JSCommManager.credentials.display_name) {
      var name = JSCommManager.credentials.display_name
    } else {
      name = JSCommUI.get_name(JSCommManager.credentials.uri);
    }
    $("#welcome").show();
    $("#welcome_name").show();
    $("#welcome_name").text(" " + name);
    JSCommManager.start_ua();
    $("#jsc-logout-button").show();
    $("#jsc-logout-button").click(JSCommUI.do_logout);
    if($("#rememberMe").prop("checked")) {
        document.cookie = "displayName=".concat($("#jsc-login-display-name-field").val());
        document.cookie = "sipAddress=".concat($("#jsc-login-sip-address-field").val());
    }
  },
 
  do_logout : function() {
    $("#reg").hide();
    // Clear any error from earlier failure:
    $("#error #reg-fail").hide();
    JSCommUI.show_login();
  },

  show_error : function(err_name) {

    // Hide the message "This service requires JavaScript"
    $("#error #js").hide();

    $("#error #" + err_name).show();
  },

  show_error_tmp : function(err_name) {

    // Hide the message "This service requires JavaScript"
    $("#error #js").hide();

    $("#error #" + err_name).show();
    $("#error #" + err_name).fadeTo(5000, 1, function() {
      $(this).hide();
    });
  },

  set_link_state : function(connected) {
    $("#encapsulate #ws").show();
    $("#encapsulate #ws .state").hide();
    if(connected) {
      $(".ws-disconnected").hide();
      $("#encapsulate #ws #connected").show();
      //re-enables phone 
      $("#dest :input").prop('disabled', false);
      $("#dialing-actions :input").prop('disabled', false);
      $("#new-chat :input").prop('disabled', false);
    } else {
      $(".ws-connected").hide();
      $("#encapsulate #ws #disconnected").show();
      //keep phone and chat visible but disabled.
      $("#dial-controls").show();
	    $("#dialing-actions :input").prop('disabled', true);
      $("#dest :input").prop('disabled', true);
      $("#new-chat :input").prop('disabled', true);
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
      $("#video-session").draggable();
      $("#video-session").resizable();
    }
    $("#dest #address").focus();
  },

  make_call : function(with_video) {
    var destination_address = $("#address").val();
    if(destination_address.length < 1) {
      console.log("no destination specified, can't make call");
      $("#call-contact-error").show();
      return;
    }
    $("#call-contact-error").hide();
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
    $("#call-info #state span").hide();
    $("#call-info #state .session-accepted").show();
    $("#session-actions button").hide();

    JSCommManager.answer_call(with_video);
  },

  set_destination : function(dest, locked, display) {
    $("#address").val(dest);
    $("#address").attr('disabled', locked);
    if(display) {
      $("#dest").show();
    } else {
      $("#dest").hide();
    }
  },

  incoming_dtmf : function(dtmf_char) {
    if(JSCommSettings.session.dialpad_tone) {
        this.play_dtmf_sound(dtmf_char);
    }
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
    $("#error #reg-fail").hide();

    $("#encapsulate #reg .down").hide();
    $("#encapsulate #reg .up").show();
    $("#encapsulate #reg").show();
  },

  registration_down : function() {
    $("#encapsulate #reg .up").hide();
    $("#encapsulate #reg .down").show();
    $("#encapsulate #reg").show();
  },

  registration_failure : function() {
    $("#reg .up").hide();
    $("#error #reg-fail").show();
    $("#encapsulate #reg").show();
  },

  play_again : function() {
    soundPlayer.play();
  },

  session_start : function(status, peer_name, peer_display, peer_uri, with_video) {
    $("#dial-controls").hide();
    $(".session-active").hide();
    $("#call-info #state span").hide();
    $("#session-controls #peer").empty();
    $("#session-controls #peer").text(peer_name);
    $("#session-actions button").hide();
    session = JSCommUI.getSession(peer_uri, peer_display);
    if (!session) {
      JSCommUI.createChatSession(peer_display, peer_uri);
    }
    if(status == 'incoming') {
      $("#call-info #state .session-incoming").show();
      $("#session-actions .session-incoming").show();
      soundPlayer.setAttribute("src", this.get_sound_url("incoming-call2"));
      soundPlayer.play();
      clearInterval(JSCommUI.soundLoop);
      JSCommUI.soundLoop = setInterval(JSCommUI.play_again, 3000);
    } else if(status == 'trying') {
      $("#call-info #state .session-outgoing").show();
      $("#session-actions .session-outgoing").show();
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
      $("#error #dynamic").empty();
      $("#error #dynamic").append(cause);
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
    $("#call-info #state span").hide();
    if(JSCommSettings.dialing.clear_dialbox) {
        $("#address").val("");
    }
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
    $("#call-info #state span").hide();
    $(".session-active").show();
    if(JSCommSettings.session.show_dtmf_pad) {
      $("#session-controls #dtmf-pad").show();
    } else {
      $("#session-controls #dtmf-pad").hide();
    }
    $("#session-actions button").hide();
    $(".session-active").show();

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
    if(JSCommSettings.session.dialpad_tone) {
        this.play_dtmf_sound(dtmf_char);
    }
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
       JSCommUI.change_tab($(this).attr("id"));
    });
  },
 
  change_tab : function(label) {
    $(".chatSession").hide();
    $(".active-tab").removeClass("active-tab");
    var number = label.substring(5);
    var tab = "#tab";
    tab = tab.concat(number);
    $(tab).show();
    label = '#' + label;
    $(label).addClass("active-tab");
    $(label).css("font-weight", "normal");
  },
 
 //adapted from try.jssip.net
 createChatSession : function(display_name, uri) {
   var number = $(".chatSession").length;
   if(number > 5) {
      return;
   }
   if(!display_name) {
    display_name = JSCommUI.get_name(uri);
   }
   $(".chatSession").hide();
   $(".tab-label").removeClass("active-tab");
   var label_div = $('<li class="tab-label active-tab" id="label-'+number+'">'+ display_name +'</li>');
	 var session_div = $('\
	 <div class="chatSession" id="tab-'+ number +'"> \
		<div class="close" value="'+ number +'">x</div> \
	    <div class="peer"> \
      <span class="display-name">' + display_name + '</span> \
			<span>&lt;</span><span class="uri" style="font-weight:bold;">' + uri + '</span><span>&gt;</span> \
		</div> \
		<div class="chat"> \
			<div class="chatting"></div> \
			<input class="inactive" type="text" name="chat-input" placeholder="type to chat..."/>\
			<div class="iscomposing"></div> \
		</div> \
	 </div> \
	 ');
   $("#tab-labels").append(label_div);
	 $("#tab-pages").append(session_div);
   i18n.loadBundles($("#lang_selection").val());
   var label = "#label-".concat(number);
   var tab = "#tab-".concat(number);
   var session = $("#tab-pages .chatSession").filter(":last");
	 var close = $(session).find("> .close");
	 var chat_input = $(session).find(".chat > input[type='text']");

   $(label).click(function() {
       JSCommUI.change_tab($(this).attr('id'));
    });
	
	 close.click(function() {
		$(tab).remove();
    $(label).remove();
    var number = $(".chatSession").length;
    if(number > 0) {
      var existingLabel = $("#tab-labels .tab-label").filter(":last");
      JSCommUI.change_tab($(existingLabel).attr("id"));
    }
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

 addChatMessage : function(session, who, text) {
	 var chatting = $(session).find(".chat > .chatting");
	 $(chatting).removeClass("inactive");
   name = JSCommUI.get_name(JSCommManager.credentials.uri);
	 if (who != "error") {
		var who_text = ( who == "me" ? name : $(session).find(".peer > .display-name").text() );
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
    JSCommUI.message_alert(session);
		$(session).find(".peer > .display-name").text(display_name);
		$(session).find(".peer > .uri").text(uri);
		JSCommUI.addChatMessage(session, "peer", text);
		$(session).find(".chat input").focus();
	}
 },

  //flash chat tab when new message arrives
  message_alert : function(session) {
    if(JSCommSettings.session.message_tone) {
      this.play_message_sound();
    }
    var number = $(session).attr('id').substring(4);
    var label = "#label-";
    label = label.concat(number);
    if(!$(label).hasClass('active-tab')) {
      for(i=0;i<3;i++) {
        $(label).fadeTo('', 0.5).fadeTo('', 1.0);
      }
      $(label).css("font-weight", "bold");
    }
  },

  play_message_sound : function() {
    var sound_name = "new_message";
    console.log("Playing sound: " + sound_name);
    soundPlayer.setAttribute("src", this.get_sound_url(sound_name));
    soundPlayer.play();
  },
 
 getSession : function(uri, display_name) {
  if(!display_name) {
    display_name = JSCommUI.get_name(uri);
   }
	var session_found = null;
	$("#tab-pages > .chatSession").each(function(i, session) {
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

  get_cookie : function(cookiename) {
     var name = cookiename + "=";
     var allcookies = document.cookie.split(';');
     for(var i=0; i<allcookies.length; i++) {
     var c = allcookies[i].trim();
         if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
     }
     return "";
  },

  //Create a name from SIP uri - useful when display name is absent
  get_name : function(uri) {
      var full_uri = uri.split(/:|@/);
      var name = full_uri[1];
      return name;
  }

};

})(jQuery);

