(function ($) {

window.i18n = {
      	// load I18N bundles
    initI18n : function() {
          $.ajax({
             type:"GET",
             url:"available_languages.xml",
             dataType: "xml",
             success: function(xml) {
             $(xml).find("language").each(function() {
                  var display = $(this).find('display').text();
                  var value = $(this).find('code').text();
                  $('#lang_selection').append('<option value=' +value+ '>' +display+ '</option>');
                  });
             }
             });

            try {
                i18n.loadBundles(jQuery.i18n.browserLang());
            } catch (error) {}
                        
			// configure language combo box
			jQuery('#lang_selection').change(function() {
				var selection = $(this).val();
				i18n.loadBundles(selection != 'lang_selection' ? selection : null);
			});
			
			
    },
 
		
    loadBundles : function (lang) {
			jQuery.i18n.properties({
			    name:'Messages', 
			    path:'internationalization/', 
			    mode:'both',
			    language:lang, 
			    callback: function() {
			        i18n.internationalize();
			    }
			});
		},
		
    internationalize : function () {
			// Accessing values through the map
				var msg1 = 'error_js';
				var msg2 = 'error_webrtc';
				var msg3 = 'error_no_config';
				var msg4 = 'error_ua_init_failure';
				var msg5 = 'error_reg_fail';
				var msg6 = 'error_call_attempt_failed';
				var msg7 = 'error_dynamic';
				var msg8 = 'jsc_login_display_name';
				var msg9 = 'jsc_login_sip_uri';
				var msg10 = 'jsc_login_password';
				var msg11 = 'jsc_login_button';
				var msg12 = 'ws_link';
				var msg13 = 'ws_state_connected';
				var msg14 = 'ws_state_disconnected';
				var msg15 = 'sip_reg';
				var msg16 = 'sip_reg_up';
				var msg17 = 'sip_reg_down';
				var msg18 = 'sip_dest_address';
				var msg19 = 'session_state_outgoing';
				var msg20 = 'session_state_incoming';
				var msg21 = 'session_state_accepted';
				var msg22 = 'session_state_active';
				var msg23 = 'button_session_cancel';
				var msg24 = 'button_session_reject';
				var msg25 = 'button_session_answer';
				var msg26 = 'button_call_audio';
				var msg27 = 'button_reg';
				var msg28 = 'button_dereg';
				var msg29 = 'button_call_audio_video';
				var msg30 = 'button_session_answer_video';
				var msg31 = 'button_session_answer_hold';
				var msg32 = 'button_session_answer_hang_up';
				var msg33 = 'button_video_control_self_view';
				var msg34 = 'button_video_control_self_hide';
				var msg35 = 'button_video_control_full_screen';
            
			jQuery('#error #js')
				.empty()
				.append(jQuery.i18n.prop(msg1));

			jQuery('#error #webrtc')
				.empty()
				.append(jQuery.i18n.prop(msg2));

			jQuery('#error #no-config')
				.empty()
				.append(jQuery.i18n.prop(msg3));

			jQuery('#error #ua-init-failure')
				.empty()
				.append(jQuery.i18n.prop(msg4));

			jQuery('#error #reg-fail')
				.empty()
				.append(jQuery.i18n.prop(msg5));

			jQuery('#error #call-attempt-failed')
				.empty()
				.append(jQuery.i18n.prop(msg6));

			jQuery('#error #dynamic')
				.empty()
				.append(jQuery.i18n.prop(msg7));

			jQuery('#jsc-login-display-name .jsc-login-label')
				.empty()
				.append(jQuery.i18n.prop(msg8));

			jQuery('#jsc-login-sip-uri .jsc-login-label')
				.empty()
				.append(jQuery.i18n.prop(msg9));

			jQuery('#jsc-login-password .jsc-login-label')
				.empty()
				.append(jQuery.i18n.prop(msg10));

			jQuery('#jsc-login-button')
				.val(jQuery.i18n.prop(msg11)).change();

			jQuery('#ws #ws_link')
				.empty()
				.append(jQuery.i18n.prop(msg12));

			jQuery('#ws #connected')
				.empty()
				.append(jQuery.i18n.prop(msg13));

			jQuery('#ws #disconnected')
				.empty()
				.append(jQuery.i18n.prop(msg14));

			jQuery('#reg')
				.empty()
				.append(jQuery.i18n.prop(msg15));

			jQuery('#reg .state #up')
				.empty()
				.append(jQuery.i18n.prop(msg16));

			jQuery('#reg .state #down')
				.empty()
				.append(jQuery.i18n.prop(msg17));

			jQuery('#control #reg-button')
				.val(jQuery.i18n.prop(msg27)).change();

			jQuery('#control #de-reg-button')
				.val(jQuery.i18n.prop(msg28)).change();



			jQuery('#dial-controls #dest #dest_label')
				.empty()
				.append(jQuery.i18n.prop(msg18));

			jQuery('#dial-controls #dialing-actions #call-audio')
				.empty()
				.append(jQuery.i18n.prop(msg26));
			
			jQuery('#dial-controls #dialing-actions #call-video')
				.empty()
				.append(jQuery.i18n.prop(msg29));


			jQuery('#session-controls #state .session-outgoing')
				.val(jQuery.i18n.prop(msg19)).change();

			jQuery('#session-controls #state .session-incoming')
				.val(jQuery.i18n.prop(msg20)).change();
		
			jQuery('#session-controls #state .session-accepted')
				.val(jQuery.i18n.prop(msg20)).change();

			jQuery('#session-controls #state .session-active')
				.val(jQuery.i18n.prop(msg22)).change();

			jQuery('#peer #session-actions #session-cancel')
				.val(jQuery.i18n.prop(msg23)).change();

			jQuery('#peer #session-actions #session-reject')
				.val(jQuery.i18n.prop(msg24)).change();

			jQuery('#peer #session-actions #session-answer')
				.val(jQuery.i18n.prop(msg25)).change();

			jQuery('#peer #session-actions #session-hold')
				.val(jQuery.i18n.prop(msg31)).change();

			jQuery('#peer #session-actions #session-hangup')
				.val(jQuery.i18n.prop(msg32)).change();

			jQuery('#video-session #video-controls #video-control-self-view')
				.val(jQuery.i18n.prop(msg33)).change();

			jQuery('#video-session #video-controls #video-control-self-hide')
				.val(jQuery.i18n.prop(msg34)).change();

			jQuery('#video-session #video-controls #video-control-fullscreen')
				.val(jQuery.i18n.prop(msg35)).change();

				
		}
};
})(jQuery);
