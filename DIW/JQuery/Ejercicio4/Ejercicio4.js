var $d;
var vel = 20;
var clase;
$(document).ready(function () {
    $d = $('#mover');
    $('body').on('keydown', movimiento);
    $('body').on('keyup', parar);
})
function movimiento(e) {
    var code = e.which;
    if (code == 37) {
        var l = (parseInt($d.css('left')) - vel);
        $d.css('left', l);
        $d.css('background-position', '0 0');
        clase = 'izquierda';
    }
    else if (code == 38) {
        var t = parseInt($d.css('top')) - vel;
        $d.css('top', t);
        $d.css('background-position', '0 -192px');
        clase = 'arriba';
    }
    else if (code == 39) {
        var l = parseInt($d.css('left')) + vel;
        $d.css('left', l);
        $d.css('background-position', '0 -96px');
        clase = 'derecha';
    }
    else if (code == 40) {
        var t = parseInt($d.css('top')) + vel;
        $d.css('top', t);
        $d.css('background-position', '0 -288px');
        clase = 'abajo';
    }
    if (parseInt($d.css('left')) < 50) $d.css('left', $(window).width()-100);
    if (parseInt($d.css('left')) > $(window).width()-100) $d.css('left', 50);
    if (parseInt($d.css('top')) < 50) $d.css('top', $(window).height()-110);
    if (parseInt($d.css('top')) > $(window).height()-110) $d.css('top', 50);
    $d.addClass(clase);
}
function parar() {
    $d.removeClass('arriba');
    $d.removeClass('abajo');
    $d.removeClass('derecha');
    $d.removeClass('izquierda');
    clase = null;
}