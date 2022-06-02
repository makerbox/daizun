$(document).ready(function(){
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	let smoother = ScrollSmoother.create({
		wrapper: '[data-smooth-wrapper]',
		content: '[data-smooth-content]'
	});



	// handle link to section (in b-dot section). Can't use normal link, because of scrollSmoother
	$(document).on('click touchend', '.b-dot-background__paragraph a', function(e){
		e.stopPropagation();
		e.preventDefault();
		smoother.scrollTo("#case-studies", true);
	})

})