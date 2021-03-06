angular
  .module('tas')
	.controller('TasController', TasController); 
	
	function TasController($location, taFactory, /* COHORT_OPTIONS */ $http) {
	  var vm = this;
	
/* 	  vm.cohortOptions = COHORT_OPTIONS */
	
	  taFactory.findAll(function (tas) {
	    vm.data = tas;
			$apply();
	  });
	
	  vm.addOrEditTA = function () {
	    vm.newTA.name;
	    vm.newTA.nickName;
	
	    taFactory.create(vm.newTA, function (res) {
	      vm.data[res.name] = vm.newTA;
	      $location.path('/'); 
			});
		};
	
	  vm.removeTA = function (id) {
	    taFactory.delete(id, function(){
		    delete vm.data[id];
	    });
	  };
	  
	  vm.updateTA = function (id) {
	    taFactory.update(id, vm.data[id]);
	  };
 	}		
	