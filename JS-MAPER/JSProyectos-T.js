$('.carousel-proyectos').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout: 6000,
    touchDrag: false,
    mouseDrag:false,
    smartSpeed:2000,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        },
        1100:{
            items:3
        }
    }
})

var owl1 = $('.carousel-proyectos');
owl1.owlCarousel();
// Go to the next item
$('.NBtn').click(function() {
    owl1.trigger('next.owl.carousel');
    owl1.trigger('stop.owl.autoplay')
    owl1.trigger('play.owl.autoplay',[6000])
})
// Go to the previous item
$('.PBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl1.trigger('prev.owl.carousel');
    owl1.trigger('stop.owl.autoplay')
    owl1.trigger('play.owl.autoplay',[6000])
})

owl1.on('click', '.item-carousel', function () {
    var nid=this.id;
    owls.trigger('to.owl.carousel',nid);
    $('.lightbox').slideDown()
});

$('.a-cerrar').click(function(){
    $('.lightbox').slideUp()
})

$('.carousel-lightbox').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    touchDrag: false,
    mouseDrag:false,
    smartSpeed:2000,
    autoHeight:true,
    items:1
})

var owls = $('.carousel-lightbox');
owls.owlCarousel();
// Go to the next item
$('.SigBtn').click(function() {
    owls.trigger('next.owl.carousel');
})
// Go to the previous item
$('.AntBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owls.trigger('prev.owl.carousel');
})
