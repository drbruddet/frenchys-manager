Meteor.subscribe('users');

Template.userAdd.events({
	'submit .new-user': function(event) {
		event.preventDefault();

		var email = $('input[name="email"]').val();
		var password = $('input[name="password"]').val();
		var firstname = $('input[name="firstname"]').val();
		var lastname = $('input[name="lastname"]').val();

		Meteor.call("createUsers", email, password, firstname, lastname);

		event.target.email.value = "";
		event.target.password.value = "";
		event.target.firstname.value = "";
		event.target.lastname.value = "";
	}
});