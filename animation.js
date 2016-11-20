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
	
	
	$(".col-sm-6.bikePic").each(function(){
		if(width <1100 && width > 768){
			var column = width*0.33;
			var newPaddingTop = column/5;
			$(this).css('padding-top', newPaddingTop+'px');
			
			console.log($(this).css('padding-top'));
		}
	});
});
