$(document).ready(function(){
	
	
//-----------------------------responsive navigation menu toggle------------
				
	$('.toggle').click( function(){
					
		$('#myTopnav').removeClass('topnav');
		$('#myTopnav').addClass('sidenav');
						
		$('.closebtn').css("display", "block");
		$('#myTopnav a.active').css("border-bottom", "4px solid rgba(255, 0, 0, 0)");
		$('#myTopnav').animate({left: '0px'}, "fast");
					
			return false;
		});
					
	$('.closebtn').click( function(){
							
	$('#myTopnav').animate({left: -250}, 200, function(){
		$('#myTopnav').addClass('topnav'); 
			$('.closebtn').css("display", "none");
				$('#myTopnav a.active').css("border-bottom", "4px solid rgba(255, 0, 0, 1)");
					}
			);
		return false;
	});		
/*----------------------------------------------------------------------------*/		
	
	

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
		$('.row.sport, .row.tourist, .row.cruiser').fadeIn();
		$('#sportSel,#tourSel, #cruiserSel').removeClass('active');
		$(this).addClass('active');
	});
	
	
	$('#sportSel').click(function(){
		$('.row.tourist, .row.cruiser').hide();
		$('#selectAll, #tourSel, #cruiserSel').removeClass('active');
		$(this).addClass('active');
		;
		
		$('.row.sport').each(function(){
			$(this).fadeIn();
		});
	});
	
	
	
	$('#tourSel').click(function(){
		
		$('.row.sport, .row.cruiser').hide();
		$('#selectAll, #sportSel, #cruiserSel').removeClass('active');
		$(this).addClass('active');
		$(".row.tourist").each(function(){
			 $(this).fadeIn();
		});
		
		
	});
	
	$('#cruiserSel').click(function(){
		$('.row.sport, .row.tourist').hide();
		$('#selectAll, #sportSel, #tourSel').removeClass('active');
		$(this).addClass('active');
		$(".row.cruiser").each(function(){
			 $(this).fadeIn();
		});
		
	});
	
	var width = $(window).width();//current
	
	/*----------------------------------------------------------------------------*/
	
	
	//change padding for bike picture to align it in vertical scale
	$(".col-sm-6.bikePic").each(function(){
		if(width <1100 && width > 768){
			var column = width*0.33;
			var newPaddingTop = column/5;
			$(this).css('padding-top', newPaddingTop+5+'px');
			$(this).css('padding-bottom', newPaddingTop+'px');
			
			console.log($(this).css('padding-top'));
		}
		
		if(width <1300 && width > 1100){
			var column = width*0.33;
			var newPaddingTop = column/10;
			$(this).css('padding-top', newPaddingTop+5+'px');
			$(this).css('padding-bottom', newPaddingTop+'px');
			
			console.log($(this).css('padding-top'));
		}
	});
	
	/*----------------------------------------------------------------------------*/

	//get Bike ID after button clicked (JavaScript)
	
	var bikeID = document.body.getElementsByTagName("button");
	var selectedBike;
	
		function value() {
		selectedBike = this.value;
		//alert(selectedBike);
		
		//тут сохраняется выбранный мотык
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
		
		//тут передается id выбранного мотыка полю в списке и добавляется аттрибут "selected"
		if(selectionOfBike[i].value === selectedID){
			selectionOfBike[i].setAttribute("selected", "True");
		}
	}
	
	
	
/*--------------------toggle side menu----------------------------------*/	
	
		
				$(document).ready(function(){
				
					$('.toggle').click( function(){
					
						$('#myTopnav').removeClass('topnav');
						$('#myTopnav').addClass('sidenav');
						
						$('.closebtn').css("display", "block");
						$('#myTopnav a.active').css("border-bottom", "4px solid rgba(255, 0, 0, 0)");
						$('#myTopnav').animate({left: '0px'}, "fast");
					
						return false;
					});
					
					$('.closebtn').click( function(){
							
							$('#myTopnav').animate({left: -250}, 200, function(){
									$('#myTopnav').addClass('topnav'); 
									$('.closebtn').css("display", "none");
									$('#myTopnav a.active').css("border-bottom", "4px solid rgba(255, 0, 0, 1)");
								}
							);
							
							return false;
					});
				});
		



		
/*-----------------------Modal popup for reservation page---------------------------------------------*/		
		
			// Get the modal
			var modal = document.getElementById('myModal');

			// Get the button that opens the modal
			var btn = document.getElementById("contract");

			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 
			btn.onclick = function() {
				modal.style.display = "block";
			}

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
				modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
			
	
	/*----------------------------------------------------------------------------*/
	

	
});
