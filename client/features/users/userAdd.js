Meteor.subscribe('users');

Template.userAdd.events({
	'submit .new-user': function(event) {
		event.preventDefault();

		var email = $('input[name="email"]').val();;
		var username = $('input[name="username"]').val();;

 		Accounts.createUser({
 			email: email,
 			username: username,
 			password: 'toto',
 			profile: {

 			}
 		});

		event.target.email.value = "";
		event.target.username.value = "";
	}
});