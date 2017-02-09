var $d;
var $esp;
var $body;
var vel = 1;
var inter;
var puntos = 0;
var pierdes = false;
$(document).ready(function () {
    $d = $('#mover');
    $esp = $('#espada');
    $body = $('body');
    $body.on('mousemove', actualizaCoord);
    setTimeout(function(){
    inter = setInterval('movimiento()', 1);
    setInterval('genMoneda()', 1000);
    $('#mover').on('click', auch);
    }, 1000);
    $('#puntos').text(puntos);
    setInterval('perder()', 50);
});
function perder(){
    //TODO comprobar si a perdido y decir que pierdes y mostrar puntuacion
}
function genMoneda(){
        var x = Math.floor(Math.random() * parseInt($body.css('width')));
        var y = Math.floor(Math.random() * parseInt($body.css('height')));
        var $moneda = $('<div></div>');
        $moneda.addClass('moneda');
        $moneda.css('top', y);
        $moneda.css('left', x);
        $body.append($moneda);
        $moneda.on('mouseenter', ganaPunto);
        if($('div.moneda').length > 100) pierdes = true;
}
function ganaPunto(e){
    if(!cogido) {
        puntos += 1;
        e.target.remove();
        $('#puntos').text(puntos);
    }
}
var ejecutando = false;
var seguir = true;
var xRaton;
var yRaton;
var cogido = false;
function auch(e) {
    if(!ejecutando) {
        ejecutando = true;
        var $a = $('#auch');
        var x = parseInt($d.css('left')) + parseInt($d.css('width')) + 10;
        var y = parseInt($d.css('top')) + parseInt($d.css('height')) / 3;
        $a.css('left', x);
        $a.css('top', y);
        $a.css('display', 'block');
        var ouch = new Audio('ouch.mp3');
        ouch.play();
        clearInterval(inter);
        cogido = false;
        seguir = true;
        $esp.css('left', parseInt(e.pageX) - 5);
        $esp.css('top', parseInt(e.pageY) - parseInt($esp.css('height')));
        setTimeout(function () {
            inter = setInterval('movimiento()', 1);
            ejecutando = false;
        }, 1000);
        setTimeout(function () {
            $a.css('display', 'none');
        }, 200);
        $esp.css('transform', 'rotate(90deg)');
        setTimeout(function () {
            $esp.css('transform', 'rotate(0deg)');
        }, 500);
    }
}
function actualizaCoord(e) {
    xRaton = e.pageX - parseInt($d.css('width')) / 2;
    yRaton = e.pageY - parseInt($d.css('height'));

    if (!cogido) {
        $esp.css('left', parseInt(e.pageX) - 5);
        $esp.css('top', parseInt(e.pageY) - parseInt($esp.css('height')));
    }

}
function movimiento() {
    var derecha;
    var abajo;
    var xLink = parseInt($d.css('left'));
    var yLink = parseInt($d.css('top'));
    if (xRaton > xLink) {
        if(seguir) derecha = true;
        else
            derecha = false;
    } else if (xRaton < xLink) {
        if(seguir) derecha = false;
        else
            derecha = true;
    } else {
        derecha = null;
    }
    if (yRaton > yLink) {
        if(seguir) abajo = true;
        else
            abajo = false;
    } else if (yRaton < yLink) {
        if(seguir)
            abajo = false;
        else
            abajo = true;
    } else {
        abajo = null;
    }
    var l = xLink;
    if (derecha != null)
        l = (derecha ? xLink + vel : xLink - vel);
    var t = yLink;
    if (abajo != null)
        t = (abajo ? yLink + vel : yLink - vel);

    if(!seguir){
        t = (t<0?0:t);
        t = (t>$body.height()-70?$body.height()-70:t);
        l = (l<0?0:l);
        l = (l>$body.width()?$body.width():l);
    }
    borrarTodo();
    if (abajo != null) {
        if (abajo) {
            $d.addClass('abajo');
        } else {
            $d.addClass('arriba');
        }
    }
    if (derecha != null) {
        if (derecha) {
            $d.addClass('derecha');
        } else {
            $d.addClass('izquierda');
        }
    }
    if (!cogido && derecha == null && abajo == null) {
        cogido = true;
        seguir = false;
        new Audio('heylisten.mp3').play();
    }
    $d.css('left', l);
    $d.css('top', t);
    if (cogido) {
        $esp.css('left', parseInt($d.css('left')) - 5);
        $esp.css('top', parseInt($d.css('top')) - 5);
    }
}
function borrarTodo() {
    $d.removeClass('arriba');
    $d.removeClass('abajo');
    $d.removeClass('derecha');
    $d.removeClass('izquierda');
}