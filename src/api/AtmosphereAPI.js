import atmosphere from 'atmosphere.js'
const SERVER = 'http://localhost'
const PORT = ':8181/'
const COMPONENTS = {
    WATCHLIST: 'WATCHLIST',
    ORDERHISTORY: 'ORDERHISTORY'
}

export function AtmosphereAPI(component, dispatch, callback){
    var service = '';
    switch(component){
        case COMPONENTS.WATCHLIST:
            service = 'watchlist';
            break;
        case COMPONENTS.ORDERHISTORY:
            service = 'orderhistory';
            break;
    }
    startRealtime(service, dispatch, callback);
}

function startRealtime(service, dispatch, callback){
    var request = { url: SERVER + PORT + service + '',
                    contentType : "application/json",
                    logLevel : 'debug',
                    transport : 'websocket',
                    trackMessageLength : true,
                    reconnectInterval : 5000 };
    var socket = atmosphere;
    var subSocket;
    
    request.onOpen = function(response){
        console.log('WEBSOCKET CONNECTION OPENED');
    }

    request.onMessage = function(response){
        var json = response.responseBody;
        try{
            var data = atmosphere.util.parseJSON(json);
            dispatch(callback([data]));
        }catch(e){
            console.log("@AtmosphereAPI error: " + e);
            return;
        }
    }
    subSocket = socket.subscribe(request);
}