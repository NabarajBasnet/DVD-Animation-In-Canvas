const directions = [-1, 1];

class Box {
    constructor(x, y, w, h) {
        this.position = {
            x: x || 0,
            y: y || 0,
        };

        this.size = {
            w: w || 0,
            h: h || 0,
        };

        this.direction = {
            x: directions[Math.floor(Math.random() * 2)],
            y: directions[Math.floor(Math.random() * 2)],
        };

        this.speed = Math.random() * (3 - 0.5) + 0.5;

    };

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.size.w, this.size.h);
        ctx.fill();
    };

    move(ctx) {
        this.position.x = this.direction.x * this.speed;
        this.position.y = this.direction.y * this.speed;
    };

    update(ctx) {
        this.draw(ctx);
        this.move(ctx);
    };
};

export default Box;
