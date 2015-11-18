Template.action.events({
    "click .delete": function () {
      Actions.remove(this._id);
    }
  });

Template.registerHelper('getEmergencyClass', function(emergency) {
	if (emergency) {
		return "negative";
	} 
});