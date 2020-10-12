

$('.menu2').hover(function(){
    $('#as').css({color:'black'});
},function(){
    $('#as').css({color:'#999999'});})

$('#as').hover(function(){
    $(this).css({color:'black'});
},function(){
    $(this).css({color:'#999999'});
})

$('.carousels').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout: 6000,
    touchDrag: false,
    mouseDrag:false,
    smartSpeed:2000,
    items:1
})

var owli = $('.carousels');
owli.owlCarousel();
// Go to the next item
$('.NextBtn').click(function() {
    owli.trigger('next.owl.carousel');
    owli.trigger('stop.owl.autoplay')
    owli.trigger('play.owl.autoplay',[6000])
})
// Go to the previous item
$('.PrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owli.trigger('prev.owl.carousel');
    owli.trigger('stop.owl.autoplay')
    owli.trigger('play.owl.autoplay',[6000])
})

$('.carousel1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    touchDrag:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2
        },
        850:{
            items:3
        },
        1000:{
            items:4
        },
        1100:{
            items:5
        }
    }
})

$('.carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    touchDrag:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        850:{
            items:3
        },
        1000:{
            items:4
        },
        1100:{
            items:5
        }
    }
})
$('.carousel3').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    touchDrag:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        850:{
            items:3
        },
        1000:{
            items:4
        },
        1100:{
            items:5
        }
    }
})
$('.carousel4').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    touchDrag:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        850:{
            items:3
        },
        1000:{
            items:4
        },
        1100:{
            items:5
        }
    }
})


