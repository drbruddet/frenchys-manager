Meteor.publish('deliveries', function() {
	return Deliveries.find();
});