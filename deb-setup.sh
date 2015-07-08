#!/bin/bash

# Use apt-get to install all the dependency packages:

# sudo apt-get install \
#   libjs-jquery libjs-arbiter libjs-jquery-i18n-properties \
#   libjs-jquery-ui libjs-jssip fonts-font-awesome

# create symlinks to the artifacts provided by the packages:

ln -s /usr/share/javascript/jquery/jquery.min.js jquery.js
ln -s /usr/share/javascript/arbiter/Arbiter.js .
ln -s /usr/share/javascript/jquery-i18n-properties/jquery.i18n.properties-min.js jquery.i18n.properties.js
ln -s /usr/share/javascript/jquery-ui/jquery-ui.min.js jquery-ui.js
ln -s /usr/share/javascript/jquery-ui/css/smoothness/jquery-ui.min.css jquery-ui.css
ln -s /usr/share/javascript/jssip/jssip.min.js jssip.js
ln -s /usr/share/fonts-font-awesome font-awesome


