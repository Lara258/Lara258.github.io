<?php
    $destino='huichi_luis@hotmail.com';
    $nombre=$_POST['nombre'];
    $correo=$_POST['correo'];
    $telefono=$_POST['telefono'];
    $mensaje=$_POST['mensaje'];

    $cabecera="Quiero una cotizacion de mi proyecto";
    $contenidomensaje="Nombre: ". $nombre . "\nCorreo: " .$correo . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;
    mail($destino,$cabecera,$contenidomensaje);
    echo "<script> alert('mensaje enviado con exito')";
?>
