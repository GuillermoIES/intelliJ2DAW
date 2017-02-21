var $tablero;
var $cesta1;
var $cesta2;
var timer;
var rojas = 0;
var azules = 0;
$(document).ready(function(){
    $tablero = $('#t');
    $cesta1 = $('#c1');
    $cesta1.droppable({
        accept: ".roja",
        drop: function(e, ui){
            ui.draggable.draggable('destroy');
            aumentaNum(0);
        }
    });
    $cesta2 = $('#c2');
    $cesta2.droppable({
        accept: ".azul",
        drop: function(e, ui){
            ui.draggable.draggable('destroy');
            aumentaNum(1);
        }
    });
    timer = setInterval('generaBola()', 1000);
});

function generaBola(){
    var $bola = $('<div></div>');
    $bola.addClass('bola');
    $tablero.append($bola);

    var max = parseInt($tablero.width()) - parseInt($bola.width());
    var x = Math.round(Math.random() * max);

    max = parseInt($tablero.height()) - parseInt($bola.height());
    var y = Math.round(Math.random() * max);

    var random = Math.round(Math.random() * 10);
    if(random >= 5){
        $bola.addClass('roja');
    } else {
        $bola.addClass('azul');
    }
    $bola.css('top', y);
    $bola.css('left', x);
    $bola.draggable();
}

function aumentaNum(num){
    if(num == 0){
        rojas += 1;
        $('#rojas').text(rojas);
    } else {
        azules += 1;
        $('#azules').text(azules);
    }
}