const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let speed = 100;
let x = 0;
let y = 0;
let lastTime = 0;

const gameLoop = (timestamp) => {
    const deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.rect(x, 0, 20, 20);
    ctx.fill();
    x = x + speed * deltaTime;

    if (x >= canvas.width - 20) {
        speed = -speed;
        x = canvas.width - 20;
    } 
    
    const dx = document.getElementById('x');
    const dy = document.getElementById('y');

    dx.innerHTML = x
    dy.innerHTML = y
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
