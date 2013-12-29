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

// Reads JsCommunicator settings and creates JsSIP configuration object
function getJsSIPSettings(settings) {

  return {
    uri: settings.user.uri,
    password: settings.user.sip_auth_password,
    ws_servers: settings.websocket.servers,
    display_name: settings.user.display_name,
    authorization_user: settings.user.sip_auth_user,
    register: settings.registration.on_startup,
    register_expires: settings.registration.expiry,
    registrar_server: settings.registration.server,
    no_answer_timeout: settings.dialing.no_answer_timeout,
    trace_sip: true,
    stun_servers: settings.stun_servers,
    turn_servers: settings.turn_servers,
    use_preloaded_route: false,
    connection_recovery_min_interval: settings.websocket.connection_recovery_min_interval,
    connection_recovery_max_interval: settings.websocket.connection_recovery_max_interval,
    hack_via_tcp: false,
    hack_ip_in_contact: false
  };

};

