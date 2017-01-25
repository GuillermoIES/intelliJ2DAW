$(document).ready(function () {
    $('#txt').on('keyup', cuenta);
});
function cuenta(e) {
    var texto = $(this).val();

    var con = 0;
    var voc = 0;
    var bla = 0;
    var car = texto.length;

    for (var i = 0; i <= texto.length; i += 1) {
        var char = texto.charAt(i);
        if (/^[bcdfghjklmnpqrstvwxyz]$/.test(char)) {
            con += 1;
        }
        if (/^[aeiou]$/.test(char)) {
            voc += 1;
        }
        if (char == ' ') {
            bla += 1;
        }
    }

    $('p#status').html('caracteres: ' + car + '<br/>vocales: ' + voc + '<br/>consontantes: ' + con + '<br/>blancos: ' + bla);
}