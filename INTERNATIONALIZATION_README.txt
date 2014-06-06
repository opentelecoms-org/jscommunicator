
How to add internationalization options
------------------------------------------------

The jQuery i18n plugin is used to provide internationalization. 
see https://code.google.com/p/jquery-i18n-properties/ for more info.

To add a language option, create a ‘.properties’ file in the internationalization directory in the following format: Messages_[language code of choice].properties
Example: Messages_fr.properties for French. 

Copy the content of the default .properties file (Messages.properties) into your new .properties file. The file will have a series of key-value pairs; leave the left side as is and add your translation on the right side.
Example: 
(in Messages.properties) jsc_login_display_name = Display name (may be empty)
(in Messages_fr.properties) jsc_login_display_name = Nom (peut être vide)

Add a language element to the available_languages.xml with the name to be displayed and language code.
Example:
<language>
    <display>French</display>
    <code>fr</code>
</language>

Voila!

Behind the scenes
------------------------------------------------

jQUery i18n will automatically load the .properties file according to the language preference of your browser (if that file exists in the internationalization directory). If a .properties file for you preferred language doesn’t exist, it will default to Messages.properties which is in English.

The available_languages.xml is used to load the language selection drop down menu. If you added a language to the .xml which does not exist in the .properties file, it will default to English. Same goes for any mistakes in the <code> element. jQuery will look for a file Messages_[content of <code>].properties so make sure the name is correct.


Dependencies
------------------------------------------------

jquery.i18n.properties-1.0.9.js (see https://code.google.com/p/jquery-i18n-properties/)

i18n.js (originally from pull request https://github.com/opentelecoms-org/jscommunicator/pull/16 - modified to accept any language)

avaiable_languages.xml and properties files (see above)


Observed bugs
------------------------------------------------

It is recommended to consult the HTML language code (reference http://www.w3schools.com/tags/ref_language_codes.asp). Theoretically, you can invent your own code, and (provided the code in available_languages.xml corresponds to the name of the .properties file) the select language menu will work. However, the page will not load automatically with the browser language preference (as this uses the HTML language code.

In addition, different browsers may use different variations of code. For example: ‘en’ and ‘en_US’. To work around this, feel free to make multiple versions of your translation (example: Messages_en.properties and Messages_en_US.properties). Of course, you only need to add one to the available_languages.xml.

I think that’s it.