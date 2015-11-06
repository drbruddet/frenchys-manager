Brands = new Mongo.Collection('brands');

BrandsSchema = new SimpleSchema({
	"brand": {
    		type: String,
    		label: "Brand name"
  	},
  	"domain": {
    		type: String,
    		label: "Brand domain"
  	},
  	"createdAt": {
    		type: Date,
    		label: "Date"
  	},
});

Brands.attachSchema( BrandsSchema ); 