import { io } from 'socket.io-client';

const socket = io('ws://localhost:3000');

socket.on('hello', args => {
    console.log(args);
});

socket.emit('howdy', 'stranger');