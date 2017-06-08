const controller = require('./quotes.controller.js');
const template = require('./quotes.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('RonSwansonApp')
	.component('quotes', component);