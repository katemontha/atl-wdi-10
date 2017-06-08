angular
	.module('RonSwansonApp')
	.service('QuotesService', QuotesService);

QuotesService.$inject = ['$http'];

function QuotesService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.create = create;
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;


	// HOW IT DOES STUFF
	function create(quotesData) {
		return $http.post('/api/quotes, quotesData');
	}

	function loadAll() {
		return $http.get('/api/quotes');
	}

	function loadCurrent(id) {
		return $http.get('/api/quotes/' + id);
	}
}