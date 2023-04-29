var http = require('http')
// io = require('socket.io'),
// const Server = require('socket.io');
// const io = new Server(8000);
redis = require('redis')
rc = redis.createClient();


// creatring server 
server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
})

var io = require('socket.io')(server);

 // Set up our server to listen on 8000 and serve socket.io
 server.listen(8000);
 var socketio = io.listen(server);


// if the Redis server emits a connect event , it means we are ready t work 
// which in turn means we shuld subscribe to ur channels


rc.on('connect', function () {
    rc.subscrie("chat");
})

// when we get a messae in one of the channels we are subscrbed o 
// we send it over to all connected clients
rc.on("message", function (channel, message) {
    console.log("Sending :  " + message);
    socketio.sockets.emit('message', message);
})