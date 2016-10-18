import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

let CarsSchema = new SimpleSchema({
	make: {
		label: "Make",
		type: String,
	},
	model: {
		label: "Model",
		type: String,
	}
});

export const Cars = new Mongo.Collection('cars');

Cars.attachSchema(CarsSchema);