const WebSocket = require('ws');
const server = new WebSocket.Server({
  port: 8080
});

let sockets = [];
server.on('connection', function(socket, request) {
  sockets.push(socket);
  // console.log( request)
  // When you receive a message, send that message to every socket.
  socket.on('message', function(msg) {
    console.log(msg.toString(),"\n\n")
    // socket.send(msg.toString())
    // sockets.forEach(s => s.send(msg.toString()));
    sockets.forEach(s => s.send(msg.toString()));
  });

  // When a socket closes, or disconnects, remove it from the array.
  socket.on('close', function() {
    sockets = sockets.filter(s => s !== socket);
  });
});