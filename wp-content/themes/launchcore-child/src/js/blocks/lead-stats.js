$(document).ready(function(){
	let stats = $(document).find(".b-lead-stat");
	let statsCount = stats.length;
	$(stats[0]).addClass("is-visible");

	setInterval(function(){
		let currentVisible = $(document).find(".b-lead-stat.is-visible");
		if(currentVisible.next().length){
			currentVisible.removeClass('is-visible');
			currentVisible.next().addClass('is-visible');
		}else{
			currentVisible.removeClass('is-visible');
			$(stats[0]).addClass("is-visible");
		}
	}, 2000);
})