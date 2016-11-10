$(document).ready(function(){
	
	
	$('#selectAll').addClass('active');
	var amountScrolled = 380;
	
	
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
	
	
	
	$(".GaugeMeter").each(function(){
		var width = $(window).width();//current
		console.log(width);
		var x = document.getElementsByClassName(".animCircles");
		console.log(x);
		
		if(width <768){
			$(".GaugeMeter").attr("data-size", 80);
			$(".GaugeMeter").attr("data-width", 8);
			$(".GaugeMeter").toggleClass('changed');			
		}
	});
	
	var height = $(window).height();//current
	
		
	
	$(window).on("scroll",function() {
		if ( $(window).scrollTop() >height/2 ) {
			
			$(".GaugeMeter").gaugeMeter();
			$(window).off("scroll");
		}
	});		
});
