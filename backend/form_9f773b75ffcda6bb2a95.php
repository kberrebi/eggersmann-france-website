<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

$mail = new PHPMailer;

$postdata = file_get_contents("php://input");
$postdata = json_decode($postdata);
$status = $postdata->status;
$firstName = $postdata->firstName;
$lastName = $postdata->lastName;
$email = $postdata->email;
$country = $postdata->country;
$address = $postdata->address;
$city = $postdata->city;
$postCode = $postdata->postCode;
$phone = $postdata->phone;
$message = $postdata->message;
$showroomCatalog = $postdata->showroomCatalog;
$paymentOption = $postdata->paymentOption;

if ($firstName &&
		$lastName &&
		$email &&
		$country &&
		$address &&
		$city &&
		$postCode &&
		$phone) {

			echo $email;

			$myfile = fopen("newfile.txt", "w");
			fwrite($myfile, 'test'.strval($firstName));
			fclose($myfile);

			/* try {
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
				$mail->Password = 'vycce4-mocruZ-cyrkit';                           // SMTP password
				$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
				$mail->Port = 465;
				//Recipients
				$mail->setFrom('serveur@eggersmann.fr');
				$mail->addAddress('berrebi.kylian@gmail.com');     // Add a recipient

				//Content
				$mail->isHTML(true);                                  // Set email format to HTML
				$mail->Subject = 'Lookbook request';
				$mail->Body    = 'From PHP Backend !!'.
			'<p><b>Statut : </b>'.strval($status).'</p>'.
			'<p><b>Prenom : </b>'.strval($firstName).'</p>'.
			'<p><b>Nom : </b>'.strval($lastName).'</p>'.
			'<p><b>E-mail : </b>'.strval($email).'</p>'.
			'<p><b>Pays : </b>'.strval($country).'</p>'.
			'<p><b>Adresse : </b>'.strval($address).'</p>'.
			'<p><b>Ville : </b>'.strval($city).'</p>'.
			'<p><b>Code postal : </b>'.strval($postCode).'</p>'.
			'<p><b>Telephone : </b>'.strval($phone).'</p>'.
			'<p><b>Message : </b>'.strval($message).'</p>'.
			'<p><b>Souhaite recevoir le lookbook à domicile : </b>'.strval($paymentOption).'</p>'.
			'<p><b>Showroom pour reception du lookbook : </b>'.strval($showroomCatalog).'</p>';
				$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

				$mail->send();
				echo 'Message has been sent !!';
			} catch (Exception $e) {
					echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
			} */
}



?>
