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
	
	
	var width = $(window).width();//current
	
	$(".GaugeMeter").each(function(){
		
		console.log(width);
		var x = document.getElementsByClassName(".animCircles");
		console.log(x);
		
		if(width <480){
			$(".GaugeMeter").attr("data-size", 100);
			$(".GaugeMeter").attr("data-width", 10);
			$(".GaugeMeter").toggleClass('changed');
					
		}
		
		if(width <768 && width > 480){
			$(".GaugeMeter").attr("data-size", 130);
			$(".GaugeMeter").attr("data-width", 10);
			$(".GaugeMeter").toggleClass('changed');
					
		}
	});
	
	var height = $(window).height();//current
	
	
	
	$(window).on("scroll",function() {
		if ( $(window).scrollTop() >150 ) {
			
			$(".GaugeMeter").gaugeMeter();
			$(window).off("scroll");
		}
	});		
	
	
});
