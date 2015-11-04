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
		event.target.brand.value = "";
		event.target.description.value = "";
	}
});