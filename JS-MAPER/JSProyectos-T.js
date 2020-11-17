/*Opciones de Galeria de imagenes grande, de un solo item*/ 
$('.carousel-proyectos').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    animateOut: 'fadeOut',
    animateIn: 'fadaIn',
    autoplay:true,
    autoplayTimeout:5000,
    touchDrag: false,
    mouseDrag:false,
    smartSpeed:3000,
    items:1
})

/*Variables de la galeria de imagenes grande*/
var owl1 = $('.carousel-proyectos');
owl1.owlCarousel();

/*Funcion click sobre la galeria grande, para abrir la galeria lightbox*/
owl1.on('click', '.item-carousel', function() {
    var nid=this.id;
    owls.trigger('to.owl.carousel',nid);
    $('.lightbox').slideDown(1000)
});

/*Opciones de galeria pequeña con funcion de eleccion */
$('.carousel-proyectos-eleccion').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    touchDrag: true,
    mouseDrag:true,
    autoplay:false,
    smartSpeed:500,
    responsive:{
        0:{
            items:5,
        },
        500:{
            items:6
        },
        700:{
            items:7
        },
        800:{
            items:8
        },
        900:{
            items:6
        },
        1100:{
            items:7
        },
        1200:{
            items:8
        }
    }
});

/*Variables de la galeria pequeña*/
var owlthumb = $('.carousel-proyectos-eleccion');
owlthumb.owlCarousel();

/*Funcion hover para detener el autoplay la galeria de imagenes*/
$('.item-carousel-eleccion').hover(function() {
    owl1.trigger('stop.owl.autoplay');
},function(){
    owl1.trigger('play.owl.autoplay',[5000]);
});

/*Funcion sobre el cambio de imagen de la galeria grande,
 provocando que la galeria pequeña se sincronice con la grande*/
 //Ademas manda a llamar la funcion "setclass"
owl1.on('changed.owl.carousel', function (e) {
    var c=e.relatedTarget.relative(e.relatedTarget.current()) + 1;

    owlthumb.trigger('to.owl.carousel',(c-1));

    var activeI = $('.carousel-proyectos-eleccion').find('#'+(c-1));
    setclass(activeI);
        
});

/*Funcion para cambiar la clase "current" de los items de la galeria pequeña,
dando un elemnto visual para identificar la imagen que esta activa*/
function setclass(i) {
    $(".item-carousel-eleccion").removeClass("current");
    i.addClass("current");
}

/*Funcion onclick para los elementos de la galeria pequeña, esta muestra la imagen
a la cual se le hizo click, en la galeria grande*/
owlthumb.on('click', '.item-carousel-eleccion', function() {
var n1id=this.id;

owl1.trigger('stop.owl.autoplay');
owl1.trigger('to.owl.carousel',n1id);
owl1.trigger('play.owl.autoplay',[7000]);
});


/*Opciones de la galeria lightbox*/
$('.carousel-lightbox').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    touchDrag: false,
    mouseDrag:false,
    smartSpeed:2000,
    responsive:{
        0:{
            items:1
        }
    }
}
)

/*Variable de la galeria lightbox*/
var owls = $('.carousel-lightbox');
owls.owlCarousel();

//Funcion click para ir a la siguiente imagen
$('.SigBtn').click(function() {
    owls.trigger('next.owl.carousel');
})
// Funcion click para ir a la imagen anterior
$('.AntBtn').click(function() {
    owls.trigger('prev.owl.carousel');
})

//Funcion click para cerrar la galeria lightbox
$('.a-cerrar').click(function(){
    $('.lightbox').slideUp()
})
