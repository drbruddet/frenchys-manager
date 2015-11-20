 Meteor.publish('users', function() {
   return Meteor.users.find();
 })

Meteor.users.allow({
    'insert': function (userId, doc) {
     	return true; 
    }
  });