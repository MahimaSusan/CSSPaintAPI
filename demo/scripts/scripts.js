// checkerboard.js
class CheckerboardPainter {


    static get inputProperties() { return ['--checkerboard-spacing', '--checkerboard-size']; }
    paint(ctx, geom, properties) {
        // Use `ctx` as if it was a normal canvas
        const size = parseInt(properties.get('--checkerboard-size').toString());
        const spacing = parseInt(properties.get('--checkerboard-spacing').toString());
        const colors = ['red', 'green', 'blue'];

        for (let y = 0; y < geom.height / size; y++) {
            for (let x = 0; x < geom.width / size; x++) {
                const color = colors[(x + y) % colors.length];
                ctx.beginPath();
                ctx.fillStyle = color;
                ctx.rect(x * (size + spacing), y * (size +spacing), size, size);
                ctx.fill();
            }
        }
    }
}

// Register our class under a specific name
registerPaint('checkerboard', CheckerboardPainter);


class SuperUnderline {
    paint(ctx, size) {
        // random function can live outside of the class
        const getRandom = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        // values to set for the paint
        const numUnderlines = 3
        const spread = 20
        ctx.lineWidth = 3
        ctx.strokeStyle = ‘red’
        for (let i = 0; i < numUnderlines; i++) {
            ctx.beginPath()
            ctx.moveTo(0, getRandom(0, spread) + size.height / 1.4)
            ctx.lineTo(size.width, getRandom(0, spread) + size.height / 1.4)
            ctx.stroke()
        }
    }
}
registerPaint('superUnderline', SuperUnderline)