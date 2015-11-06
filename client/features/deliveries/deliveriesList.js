Meteor.subscribe('deliveries');

Template.deliveriesList.helpers({
	deliveries: function() {
		return Deliveries.find();
	}
});