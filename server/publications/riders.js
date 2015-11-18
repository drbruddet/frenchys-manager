Meteor.publish('riders', function() {
	return Riders.find();
});
