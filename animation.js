$(document).ready(function(){
	$('#selectAll').addClass('active');
	var amountScrolled = 380;

	$(window).scroll(function() {
		if ( $(window).scrollTop() > amountScrolled ) {
			$('a.goUpButton').fadeIn('slow');
		} else {
			$('a.goUpButton').fadeOut('slow');
		}
	});
	
	
	$('a.goUpButton').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
	});
	
	$('.thumbnail,.animation-item').each(function(){
		var width = $(window).width();//current
		var imgHeight = $(this).height();//current
		var imgWidth=$(this).width();//current
		var maxHeight=225;
		var ratio = 0;
		console.log(width);
		
		if(width >= 200){
			$(this).attr('height', imgWidth/1.68);
		}
		
	});
	
	$('#selectAll').click(function(){
		$('.row.picture, .row.animation, .row.logo, .rowName').fadeIn();
		$('#animSel,#graphicSel, #logoSel').removeClass('active');
		$(this).addClass('active');
		
	});
	
	
	$('#graphicSel').click(function(){
		$('.row.animation, .row.logo, .rowName').hide();
		$('#selectAll, #animSel, #logoSel').removeClass('active');
		$(this).addClass('active');
		$('.row.picture').each(function(){
			$(this).fadeIn();
		});
	});
	
	
	
	$('#animSel').click(function(){
		$('.row.picture, .row.logo, .rowName').hide();
		$('#selectAll, #graphicSel, #logoSel').removeClass('active');
		$(this).addClass('active');
		$(".row.animation").each(function(){
			 $(this).fadeIn();
		});
	});
	
	$('#logoSel').click(function(){
		$('.row.picture, .row.animation, .rowName').hide();
		$('#selectAll, #graphicSel, #animSel').removeClass('active');
		$(this).addClass('active');
		$('.row.logo').each(function(){
			$(this).fadeIn()
			});	
	});
});