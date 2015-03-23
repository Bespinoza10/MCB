angular
  .module('tas')
	.controller('EditController', EditController);
	
	function EditController($routeParams, $location, taFactory, COHORT_OPTIONS) {
    var vm = this,
        id = $routeParams.uuid;
    
    vm.cohortOptions = COHORT_OPTIONS;

    taFactory.findOne(id, function (ta) {
      vm.newTA = ta;
    }); 
      
		 vm.addOrEditTA = function () {		
			taFactory.update(id, vm.newTA, function(){
				$location.path('/tas')
			});
    };
  }