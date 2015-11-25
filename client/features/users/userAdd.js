Meteor.subscribe('users');

Template.userAdd.events({
	'submit .new-user': function(event) {
		event.preventDefault();


		var trimInput = function(val) {
    			return val.replace(/^\s*|\s*$/g, "");
		};
		
		var email = $('input[name="email"]').val();
		var password = $('input[name="password"]').val();
		var firstname = $('input[name="firstname"]').val();
		var lastname = $('input[name="lastname"]').val();

		var emailtrimed = trimInput(email);

		Meteor.call("createUsers", emailtrimed, password, firstname, lastname);
		
		event.target.email.value = "";
		event.target.password.value = "";
		event.target.firstname.value = "";
		event.target.lastname.value = "";
	}
});