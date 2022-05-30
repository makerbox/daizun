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

		//give each slide an index
		mySlides.each(function(index){
			$(this).attr('data-index', index);
		});

		// fill in the appropriate dot
		dotCurrent();
	})

	$(document).on('click touchend', '[data-slider-next]', function(e){
		e.preventDefault();
		e.stopPropagation();
		
		let self = $(this);
		let mySlider = self.closest('.b-slider');

		let currentSlide = mySlider.find('.is-current');

		let nextSlide = currentSlide.next();
		if(nextSlide.length){
			nextSlide.addClass('is-current');
		}else{
			$(mySlider.find('.b-slide')[0]).addClass('is-current');
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
		let mySlidesCount = mySlides.length;
		console.log(mySlidesCount);
		let currentSlide = mySlider.find('.is-current');

		let prevSlide = currentSlide.prev();
		if(prevSlide.length){
			prevSlide.addClass('is-current');
		}else{
			$(mySlides[mySlidesCount - 1]).addClass('is-current');
		};
		currentSlide.removeClass('is-current');
		dotCurrent();
	})

	function dotCurrent(){
		// do for each slider
		$(document).find('.b-slider').each(function(){
			let thisSlider = $(this);
			let currentIndex = thisSlider.find('.is-current').attr('data-index');
			let dots = $(document).find(".b-slider__dot");
			dots.removeClass('is-current');
			$(dots[currentIndex]).addClass('is-current');
		});
	}

})
