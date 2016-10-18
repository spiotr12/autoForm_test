import { SimpleSchema } from 'meteor/aldeed:simple-schema';

let Schemas = {};

Schemas.UserProfile = new SimpleSchema({
	firstName: {
		label: 'First Name',
		type: String,
		regEx: /^[a-zA-Z-]{2,25}$/,
		optional: true
	},
});

Schemas.User = new SimpleSchema({
	username: {
		label: 'User name',
		type: String,
		regEx: /^[a-z0-9A-Z_]{3,15}$/
	},
	emails: {
		label: 'Email',
		type: [Object],
		optional: true
	},
	"emails.$.address": {
		type: String,
		regEx: SimpleSchema.RegEx.Email
	},
	"emails.$.verified": {
		type: Boolean
	},
	createdAt: {
		label: 'Create at',
		type: Date,
		optional: true
	},
	profile: {
		label: 'Profile details',
		type: Schemas.UserProfile,
		optional: true
	},
});

// Meteor.users.attachSchema(Schemas.User);

// Meteor.users.allow({
// 	insert: function () { return true; },
// 	update: function () { return true; },
// 	remove: function () { return true; }
// });

export const UsersSchema = Schemas.User;