(function() {
  'use strict';

  angular
    .module('app.register')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$timeout'];
  /* @ngInject */
  function RegisterController($location, $timeout) {
    var vm = this;
    vm.verificationEmailSent = false;
    activate();

    function activate() {
        console.log('activated registration');  
    }

    vm.registerUser = function() {
        if(vm.password && vm.email && vm.password2) 
        {
            vm.error = null;
            
            if(vm.password === vm.password2) 
            {
                var user = new Parse.User();
                user.set("username", vm.email);
                user.set("password", vm.password);
                user.set("email", vm.email);
                
                user.signUp(null, {
                  success: function(user) {
                    $timeout(function() {
                       vm.verificationEmailSent = true; 
                    });
                  },
                  error: function(user, error) {
                    vm.error = "Error: " + error.code + " " + error.message;
                  }
                });
            }
            else
            {
                vm.error = "Provided password doesn't match with re-typed password";
            }
        } 
        else 
        {
            vm.error = "Please provide your email, password and re-type your password.";   
        }
    }
  }
})();
