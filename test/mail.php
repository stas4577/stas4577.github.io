<?php 
use PHPMailer\PHPMailer\PHPMailer;
require 'PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer();
$mail->From     = "zayavka@boyargo.ru";
$mail->FromName = "BoyargoWDP";
$mail->AddAddress("zayavka@boyargo.ru","John Doe");
$data = json_decode($_POST['data']);
$mail->WordWrap = 50;
$mail->IsHTML(true);
$mail->Subject  =  "Analiz water";
$mail->Body     =  "Tel: " . $_POST['phone'];

if (isset($_FILES['file']) &&
    $_FILES['file']['error'] == UPLOAD_ERR_OK) {
    $mail->AddAttachment($_FILES['file']['tmp_name'],
                         $_FILES['file']['name']);
} else {
	die();
}

$r = $mail->send();



?>