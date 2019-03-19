// worklet.js
class MyWorklet {
    paint(ctx) {
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, 20, 20);
    }
}

// Register the worklet using...
// ...the built-in registerPaint() function
registerPaint('my-paint-worklet', MyWorklet);