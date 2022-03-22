import { Server } from 'socket.io';


const io = new Server(3000);
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

io.on('connection', async (socket) => {
    console.log(socket.handshake.query['foo']);

    let number = 0;

    while(number < 100) {
        socket.emit("hello", "world" + number);
        number++;
        await delay(1000);
    }
    

    socket.on("howdy", args => {
        console.log(args);
    });

});