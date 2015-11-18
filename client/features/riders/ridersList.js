Meteor.subscribe('riders');

Template.ridersList.helpers({
	ridersfreestyle: function() {
		return Riders.find({ domain: 'freestyle' });
	},
	ridersrace: function() {
		return Riders.find({ domain: 'race' });
	}
});

Template.ridersList.rendered = function(){
	$('.ui.accordion').accordion({

	});
}