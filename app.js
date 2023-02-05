
const express = require('express');
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
//const serv = require('http').Server(app);

const httpServer = createServer(app);

const io = new Server(httpServer, {});

httpServer.listen(2000);

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/client/index.html');
});

app.use('/client', express.static(__dirname + '/client'));

    console.log("Server started.");

io.on("connection", (socket) => {
    console.log("client connected");
  });

/*let io = require('socket.io')(serv, {});
io.sockets.on('connection', function(socket){
    console.log('socket connection');
});*/