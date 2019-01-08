<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

$mail = new PHPMailer;

$postdata = file_get_contents("php://input");
$postdata = json_decode($postdata);

echo $postdata;

try {
	$mail->isSMTP();
	$mail->SMTPOptions = array(
	  'ssl' => array(
	         'verify_peer' => false,
	         'verify_peer_name' => false,
	         'allow_self_signed' => true
	     )
	  );
	//Server settings
	$mail->SMTPDebug = 3;
	$mail->Host = gethostbyname("ssl0.ovh.net");                               // Enable verbose debug output
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'serveur@eggersmann.fr';                 // SMTP username
	$mail->Password = '26-09-1995';                           // SMTP password
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465;
  //Recipients
  $mail->setFrom('serveur@eggersmann.fr', 'eggersmann');
  $mail->addAddress('berrebi.kylian@gmail.com');     // Add a recipient

  //Content
  $mail->isHTML(true);                                  // Set email format to HTML
  $mail->Subject = 'Test email in PHP';
  $mail->Body    = 'This is the HTML message body sent from a PHP script - TEST6';
  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

  $mail->send();
  echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
?>
