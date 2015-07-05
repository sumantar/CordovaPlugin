
function readFromNative() {
    cordova.exec(success, error, "MyCustomPlugin", "getCurrentDate", []);
};

function success(data) {
    console.log('Success. Response from plug-in: ' + data);
    //Get the return value from the plugin i.e. string and show it as alert in html page 
    alert(data);
}

function error(data) {
    console.log('Error. Response from plug-in: ' + data);
    alert('Nothing to show')
}

