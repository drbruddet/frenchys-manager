Template.tableUser.helpers({
	email: function() {
		return this.emails[0].address; 
	}
});

Template.tableUser.events({
    "click .delete": function () {
      	var idUser= this._id;
 		Meteor.call('deleteUser',{_id:idUser})
    }
});