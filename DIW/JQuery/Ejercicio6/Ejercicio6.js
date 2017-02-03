$(document).ready(function () {
    $('div.imagen').on('mousemove', zoom);
    $('div.imagen').on('mouseleave', quitarZoom);
});
function zoom(e){
    var x = parseInt(e.pageX);
    var y = parseInt(e.pageY);
    var xZ = parseInt($('div.zoom').css('width'));
    var yZ = parseInt($('div.zoom').css('height'));
    var xImg = Math.round(-x) + 'px';
    var yImg = Math.round(-y) + 'px';
    $('div.zoom').css('left', x+xZ/2+5);
    $('div.zoom').css('top', y+yZ/2+5);
    $('div.zoom').css('display', 'block');
    $('div.zoom').css('background-image', 'url(link.jpg)');
    $('div.zoom').css('transform', 'scale(2)');
    $('div.zoom').css('background-position', xImg + ' ' + yImg);
}
function quitarZoom(){
    $('div.zoom').css('display', 'none');
}
