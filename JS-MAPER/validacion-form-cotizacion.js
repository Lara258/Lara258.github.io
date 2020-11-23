function validar() {
    var Nombre= $('#name').val();
    var Correo = $('#mail').val();
    var telefono= $('#cellphone').val();
    var mensaje= $('#msg').val();
    var expresion=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(Nombre ===""|| Correo===""|| telefono==="" || mensaje===""){
        alert("Favor de llenar todos los campos");
        return false;
    }
    else if(isNaN(telefono)){
        alert("El numero de telefono no es un numero, favor de revisarlo");
        return false;
    }
    else if(telefono.length>10 || telefono.length<10){
        alert("El numero de telefono no es valido, favor de revisarlo");
        return false;
    }  
    else if(!expresion.test(Correo)){
        alert("El correo electronico no es valido, favor de revisarlo");
        return false;
    }
}
