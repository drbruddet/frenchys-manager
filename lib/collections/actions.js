Actions = new Mongo.Collection('actions');

ActionsSchema = new SimpleSchema({
    "zone": {
        type: String,
        label: "Zone"
    },
    "user": {
        type: String,
        label: "User assigned"
    },
    "action": {
        type: String,
        label: "Action"
    },
    "emergency": {
        type: Boolean,
        label: "Emergency"
    },
  "createdAt": {
    		type: String,
    		label: "Date"
  	},
});

Actions.attachSchema( ActionsSchema ); 