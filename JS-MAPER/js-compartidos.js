/*Pantalla de precarga*/
window.onload=function(){
    $('#contenedor-precarga').animate({
        bottom:'100%' 
     })
}

/*hover en opcion servicios*/
$('.menu2').hover(function(){
    $('#as').css({color:'black'});
},function(){
    $('#as').css({color:'#999999'});})

$('#as').hover(function(){
    $(this).css({color:'black'});
},function(){
    $(this).css({color:'#999999'});
})

/*aparecer boton "ir arriba" al hacer scroll*/
$(window).scroll(function(){
    if($(this).scrollTop() > 500 ){
        $('.ir-arriba').slideDown(500);
    }else{
        $('.ir-arriba').slideUp(500); 
    }
})



/* activar/desactivar acordeon*/
$('.btn-acordeon').click(function(){
   if ($(this).next('.info-acordeon').hasClass('activo')){
    $(this).next('.info-acordeon').removeClass('activo').slideUp('slow')
    $(this).find('span').removeClass('icon-minus').addClass('icon-plus')
    
    $(this).css({
        'border-left': '4px solid #999999',
        'background':'white'
           })
    $(this).find('span').css({
        'color':'#999999'
    })
   }
   else{
       /*quitar las clases 'activo' y del tipo de icono, esconder el 'info-acordeon' que no este activo*/
       $('.info-acordeon').removeClass('activo').slideUp('slow')
       $('.btn-acordeon').find('span').removeClass('icon-minus').addClass('icon-plus') 
    $('.btn-acordeon').css({
        'border-left': '4px solid #999999',
        'background':'white'
           })
    $('.btn-acordeon').find('span').css({
        'color':'#999999'
    })

    /*agregar la clase 'activo' y cambiar el tipo de icono, mostrar el 'info acordeon' que este activo*/
       $(this).next('.info-acordeon').addClass('activo').slideDown('slow')
       $(this).find('span').removeClass('icon-plus').addClass('icon-minus')

       $(this).css({
    'border-left': '4px solid #fec701',    
    'background': '#f2f2f2',
    'transition': 'all 0.7s' 
       })
       $(this).find('span').css({
        'color':'#fec701'
    })
   }
})