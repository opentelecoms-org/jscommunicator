
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

<div id="network-controls">
    <input type="button" value="Logout" id="jsc-logout-button"/>
    <div id="error">
        <span id="js">ERROR: This service requires JavaScript.  Please enable JavaScript in your web browser settings.</span>
        <span id="webrtc">ERROR: This service requires WebRTC.  Please try <a href="http://www.mozilla.org">Mozilla Firefox</a> or <a href="http://www.google.com/chrome">Google Chrome</a>, using the latest version is strongly recommended.</span>
        <span id="no-config">ERROR: JsCommunicator configuration not found</span>
        <span id="ua-init-failure">ERROR: Failed to initialize user agent</span>
        <span id="reg-fail">ERROR: SIP Registration failure</span>
        <span id="call-attempt-failed">ERROR: failed to start call, check that microphone/webcam are connected, check browser security settings, peer may not support compatible codecs</span>
        <span id="dynamic"></span>
    </div>

    <div id="jsc-login">
        <div id="jsc-login-display-name">
            <span class="jsc-login-label">Display name (may be empty)</span>
            <input type="text" id="jsc-login-display-name-field"/>
        </div>
        <div id="jsc-login-sip-uri">
            <span class="jsc-login-label">SIP address</span>
            <span>sip:<input type="text" id="jsc-login-sip-address-field"/></span>
        </div>
        <div id="jsc-login-password">
            <span class="jsc-login-label">Password</span>
            <input type="password" id="jsc-login-password-field"/>
        </div>
        <input type="checkbox" id="rememberMe">Remember me<br>
        <input type="button" value="Login" id="jsc-login-button"/>
    </div>

    <div id="ws">
        <span>WebSocket link:</span>
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

<div id="dial-controls" class="ws-connected">
    <div id="dest">
        <span>Destination:</span>
        <input type="text" id="address"/>
    </div>
    <div id="dialing-actions">
        <input type="button" value="Call (audio only)" id="call-audio"/>
        <input type="button" value="Call (audio and video)" id="call-video"/>
    </div>
</div>

<div id="session-controls" class="ws-connected in-call">
    <div id="state">
        <span class="session-outgoing">Dialing...</span>
        <span class="session-incoming">Incoming call</span>
        <span class="session-accepted">Answering, connectivity checks in progress...</span>
        <span class="session-active">Call connected</span>
    </div>
    <div id="peer"></div>
    <div id="session-actions">
        <input type="button" value="Cancel" id="session-cancel" class="session-outgoing"/>
        <input type="button" value="Reject" id="session-reject" class="session-incoming"/>
        <input type="button" value="Answer" id="session-answer" class="session-incoming"/>
        <input type="button" value="Answer (with video)" id="session-answer-video" class="session-incoming"/>
        <input type="button" value="Hold" id="session-hold" class="session-active" disabled/>
        <input type="button" value="Hangup" id="session-hangup" class="session-active"/>
    </div>
    <div id="dtmf-pad" class="session-active">
        <input type="button" value="1" class="dtmf-number"/>
        <input type="button" value="2" class="dtmf-number"/>
        <input type="button" value="3" class="dtmf-number"/>
        <br/>
        <input type="button" value="4" class="dtmf-number"/>
        <input type="button" value="5" class="dtmf-number"/>
        <input type="button" value="6" class="dtmf-number"/>
        <br/>
        <input type="button" value="7" class="dtmf-number"/>
        <input type="button" value="8" class="dtmf-number"/>
        <input type="button" value="9" class="dtmf-number"/>
        <br/>
        <input type="button" value="*" class="dtmf-symbol"/>
        <input type="button" value="0" class="dtmf-number"/>
        <input type="button" value="#" class="dtmf-symbol"/>
        <br/>
        <input type="button" value="A" class="dtmf-symbol"/>
        <input type="button" value="B" class="dtmf-symbol"/>
        <input type="button" value="C" class="dtmf-symbol"/>
        <br/>
        <input type="button" value="D" class="dtmf-symbol"/>
    </div>
</div>
<div id="video-session" class="ws-connected in-call">
    <video id="remoteView" autoplay controls style="height: 100%; width: 100%;"></video>
    <video id="selfView" autoplay muted></video>
    <div id="video-controls">
        <input type="button" value="Self view" id="video-control-self-view" class="self"/>
        <input type="button" value="Self hide" id="video-control-self-hide" class="self"/>
    </div>
</div>

