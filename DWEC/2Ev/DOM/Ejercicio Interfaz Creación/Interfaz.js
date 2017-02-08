window.onload = function () {
    cambiarDatos(document.getElementById('elemento'));
}
function activarEd() {
    document.getElementById('edicion').setAttribute('onclick', 'desactivarEd()');
    var buts = document.getElementsByName('editor');
    for(var i = 0; i < buts.length; i+=1){
        buts[i].style.display = 'block';
    }
}
function desactivarEd() {
    document.getElementById('edicion').setAttribute('onclick', 'activarEd()');
    var buts = document.getElementsByName('editor');
    for(var i = 0; i < buts.length; i+=1){
        buts[i].style.display = 'none';
    }
}
function insertar(node) {

    var elemento = document.createElement('div');
    elemento.appendChild(node);
    var mod = document.createElement('input');
    mod.type = 'button';
    mod.value = 'modificar';
    mod.onclick = function(){modificar(elemento)};
    mod.style.display = 'none';
    mod.name = 'editor';
    var borr = document.createElement('input');
    borr.type = 'button';
    borr.value = 'X';
    borr.onclick = function(){eliminar(elemento)};
    borr.style.display = 'none';
    borr.name = 'editor';
    elemento.appendChild(mod);
    elemento.appendChild(borr);
    document.getElementsByTagName('body')[0].appendChild(elemento);
}
function modificar(node) {
    var d = document.getElementById('datos');
    d.innerHTML = '';
    var elemento = node.childNodes[0];
    var lb = document.createElement('label');
    lb.appendChild(document.createTextNode('texto'));
    var inp = document.createElement('input');
    inp.type = 'text';
    inp.value = node.textContent;
    if(inp.value != '') {
        d.appendChild(lb);
        d.appendChild(inp);
    }
    for(var i = 0; i < elemento.attributes.length; i+=1){
        if(elemento.attributes[i].name != 'type'){
        var lbl = document.createElement('label');
        lbl.appendChild(document.createTextNode(elemento.attributes[i].name))
        var input = document.createElement('input');
        input.type = 'text';
        input.id = 'id' + i;
        input.value = elemento.attributes[i].value;
        d.appendChild(lbl);
        d.appendChild(input);
        }
    }
    document.getElementById('insertar').onclick = function(){modificarPost(elemento)};
}
function modificarPost(node){
    var d = document.getElementById('datos');
    var elemento = '';
   for(var i = 0; i < d.childNodes.length; i+=1){

       if(d.childNodes[i].tagName == 'LABEL'){
           elemento = d.childNodes[i].textContent;
       } else {
           node.setAttribute(elemento, d.childNodes[i].value);
       }
   }
}
function eliminar(node){
    node.parentNode.removeChild(node);
}
function cambiarDatos(element) {
    var d = document.getElementById('datos');
    d.innerHTML = '';
    switch (element.value) {
        case 'h':
            var lbl = document.createElement('label');
            lbl.for = 'nivel';
            lbl.appendChild(document.createTextNode('Nivel'));
            var niv = document.createElement('input');
            niv.id = 'nivel';
            niv.type = 'number';
            var lbl2 = document.createElement('label');
            lbl2.for = 'texto';
            lbl2.appendChild(document.createTextNode('Texto'));
            var txt = document.createElement('input');
            txt.id = 'texto';
            txt.type = 'text';
            d.appendChild(lbl);
            d.appendChild(niv);
            d.appendChild(lbl2);
            d.appendChild(txt);
            document.getElementById('insertar').onclick = crearTitulo;
            break;
        case 'p':
            var lbl = document.createElement('label');
            lbl.for = 'texto';
            lbl.appendChild(document.createTextNode('Texto'));
            var txt = document.createElement('input');
            txt.id = 'texto';
            txt.type = 'text';
            d.appendChild(lbl);
            d.appendChild(txt);
            document.getElementById('insertar').onclick = crearP;
            break;
        case 'input':
            var lbl = document.createElement('label');
            lbl.for = 'caja';
            lbl.appendChild(document.createTextNode('Name'));
            var txt = document.createElement('input');
            txt.id = 'caja';
            txt.type = 'text';
            d.appendChild(lbl);
            d.appendChild(txt);
            document.getElementById('insertar').onclick = crearInput;
            break;
        case 'button':
            var lbl = document.createElement('label');
            lbl.for = 'valor';
            lbl.appendChild(document.createTextNode('Valor'));
            var txt = document.createElement('input');
            txt.id = 'valor';
            txt.type = 'text';
            txt.name = 'value';
            d.appendChild(lbl);
            d.appendChild(txt);
            var lbl2 = document.createElement('label');
            lbl2.for = 'accion';
            lbl2.appendChild(document.createTextNode('On Click'));
            var accion = document.createElement('input');
            accion.id = 'accion';
            accion.type = 'text';
            d.appendChild(lbl2);
            d.appendChild(accion);
            document.getElementById('insertar').onclick = crearBut;
            break;
        case 'select':
            var lbl = document.createElement('label');
            lbl.for = 'opciones';
            lbl.appendChild(document.createTextNode('Opciones (Una por linea)'));
            var opciones = document.createElement('textarea');
            opciones.id = 'opciones';
            d.appendChild(lbl);
            d.appendChild(opciones);
            document.getElementById('insertar').onclick = crearSelect;
            break;
        case 'checkbox':
            var lbl = document.createElement('label');
            lbl.for = 'opciones';
            lbl.appendChild(document.createTextNode('Opciones (Una por linea)'));
            var opciones = document.createElement('textarea');
            opciones.id = 'opciones';
            d.appendChild(lbl);
            d.appendChild(opciones);
            document.getElementById('insertar').onclick = crearCheck;
            break;
        case 'radio':
            var lbl = document.createElement('label');
            lbl.for = 'opciones';
            lbl.appendChild(document.createTextNode('Opciones (Una por linea)'));
            var opciones = document.createElement('textarea');
            opciones.id = 'opciones';
            d.appendChild(lbl);
            d.appendChild(opciones);
            document.getElementById('insertar').onclick = crearRadio;
            break;
    }
}
function crearTitulo() {
    var nivel = parseInt(document.getElementById('nivel').value);
    var texto = document.getElementById('texto').value;
    var tit = document.createElement('h' + nivel);
    tit.appendChild(document.createTextNode(texto));
    insertar(tit);
}
function crearP() {
    var texto = document.getElementById('texto').value;
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(texto));
    insertar(p);
}
function crearInput() {
    var name = document.getElementById('caja').value;
    var input = document.createElement('input');
    input.type = 'text';
    input.name = name;
    insertar(input);

}
function crearBut() {
    var value = document.getElementById('valor').value;
    var accion = document.getElementById('accion').value;
    var but = document.createElement('input');
    but.type = 'button';
    but.value = value;
    but.setAttribute('onclick', accion);
    insertar(but);
}
function crearSelect() {
    var opciones = document.getElementById('opciones').value.split('\n');
    var sel = document.createElement('select');
    for (var i = 0; i < opciones.length; i += 1) {
        var option = new Option(opciones[i]);
        sel.add(option);
    }
    insertar(sel);
}
function crearCheck() {
    var opciones = document.getElementById('opciones').value.split('\n');
    var div = document.createElement('div');
    var name = Math.floor(Math.random() * (1000000 - 1) + 1);
    for (var i = 0; i < opciones.length; i += 1) {
        var check = document.createElement('input');
        check.type = 'checkbox';
        check.name = name;
        check.value = opciones[i];
        div.appendChild(check);
        div.appendChild(document.createTextNode(opciones[i]));
    }
    insertar(div);
}
function crearRadio() {
    var opciones = document.getElementById('opciones').value.split('\n');
    var div = document.createElement('div');
    var name = Math.floor(Math.random() * (1000000 - 1) + 1);
    for (var i = 0; i < opciones.length; i += 1) {
        var check = document.createElement('input');
        check.type = 'radio';
        check.name = name;
        check.value = opciones[i];
        div.appendChild(check);
        div.appendChild(document.createTextNode(opciones[i]));
    }
    insertar(div);
}