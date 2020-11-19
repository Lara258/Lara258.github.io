
/*aparecer elementos al hacer scroll*/
$(window).scroll(function(){
    var scrollT= $(this).scrollTop();
 var service= $('.separador-seccion-servicios').offset();
 var galeria= $('.centrado-galeria').offset();
/*scroll si la pantalla mide mas de 970 px*/
    if($(window).width() > 970){
 
 if((service.top - 550) < scrollT){
    $('.separador-seccion-servicios').animate({
        right:'0'
    },1300)
 }/*if scroll service*/

if((galeria.top - 550) < scrollT){
    $('.centrado-galeria').css({
       transform:'scale(1)',
       transition:'all linear 0.5s'
    })
 }/*if scroll galeria*/

    } /*if width */
    /*scroll si la pantalla mide menos de 970px*/
    else if ($(window).width() < 970) {
        if((service.top - 600) < scrollT){
            $('.separador-seccion-servicios').animate({
                right:'0'
            },1300)
         }/*if scroll service*/
        
        if((galeria.top - 600) < scrollT){
            $('.centrado-galeria').css({
                transform:'scale(1)',
                transition:'all linear 0.5s'
             })
         }/*if scroll galeria*/
        
    } /*else if width*/
}) /*funcion*/

/*carousel principal*/
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

/*botones carousel principal*/
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

/*carousel proyectos todos*/
$('.carousel1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
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
/*botones carousel todos*/
var owlprt = $('.carousel1');
owlprt.owlCarousel();
// Go to the next item
$('#next-prt').click(function() {
    owlprt.trigger('next.owl.carousel');
})
// Go to the previous item
$('#prev-prt').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owlprt.trigger('prev.owl.carousel');
})

/*carousel proyectos construccion*/
$('.carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
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

/*botones proyectos construccion*/
var owlprC = $('.carousel2');
owlprC.owlCarousel();
// Go to the next item
$('#next-prc').click(function() {
    owlprC.trigger('next.owl.carousel');
})
// Go to the previous item
$('#prev-prc').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owlprC.trigger('prev.owl.carousel');
})

/*carousel proyectos remodelacion*/
$('.carousel3').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
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

/*botones proyectos remodelacion*/
var owlprr = $('.carousel3');
owlprr.owlCarousel();
// Go to the next item
$('#next-prr').click(function() {
    owlprr.trigger('next.owl.carousel');
})
// Go to the previous item
$('#prev-prr').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owlprr.trigger('prev.owl.carousel');
})

/*carousel proyectos instalcion*/
$('.carousel4').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
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

/*botones proyectos instalacion*/
var owlpri = $('.carousel4');
owlpri.owlCarousel();
// Go to the next item
$('#next-pri').click(function() {
    owlpri.trigger('next.owl.carousel');
})
// Go to the previous item
$('#prev-pri').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owlpri.trigger('prev.owl.carousel');
})


