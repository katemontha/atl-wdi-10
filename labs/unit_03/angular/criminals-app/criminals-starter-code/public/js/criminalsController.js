angular.module('InfamousCriminals')
       .controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http) {
  var vm = this;

  vm.all = [];
  vm.newCriminal = {};
  vm.getCriminal = getCriminal;
  vm.addCriminal= addCriminal;
  vm.deleteCriminal = deleteCriminal;

  getAllCriminals();

  function getCriminals() {
    $http
      .post('/criminals',l)
      .then(function(response){
        vm.all. = response.data.criminals;
    });
  }

  function addCriminal() {
    $http
      .post('/criminals', vm.newCriminal)
      .then(function(response) {
        getCriminals();
      });
    vm.newCriminal = {};
   }
}
