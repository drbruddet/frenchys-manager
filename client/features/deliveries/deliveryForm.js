Meteor.subscribe('brands');

Template.deliveryForm.helpers({
	brands: function() {
		return Brands.find({}, {fields: {'brand':1}});
	}
});

Template.deliveryForm.events({
	'submit .new-delivery': function(event) {
		event.preventDefault();

		var date = event.target.date.value;
		var brand = event.target.brand.value;
		var description = event.target.description.value;

		Deliveries.insert({
			date: date,
			brand: brand,
			description: description,
			createdAt: new Date()
		});

		event.target.date.value = "";
		$('.dropdown').dropdown('restore defaults');
		event.target.description.value = "";
	}
});

Template.deliveryForm.rendered = function(){
  Meteor.defer(function() {
    $('.dropdown').dropdown('restore defaults');
  });
}