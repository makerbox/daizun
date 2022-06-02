$(document).ready(function(){
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	let smoother = ScrollSmoother.create({
		content: '[data-smooth-content]',
 		effects: true
	});



	// handle link to section (in b-dot section). Can't use normal link, because of scrollSmoother
	$(document).on('click touchend', '.b-dot-background__paragraph a', function(e){
		e.stopPropagation();
		e.preventDefault();
		smoother.scrollTo("#case-studies", true);
	})


	// parallax (give the element a height bigger than the container and the container overflow hidden)
	// smoother.effects(".b-lead-stats__background img", { speed: "auto" });
	// smoother.effects(".b-dot-background__background img", {speed:"auto"});

})