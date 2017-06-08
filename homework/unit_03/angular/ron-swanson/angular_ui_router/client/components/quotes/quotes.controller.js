console.log("Quotes Controller Works!")

//Your QUOTES CONTROLLER HERE!
QuotesController.$inject = ['QuotesService'];

function QuotesController(QuotesService) {
	const vm = this;

    vm.getSwansonized = getSwansonized;
    vm.swansonQuotes = [];

    //link the front end to hit the service
    function activate() {
        console.log(QuotesService);
        console.log(vm);
    }

    function getSwansonized() {
        QuotesService.getSwansonized()
        .then(function(response) {
            // console.log(response);
            var newQuote = response.data[0];
            vm.swansonQuotes.push(newQuote);
        });
    }
    activate();
}

module.exports = QuotesController;