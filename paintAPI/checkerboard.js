// checkerboard.js
class CheckerboardPainter {


    static get inputProperties() { return ['--checkerboard-spacing', '--checkerboard-size']; }
    paint(ctx, geom, properties) {
        // Use `ctx` as if it was a normal canvas
        const size = parseInt(properties.get('--checkerboard-size').toString());
        const spacing = parseInt(properties.get('--checkerboard-spacing').toString());
        const colors = ['red', 'green', 'blue'];

        const size = 32;
        for (let y = 0; y < geom.height / size; y++) {
            console.log(geom.height);
            for (let x = 0; x < geom.width / size; x++) {
                const color = colors[(x + y) % colors.length];
                ctx.beginPath();
                ctx.fillStyle = color;
                ctx.rect(x * size, y * size, size, size);
                ctx.fill();
            }
        }
    }
}

// Register our class under a specific name
registerPaint('checkerboard', CheckerboardPainter);