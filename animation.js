$(document).ready(function(){
	

//"page go up" function	
	var amountScrolled = 320;
	window.onscroll = function() {myFunction()};
	
	function myFunction() {
		if ( $(window).scrollTop() > amountScrolled ) {
			$('a.goUpButton').fadeIn('slow');
		} else {
			$('a.goUpButton').fadeOut('slow');
		}
	}

	$('a.goUpButton').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 700);
		return false;
	});
	
/*----------------------------------------------------------------------------*/	

	var width = $(window).width();//current
	
	
	//selectors accroding to bike class(tour, sport, cruiser)
	$('#selectAll').addClass('active');
	
	$('#selectAll').click(function(){
		$('#sport, #tourist, #cruiser').fadeIn();
		$('#sportSel,#tourSel, #cruiserSel').removeClass('active');
		$(this).addClass('active');
	});
	
	
	$('#sportSel').click(function(){
		$('#tourist, #cruiser').hide();
		$('#selectAll, #tourSel, #cruiserSel').removeClass('active');
		$(this).addClass('active');
		$('#sport').fadeIn();
	});
	
	
	
	$('#tourSel').click(function(){
		$('#sport, #cruiser').hide();
		$('#selectAll, #sportSel, #cruiserSel').removeClass('active');
		$(this).addClass('active');
		$("#tourist").fadeIn();
		
	});
	
	$('#cruiserSel').click(function(){
		$('#sport, #tourist').hide();
		$('#selectAll, #sportSel, #tourSel').removeClass('active');
		$(this).addClass('active');
		$("#cruiser").fadeIn();
		
	});
	
	var width = $(window).width();//current
	
	/*----------------------------------------------------------------------------*/
	
	
	//change padding for bike picture to align it in vertical scale
	$(".col-sm-6.bikePic").each(function(){
		if(width <1100 && width > 768){
			var column = width*0.33;
			var newPaddingTop = column/5;
			$(this).css('padding-top', newPaddingTop+'px');
			
			console.log($(this).css('padding-top'));
		}
	});
	
	/*----------------------------------------------------------------------------*/

	//get Bike ID after button clicked (JavaScript)
	
	var bikeID = document.body.getElementsByTagName("button");
	var selectedBike;
	
		function value() {
		selectedBike = this.value;
		alert(selectedBike);
		localStorage.setItem("storageName",selectedBike);
		//alert(typeof parseInt(selectedBike));
	}	

	function getID (bikes) {
		for(var i =0; i< bikes.length; i++){
			bikes[i].onclick = value; 
		}
	}	
		
	getID(bikeID);
	
		
		//---------------------------------------------------------------
	/*<!--get Bike ID after button clicked (jQuery)-->
		<!--<script type="text/javascript">
		$(document).ready(function() {
			$('.ourOfferBtn').click(function() {
				console.log("Bike ID: ", $(this).attr("value"));
			});
		});
	*/
	/*----------------------------------------------------------------------------*/
	
	//pass selected bike id to bike list on reservation page
	
	
	var selectionOfBike = document.body.getElementsByTagName("option");
	//console.log(selectionOfBike.length);
	
	for(var i =0; i<selectionOfBike.length; i++){
		var selectedID = localStorage.getItem("storageName");
		
		if(selectionOfBike[i].value === selectedID){
			selectionOfBike[i].setAttribute("selected", "True");
		}
	}
});
