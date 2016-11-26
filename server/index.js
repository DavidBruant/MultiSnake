'use strict';

const path = require('path');

const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '..', 'client')));

const sockets = new Set();

io.on('connection', socket => {
    sockets.add(socket);
    console.log('connection');

    socket.on('disconnect', () => {
        sockets.delete(socket);
        console.log('disconnect');
    });

    socket.on('message', msg => {
        const {type} = msg;

        for(let s of sockets){
            if(s !== socket){
                s.emit('message', msg);
            }
        }
    })
});



http.listen(3000, () => {
    console.log('Listening on port 3000');
});