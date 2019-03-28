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






class Shape {
    paint(ctx, geom, properties) {

        let x = geom.width / 2;
        let y = geom.height / 2;

        ctx.strokeStyle = 'white';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();

    }
}

// Register our class under a specific name
registerPaint('awesomePattern', Shape);


class SuperUnderline {

    paint(ctx, size) {
        console.log("uehdrdfr")
        // random function can live outside of the class
        const getRandom = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        // values to set for the paint
        const numUnderlines = 3;
        const spread = 30;
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black';
        for (let i = 0; i < numUnderlines; i++) {
            ctx.beginPath();
            ctx.moveTo(0, getRandom(0, spread) + size.height / 5);
            ctx.lineTo(size.width, getRandom(0, spread) + size.height / 5);
            ctx.stroke();
        }
    }
}


registerPaint('underlines', SuperUnderline)

class MyWorklet {
    paint(ctx) {
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, 5, 5);
    }
}
registerPaint('my-paint-worklet', MyWorklet);

// class BarChartPainter {
//     paint(ctx, {width, height}, props) {
//       const gap = parseInt(
//         (props.get('--bar-gap') || 10).toString(),
//         10
//       );
//       const data = this._parseData(props.get('--bar-map'));
//       const max = this._getMax(data);
//       const multiplier = height / max;
//       const barW = (width - (gap * (data.length - 1))) / data.length;
  
//       for (let i = 0; i < data.length; i++) {
//         const x = i * (barW + gap);
//         const barHeight = data[i].value * multiplier;
//         const y = height - barHeight;
  
//         ctx.fillStyle = data[i].color;
  
//         ctx.fillRect(x, y, barW, barHeight);
//       }
//     }
//   }
//   registerPaint('bar-chart', BarChartPainter);