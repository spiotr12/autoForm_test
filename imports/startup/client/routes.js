import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/app-body.js';
import '../../ui/pages/404.js';

// Home
FlowRouter.route('/', {
	name: 'App.home',
	action(params, queryParams) {
		BlazeLayout.render('App_body');
	}
});

// 404 page not found
FlowRouter.notFound = {
	action: function(){
		BlazeLayout.render('App_body', { main: "404_page"});
	}
};