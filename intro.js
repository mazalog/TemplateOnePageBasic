let animado = document.querySelectorAll(".animado");
function mostrarScroll() {
     let scrollTop = document.documentElement.scrollTop;

    for(var i=0;i<animado.length;i++){

        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado-420<scrollTop){
            animado[i].style.opacity=1;
            animado[i].classList.add("mostrarArriba");
}}}

(function(){

    $( document ).ready(function() {
        new WOW().init();
      });

    
    const typed =new Typed('.typed',{

       strings:['pensamos','actuamos','entregamos'],

        // stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
        smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
    });

    window.addEventListener("scroll",mostrarScroll)



    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
      });
      $('.second-button').on('click', function () {
    
        $('.animated-icon2').toggleClass('open');
      });
      $('.third-button').on('click', function () {
    
        $('.animated-icon3').toggleClass('open');
      });

}())