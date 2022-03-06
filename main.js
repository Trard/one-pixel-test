import './style.css';
import getRandomIntInclusive from './random.js';

var pixel = document.createElement('div');
pixel.className = "pixel"

let randomWidth  = getRandomIntInclusive(1, document.documentElement.clientWidth  - (1 + 1)); // 1 - pixel width and 1 border
let randomHeight = getRandomIntInclusive(1, document.documentElement.clientHeight - (1 + 1)); // 1 pixel height and 1 border

console.log(randomHeight, randomWidth)

pixel.style.top = `${randomHeight}px`;
pixel.style.left = `${randomWidth}px`;

document.body.appendChild(pixel);

var invisible_button = document.createElement('div');
invisible_button.className = "invisible-button"
invisible_button.onclick = function() {window.location.reload();}
invisible_button.style.width = `${document.documentElement.clientWidth}px`;
invisible_button.style.height = `${document.documentElement.clientHeight}px`;

document.body.appendChild(invisible_button);