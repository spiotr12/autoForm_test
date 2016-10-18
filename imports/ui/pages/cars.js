import { Template } from 'meteor/templating';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { AutoForm } from 'meteor/aldeed:autoform';

import { Cars } from '../../api/cars.js';

AutoForm.debug();

import './cars.html';

// console.log('Schema', Cars.simpleSchema());

Template.insert_car.helpers({
	carsCollection(){
		return Cars;
	},
});

Template.cars_list.helpers({
	getCars(){
		return Cars.find();
	}
});