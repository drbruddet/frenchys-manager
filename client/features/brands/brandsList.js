Meteor.subscribe('brands');

Template.brandsList.helpers({
	brands: function() {
		return Brands.find({}, {sort: { brand: 1}} );
	}
});