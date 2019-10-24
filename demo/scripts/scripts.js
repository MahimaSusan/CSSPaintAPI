const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
if (typeof registerPaint !== 'undefined') {
  class SuperUnderline {
    static get inputProperties() {
      return ['--underlineNumber', '--underlineColor', '--underlineSpread', '--underlineWidth']
    }
    paint(ctx, size, properties) {
       const numUnderlines = properties.get('--underlineNumber')
       const lineWidth = properties.get('--underlineWidth')
       const color = properties.get('--underlineColor')
       const spread = properties.get('--underlineSpread')
       ctx.lineWidth = lineWidth
       ctx.strokeStyle = color
for (let i = 0; i < numUnderlines; i++) {
        ctx.beginPath()
        ctx.moveTo(0, getRandom(0, spread) + size.height/1.4)
        ctx.lineTo(size.width, getRandom(0, spread) + size.height/1.4)
        ctx.stroke()
      }
    }
  }
  registerPaint('superUnderline', SuperUnderline)


// registerPaint('underlines', SuperUnderline)

class MyWorklet {
    paint(ctx) {
        ctx.fillStyle = '#da3a36';
        ctx.fillRect(0, 0, 5, 5);
    }
}
registerPaint('my-paint-worklet', MyWorklet);

class Shape {
    paint(ctx, geom) {
        let x = geom.width / 2;
        let y = geom.height / 2;
        ctx.strokeStyle = '#da3a36';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }
}

// Register our class under a specific name
registerPaint('awesomePattern', Shape);





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
                ctx.rect(x * (size + spacing), y * (size + spacing), size, size);
                ctx.fill();
            }
        }
    }
}

// Register our class under a specific name
registerPaint('checkerboard', CheckerboardPainter);


//Custom Properties

class HeaderHighlight {


    static get inputProperties() { return ['--boxColor', '--widthSubtractor']; }

    paint(ctx, size, props) {
    /*
       ctx -> drawing context
       size -> paintSize: width and height
       props -> properties: get() method
    */

    ctx.fillStyle = props.get('--boxColor');
    ctx.fillRect(0, size.height/3, size.width*0.4 - props.get('--widthSubtractor'), size.height*0.6);
  }
}

// Register our class under a specific name
registerPaint('headerHighlight', HeaderHighlight);

