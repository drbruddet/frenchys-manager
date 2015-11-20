Meteor.methods({
	createUsers: function(email, password, firstname, lastname) {
		Accounts.createUser({
			password: password,
			username: firstname + ' ' + lastname,
			email: email,
			createdAt: new Date(),
		});
	},

	deleteUser : function(id){
  		return Meteor.users.remove(id);
  	},
});