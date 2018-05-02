$(document).ready(function() {

	/******* Version 1 *******/
	// Cache variables
	var v1Img = $('.wr1 .wr-gallery .wr-img');
	var v1Prod= $('.wr1 .wr-product');
	var v1Timer;
	var v1Delay = 400; // Set the product select delay in ms

	// Select the img from the gallery, get it's index and change product
	v1Img.mouseenter(function() {

		var self = $(this);
		v1Timer = setTimeout(function(){
		
			v1Img.find('div').removeClass('wr-show');
			v1Img.removeClass('wr-active');
			v1Prod.find('.wr-det').removeClass('wr-animate');
			self.addClass('wr-active');
			imgIndex = self.index();
			setTimeout(function(){
				v1Prod.find('.wr-det').addClass('wr-animate');
			}, 10);
			v1Prod.hide();
			v1Prod.eq( imgIndex ).css('display', 'inline-block');
		
		}, v1Delay);
	}).mouseleave(function() {
		clearTimeout(v1Timer);
		var self = $(this);
		self.find('div').addClass('wr-show');
	});

	// Click the first element by default
	v1Img.eq(0).trigger('mouseenter');
	
	// Direction-Aware Hover Effect
	v1Img.each( function() { $(this).hoverdir(); } );
	
	/******* Version 2 - Carousel *******/
	// Cache Variables
	var v2Carousel = $('.wr2 .wr-carousel');

	// Initialize carousel
	v2Carousel.owlCarousel({
		margin:10,
		loop:true,
		items:3,
		lazyLoad: true,
		nav:true,
		navText: ["<button class='wr-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></button>","<button class='wr-next'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"],
		responsive:{
			0:{
				items:1
			},
			870:{
				items:2
			},
			1330: {
				items:3
			}
		}
	});
	

	/******* Version 4 and 6 *******/
	// Cache Variables
	var v4Prod = $('.wr4 .wr-product');
	var v4Img = $('.wr4 .wr-product .wr-img');
	var v4Det = $('.wr4 .wr-product .wr-det');
	var v6Prod = $('.wr6 .wr-product');
	var v6Img = $('.wr6 .wr-product .wr-img');
	var v6Det = $('.wr6 .wr-product .wr-det');

	// Show the products details on the left side of the product image
	function showLeft(product, hoverZone, details) {

		// Click on the products image and change the product
		product.mouseenter(function() {
			hoverZone.removeClass('wr-active');
			details.removeClass('wr-animate');
			var self = $(this);
			self.find( hoverZone ).addClass('wr-active').show('1000');
			details.hide('1000');
			self.find( details ).css('display', 'inline-block');
			setTimeout(function(){
				self.find( details ).addClass('wr-animate');
			}, 10);
		});

		// Click the first element by default
		hoverZone.eq(0).trigger('mouseover');

	}

	// Call the showLeft function on Version 4
	showLeft(v4Prod, v4Img, v4Det);

	// Call the showLeft function on Version 6
	showLeft(v6Prod, v6Img, v6Det);

});