angular
  .module('tas') 
  .config(tasConfig);
  
  function tasConfig($routeProvider) {
    $routeProvider
//     /#/login
      .when('/', {
        templateUrl: 'js/tas/table.html',
        controller: 'TasController',
        controllerAs: 'tas',
        private: true
      })
      .when('/new', {
        templateUrl: 'js/tas/form.html',
        controller: 'TasController',
        controllerAs: 'tas',
        private: true
      })
      .when('/show/:uuid', {
        templateUrl: 'js/tas/show.html',
        controller: 'ShowController',
        controllerAs: 'show',
        private: true
      })
      .when('/show/:uuid/edit', {
        templateUrl: 'js/tas/form.html',
        controller: 'EditController',
        controllerAs: 'tas',
        private: true
      })   
      .otherwise({
        redirectTo: '/'
      })
  }
