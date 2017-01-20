var $c;
var c;
var offset;
var rect;
var color = 'black';
var ancho;
var $t;
$(document).ready(function () {
    $c = $('#can');
    $c.css('width', $(window).width() - 50);
    $c.css('height', $(window).height() - 50);
    offset = $c.offset();
    console.log('w: ' + $c.css('width') + ' h: ' + $c.css('height'));
    //  $c.css('background-color', 'black');
    //$c.on('mousemove', pinta);
    c = document.getElementById('can');
    rect = c.getBoundingClientRect();
    $('div.peque').on('click', cambiaColor);
    $c.on('mousedown', activa);
    $c.on('mouseup', desactiva);
    $('#borr').on('click', limpiar);
    $('#camb').on('click', cambiarAncho);
    $t = $('div.tooltip');
    ancho = $('#px').val();
    $c.on('mousemove', tooltip);
    $c.on('mouseleave', quitarTooltip);
    $('#col').on('click', colorPersonalizado);
    $('#save').on('click', guardar);
});
function colorPersonalizado (){
    var colorPers = $('#color').val();
    $('#pers').css('background-color', colorPers);
    $('#pers').attr('value', colorPers);
    $('#color').val('');
}
function tooltip(e){
    var x = e.pageX;
    var y = e.pageY;
    $t.css('left',x+1);
    $t.css('top', y+1);
    $t.css('width', ancho);
    $t.css('height', ancho);
    $t.css('background-color', color);
    $t.css('display', 'block');
    console.log('ancho: ' + ancho + ' width: '  + $t.css('width'));

}
function quitarTooltip(){
    $t.css('display', 'none');
}

function cambiarAncho(){
    ancho = $('#ancho').val();
    $('#ancho').val('');
    $('#px').val(ancho);
}
function limpiar(){
    var ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.stroke()
}
function activa() {
    $c.on('mousemove', pinta);
}
function desactiva() {
    $c.off('mousemove', pinta);
}
function pinta(e) {

    //var x = e.clientX - rect.left;
    //var y = e.clientY - rect.top;
    var x = Math.round((e.clientX - rect.left) / (rect.right - rect.left) * c.width);
    var y = Math.round((e.clientY - rect.top) / (rect.bottom - rect.top) * c.height);
    //var x = parseInt(e.pageX - offset.left);
    //var y = parseInt(e.pageY - offset.top);
    var ctx = c.getContext('2d');
    ctx.beginPath();
    //ctx.lineWidth = 2;
    //ctx.moveTo(0, 0);
    //ctx.lineTo(x, x+2);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho/4.5, ancho/3.5);

    //ctx.fill();
    //console.log(x + ' ' + y);
    ctx.stroke();
}
function cambiaColor() {
    $('div.peque[value="' + color + '"]').css('border', '1px solid red');
    color = $(this).attr('value');
    $('div.peque[value="' + color + '"]').css('border', '3px solid black');
    console.log(color);
}
function guardar(){
    var img = c.toDataURL("image/png").replace("image/png", "image/octet-stream");
    alert(c.toDataURL());
    window.open(img);
}