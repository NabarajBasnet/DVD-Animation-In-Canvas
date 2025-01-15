const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
import Box from "./box.js";

const boxes = Array.from({ length: 10 }, () => {
  return new Box(
    Math.random() * (canvas.width - 10),
    Math.random() * (canvas.height - 10),
    20,
    20
  );
});

const gameLoop = () => {

  boxes.forEach((box) => box.update(ctx));
  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
