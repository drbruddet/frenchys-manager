Template.brandForm.events({
	'submit .new-brand': function(event) {
		event.preventDefault();

		var brand = event.target.brand.value;
		var domain = event.target.domain.value;

		Brands.insert({
			brand: brand,
			domain: domain,
			createdAt: new Date()
		});

		event.target.brand.value = "";
		event.target.domain.value = "";
	}
});