class Spider {
    constructor(x, y,width, height) {
        this.position = {
            x: x || 0,
            y: y || 0
        };

        this.size = {
            width: width || 40,
            height: height|| 40
        };

    };

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.rect(this.position.x, this.position.y, this.size.width, this.size.height);
        ctx.fill();
    };

    // update() { }
};

export default Spider;
