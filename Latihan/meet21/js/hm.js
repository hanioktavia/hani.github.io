
$('.page-scroll').on('click', function(e){

	var hlink = $(this).attr('href');
	
	var content = $(hlink);

	// console.log($('body').scrollTop(hlink));
	// $('body').scrollTop('700');
	$('html, body').animate({
		scrollTop: content.offset().top - 50
	}, 1000, 'easeInOutExpo');
	
	e.preventDefault();
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	// console.log(wScroll);

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/5 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron hr').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});
});