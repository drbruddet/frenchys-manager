FlowRouter.route('/', {
	name: "deliveries",
   	action: function() {
		BlazeLayout.render('applicationLayout', {
			menu: 'menu',
			container: 'deliveriesList'
		});
	}
});

FlowRouter.route('/riders', {
	name: "riders",
   	action: function() {
		BlazeLayout.render('applicationLayout', {
			menu: 'menu',
			container: 'ridersList'
		});
	}
});

FlowRouter.route('/actions', {
	name: "actions",
   	action: function() {
		BlazeLayout.render('applicationLayout', {
			menu: 'menu',
			container: 'actionsList'
		});
	}
});

FlowRouter.route('/brands', {
	name: "brands",
   	action: function() {
		BlazeLayout.render('applicationLayout', {
			menu: 'menu',
			container: 'brandsList'
		});
	}
});

FlowRouter.route('/users', {
	name: "users",
   	action: function() {
		BlazeLayout.render('applicationLayout', {
			menu: 'menu',
			container: 'usersList'
		});
	}
});

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('applicationLayout', {
      container: "pageNotFound",
      menu: "menu",
    });
  }
};

//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
//AccountsTemplates.configureRoute('signUp');
//AccountsTemplates.configureRoute('verifyEmail');
