import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { AutoForm } from 'meteor/aldeed:autoform';

AutoForm.debug();

import { UsersSchema } from '../../api/user-schema';	//TODO show schema to all users?

import './my-account.html';

// Meteor.users.attachSchema(UsersSchema);


Template.myForm.helpers({
	usersCollection(){
		return Meteor.user();
	},
	usersSchema(){
		return UsersSchema;
	}
});