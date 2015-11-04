FlowRouter.route('/', {
	name: "deliveries",
    	action: function(params, queryParams) {
    		BlazeLayout.render('deliveriesList');
    	}
});