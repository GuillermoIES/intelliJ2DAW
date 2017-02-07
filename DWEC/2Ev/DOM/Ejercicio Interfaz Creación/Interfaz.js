
function insertar() {

}
function cambiarDatos(element){
    var d = document.getElementById('datos');
   switch (element.value) {
       case 'h':
           var tit = document.createElement('label');
           tit.value = 'h';
           var lbl = document.createElement('label');
           lbl.for = 'nivel';
           lbl.value = 'Nivel';
           var niv = document.createElement('input');
           niv.id = 'nivel';
           niv.type = 'text';
           niv.name = 'h';
           var lbl2 = document.createElement('label');
           lbl2.for = 'texto';
           lbl2.value = 'Texto';
           var txt = document.createElement('input');
           txt.id = 'texto';
           txt.type = 'text';
           txt.name = 'value';
           d.appendChild(lbl);
           d.appendChild(niv);
           d.appendChild(lbl2);
           d.appendChild(txt);  // TODO darle una vuelta a esto
           break;
       case 'text':
           break;
       case 'button':
           break;
       case 'p':
           break;
       case 'select':
           break;
       case 'chexbox':
           break;
       case 'radio':
           break;
   }
}