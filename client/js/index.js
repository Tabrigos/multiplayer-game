
const socket = io(`ws://localhost:2000`);

socket.on('connect', () => {
    console.log("connected")
})

socket.emit("happy!");
