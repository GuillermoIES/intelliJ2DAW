var $div;
$(document).ready(function(){
   $('div.peque').on('click', cambiaColor);
   $('div.peque').on('mousemove', tooltip);
   $('div.peque').on('mouseleave', quitarTooltip);
   $div = $('div.tooltip');

});
function cambiaColor (){
    $('body').css('background-color', $(this).attr('value') );
}
function tooltip(e){
    $div.text($(this).attr('value'));
    $div.css('left', e.pageX+10);
    $div.css('top', e.pageY+10);
    $div.css('background-color', $(this).attr('value'));
    $div.css('display', 'block');
}
function quitarTooltip(){
    $div.css('display', 'none');
}
