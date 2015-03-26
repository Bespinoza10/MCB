angular
  .module('tas')
  .factory('taFactory', taFactory);
  
  function taFactory($http, BASE_URL) {
    var tas = {};
    fb = new Firebase('https://mcb.firebaseio.com/')

    tas.findOne = function (id, cb) {
      $http
        .get(BASE_URL +  '/users/' + fb.getAuth().uid + '/recipes/' + id + '.json')
        .success(function (data) {
          cb(data);
        });
    };

    tas.findAll = function (cb) {
      $http
        .get(BASE_URL +  '/users/' + fb.getAuth().uid + '/recipes.json')
        .success(function (data){
          cb(data);
        });
    };
    
    tas.create = function (data, cb) {
	    $http
        .post(BASE_URL +  '/users/' + fb.getAuth().uid + '/recipes.json', data)
        .success(function (res) {
          cb(res);
        });
    };
    
    tas.delete = function(id, cb){
	    var url = BASE_URL +  '/users/' + fb.getAuth().uid + '/recipes/' + id + '.json';
      
       $http
        .delete(url)
        .success(function () {
          cb();
        });
    };
    
    tas.update = function(id, data, cb){
	    var url = BASE_URL +  '/users/' + fb.getAuth().uid + '/recipes/' + id + '.json';
      
      $http
        .put(url, data)
        .success(function (res) {
          if (typeof cb === 'function') {
            cb(res);
          }
        });
    };

    return tas;
  }