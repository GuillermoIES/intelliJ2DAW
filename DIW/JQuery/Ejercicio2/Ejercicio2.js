$(document).ready(function(){
    $('#but').on('click' , anadir);
    $('#arr').on('click' , arr);
    $('#ab').on('click' , ab);
    $('#borr').on('click' , borr);
});
function anadir(){
    var value = $('#in').val();
    var $lista = $('#lista');
    if(value != ''){
        $lista.append('<li>' + value + '</li>');
        $('#in').val('');
    }
}
function arr(){
    var $lista = $('#lista');
    var $lastChild = $('#lista li:last-child');
    $lista.prepend($lastChild);
}
function ab(){
    var $lista = $('#lista');
    var $firstChild = $('#lista li:first-child');
    $lista.append($firstChild);
}
function borr(){
    var el = $('#borrIn').val();
    var $child = $('#lista li:nth-child(' + el + ')');
    $child.remove();
    $('#borrIn').val('');
    //
}