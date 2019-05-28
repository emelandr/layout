function draw() {
	var canvas = document.getElementById('ellipse');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		var lingrad = ctx.createLinearGradient(-100, 635, 828, 0);

		lingrad.addColorStop(0, '#ff8f5a');
		lingrad.addColorStop(1, '#ff2f96');
		ctx.fillStyle = lingrad;

		ctx.beginPath();
		ctx.moveTo(35, 635);
		ctx.quadraticCurveTo(-5, 570, 36, 471);
		ctx.bezierCurveTo(132, 246, 504, -218, 828, 133);
		ctx.lineTo(828, 635);
		ctx.fill();

	}
}

$(function(){
	$('.menu__button').on('click', function(){
		$('.header__menu-list')
			.slideDown()
			.addClass('menu-active');
		$(this).hide();
		$('.menu__close').show();
	});
	$('.menu__close').on('click', function(){
		$('.header__menu-list').slideUp(function(){
			$(this).removeClass('menu-active');
		});
		$(this).hide();
		$('.menu__button').show();
	});

$(window).on('resize', function() {
        if($(window).width() > 1199) {
        	if($('.header__menu-list').css('display') !== 'flex')
            	$('.header__menu-list').css('display', 'flex');

            if($('.menu__button').css('display') !== 'none')
            	$('.menu__button').css('display', 'none');

            if($('.menu__close').css('display') !== 'none')
            	$('.menu__close').css('display', 'none');

    } else {
    	if($('.header__menu-list').css('display') !== 'none')
    		$('.header__menu-list').css('display', 'none');

    	if($('.menu__button').css('display') !== 'block') {
    		$('.menu__button').css('display', 'block');
    		$('.menu__close').css('display', 'none');
    	}
    }

});

    $('.examples__block').slick({
    	infinite: true,
    	slidesToShow: 3,
    	slidesToScroll: 1,
    	nextArrow: '.arrow-right',
	  	prevArrow: '.arrow-left',
	  	responsive: [
    	{
	    	breakpoint: 1200,
	    	settings: {
	    		dots: true,
	    		slidesToShow: 2,
	    		slidesToScroll: 1,
	    		arrows: false
	      	}
	  	},
	    {
	      	breakpoint: 768,
	      	settings: {
	      		dots: true,
	      		slidesToShow: 1,
	        	slidesToScroll: 1,
	        	arrows: false
	      	}

	    }]
    });
});