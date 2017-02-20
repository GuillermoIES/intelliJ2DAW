var $d;
var $esp;
var $body;
var vel = 1;
var tamanio = 2;
var inter;
var mon;
var puntos = 0;
var puntosRequeridos = 10;
var fondos = [];
var fondo = 0;
var numFondos = 6;
//noinspection JSUnresolvedFunction
var music = new Audio('sonido/fondo.mp3');
var ale;
$(document).ready(function () {
    setInterval('musica()', music.duration);
    cargarFondos();
    $d = $('#mover');
    $esp = $('#espada');
    $body = $('body');
    $(window).on('mousemove', actualizaCoord);
    $(window).on('touchmove', actualizaCoord);
    setTimeout(function(){
    inter = setInterval('movimiento()', 1/(vel/2.5));
    mon = setInterval('genMoneda()', 1000/vel);
    $d.on('mouseenter', auch); //TODO arreglar para que cuando te la robe se desactive temporalmente
    $d.on('touchstart', auch);
    }, 1000);
    $('#puntos').text(puntos);
});

function musica(){
        music.play();
}
function cargarFondos(){
    for(var i = 1; i <= numFondos; i+=1){
        fondos[i-1] = 'img/fondo' + i + '.jpg';
    }
}
function perder(){ //Hacer modal
    clearInterval(inter);
    clearInterval(mon);
    clearInterval(ale);
    $d.off('mouseenter');
    $d.off('touchstart');
    $d.off('mousemove');
    $d.off('touchmove');
    $('#pun').text(puntos);
    var cookie = getCookie('best');
    if(cookie == '') cookie = 0;
    if(puntos >= cookie) document.cookie = 'best=' + puntos;
    var punMax = getCookie('best');
    $('#best').text(punMax);
    $('div.moneda').remove();
    $('#pierdes').css('display', 'block');

}
function getCookie(cname) { // Hacer en BBDD
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function genMoneda(){
        var x = Math.floor(Math.random() * (parseInt($body.css('width'))-tamanio) - tamanio) + tamanio;
        var y = Math.floor(Math.random() * (parseInt($body.css('height'))-tamanio) - tamanio) + tamanio;
        var $moneda = $('<div></div>');
        $moneda.addClass('moneda');
        $moneda.css('top', y);
        $moneda.css('left', x);
        $moneda.css('transform', 'scale(' + tamanio + ')');
        $body.append($moneda);
        var monedas = $('div.moneda').length;
        $('#perde').text(100-monedas);
        if(monedas >= 100) perder();
}
var ejecutando = false;
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
        //noinspection JSUnresolvedFunction
        var ouch = new Audio('sonido/ouch.mp3');
        ouch.play();
        clearInterval(inter);
        cogido = false;
        $esp.css('left', parseInt(e.pageX) - 5);
        $esp.css('top', parseInt(e.pageY) - parseInt($esp.css('height')));
        setTimeout(function () {
            inter = setInterval('movimiento()', 1/(vel/2.5));
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
    $(window).on('mousemove', actualizaCoord);
    $(window).on('touchmove', actualizaCoord);
    clearInterval(ale);
}
function actualizaCoord(e) {
    var rutaEv = (typeof e.changedTouches === 'undefined')?e:e.changedTouches[0];
    xRaton = Math.floor(rutaEv.pageX) - parseInt($d.css('width')) / 2;
    yRaton = Math.floor(rutaEv.pageY) - parseInt($d.css('height'));

    if (!cogido) {
        $esp.css('left', parseInt(rutaEv.pageX) - 5);
        $esp.css('top', parseInt(rutaEv.pageY) - parseInt($esp.css('height')));
    }
    if(!cogido) {
    var clase = document.elementFromPoint(rutaEv.pageX, rutaEv.pageY).className;
    if(/moneda/.test(clase)){
            document.elementFromPoint(rutaEv.pageX, rutaEv.pageY).remove();
            ganaPunto();
        }


    }

}
function ganaPunto(){
    if(!cogido) {
        puntos += 1;

        var monedas = $('div.moneda').length;
        $('#perde').text(100-monedas);
        $('#puntos').text(puntos);
        if(puntos == puntosRequeridos)
           subirVelocidad();

    }
}
function subirVelocidad(){
    puntosRequeridos *= 2;
    vel += 1;
    tamanio /= 1.25;
    $('#monReq').text(puntosRequeridos);
    $('#vel').text(vel);
    clearInterval(inter);
    inter = setInterval('movimiento()', 1/(vel/2.5));
    clearInterval(mon);
    mon = setInterval('genMoneda()', 1000/vel);
    fondo += 1;
    if(fondo == numFondos) fondo = 0;
    $body.css('background', 'url(' + fondos[fondo] + ')');
    $body.css('background-size', '100vw 100vh');
}
function movimiento() {
    for(var i = 0; i < vel; i+=1) {
    var derecha;
    var abajo;
    var xLink = parseInt($d.css('left'));
    var yLink = parseInt($d.css('top'));
    if (xRaton > xLink) {
       derecha = true;
    } else if (xRaton < xLink) {
        derecha = false;
    } else {
        derecha = null;
    }
    if (yRaton > yLink) {
        abajo = true;
    } else if (yRaton < yLink) {
            abajo = false;
    } else {
        abajo = null;
    }
    var l = xLink;
    var t = yLink;
        if (derecha != null)
            l = (derecha ? l + 1 : l - 1);

        if (abajo != null)
            t = (abajo ? t + 1 : t - 1);
        $d.css('left', l);
        $d.css('top', t);
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
        if (derecha == null && abajo == null) {
            if (cogido) {
                coordenadaAleatoria();
            } else {
                cogido = true;
                $(window).off('mousemove');
                $(window).off('touchmove');
                ale = setInterval('coordenadaAleatoria()', 500);
                seguir = false;
                //noinspection JSUnresolvedFunction
                new Audio('sonido/heylisten.mp3').play();
            }
        }


        if (cogido) {
            $esp.css('left', parseInt($d.css('left')) - 5);
            $esp.css('top', parseInt($d.css('top')) + 10);
        }
    }
}
function coordenadaAleatoria(){
    xRaton = Math.floor(Math.random() * $body.width());
    yRaton = Math.floor(Math.random() * $body.height());
    console.log(xRaton + ' ' + yRaton);
}
function borrarTodo() {
    $d.removeClass('arriba');
    $d.removeClass('abajo');
    $d.removeClass('derecha');
    $d.removeClass('izquierda');
}