FlowRouter.route('/', {
	name: "deliveries",
    	action: function(params, queryParams) {
    		BlazeLayout.render('deliveriesList');
    	}
});

FlowRouter.route('/brands', {
	name: "brands",
    	action: function(params, queryParams) {
    		BlazeLayout.render('brandsList');
    	}
});