$(document).ready(function(){
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	let smoother = ScrollSmoother.create({
		wrapper: '[data-smooth-wrapper]',
		content: '[data-smooth-content]'
	})
})