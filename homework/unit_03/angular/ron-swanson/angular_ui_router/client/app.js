const angular = require('angular');
require('angular-ui-router');

angular
    .module('RonSwansonApp', ['ui.router'])
	.config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
		})
		.state('quotes', {
			url: '/quote',
			template: '<quotes></quotes>' // LAB Goal #1 -- get this line to work
		})
		.state('netfix', {
			url: '/netflix',
			template: '<netflix></netflix>'
		});

	$urlRouterProvider.otherwise('/');
}