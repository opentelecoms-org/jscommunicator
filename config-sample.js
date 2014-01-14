
JSCommSettings = {

  // Web server environment
  webserver: {
    url_prefix: null            // If set, prefix used to construct sound/ URLs
  },

  // STUN/TURN media relays
  stun_servers: [],
  turn_servers: [
    { server:"turn:turn1.example.org?transport=udp", username:"bob", password:"bob" }
  ],

  // WebSocket connection
  websocket: {
    servers: 'wss://ws1.example.org',
    connection_recovery_min_interval: 2,
    connection_recovery_max_interval: 30,
  },

  // User identity
  user: {
    display_name: 'Bob',
    uri: 'sip:bob@example.org',
    sip_auth_user: 'bob',
    sip_auth_password: 'bob',
  },

  // User SIP registration
  registration : {
    on_startup: true,          // Register when websocket link starts?
    expiry: 3600,              // Registration expiry (seconds)
    user_control: false,        // Show button for user to (de)register
    server: null,              // Registration server
  },

  dialing : {
    auto_dial : {
      default_destination : 'alice',  // A name or full URI
      on_startup: false,           // Whether to wait for user to click dial
      use_video: true,            // Whether to auto-dial with video
    },
    edit_destination: true,      // Whether the user may edit the destination
    show_destination: true,      // Whether the user can see the destination
    audio_dialing: true,         // Whether to offer an audio call button
    video_dialing: true,         // Whether to offer a video call button
    prefer_video: false,         // If user presses Enter to dial, use video?
    no_answer_timeout: 60,       // How long to wait for answer (seconds)
  },

  session : {
    show_dtmf_pad : true,        // Whether to show a DTMF dialpad during calls
  },

};


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

