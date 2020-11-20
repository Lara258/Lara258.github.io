/*carousel proyectos remodelacion*/
$('.carousel-ser').owlCarousel({
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
        1300:{
            items:3
        }
    }
});

/*botones proyectos remodelacion*/
var owlser = $('.carousel-ser');
owlser.owlCarousel();
// Go to the next item
$('#next-servicio').click(function() {
    owlser.trigger('next.owl.carousel');
})
// Go to the previous item
$('#prev-servicio').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owlser.trigger('prev.owl.carousel');
})
