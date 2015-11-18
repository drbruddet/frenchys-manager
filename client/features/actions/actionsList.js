Meteor.subscribe('actions');

Template.actionsList.helpers({
	actions: function() {
		return Actions.find();
	}
});