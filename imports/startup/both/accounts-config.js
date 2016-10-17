import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.configure({
	defaultLayout: 'App_body',
	defaultContentRegion: 'main',
	defaultLayoutRegions: {},
});

AccountsTemplates.configureRoute('signIn');

AccountsTemplates.configureRoute('signUp');

let pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
	{
		_id: "firstName",
		type: "text",
		displayName: "First name",
		placeholder: {
			signUp: "First name"
		},
		required: true,
		minLength: 4,
	},
	{
		_id: "username",
		type: "text",
		displayName: "User name",
		placeholder: {
			signUp: "User name"
		},
		required: true,
		minLength: 5,
	},
	{
		_id: 'email',
		type: 'email',
		required: true,
		displayName: "email",
		placeholder: {
			signUp: "Email"
		},
		re: /.+@(.+){2,}\.(.+){2,}/,
		errStr: 'Invalid email',
	},
	pwd
]);