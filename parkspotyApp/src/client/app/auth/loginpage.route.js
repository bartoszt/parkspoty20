(function() {
  'use strict';

  angular
    .module('app.loginpage')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'login',
        config: {
          url: '/login',
          templateUrl: 'app/auth/loginpage.html',
          controller: 'LoginpageController',
          controllerAs: 'vm',
          title: 'Login Page'
        }
      },
      {
        state: 'logout',
        config: {
          url: '/logout',
          templateUrl: 'app/auth/logout.html',
          controller: 'LogoutpageController',
          controllerAs: 'vm',
          title: 'Log out'
        }
      }
    ];
  }
})();
