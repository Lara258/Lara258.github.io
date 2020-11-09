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

var owl1 = $('.carousel-proyectos');
owl1.owlCarousel();

owl1.on('click', '.item-carousel', function() {
    var nid=this.id;
    owls.trigger('to.owl.carousel',nid);
    $('.lightbox').slideDown()
});


$('.carousel-proyectos-eleccion').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    touchDrag: true,
    mouseDrag:true,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed:500,
    items:8
});

var owlthumb = $('.carousel-proyectos-eleccion');
owlthumb.owlCarousel();

$('.item-carousel-eleccion').hover(function() {
    owlthumb.trigger('stop.owl.autoplay');
    owl1.trigger('stop.owl.autoplay');
},function(){
    owlthumb.trigger('play.owl.autoplay',[5000]);
    owl1.trigger('play.owl.autoplay',[5000]);
});

owl1.on('translated.owl.carousel', function (e) {
    if (e.item) {
    var index = e.item.index - 1;
    var count = e.item.count;
    if (index > count) {
        index -= count;
    }
    if (index <= 0) {
        index += count;
    }
    return index;
            }
  
owlthumb.trigger('to.owl.carousel',index);  
    });
        
    

owlthumb.on('click', '.item-carousel-eleccion', function() {
var n1id=this.id;
owl1.trigger('to.owl.carousel',n1id);
owl1.trigger('stop.owl.autoplay');
owlthumb.trigger('stop.owl.autoplay');
owl1.trigger('play.owl.autoplay',[10000]);
owlthumb.trigger('play.owl.autoplay',[10000]);
});


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

$('.a-cerrar').click(function(){
    $('.lightbox').slideUp()
})
