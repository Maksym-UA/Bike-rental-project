<?php
// NOTE: this page must be saved as a .php file.
// And your server must support PHP 5.3+ PHP Mail().
// Define variables and set to empty values
$result = $first-name = $last-name = $email = $phone = $message = $human = "";
$errFirstName = $errLastName = $errEmail = $errPhone = $errMessage = $errHuman = "";
    if (isset($_POST["submit"])) {
        $first-name = $_POST['first-name'];
		$last-name = $_POST['last-name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        $human = intval($_POST['human']);
         //valid address on your web server
        $from = 'info@pydega.tk';
        //your email address where you wish to receive mail
        $to = 'max.savin3@gmail.com'; 
        $subject = 'MESSAGE FROM MY WEB SITE';
        $headers = "From:$from\r\nReply-to:$email";
        $body = "From: $first-name $last-name\n E-Mail: $email\n Phone: $phone\n Message: $message";
// Check if first name is entered
if (empty($_POST["name"])) {
$errFirstName = "Please enter your First Name.";
} else {
    $first-name = test_input($_POST["first-name"]);
}
// Check if last name is entered
if (empty($_POST["last-name"])) {
$errLastName = "Please enter your First Name.";
} else {
    $last-name = test_input($_POST["last-name"]);
}
// Check if email is entered
if (empty($_POST["email"])) {
$errEmail = "Please enter your email address.";
} else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is valid format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $errEmail = "Invalid email format.";
    }
}
// Check if phone is entered although it is not required so we don't need error message
if (empty($_POST["phone"])) {
$phone = "";
} else {
    $phone = test_input($_POST["phone"]);
}
//Check if message is entered
if (empty($_POST["message"])) {
$errMessage = "Please enter your message.";
} else {
    $message = test_input($_POST["message"]);
}
//Check if simple anti-bot test is entered
if (empty($_POST["human"])) {
$errHuman = "Please enter the sum.";
} else {
     if ($human !== 8) {
     $errHuman = 'Wrong answer. Please try again.';
        }
}
// If there are no errors, send the email & output results to the form
if (!$errName && !$errEmail && !$errPhone &&  !$errMessage && !$errHuman) {
    if (mail ($to, $subject, $body, $from)) {
        $result='<div class="alert alert-success"><h3><span class="glyphicon glyphicon-ok"></span> Message sent!</h3><h4>Thank you for contacting us. We will get in touch with you soon.</h4></div>';
    } else {
        $result='<div class="alert alert-danger"><h3><span class="glyphicon glyphicon-warning-sign"></span> Sorry there was a form processing error.</h3> <h4>Please try again later.</h4></div>';
       }
    }
}
//sanitize data inputs   
function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   $data = (filter_var($data, FILTER_SANITIZE_STRING));
   return $data;
}
//end form processing script
?>
