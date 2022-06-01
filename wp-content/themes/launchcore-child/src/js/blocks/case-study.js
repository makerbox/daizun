$(document).ready(function(){
	var interval;
	// rip the sliders out from the smooth scroll container, so they can be fixed position
	let scrollWrapper = $(document).find('[data-smooth-wrapper]');
	$(document).find('.b-case-study__slides').each(function(index){
		let self = $(this);
		$(self.find('.b-case-study-slide')[0]).addClass("is-current");// set the first slide to current
		self.attr('data-slider-id', index); // give them each an ID to connect with their parent
		scrollWrapper.before(self);		
	})
	$(document).find('.b-case-study').each(function(index){
		let self = $(this);
		self.attr('data-slider-id', index); // give them each an ID to connect with their slider
	})

	// open / close the slider
	$(document).on('click touchend', '[data-slider-id]', function(e){ // open slider
		e.preventDefault();
		e.stopPropagation();

		let self = $(this);
		let myID = self.attr('data-slider-id');
		let mySlider = $(document).find('[data-slider-id="'+myID+'"]');
		if(mySlider.hasClass('is-open')){
			mySlider.removeClass('is-open');
			clearInterval(interval);
		}else{
			mySlider.addClass('is-open');
			// change slide on interval
			interval = setInterval(function(){
				let currentSlide = mySlider.find(".b-case-study-slide.is-current");
				let oldSlide = mySlider.find(".b-case-study-slide.is-old");
				let nextSlide = currentSlide.next();
				currentSlide.addClass('is-old').removeClass('is-current');
				oldSlide.removeClass('is-old');
				if(nextSlide.length){
					nextSlide.addClass('is-current');
				}else{
					let firstSlide = mySlider.find(".b-case-study-slide")[0];
					$(firstSlide).removeClass('is-old').addClass('is-current');
				}
			}, 5000	);
		};
	});


})