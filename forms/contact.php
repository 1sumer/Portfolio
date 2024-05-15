<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Set up the recipient email address
  $to = 'sameerpasha658@gmail.com';

  // Set up the email headers
  $headers = "From: $name <$email>" . "\r\n";
  $headers .= "Reply-To: $email" . "\r\n";
  $headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n";

  // Send the email
  $success = mail($to, $subject, $message, $headers);

  // Check if the email was sent successfully
  if ($success) {
    echo "success";
  } else {
    echo "error";
  }
}
?>