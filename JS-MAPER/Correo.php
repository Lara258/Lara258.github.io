
<?php
 
if($_POST) {
    $nombre=$_POST['nombre'];
    $correo=$_POST['correo'];
    $destino='huichi_luis@hotmail.com';
    $telefono=$_POST['telefono'];
    $mensaje=$_POST['mensaje'];
    $cabecera="Quiero una cotizacion de mi proyecto";
    $contenidomensaje="Nombre: ". $nombre . "\nCorreo: " .$correo . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;

     
    if(isset($_POST['nombre'])) {
      $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['correo'])) {
        $correo = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['correo']);
        $correo = filter_var($correo, FILTER_VALIDATE_EMAIL);
    }  
     
    if(isset($_POST['mensaje'])) {
        $mensaje = htmlspecialchars($_POST['mensaje']);
    }
     
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $correo . "\r\n";
     
    if(mail($destino,$cabecera,$contenidomensaje, $headers)) {
        echo "<p>Gracias por mandarnos un mensaje: , $nombre. Nos pondremos en contacto con usted lo mas rapido posible.</p>";
    } else {
        echo '<p>Lo sentimos, pero su mensaje no pudo ser enviado, por favor intentelo de nuevo.</p>';
    }
     
} else {
    echo '<p>Algo ha salido mal, intente de nuevo mas tarde</p>';
}
 //You will get a reply within 24 hours
 //We are sorry but the email did not go through
?>