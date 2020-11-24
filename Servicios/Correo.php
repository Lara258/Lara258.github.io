<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/phpmailer/Exception.php';
require '/phpmailer/PHPMailer.php';
require '/phpmailer/SMTP.php';

$mail = new PHPMailer(true);
 
try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'Prueba.correo.ma@gmail.com';                     // SMTP username
    $mail->Password   = 'mguHX96qqztGGXD';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('Prueba.correo.ma@gmail.com', 'Informacion MAPER');
    $mail->addAddress('huichi_luis@hotmail.com', );     // Add a recipient

    // Attachments
   // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Prueba correo';
    $mail->Body    = 'Este es un correo de prueba';

    $mail->send();
    echo 'El mensaje se ha enviado correctamente';
} catch (Exception $e) {
    echo "Hubo un error al enviar el mensaje, intentelo de nuevo mas tarde. Error del mensaje: {$mail->ErrorInfo}";
}

?>

 //You will get a reply within 24 hours
 //We are sorry but the email did not go through
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