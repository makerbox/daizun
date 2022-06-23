$(document).ready(function(){
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

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



	function goToPos(targetPos) {
		gsap.to(window, {
			scrollTo: {y: targetPos - 50, autoKill: false},
			duration: .5
		});
	}

	const allPanels = $(document).find('.panel');
	allPanels.each(function(i){

		let panel = $(this);
		let nextPanel;
		let totalIndex = allPanels.length;

		if((i+1) <= (totalIndex - 1)){
			nextPanel = $(allPanels[i+1]);
		}else{
			nextPanel = $(allPanels[i]);			
		};

		ScrollTrigger.create({
			trigger: nextPanel,
			start: "+=100 bottom",
			onEnter: () => goToPos(nextPanel.offset().top)
		});

		// let panel = $(this);
		// let myPos = panel.offset().top;
		
		// let nextPanel;
		// let prevPanel;

		

		// if((i-1) == -1){
		// 	prevPanel = myPos;
		// }else{
		// 	prevPanel = allPanels[i-1].offset().top;
		// };

		// ScrollTrigger.create({
		// 	trigger: panel,
		// 	onEnter: () => goToPos(nextPanel)
		// });
		  
		// ScrollTrigger.create({
		// 	trigger: panel,
		// 	start: "bottom bottom",
		// 	onEnterBack: () => goToPos(prevPos)
		// });
	})


})