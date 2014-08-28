
<!-- To use JSCommunicator, you can either cut and paste
     this entire HTML fragment into an existing HTML page
     or copy it into a CMS or other publishing framework.

     If using a static HTML page, simply copy the <script>
     definitions from the file phone.shtml into your own page
     <head> section.

     If using a CMS or some other framework, you will need to
     copy the <script> references from phone.shtml into the
     file or script used to generate the page header.
     You may also be able to tell the CMS about the JavaScript
     <script> references through its management console.
     Alternatively, if you are unable to modify the CMS generated <head>,
     it is completely valid to include the <script> elements in the
     HTML body where you include the HTML fragement from this file -->

<div id="encapsulate">
    <div id="header">
        <select id="lang_selection">
            <option value="en">Select a language</option>
        </select>
        <i class="fa fa-power-off" id="jsc-logout-button"></i>
        <h1>JSCommunicator</h1>
        <span id="welcome"></span><span id="welcome_name"></span>
    </div>
    <div id="network-controls">
        <div id="jsc-login">
            <div id="jsc-login-display-name">
                <span class="jsc-login-label">Display name (may be empty)</span>
                <input type="text" id="jsc-login-display-name-field"/>
            </div>
            <div id="jsc-login-sip-uri">
                <span class="jsc-login-label">SIP address</span>
                <input type="text" id="jsc-login-sip-address-field"/>
            </div>
            <div id="jsc-login-password">
                <span class="jsc-login-label">Password</span>
                <input type="password" id="jsc-login-password-field"/>
            </div>
            <div id="jsc-login-option">
                <input type="checkbox" id="rememberMe"><span id="remember-label">Remember me</span><br>
            </div>
            <input type="button" value="Login" id="jsc-login-button"/>
        </div>
    </div>

    <div id="communicator">
        <div id="call">
            <h3>Call</h3>
            <div id="call-info">
                <span class="no-contact" id="call-contact-error">Please enter a contact.</span>
                <div id="state">
                    <span class="session-outgoing">Dialing...</span>
                    <span class="session-incoming">Incoming call</span>
                    <span class="session-accepted">Answering, connectivity checks in progress...</span>
                    <span class="session-active">Call connected</span>
                </div>
            </div>

            <div id="dial-controls" class="ws-connected">
                <div id="dest">
                    <span id="dest_label">Destination:</span>
                    <input type="text" id="address" placeholder="Enter contact"/>
                </div>
                <div id="dialing-actions">
                    <button id="call-audio"><i class="fa fa-phone fa-lg" style="color:green;"></i></button>
                    <button id="call-video"><i class="fa fa-video-camera fa-lg" style="color:green;"></i></button>
                </div>
            </div>

            <div id="session-controls" class="ws-connected in-call">
                <div id="peer"></div>
                <div id="session-actions">
                    <button value="Cancel" id="session-cancel" class="session-outgoing">
                        <i class="fa fa-phone fa-lg red-phone" ></i>
                    </button>
                    <button value="Reject" id="session-reject" class="session-incoming">
                        <i class="fa fa-phone fa-lg red-phone" style="color:red;"></i>
                    </button>
                    <button value="Answer" id="session-answer" class="session-incoming">
                        <i class="fa fa-phone fa-lg" style="color:green;"></i>
                    </button>
                    <button value="Answer (with video)" id="session-answer-video" class="session-incoming">
                        <i class="fa fa-video-camera fa-lg" style="color:green;"></i>
                    </button>
                    <!-- Not implemented yet?
                    <button value="Hold" id="session-hold" class="session-active" disabled>
                        <i class="fa fa-pause fa-lg" style="color:red;"></i>
                    </button>-->
                    <button value="Hangup" id="session-hangup" class="session-active">
                        <i class="fa fa-phone fa-lg red-phone" style="color:red;"></i>
                    </button>
                    <button id="dtmf-button" class="session-active">
                        <i class="fa fa-th fa-lg" style="color:darkblue;"></i>
                    </button>
                </div>
            </div>
            <div id="dtmf-pad">
                <input type="button" value="1" class="dtmf-number"/>
                <input type="button" value="2" class="dtmf-number"/>
                <input type="button" value="3" class="dtmf-number"/>
                <input type="button" value="A" class="dtmf-symbol"/>
                <br/>
                <input type="button" value="4" class="dtmf-number"/>
                <input type="button" value="5" class="dtmf-number"/>
                <input type="button" value="6" class="dtmf-number"/>
                <input type="button" value="B" class="dtmf-symbol"/>
                <br/>
                <input type="button" value="7" class="dtmf-number"/>
                <input type="button" value="8" class="dtmf-number"/>
                <input type="button" value="9" class="dtmf-number"/>
                <input type="button" value="C" class="dtmf-symbol"/>
                <br/>
                <input type="button" value="*" class="dtmf-symbol"/>
                <input type="button" value="0" class="dtmf-number"/>
                <input type="button" value="#" class="dtmf-symbol"/>
                <input type="button" value="D" class="dtmf-symbol"/>
                <br/>
            </div>
        </div>
        <hr>
        <div id="chat">
            <h3>Chat</h3>
            <div id="chat-error">
                <span class="no-contact" id="chat-contact-error">Please enter a contact.</span>
            </div>
            <div id="new-chat">
                <span id="chat_dest_label">Destination:</span>
                <input type="text" id="chat-address" placeholder="Enter contact"/>
                <button id="start-chat"><i class="fa fa-comments fa-lg" style="color:darkblue;"></i></button>
            </div>
            <ul id="tab-labels">
            </ul>
            <div id="tab-pages">
            </div>
        </div>
    </div>

    <div id="error">
        <span id="js">ERROR: This service requires JavaScript.  Please enable JavaScript in your web browser settings.</span>
        <span id="webrtc">ERROR: This service requires WebRTC.  Please try <a href="http://www.mozilla.org">Mozilla Firefox</a> or <a href="http://www.google.com/chrome">Google Chrome</a>, using the latest version is strongly recommended.</span>
        <span id="no-config">ERROR: JsCommunicator configuration not found</span>
        <span id="ua-init-failure">ERROR: Failed to initialize user agent</span>
        <span id="reg-fail">ERROR: SIP Registration failure</span>
        <span id="call-attempt-failed">ERROR: failed to start call, check that microphone/webcam are connected, check browser security settings, peer may not support compatible codecs</span>
        <span id="dynamic"></span>
    </div>
    <div id="ws">
        <span id="ws_link">WebSocket link:</span>
        <span id="connected" class="state ws-connected">Connected</span>
        <span id="disconnected" class="state ws-disconnected">Disconnected</span>
    </div>
    <div id="reg" class="ws-connected up down"><span>SIP registration:</span>
        <span id="state">
            <span class="up">Registered</span>
            <span class="down">Not Registered</span>
        </span>
        <span id="control">
            <input type="button" value="Register" id="reg-button" class="down"/>
            <input type="button" value="De-Register" id="de-reg-button" class="up"/>
        </span>
    </div>
    
</div>
    
<div id="video-session" class="ws-connected in-call">
    <video id="remoteView" autoplay controls></video>
    <video id="selfView" autoplay muted></video>
    <div id="video-controls">
        <input type="button" value="Self view" id="video-control-self-view" class="self"/>
        <input type="button" value="Self hide" id="video-control-self-hide" class="self"/>
    </div>
</div>


