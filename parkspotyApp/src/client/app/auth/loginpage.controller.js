(function() {
  'use strict';

  angular
    .module('app.loginpage')
    .controller('LoginpageController', LoginpageController);

  LoginpageController.$inject = ['$location', '$timeout'];
  /* @ngInject */
  function LoginpageController($location, $timeout) {
    var vm = this;
    activate();

    function activate() {
        console.log('activated');  
    }

    vm.loginUser = function() {
        if(vm.password && vm.email) {
            vm.error = null;
            
            Parse.User.logIn(vm.email, vm.password, {
              success: function(user) {
                $timeout(function() {
                   $location.path("/"); 
                }, 0);
              },
              error: function(user, error) {
                vm.error = error.message;
              }
            });
        } else {
            console.log('error');
            vm.error = "Please provide your email and password.";   
        }
    }
  }
})();
