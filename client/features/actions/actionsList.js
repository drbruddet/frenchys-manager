Meteor.subscribe('actions');

Template.actionsList.helpers({
	actions: function() {
		var actions = Actions.find().fetch();
		return _.sortBy(actions, function (a) { 
			return !a.hasOwnProperty('emergency'); 
		});
	}
});