$(document).ready(function(){
	// make the tabs
	$(document).find('.b-tab').each(function(){
		let self = $(this);
		let myTitle = self.attr('data-tab-title');
		let myButtons = $(document).find('[data-tab-buttons]');
		let tabHTML = "<div class='b-tab__tab' data-tab-title='"+myTitle+"'>"+myTitle+"</div>";
		myButtons.append(tabHTML);
	})
	
	// make the middle tab selected and visible to begin with


	// handle tab click
})