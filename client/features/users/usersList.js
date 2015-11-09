Meteor.subscribe('allUsers');

Template.usersList.helpers({
	users: function() {
		return Meteor.users.find();
	}
});