import { io } from 'socket.io-client';

const socket = io('ws://localhost:3000', { query: "foo=baaaar" });

socket.on('hello', args => {
    console.log(args);
});

socket.emit('howdy', 'stranger');