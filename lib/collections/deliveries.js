Deliveries = new Mongo.Collection('deliveries');

DeliveriesSchema = new SimpleSchema({
	"date": {
    		type: String,
    		label: "Date"
  	},
  	"brand": {
    		type: String,
    		label: "Brand"
  	},
   	"description": {
    		type: String,
    		label: "description"
  	},
  	"createdAt": {
    		type: String,
    		label: "Date"
  	},
});

Deliveries.attachSchema( DeliveriesSchema ); 