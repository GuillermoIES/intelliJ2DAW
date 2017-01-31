var $d;
var vel = 5;
$(document).ready(function (){
    $d = $('#mover');
    $('body').css('width', $(window).width());
    $('body').css('height', $(window).height());
    $('body').on('mousemove', movimiento);
});
function movimiento(e) {
        var derecha;
        var abajo;
        var xRaton = e.pageX;
        var yRaton = e.pageY;
        var xLink = parseInt($d.css('left'));
        var yLink = parseInt($d.css('top'));
        if (xRaton > xLink) {
            derecha = true;
        } else {
            derecha = false;
        }
        if (yRaton > yLink) {
            abajo = true;
        } else {
            abajo = false;
        }
        var l = (derecha ? xLink + vel : xLink - vel);
        var t = (abajo ? yLink + vel : yLink - vel);
        borrarTodo();
        if (derecha) {
            borrarTodo()
            $d.addClass('derecha');
        } else {
            $d.addClass('izquierda');
        }
        if (abajo) {
            $d.addClass('abajo');
        } else {
            $d.addClass('arriba');
        }
        $d.css('left', l);
        $d.css('top', t);
        movimiento;
}
function borrarTodo() {
    $d.removeClass('arriba');
    $d.removeClass('abajo');
    $d.removeClass('derecha');
    $d.removeClass('izquierda');
}