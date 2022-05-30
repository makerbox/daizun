$(document).ready(function(){

	// do for each slider
	$(document).find('.b-slider').each(function(){
		let thisSlider = $(this);
		let mySlides = thisSlider.find('.b-slide');
		let mySlidesCount = mySlides.length;
		
		// fill the dots
		let myDots = thisSlider.find('[data-slider-dots]');
		let dotCode = "<div class='b-slider__dot'></div>".repeat(mySlidesCount);
		myDots.html(dotCode);
		// reveal the first slide
		$(mySlides[0]).addClass('is-current');

		//give each slide an index and get the tallest one
		let tallest = 0;
		mySlides.each(function(index){
			let self = $(this);
			self.attr('data-index', index);
			let myHeight = self.height();
			if(myHeight > tallest){
				tallest = myHeight;
				mySlides.removeClass('is-tallest');
				self.addClass('is-tallest');
			}
		});

		// fill in the appropriate dot
		dotCurrent();

	})

	$(document).on('click touchend', '[data-slider-next]', function(e){
		e.preventDefault();
		e.stopPropagation();
		
		let self = $(this);
		let mySlider = self.closest('.b-slider');
		let mySlides = mySlider.find('.b-slide');
		let currentSlide = mySlider.find('.is-current');
		let currentIndex = parseInt(currentSlide.attr('data-index'));
		let nextIndex = currentIndex + 1;
		if(currentIndex == (mySlides.length - 1)){
			$(mySlides[0]).addClass('is-current');
		}else{
			$(mySlides[nextIndex]).addClass('is-current');			
		};
		currentSlide.removeClass('is-current');
		dotCurrent();
	})

	$(document).on('click touchend', '[data-slider-prev]', function(e){
		e.preventDefault();
		e.stopPropagation();
		
		let self = $(this);
		let mySlider = self.closest('.b-slider');
		let mySlides = mySlider.find('.b-slide');
		let currentSlide = mySlider.find('.is-current');
		let currentIndex = parseInt(currentSlide.attr('data-index'));
		let nextIndex = currentIndex - 1;
		if(currentIndex == 0){
			$(mySlides[mySlides.length - 1]).addClass('is-current');
		}else{
			$(mySlides[nextIndex]).addClass('is-current');			
		};
		currentSlide.removeClass('is-current');
		dotCurrent();
	})

	function dotCurrent(){
		// do for each slider
		$(document).find('.b-slider').each(function(){
			let thisSlider = $(this);
			let currentIndex = thisSlider.find('.is-current').attr('data-index');
			let dots = $(thisSlider).find(".b-slider__dot");
			dots.removeClass('is-current');
			$(dots[currentIndex]).addClass('is-current');
		});
	}

})
