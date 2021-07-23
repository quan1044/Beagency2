//smooth scroll when click anchor
$('nav a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    $('a').each(function () {
        $(this).removeClass('active');
    })

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

function drawCanvasBorder(selector, percent) {
    var x = document.querySelector(selector).width / 2;
    var y = document.querySelector(selector).height / 2;
    var radius = x - 10;
    var endPercent = percent;
    var curPerc = 0;
    function animate(current) {
        $(selector)
            .clearCanvas()
            .drawArc({
                strokeStyle: '#2f43a9',
                strokeWidth: 5,
                x: x, y: y,
                radius: radius,
                // start and end angles in degrees
                start: 0, end: current * 360
            });
        curPerc++;
        if (curPerc < endPercent) {
            requestAnimationFrame(function () {
                animate(curPerc / 100)
            });
        }
    }
    animate();

}
drawCanvasBorder("#myCanvas1", 85);
drawCanvasBorder("#myCanvas2", 75);
drawCanvasBorder("#myCanvas3", 55);

// function drawCanvas1() {
//     var canvas = document.getElementById('myCanvas1');
//     var context = canvas.getContext('2d');
//     var x = canvas.width / 2;
//     var y = canvas.height / 2;
//     var radius = canvas.width / 4;
//     var endPercent = 85;
//     var curPerc = 0;
//     var counterClockwise = false;
//     var circ = Math.PI * 2;
//     var quart = Math.PI / 2;

//     context.lineWidth = 2;
//     context.strokeStyle = '#ad2323';
//     context.shadowOffsetX = 0;
//     context.shadowOffsetY = 0;
//     context.shadowBlur = 0;
//     context.shadowColor = '#656565';


//     function animate(current) {
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         context.beginPath();
//         context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
//         context.stroke();
//         curPerc++;
//         if (curPerc < endPercent) {
//             requestAnimationFrame(function () {
//                 animate(curPerc / 100)
//             });
//         }
//     }

//     animate();
// }
// drawCanvas1();

// function drawCanvas2() {
//     var canvas = document.getElementById('myCanvas2');
//     var context = canvas.getContext('2d');
//     var x = canvas.width / 2;
//     var y = canvas.height / 2;
//     console.log(x + " " + y)
//     var radius = 75;
//     var endPercent = 85;
//     var curPerc = 0;
//     var counterClockwise = false;
//     var circ = Math.PI * 2;
//     var quart = Math.PI / 2;

//     context.lineWidth = 2;
//     context.strokeStyle = '#ad2323';
//     context.shadowOffsetX = 0;
//     context.shadowOffsetY = 0;
//     context.shadowBlur = 0;
//     context.shadowColor = '#656565';


//     function animate(current) {
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         context.beginPath();
//         context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
//         context.stroke();
//         curPerc++;
//         if (curPerc < endPercent) {
//             requestAnimationFrame(function () {
//                 animate(curPerc / 100)
//             });
//         }
//     }

//     animate();
// }
// drawCanvas2();
