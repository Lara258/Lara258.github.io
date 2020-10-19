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
    if($(this).scrollTop() > 500 ){
        $('.ir-arriba').slideDown(500);
    }else{
        $('.ir-arriba').slideUp(500); 
    }
})