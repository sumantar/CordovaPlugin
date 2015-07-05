
 var NativeEventsListener = (function() {
    console.log('NativeEventsListener: Initializing');

    this.onReceivedEvent = function(eventData) {
        console.log('onReceivedEvent :: eventData :: ' + JSON.stringify(eventData));

        var eventHandler = function(){};

        switch (eventData.eventType){
            case "Button-1":
                eventHandler = nativeButtonIsClicked;
            break;
            default:
                console.log("onReceivedEvent :: unrecognized eventType");
        }
        eventHandler(eventData);
    };

    function nativeButtonIsClicked(eventData){
        console.log('nativeButton-1 is clicked. The JSON data: ' + JSON.stringify(eventData));
        alert('nativeButton-1 is clicked. The JSON data: ' + JSON.stringify(eventData));
                             
    }

    return this;
                            
}());


/*
function onReceivedEvent(eventData) {
    
    console.log('onReceivedEvent :: eventData :: ' + JSON.stringify(eventData));
    
    var eventHandler = function(){};
    
    switch (eventData.eventType){
        case "NativeEvent-1":
            eventHandler = nativeButtonIsClicked;
            break;
        default:
            console.log("onReceivedEvent :: unrecognized eventType");
    }
    eventHandler(eventData);
}

function nativeButtonIsClicked(eventData){
    console.log('nativeButtonIsClicked is called with JSON data: ' + JSON.stringify(eventData));
}
*/

