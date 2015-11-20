Meteor.subscribe('brands');

// PROBLEMS
// - vider le champs catégorie et marque

Template.riderForm.helpers({
	brands: function() {
		return Brands.find({}, {fields: {'brand':1}});
	},
	categories: ['Freestyle', 'Race']
});

Template.riderForm.rendered = function(){
	$('select.dropdown.brand').dropdown({});
	$('select.dropdown.category').dropdown({});
}

Template.riderForm.events({
	'click .newRiderButton': function(event) {
		event.preventDefault();
		$('.ui.modal').modal({
			onApprove : function() {

				var firstname   = $('input[name="firstname"]').val();
				var lastname    = $('input[name="lastname"]').val();
				var category = $('select[name="category"]').val();
				var brand  = $('select[name="brand"]').val();
				var email    = $('input[name="email"]').val();
				var phone    = $('input[name="phone"]').val();
				var address   = $('input[name="address"]').val();
				var postcode    = $('input[name="postcode"]').val();
				var city    = $('input[name="city"]').val();

				Riders.insert({
					firstname: firstname,
					lastname: lastname,
					email: email,
					phone: phone,
					category: category,
					brand: brand,
					address: address,
					postcode: postcode,
					city: city,
					createdAt: new Date()
				});

				$('input[name="firstname"]').val("");
				$('input[name="flastname"]').val("");
				$('input[name="email"]').val("");
				$('input[name="phone"]').val("");
				$('input[name="address"]').val("");
				$('input[name="city"]').val("");
				$('input[name="postcode"]').val("");

				//$('select.dropdown.brand').dropdown('restore defaults');
				//$('select.dropdown.category').dropdown('restore defaults');

				$('.ui.modal').modal('hide');
			}
		}).modal('show');
	}
});