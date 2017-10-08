<?php
// NOTE: this page must be saved as a .php file.
// And your server must support PHP 5.3+ PHP Mail().
// Define variables and set to empty values
$result = $firstName = $lastName = $email = $phone = $message = $human = "";
$errFirstName = $errLastName = $errEmail = $errPhone = $errMessage = $errHuman = "";
    if (isset($_POST["submit"])) {
        $firstName = $_POST['firstName'];
		$lastName = $_POST['lastName'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        $human = intval($_POST['human']);
         //valid address on your web server
        $from = 'info@pydega.tk';
        //your email address where you wish to receive mail
        $to = 'max.savin3@gmail.com, ganajuriy@gmail.com, vladbidyuk@gmail.com'; 
        $subject = 'MESSAGE FROM MY V Bikes';
        $headers = "From:$from\r\nReply-to:$email";
        $body = "From: $firstName $lastName\n E-Mail: $email\n Phone: $phone\n Message: $message";
// Check if first name is entered
if (empty($_POST["firstName"])) {
$errFirstName = "Please enter your First Name.";
} else {
    $firstName = test_input($_POST["firstName"]);
}
// Check if last name is entered
if (empty($_POST["lastName"])) {
$errLastName = "Please enter your First Name.";
} else {
    $lastNname = test_input($_POST["lastName"]);
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
if (!$errFirstName && !$errLastName && !$errEmail && !$errPhone &&  !$errMessage && !$errHuman) {
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




<!DOCTYPE html>
<html lang="en">
	<head>
		<title>MY V Bike rental</title>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta name="Bike rental" content="Presentation website">
			<!-- css -->
			<link rel="stylesheet" type="text/css" href="contact.css">
			<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
				
			<!--<iframe src="http://free.timeanddate.com/clock/i5fpvar2/n1446/tct/pct/ftb/tt0/tw0/tm1/ts1/tb4" frameborder="0" width="90" height="34" allowTransparency="true"></iframe>-->
			<link href="http://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">	
			
		
		
			<!--[if lt IE 9]>
			<script type="text/javascript">alert("Your browser does not support the canvas tag.");</script>
			<![endif]-->
			<script src="processing.js" type="text/javascript"></script>
			<script type="text/javascript">
			// convenience function to get the id attribute of generated sketch html element
			function getProcessingSketchId () { return 'sketch_grid'; }
			</script>
	</head>



	<body>
		<header>
		
			<div id="content">
					<canvas id="sketch_grid" data-processing-sources="Sketch_for_Site.pde"></canvas>
			</div>
		
			<ul class="logoName" id="Name">
				<img src="imForSite/logo2.png" alt="MY V Bike Rental logo">
			</ul>
			
			<a name="top"></a> 
				
				<ul class="topnav" id="myTopnav">
					<li><a href="" class="closebtn" >&times;</a></li>
					<li><a href="index.html" id="home"><strong>Home</strong></a></li>
					<li><a href="price.html" id="price"><strong>Prices</strong></a></li>
					<li><a href="reservation.php" id="reservation"><strong>Rent</strong></a></li>
					<li><a class="active" href="contact.php" id="contacts"><strong>Contact</strong></a></li>
				</ul>
				
				<a href="" class="toggle" >
					<img src="imForSite/glyphicons-114-justify.png" alt="glyphicon menu">
				</a>
				
				
		</header>

		
		<section class="main">
		

			
			<div class="container-fluid text-center">
				<div class="col-sm-2 left">
					<a href="#top" class="goUpButton">	
						<p><span class="glyphicon glyphicon-menu-up"></span> </p>
						<p><span class="glyphicon glyphicon-menu-up"></span> </p>
					</a>	
					
					<div id="socialRowSide">
						<ul id="socialMediaSide">
							<li id="facebookSide">
								<a href="url">
									<img src="imForSite/facebook.png" alt="facebook logo">
								</a>
							</li>
							<li id="googleSide"><a href="url">
										<img src="imForSite/google-logo.png" alt="google logo">
									</a>
								</li>
							<li id="linkedinSide"><a href="url">
										<img src="imForSite/linkedin-logo.png" alt="linkedin logo">
									</a>
							</li>
							<li id="skypeSide"><a href="url">
										<img src="imForSite/skype-logo.png" alt="skype logo">
									</a>
							</li>
							<li id="whatsappSide"><a href="url">
										<img src="imForSite/whatsapp-logo.png" alt="whatsapp logo">
									</a>
							</li>
							<li id ="twitterSide"><a href="url">
										<img src="imForSite/twitter-logo.png" alt="twitter logo">
									</a>
							</li>
						</ul>
					</div>	
					
				</div>
				
				
				<div class="col-sm-8">
					<div id="map">Our coordinates</div>
					
					<h3>Get in touch with us</h3>
					<!--<p class="required small">* = Required fields</p>-->
					<form class="form-horizontal" role="form" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
						<!--when submit button is clicked, show results here-->
						<div class="form-group">
							<div class="col-sm-12 col-sm-offset-2">
							<?php echo $result;?>
							</div>
						</div> 

						<div class="col-sm-12" id="columns">
							<div class="col-sm-6 form-group">
								<label for="firstName" class="col-sm-6 control-label"><span class="required">*</span> First Name:</label>
								<div class="col-sm-12">
									<input type="text" class="form-control" id="firstName" name="firstName" placeholder="First Name" value="<?php echo $firstName;?>">
									<span class="required small"><?php echo $errFirstName;?></span> 
								</div>
							</div>
						
							<div class="col-sm-6 form-group">
								<label for="lastName" class="col-sm-6 control-label"><span class="required">*</span> Last Name:</label>
								<div class="col-sm-12">
									<input type="text" class="form-control" id="lastName" name="lastName" placeholder="Last Name" value="<?php echo $lastName;?>">
									<span class="required small"><?php echo $errLastName;?></span> 
								</div>
							</div>
						</div>
						
						
						<div class="col-sm-12" id="columns">
							<div class="col-sm-6 form-group">
								<label for="email" class="col-sm-6 control-label"><span class="required">*</span> Email:</label>
								<div class="col-sm-12">
									<input type="email" class="form-control" id="email" name="email" placeholder="your@domain.com" value="<?php echo $email;?>">
									<span class="required small"><?php echo $errEmail;?></span>
								</div>
							</div>

							<div class="col-sm-6 form-group">
								<label for="phone" class="col-sm-6 control-label"> Phone:</label>
								<div class="col-sm-12">
									<input type="tel" class="form-control" id="phone" name="phone" placeholder="(123) 456-7890" value="<?php echo $phone;?>">
									<span class="required small"><?php echo $errPhone;?></span>
								</div>
							</div>
						</div>	
							
						<div class="form-group">
							<label for="message" class="col-sm-12 control-label" id="messageLabel"><span class="required">*</span> Message:</label>
							<div class="col-sm-12" id="messageZone">
								<textarea class="form-control" row="4" name="message" placeholder="How can we help you?"><?php echo $message;?></textarea>
								<span class="required small"><?php echo $errMessage;?></span>
							</div>
						</div>

						<div class="form-group">
							<label for="human" class="control-label" id="test"><span class="required">*</span> Human Test:</label>
							<div id="math">
								<h5 class="human">(2 + 2) by 2 = ?</h5>
								<input type="text" class="form-control" id="human" name="human" placeholder="Your answer" value="<?php echo $human;?>">
								<span class="required small"><?php echo $errHuman;?></span>
							</div>
						</div>

						<div class="form-group">
							<div id="sendButton">
								<button type="submit" id="submit" name="submit">Send</button>
							</div>
						</div>
					</form>
				</div>
				<div class="col-sm-2">
				</div>
			</div>
		</section>	
		
		
		<footer class="container-fluid" id="foot">
			
			<div class="col-sm-2">
			</div>
			<div class="col-sm-8 about" >
				<div class="col-sm-4" id ="siteMap">
					<h4><strong>Site map</strong></h4>
					<h5><a href="index.html">Home</a></h5>
					<h5><a href="price.html">Price list</a></h5>
					<h5><a href="reservation.php">Book a bike</a></h5>
					<h5><a href="contact.html">Contact</a></h5>
				</div>
				<div class="col-sm-4 " id ="brands">
					<h4><strong>Partners</strong></h4>
					<h5><a id="Honda" href="http://powersports.honda.com/" target="_blank">Honda</a></h5>
					<h5><a id="Kawasaki" href="https://www.kawasaki.com/" target="_blank">Kawasaki</a></h5>
					<h5><a id="Suzuki" href="http://www.suzuki-moto.com/" target="_blank">Suzuki</a></h5>
					<h5><a id="Yamaha" href="https://www.yamahamotorsports.com/motorcycle" target="_blank">Yamaha</a></h5>
				</div>
				
				<div class="col-sm-4" id="contactInfo">
					<h4><strong>MY V Bike Rental</strong></h4>
					<h5><strong>Address:</strong> 20-250, I.Daszynskiego, 3a,</h5>
					<h5>Lublin, Poland</h5>
					<h5><strong>Business Hours:</strong> 10am-7pm Mon-Sat</h5>
					<h5>12pm-6pm Sun </h5>
					<h5><strong>E-mail:</strong> myvbikes@gmail.com</h5>
					<h5><strong>Tel:</strong> +12345678</h5>
									
				</div>
			</div>
			<div class="col-sm-2">
			</div>
			
			<div id="socialRow">
				<ul id="socialMedia">
					<li id="facebook">
						<a href="url">
							<img src="imForSite/facebook.png" alt="facebook logo">
						</a>
					</li>
						<li id="google"><a href="url">
								<img src="imForSite/google-logo.png" alt="google logo">
							</a>
						</li>
					<li id="linkedin"><a href="url">
								<img src="imForSite/linkedin-logo.png" alt="linkedin logo">
							</a>
					</li>
					<li id="skype"><a href="url">
								<img src="imForSite/skype-logo.png" alt="skype logo">
							</a>
					</li>
					<li id="whatsapp"><a href="url">
								<img src="imForSite/whatsapp-logo.png" alt="whatsapp logo">
							</a>
					</li>
					<li id ="twitter"><a href="url">
								<img src="imForSite/twitter-logo.png" alt="twitter logo">
							</a>
					</li>
						
				</ul>
			</div>	
			<div id ="rights">
				<h5>MY V Bike Rental &copy; 2016</h5>
			</div>
		</footer>
			
						
			<!--google maps script-->
			<script>
				function myMap() {
					var myCenter = new google.maps.LatLng(51.261714, 22.597164);
					  var mapCanvas = document.getElementById("map");
					  var mapOptions = {center: myCenter, zoom: 17};
					  var map = new google.maps.Map(mapCanvas, mapOptions);
					  var marker = new google.maps.Marker({position:myCenter});
					  marker.setMap(map);
					  
					  marker.addListener('click', function() {
						  infowindow.open(map, marker);
						});

					  var infowindow = new google.maps.InfoWindow({
						content: '<div id="iw-container">' + '<h5><strong>MY V Bike Rental</strong></h5>' + '<p><strong>Address:</strong> 20-250, I.Daszynskiego, 3a</p>' +
						'<p>Lublin, Poland</p>' + '<p><strong>Business Hours:</strong> 10am-7pm Mon-Sat </p>' + '<p> 12pm-6pm Sun </p>' +
						'<p><strong>E-mail:</strong> myvbikes@gmail.com</p>' +	'<p><strong>Tel:</strong> +12345678</p>' +	'</div>'					
					  });
				}
			</script>
			
		<script type='text/javascript' src='animation.js'></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<script src="https://maps.googleapis.com/maps/api/js?callback=myMap"></script>
		<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script> 
	</body>
</html>