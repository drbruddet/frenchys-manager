Meteor.subscribe('actions');

Template.actionsList.helpers({
	actions: function() {
		var actions = Actions.find().fetch();
		var result = _.sortBy(actions, function (a) { return !a.hasOwnProperty('emergency'); });
		return result;
	}
});