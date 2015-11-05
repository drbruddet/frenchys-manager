Meteor.publish('brands', function() {
	return Brands.find();
});