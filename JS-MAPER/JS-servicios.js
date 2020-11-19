/*carousel proyectos remodelacion*/
$('.carousel-servicios').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    touchDrag:false,
    mouseDrag:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1150:{
            items:3
        }
    }
})

/*botones proyectos remodelacion*/
var owlprr = $('.carousel-servicios');
owlprr.owlCarousel();
// Go to the next item
$('#next-servicio').click(function() {
    owlprr.trigger('next.owl.carousel');
})
// Go to the previous item
$('#prev-servicio').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owlprr.trigger('prev.owl.carousel');
})