$(document).ready(function(){

	// only jack scroll on desktop
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
 		// give each section an ID for the nav to use
		$(document).find(".t-front-page>div").each(function(index){
			$(this).attr('id', 'dz-section-'+index);
		})
	  // handle link to section (in b-dot section). Can't use normal link, because of scrollSmoother
		$(document).on('click touchend', '.b-dot-background__paragraph a', function(e){
			e.stopPropagation();
			e.preventDefault();

			let targetEl = $(document).find('#dz-section-5');
			let targetPos = targetEl.offset().top;
			$('html, body').animate({
	        	scrollTop: targetPos
	    	}, 0);
		})
	}else{
		  

		gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

		let smoother = ScrollSmoother.create({
			content: '[data-smooth-content]',
	 		effects: false,
	 		smooth: 0
		});


		var isAnimating = false;
		
		// handle link to section (in b-dot section). Can't use normal link, because of scrollSmoother
		$(document).on('click touchend', '.b-dot-background__paragraph a', function(e){
			e.stopPropagation();
			e.preventDefault();
			let targetEl = $(document).find('#dz-section-5');
			goToPos(targetEl, 0, "none");
		})


		// parallax (give the element a height bigger than the container and the container overflow hidden)
		// smoother.effects(".b-lead-stats__background img", { speed: "auto" });
		// smoother.effects(".b-dot-background__background img", {speed:"auto"});



		function goToPos(target, myduration, myease) {
			if(!isAnimating){
				isAnimating = true;
				// animation starts, disable scroll
				disableScroll();
				gsap.to(smoother, {
					scrollTop: smoother.offset(target),
					duration: myduration,
					ease: myease,
					onComplete: stopAnim
				});
			};
		}

		function stopAnim(){
			// animation finishes
			isAnimating = false;
			// allow user scroll again
			enableScroll();
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
				start: "top 80%",
				onEnter: () => goToPos(nextPanel, 1, "Power3.out")
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


		// give each section an ID for the nav to use
		$(document).find(".t-front-page>div").each(function(index){
			$(this).attr('id', 'dz-section-'+index);
		})

		// handle nav click
		$(document).on('click touchend', '.scroll-to a', function(e){
			e.preventDefault();
			e.stopPropagation();
			if($(document).find('.t-font-page').length){ // front page just scroll to section
				let self = $(this);
				let target = self.attr('href');
				let targetEl = $(document).find(target);
				goToPos(targetEl);
			}else{
				let self = $(this);
				let target = self.attr('href');
				location = '../' + target;
			}
			
			
		})

		// if # section in URL then scroll to section
		if(window.location.href.indexOf('#') != -1){
			let target = window.location.href.split("#")[1];
			let targetEl = $(document).find('#'+target);
			goToPos(targetEl, 0, "none");
		};










		function preventDefault(e) {
		  e.preventDefault();
		}

		function preventDefaultForScrollKeys(e) {
		  if (keys[e.keyCode]) {
		    preventDefault(e);
		    return false;
		  }
		}

		// modern Chrome requires { passive: false } when adding event
		var supportsPassive = false;
		try {
		  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
		    get: function () { supportsPassive = true; } 
		  }));
		} catch(e) {}

		var wheelOpt = supportsPassive ? { passive: false } : false;
		var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

		// call this to Disable
		function disableScroll() {
		  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
		  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
		  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
		  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
		}

		// call this to Enable
		function enableScroll() {
		  window.removeEventListener('DOMMouseScroll', preventDefault, false);
		  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
		  window.removeEventListener('touchmove', preventDefault, wheelOpt);
		  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
		}



	};

})



