import io from 'socket.io-client';

export default function(origin){
    const socket = io();

    setTimeout(() => {
        console.log('m');
        socket.emit('message', 'ping')
    }, Math.random()*3000);

    socket.on('message', m => console.log('message', m))

    return {

    }
}