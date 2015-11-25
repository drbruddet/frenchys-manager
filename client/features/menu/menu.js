Template.menu.events({
	"click .item": function () {
      	return "active";
	},
	'click #at-nav-button': function(event){
        event.preventDefault();
        if (Meteor.userId())
            AccountsTemplates.logout();
        else
            AccountsTemplates.linkClick("signIn");
    },
  });

Template.menu.rendered = function(){
  $('.menu .dropdown').dropdown({ });
}
