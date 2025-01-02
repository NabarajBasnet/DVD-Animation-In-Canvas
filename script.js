// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// canvas.width = 600
// canvas.height = 600

// if (canvas && canvas.getContext('2d')) {
//     var context = canvas.getContext('2d');
//     var image = document.getElementById('dvdimage');
//     context.drawImage(image, 35, 15);
// }

// let speed = 100;
// let x = 0;
// let lastTime = 0;

// const gameLoop = (timestamp) => {

//     const deltaTime = (timestamp - lastTime) / 1000;
//     lastTime = timestamp;

//     ctx.beginPath();
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     ctx.rect(x, 0, 30, 30);
//     ctx.fill();
//     x = x + speed * deltaTime;

//     if (x >= canvas.width - 30) {
//         speed = -speed;
//         ctx.rect(x, 0, 30, 30);
//         ctx.fill();
//     };

//     requestAnimationFrame(gameLoop);
// };

// requestAnimationFrame(gameLoop);




// Jhinga fly

import Spider from "./spider.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.style.border = '2px solid'

canvas.width = 400;
canvas.height = 400;

const allSpiders = Array.from({ length: 100 }, () => {
    const size = Math.random() * (30 - 10) + 10
    return new Spider(
        Math.random() * (canvas.width - 40),
        Math.random() * (canvas.height - 40),
        size,
        size,
    )
})

// Formula for min/max random
// Math.random() * (max-min) + min;
// Math.random() * (10-5) + 5;

const gameLoop = (timestamp) => {
    ctx.clearRect(0, 0, canvas.width, canvas.heght);

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.rect(0, 0, 20, 20);
    ctx.fill();

    allSpiders.forEach((spider) => spider.draw(ctx))

    requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
