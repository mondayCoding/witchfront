
import socket from 'socket.io';

//setup websockets
var io = socket();

io.on("connection", function(socket){
   console.log("made connection");
});

module.export = io;
