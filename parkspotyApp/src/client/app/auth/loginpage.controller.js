(function() {
  'use strict';

  angular
    .module('app.loginpage')
    .controller('LoginpageController', LoginpageController);

  LoginpageController.$inject = ['$location', '$timeout', 'userservice'];
  /* @ngInject */
  function LoginpageController($location, $timeout, userservice) {
    var vm = this;
    activate();

    function activate() {
        if(userservice.isAuth()) {
            $location.path('/');   
        }
    }

    vm.loginUser = function() {
        if(vm.password && vm.email) {
            vm.error = null;
            
            Parse.User.logIn(vm.email, vm.password, {
              success: function(user) {
                  if (user.attributes.emailVerified) {
                    $timeout(function() {
                       $location.path("/"); 
                    }, 0);
                  } else {
                      Parse.User.logOut();
                      vm.error = "Please verify your email first. Find message in your mailbox with activation link.";
                  }
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
