/*carousel proyectos remodelacion*/
$('.carousel-ser').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    touchDrag:false,
    mouseDrag:false,
    autoplay:true,
    autoplayHoverPause:true,
    smartSpeed:500,
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
    owlser.trigger('stop.owl.autoplay')
    owlser.trigger('play.owl.autoplay',[6000])
})
// Go to the previous item
$('#prev-servicio').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owlser.trigger('prev.owl.carousel');
    owlser.trigger('stop.owl.autoplay')
    owlser.trigger('play.owl.autoplay',[6000])
})
