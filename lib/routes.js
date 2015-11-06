FlowRouter.route('/', {
	name: "deliveries",
   	action: function(params, queryParams) {
		BlazeLayout.render('applicationLayout', {
			menu: 'menu',
			container: 'deliveriesList'
		});
	}
});

FlowRouter.route('/brands', {
	name: "brands",
   	action: function(params, queryParams) {
		BlazeLayout.render('applicationLayout', {
			menu: 'menu',
			container: 'brandsList'
		});
	}
});
