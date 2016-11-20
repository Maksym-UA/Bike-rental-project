$(document).ready(function(){
		
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
	
});
