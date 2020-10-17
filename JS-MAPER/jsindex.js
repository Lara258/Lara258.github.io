window.onload=function(){
    $('#contenedor-precarga').animate({
        bottom:'100%' 
     })
}

$('.menu2').hover(function(){
    $('#as').css({color:'black'});
},function(){
    $('#as').css({color:'#999999'});})

$('#as').hover(function(){
    $(this).css({color:'black'});
},function(){
    $(this).css({color:'#999999'});
})


$(window).scroll(function(){
    var scrollT= $(this).scrollTop();
 var service= $('.separador-seccion-servicios').offset();
 var info= $('.separador-info-medio').offset();
 var galeria= $('.centrado-galeria').offset();

    if($(window).width() > 970){
 
 if((service.top - 550) < scrollT){
    $('.separador-seccion-servicios').animate({
        right:'0'
    },'slow')
 }/*if scroll service*/

 if((info.top - 550) < scrollT){
   $('.separador-info-medio').animate({
       left:'0'
   },'slow')
}/*if scroll info*/

if((galeria.top - 500) < scrollT){
    $('.centrado-galeria').animate({
        right:'0'
    }, 'slow')
 }/*if scroll galeria*/

    } /*if width */
    else if ($(window).width() < 970) {
        if((service.top - 600) < scrollT){
            $('.separador-seccion-servicios').animate({
                right:'0'
            },'slow')
         }/*if scroll service*/
        
         if((info.top - 600) < scrollT){
           $('.separador-info-medio').animate({
               left:'0'
           },'slow')
        }/*if scroll info*/
        
        if((galeria.top - 600) < scrollT){
            $('.centrado-galeria').animate({
                right:'0'
            }, 'slow')
         }/*if scroll galeria*/
        
    } /*else if width*/
}) /*funcion*/


$(window).scroll(function(){
    if($(this).scrollTop() > 500 ){
        $('.ir-arriba').slideDown(500);
    }else{
        $('.ir-arriba').slideUp(500); 
    }
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


