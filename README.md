# CordovaPlugin

This folder keeps an example of Cordova Plugin to communicate between native to JS as a part of JSON RPC

Reference:
http://www.oodlestechnologies.com/blogs/Writing-a-native-iOS-plugin-for-PhoneGap

We can see the safari console output as follows in Cordova framework

1. Open Safari in MAC. 
2. Select "Develop" from menu
3. Select "IOS Simulator" -> index.html
4. Select "Logs"

This will print all logs - console.log statement

=========================================================================

#My-Custom-Plugin

This folder keeps an example of writing own plugin using plugin.xml


Usage:


Create a new Cordova Project

$ cordova create hello com.example.myapp MyApp

Clone the repository and keep the folder in the same heirarchy

Install the plugin

    $ cd MyApp
    $ cordova plugin add ../My-Custom-Plugin

Edit `www/js/index.js` and add the following code inside `onDeviceReady`

```js
    var success = function(message) {
        alert(message);
    }

    var failure = function() {
        alert("Error calling Hello Plugin");
    }

    myplugin.greet("World", success, failure);

```
Install iOS platform

cordova platform add ios

==================================================

Some Useful Cordova Commands

cordova create CordovaPluginSample com.example.cordova.plugin.sample CordovaPluginSample

cordova platform add ios

cordova platform add android


cordova build ios

cordova build ios —device



Validate plugin:

=> In command prompt move to platform/ios folder:

    plugman install --platform ios --project . --plugin /Users/srout/Desktop/MyCordova/cordova-plugin-hello

    plugman uninstall --platform ios --project . --plugin /Users/srout/Desktop/Cordova_Experiment/My-Custom-Plugin



Find the all installed plugins:

    cordova plugin list

    cordova plugin ls



Remove a plugin

    cordova plugin remove <plug-in ID>












