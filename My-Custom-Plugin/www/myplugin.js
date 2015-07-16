/*global cordova, module*/

var MyPluginCls = function() {};

MyPluginCls.prototype.greet = function (name, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "MyPlugin", "greet", [name]);
};

var myPluginCls = new MyPluginCls();
module.exports = myPluginCls;

/*
 module.exports = {
    greet: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "MyPlugin", "greet", [name]);
    }
 };
 */