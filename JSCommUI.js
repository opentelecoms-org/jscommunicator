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

  url_prefix : '',

  init : function() {

    console.log("starting init");

    // Hide the message "This service requires JavaScript"
    $("#network-controls #error #js").hide();

    if(JSCommSettings.webserver.url_prefix) {
      this.url_prefix = JSCommSettings.webserver.url_prefix;
    }

    JSCommUI.link_down();

    soundPlayer = document.createElement("audio");

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

    if(!JSCommSettings.registration.user_control) {
      $("#reg #control").hide();
    }

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
    } else {
      $(".ws-connected").hide();
      $("#network-controls #ws #disconnected").show();
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

  session_start : function(status, peer_name, with_video) {
    $("#dial-controls").hide();
    $(".session-active").hide();
    $("#session-controls #state span").hide();
    $("#session-controls #peer").empty();
    $("#session-controls #peer").append(peer_name);
    $("#session-actions input:button").hide();
    if(status == 'incoming') {
      $("#session-controls #state .session-incoming").show();
      $("#session-actions input.session-incoming:button").show();
      soundPlayer.setAttribute("src", this.get_sound_url("incoming-call2"));
      soundPlayer.play();
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
    $("#session-controls").hide();
    $('#video-session').hide();
    JSCommUI.ready_to_dial();
  },

  session_progress : function(status) {
    if(status == 'trying') {
      console.log("starting ringback...");
      soundPlayer.setAttribute("src", this.get_sound_url("outgoing-call2"));
      soundPlayer.play();
    }
  },

  session_connect : function(call, e) {
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
  }

};

})(jQuery);

