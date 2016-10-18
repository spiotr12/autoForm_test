import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/app-body.js';
import '../../ui/pages/404.js';
import '../../ui/pages/my-account.js';
import '../../ui/pages/cars.js';

// Home
FlowRouter.route('/', {
	name: 'App.home',
	action(params, queryParams) {
		BlazeLayout.render('App_body');
	}
});

FlowRouter.route('/my-account', {
	name: 'App.home',
	action(params, queryParams) {
		BlazeLayout.render('App_body', {main: "my_account"});
	}
});

FlowRouter.route('/cars', {
	name: 'App.home',
	action(params, queryParams) {
		BlazeLayout.render('App_body', {main: 'cars_page'});
	}
});

// 404 page not found
FlowRouter.notFound = {
	action: function(){
		BlazeLayout.render('App_body', { main: "404_page"});
	}
};