

Introduction
------------

JSCommunicator is a SIP communication tool developed in HTML and JavaScript.

Please see http://jscommunicator.org for more details about features,
examples, mailing lists and the latest source code.

Requirements
------------

To use JSCommunicator, you require a SIP proxy that supports the
SIP over WebSockets transport.

Only recent versions of the SIP proxies support WebSockets.

  repro from reSIProcate
    http://www.resiprocate.org

  Kamailio
    http://www.kamailio.org

You need to have the following JavaScript libraries available in your
web server or CMS:

  jQuery (v1.4 or greater has been tested)

Use cases
---------

 * Standalone:
   - include the HTML fragment into a static HTML page,
     possibly using Server Side Includes (SSI).  Make sure the
     page references all the required JavaScript source files.

 * In a CMS, wiki or other publishing platform:
   - include the HTML fragment into a block in a page
     managed by a CMS.  Configure the CMS to send the JavaScript to
     the user or include <script> tags within the content body with
     the phone fragment.

Credits
-------

JSCommunicator is based on the JsSIP library and inspired by the
TryIt.jssip.net and RetroRTC demo applications produced by Versatica.

License
-------

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

