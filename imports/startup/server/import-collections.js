import '../../api/cars.js'
import '../../api/user-schema.js'


Meteor.users.allow({
	insert: function () { return true; },
	update: function () { return true; },
	remove: function () { return true; }
});
