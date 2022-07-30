$(document).ready(function(){


	// rip the sliders out from the smooth scroll container, so they can be fixed position
	let scrollWrapper = $(document).find('[data-smooth-wrapper]');
	$(document).find('.b-case-study__slides').each(function(index){
		let self = $(this);		
		self.attr('data-slider-id', index); // give them each an ID to connect with their parent
		self.find('[data-toggle-case]').attr('data-slider-id', index);
		scrollWrapper.before(self);

		// hide prev next if only one slide
		let mySlides = self.find(".b-case-study-slide");
		if(mySlides.length <= 1){
			self.addClass('is-single');
		};
	})

	$(document).find('.b-case-study').each(function(index){
		let self = $(this);
		self.attr('data-slider-id', index); // give them each an ID to connect with their slider
		self.find('[data-toggle-case]').attr('data-slider-id', index);
		
	})


	// open / close the slider
	$(document).on('click touchend', '[data-toggle-case]', function(e){
		e.preventDefault();
		e.stopPropagation();

		let self = $(this);
		let myID = self.attr('data-slider-id');
		let mySlider = $(document).find('.b-case-study__slides[data-slider-id="'+myID+'"]');
		if(!mySlider.hasClass('is-open')){ 
			mySlider.addClass('is-open');
			// set the first slide to be current
			$(mySlider).find(".b-case-study-slide").first().addClass('is-current');
			$(mySlider).find(".b-case-study-slide").first().next('.b-case-study-slide').addClass('is-next');
			$(mySlider).find(".b-case-study-slide").last().addClass('is-prev');
		}else{
			mySlider.removeClass('is-open');
			// reset current
			$(mySlider).find(".b-case-study-slide").removeClass('is-current').removeClass('is-next').removeClass('is-prev');
		}
	});

	// change slide on next
	$(document).on('click touchend', '[data-case-next]', function(e){
		e.preventDefault();
		e.stopPropagation();
		let self = $(this);
		let mySlider = self.closest('.b-case-study__slides');
		let currentSlide = mySlider.find(".b-case-study-slide.is-current");		
		let nextSlide = mySlider.find(".b-case-study-slide.is-next");
		let prevSlide = mySlider.find(".b-case-study-slide.is-prev");

		if(nextSlide.length){ // if there is a next slide
			currentSlide.addClass('is-prev').removeClass('is-current'); // current is now prev
			nextSlide.removeClass('is-next').addClass('is-current'); // next is now current
			prevSlide.removeClass('is-prev'); // prev is now normal
			nextSlide.next('.b-case-study-slide').addClass('is-next'); // after next is now next
		}else{ // must be the last slide
			currentSlide.addClass('is-prev').removeClass('is-current'); // current is now prev
			mySlider.find(".b-case-study-slide").first().addClass('is-current'); // first is now current
			prevSlide.removeClass('is-prev'); // prev is now normal
			mySlider.find(".b-case-study-slide").first().next('.b-case-study-slide').addClass('is-next'); // second is now next
		}
	});

	// change slide on prev
	$(document).on('click touchend', '[data-case-prev]', function(e){
		e.preventDefault();
		e.stopPropagation();
		let self = $(this);
		let mySlider = self.closest('.b-case-study__slides');
		let currentSlide = mySlider.find(".b-case-study-slide.is-current");		
		let nextSlide = mySlider.find(".b-case-study-slide.is-next");
		let prevSlide = mySlider.find(".b-case-study-slide.is-prev");

		currentSlide.addClass('is-next').removeClass('is-current'); // current is now next
		prevSlide.removeClass('is-prev').addClass('is-current'); // prev is now current
		nextSlide.removeClass('is-next'); // next is now normal
		if(prevSlide.prev('.b-case-study-slide').length){ // if there is a prev after prev
			prevSlide.prev('.b-case-study-slide').addClass('is-prev'); // after prev is now prev
		}else{
			mySlider.find(".b-case-study-slide").last().addClass('is-prev'); // last is now prev, so it comes in from the prev side
		}
	});


})