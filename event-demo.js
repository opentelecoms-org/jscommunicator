/****************************************************************************
 JSCommunicator
 http://jscommunicator.org

 Copyright (C) 2014  Daniel Pocock http://danielpocock.com

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

$(document).ready(function() {

  $("#contact-directory").change(function() {
    // Get the selected value (SIP destination)
    var dest = $( this ).val();
    Arbiter.publish("jsc/destination/set", dest);
  });

  var logEvent = function(event_name, data) {
    var now = new Date().toLocaleTimeString();
    $("#event-demo-log").append("<tr><td>" + now + "</td><td>" + event_name + "</td><td>" + data + "</td></tr>");
  };

  Arbiter.subscribe(
    [ "jsc/*", "jsc/*/*" ],
    { async:true },
    function(data, m) {
      console.log("Got a message: " + m);
      if(m == "jsc/call/incoming") {
        // Somebody is calling
        // This is where we may invoke some code to look up the
        // caller's full profile (e.g. name, department, company)
        // in an address book, a CRM system or some other database
        var caller_uri = data;
        console.log("Incoming call notification, caller = " + caller_uri);
        logEvent(m, caller_uri);
      } else if (data) {
        logEvent(m, data);
      } else {
        logEvent(m, "-");
      }

      // Here we use the idle/incall events to make the pull-down menu
      // accessible only when we are not in a call
      if(m == "jsc/ua/idle") {
        $("#contact-directory").removeProp("disabled");
      } else if(m == "jsc/ua/incall" || m == "jsc/ua/notready") {
        $("#contact-directory").prop("disabled", true);
      }
    }
  );

});

})(jQuery);

