(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('userservice', userservice);

  userservice.$inject = ['exception', 'Parse', '$location', '$state'];
  /* @ngInject */
  function userservice(exception, Parse, $location, $state) {
    var _self = this;
    var service = {
      isAuth: isAuth,
      authRequired: authRequired
    };

    return service;
      
    function authRequired() {
        if(!isAuth() && $state.current.name != "login" && $state.current.name != "register") 
        {
            $location.path('/login');   
        }
    }
    
    function isAuth() {
        if(Parse.User.current() != null) 
        {
            return true;   
        }
        return false;
    }
      
    
  }
})();
