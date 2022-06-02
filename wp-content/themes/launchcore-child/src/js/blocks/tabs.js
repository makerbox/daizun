$(document).ready(function(){
	// make the tabs
	$(document).find('.b-tab').each(function(){
		let self = $(this);
		let myTitle = self.attr('data-tab-title');
		let myButtons = $(document).find('[data-tab-buttons]');
		let tabHTML = "<div class='b-tab__button' data-tab-title='"+myTitle+"'>"+myTitle+"</div>";
		myButtons.append(tabHTML);
	})
	
	// make the middle tab selected and visible to begin with
	$($(document).find('.b-tab')[1]).addClass('is-visible');
	$($(document).find('.b-tab__button')[1]).addClass('is-selected');

	// handle tab click
	$(document).on('click touchend', '.b-tab__button', function(e){
		e.preventDefault();
		e.stopPropagation();

		let self = $(this);
		$(document).find(".b-tab__button").removeClass('is-selected');
		self.addClass('is-selected');
		let myTitle = self.attr('data-tab-title');
		$(document).find(".b-tab").removeClass('is-visible');
		$(document).find('.b-tab[data-tab-title="'+myTitle+'"]').addClass('is-visible');
	})
})