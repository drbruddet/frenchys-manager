Riders = new Mongo.Collection('riders');

RidersSchema = new SimpleSchema({
      "firstname": {
          type: String,
          label: "First name"
      },
      "lastname": {
          type: String,
          label: "Last name"
      },
      "email": {
          type: String,
          label: "Email",
          optional: true
      },
      "phone": {
          type: String,
          label: "phone",
          optional: true
      },
      "address": {
          type: String,
          label: "address",
          optional: true
      },
      "postcode": {
          type: String,
          label: "Post Code",
          optional: true
      },
      "city": {
          type: String,
          label: "city",
          optional: true
      },
	"brand": {
    		type: [Brands],
    		label: "Brand",
            optional: true
  	},
  	"category": {
    		type: String,
    		label: "Category",
            allowedValues: ['freestyle', 'race'],
            optional: true
  	},
  	"createdAt": {
    		type: String,
    		label: "Date"
  	},
});

Riders.attachSchema( RidersSchema ); 