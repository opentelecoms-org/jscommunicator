
Integrating JSCommunicator
--------------------------

Setting up a SIP over WebSocket server
--------------------------------------

See the [Real-Time Communication Quick Start Guide](http://rtcquickstart.org)
for details about setting up a SIP and TURN server to support WebRTC
calls.

Static sites: cloning an existing static site
---------------------------------------------

https://freephonebox.net and https://rtc.debian.org are static sites
built with JSCommunicator.  Simply fetch the entire content of one of
these sites using a tool like wget or curl and start editing the HTML
to rebrand it for your own project.

Dynamic sites, including Content Management Systems
---------------------------------------------------

There are many different Content Management Systems (CMSs) developed in
many different server-side scripting languages, including PHP, JSP, Python
and Ruby.  Some web sites run off-the-shelf CMSs like Drupal and WordPress,
while others run bespoke systems that have been developed in-house.

Regardless of which framework and scripting language is in use, the
approach to integrating JSCommunicator is almost always the same:

1. Check if an existing plugin exists.  For example, the
   [DruCall plugin for the Drupal CMS](http://drucall.org) or
   [WPCall plugin for WebRTC with Wordpress](http://wpcall.org) are both
   based on JSCommunicator.  Using an existing plugin is often easier than
   creating one yourself.

2. Refer to one of the existing plugins for inspiration.  If you are
   developing a WebRTC page or plugin for a PHP-based web site or
   CMS, studying the DruCall source code will provide many good ideas
   that can be easily copied.

3. Make sure your script or plugin includes the entire contents of
   jscommunicator.inc when rendering the page.  In a PHP project,
   this could be done using the include directive, for example:

     <?php include 'jscommunicator.inc';?>

   When creating a plugin for a CMS framework, it may be possible to
   simply tell the framework to use the file jscommunicator.inc as a
   template.  For example, in the DruCall plugin, the template file
   drucall-phone.tpl.php is simply a copy of jscommunicator.inc
   and the drucall_theme() method directs Drupal to use the template:

     function drucall_theme() {
       return array(
         'drucall_phone' => array(
           'render element' => 'element',
           'template' => 'drucall-phone',
         ),
       );
     }

4. Make sure your script or plugin includes the necessary JavaScript and CSS
   files from the JSCommunicator project and its dependencies.  If
   you generate the HTML <HEAD> section using another script or a shared
   template, you may need to edit that code.  See the <HEAD> section of
   the phone.shtml example file in JSCommunicator for a list of all
   the JavaScript and CSS files required.

   In a framework or CMS like Drupal, it is typically possible to include the
   JavaScript and CSS files into the <HEAD> section by using an API
   function.  For example, in the DruCall plugin, the methods used are:

      // Load JavaScript files that are packaged in other plugins:
      foreach ([ "jssip", "jscommunicator", "arbiterjs", "jqueryi18nproperties", "fontawesome" ] as $libname) {
         // ... snip ...
         libraries_load($libname);
      }

      // Load JavaScript and CSS files from DruCall plugin:
      drupal_add_js(drupal_get_path('module', 'drucall') . '/js/drucall.js');
      drupal_add_css(drupal_get_path('module', 'drucall') . '/css/jscommunicator.css', array('group' => CSS_DEFAULT, 'type' => 'file'));

5. Edit or dynamically generate the config.js file as required.
   Using the default config.js file, the JSCommunicator phone will
   start with a form for the user to login with their SIP address and
   password and after logging in it will display all the options for
   voice and video calls to any destination.

   The user credentials can be pre-configured and the calling options
   restricted (for example, voice calls only to a specific destination)
   by modifying the config.js file.

   The config.js file can be generated dynamically by a server-side script
   as well.  For example, a PHP script could be used to serve a modified
   version of config.js.

   In some frameworks and CMSs, it may be possible to populate the variables
   in config.js using values from a server-side script and an API method.
   For example, in the DruCall plugin for Drupal, the drupal_add_js()
   method is used:

       $my_settings = array(
           'mod_path' => drupal_get_path('module', 'drucall'),
           'phone_number' => variable_get('default_destination'),
           'enable_audio' => variable_get('enable_audio'),
           'enable_video' => variable_get('enable_video'),
           ....
         );

       drupal_add_js(
         array('drucall' => $my_settings),
         'setting');

   In DruCall, some of the variables are configurable using a Drupal
   settings page and the username is set based on the identity of the
   user who is logged in to the CMS:

       if($user->uid != 0 && !empty($caller_domain)) {
         // A user is logged in
         $display_name = $user->name;
         // FIXME: should check that Drupal username is valid for SIP
         $caller_uri = 'sip:' . $user->name . '@' . $caller_domain;
         $sip_register = TRUE;
       } else {
         // Guest user
         $display_name = variable_get('display_name');
         $caller_uri = variable_get('from_uri');
         $caller_auth_user = variable_get('auth_user');
         $caller_password = variable_get('auth_password');
       }

6. Set authentication tokens in WebSocket URI parameters or cookies.
   The SIP over WebSocket connection can accept authentication tokens
   in the WebSocket URI or in HTTP cookies.  Using one of these methods
   it is possible to securely give the SIP proxy the username of
   the user who is logged in to the web site and restrict the destination
   they are permitted to call.

   The purpose and syntax of each token is explained in the
   [reSIProcate wiki page](http://www.resiprocate.org/SIP_Over_WebSocket_Cookies)

   The DruCall plugin for Drupal can set either URL parameters
   (by modifying the WebSocket URL string in config.js) or cookies
   (using the PHP method setrawcookie()).

    // Append URL parameters containing authentication tokens
    if($ws_cookies_in_url) {
      if(empty($ws_url['path']))
        $websocket_server_url = $websocket_server_url . '/';
      $websocket_server_url = $websocket_server_url . ';WSSessionInfo=' . $cookie_value_encoded . ';WSSessionExtra=' . $extra_value_encoded . ';WSSessionMAC=' . $cookie_mac;
    }

7. If required, integrate with other scripts in the page.  A client-side
   pub/sub framework, ArbiterJS, is used to provide a loosely-coupled
   mechanism for integration with other JavaScript modules used in the
   same page/site.

   For example, this method could be used to send instructions from
   a jQuery-UI two-level expanding menu to control the destination
   SIP address for a call.  It can also be used to let other controls
   on the page know when a call is received or answered.  For example,
   another control might be used to dynamically retrieve a photo
   of the caller from the company phone book.

   For an example, see event-demo.shtml and event-demo.js

