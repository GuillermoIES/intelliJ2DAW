$('document').ready(function(){
//SELECCIONES

    //  Seleccionar todos los div con clase module
    console.log($('div.module').text());

    //  Seleccionar el tercer elemento de la lista #myList de 3 formas diferentes
    console.log($('ul#myList li:eq(2)').text());
    console.log($('ul#myList li').get(2)); //Con esta no puedes usar métodos (o al menos todos están fallándome)
    console.log($("ul#myList li:nth-child(3)").text());

    //	Seleccionar el elemento label del elemento input utilizando un selector de atributo.
    var id = $('input[type=text]').attr('id');
    console.log($('label[for=' + id).text());

    //	Averiguar cuantos elementos en la página están ocultos (ayuda: .length)
    console.log($('body').find(':hidden').length);

    //	Averiguar cuantas imágenes en la página poseen el atributo alt.
    var $imgs = $('img');
    var num = 0;
    $imgs.each(function(){
       if($(this).attr('alt')) num+=1;
    });
    console.log(num);

    //	Seleccionar todas las filas impares del cuerpo de la tabla.
    var $tr = $('tr');
    $tr.each(function(i){
        if(i%2!=0) console.log($(this).html());
    });

//RECORRER DOM

    //  Seleccionar todas las imágenes en la página; registrar en la consola el atributo alt de cada imagen.
    $imgs.each(function(){
        console.log($(this).attr('alt'));
    });
    //  Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.
    //  Seleccionar el ítem que posee la clase “current” dentro de la lista #myList y quitar dicha clase en el elemento; luego añadir la clase “current” al siguiente ítem de la lista.
    //  Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.
    //  Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase “current” al mismo y luego añadir la clase “disabled” a los elementos hermanos.

//MODIFICACIONES

});

