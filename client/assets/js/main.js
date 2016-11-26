'use strict';

import createCanvasGame from './createCanvasGame.js';
import server from './server'

const s = server();

document.addEventListener('DOMContentLoaded', function(){
    createCanvasGame();
});
