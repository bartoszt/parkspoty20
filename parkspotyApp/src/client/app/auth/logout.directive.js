(function() {
  'use strict';

  angular
    .module('app.core')
    .directive('logout', logout);

  /* @ngInject */
  function logout() {
    var directive = {
      restrict: 'A',
      scope: true,
      controller: LogoutController
    };
      
    LogoutController.$inject = ['$scope', '$location', '$timeout'];  
      
    /* @ngInject */
    function LogoutController($scope, $location, $timeout) {
        var vm = this;
        
        $scope.logoutMe = function(){
            Parse.User.logOut().then(() => {
                $timeout(function() {
                    $location.path('/login');
                },0);
            });
        }    
    }
      
    return directive;
  }
})();
