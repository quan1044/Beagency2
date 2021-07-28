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
