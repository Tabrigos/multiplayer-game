const express = require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer);

httpServer.listen(2000);

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/client/index.html');
});

app.use('/client', express.static(__dirname + '/client'));

console.log("Server started.");

io.on("connect", (socket) => {

    console.log("connected socket id: " + socket.id);

});
