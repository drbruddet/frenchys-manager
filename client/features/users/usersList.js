// PROBLEMS
// - ne peux pas supprimer
// - setter un nom + prénom + fonction et les afficher

Template.usersList.helpers({
	users: function() {
		return Meteor.users.find();
	}
});