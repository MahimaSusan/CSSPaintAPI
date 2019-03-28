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