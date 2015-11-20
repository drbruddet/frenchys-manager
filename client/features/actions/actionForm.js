Meteor.subscribe('allUsers');

Template.actionForm.helpers({
	users: function() {
		return Meteor.users.find();
	}
});

Template.actionForm.helpers({
	zones: function() {
		return [
			{value: 'mailchimp', label: 'Mailchimp'},
			{value: 'vignetteB2B', label: 'vignette B2B' },
			{value: 'call', label: 'Appel téléphonique'},
			{value: 'newletterShopCommerce', label: 'newsletter Commerce'},
			{value: 'VisuelProduit', label: 'Visuel Produit(s)'}
		]
	}
});

Template.actionForm.helpers({
  "email": function() {  
  	return this.emails[0].address; 
  }
});

// EMERGENCY STATE
Session.set('emergency', false);
Template.actionForm.onRendered(function () {
	var $elem = this.$('.emergency');
  	$elem.checkbox('set ' + (Session.get('emergency') ? 'checked' : 'unchecked'));
  	$elem.checkbox({
    		onChange: function () {
      		Session.set('emergency', !Session.get('emergency'));
    		}
  	});
});
// EMERGENCY STATE

Template.actionForm.rendered = function(){
	$('select.dropdown.zone').dropdown({});
	$('select.dropdown.user').dropdown({});
}

Template.actionForm.events({
	'submit .new-action': function(event) {
		event.preventDefault();

		var zone = event.target.zone.value;
		var emergency = Session.get('emergency');
		var user = event.target.user.value;
		var action = event.target.action.value;

		Actions.insert({
			zone: zone,
			user: user,
			action: action,
			emergency: emergency,
			createdAt: new Date()
		});

		event.target.zone.value = "";
		event.target.user.value = "";
		event.target.action.value = "";
	}
});