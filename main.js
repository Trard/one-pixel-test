import getRandomIntInclusive from './random.js';

var pixel = document.createElement('div');
pixel.className = "pixel"

let randomWidth = getRandomIntInclusive(1, document.documentElement.clientWidth - (1 + 1)); // 1 - pixel width and 1 border
let randomHeight = getRandomIntInclusive(1, document.documentElement.clientHeight - (1 + 1)); // 1 pixel height and 1 border

pixel.style.top = `${randomHeight}px`;
pixel.style.left = `${randomWidth}px`;

document.body.appendChild(pixel);
console.log(randomHeight, randomWidth)

document.addEventListener("click", window.location.reload);