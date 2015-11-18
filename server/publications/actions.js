Meteor.publish('actions', function() {
	return Actions.find();
});
