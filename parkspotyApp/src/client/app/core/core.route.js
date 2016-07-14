(function() {
  'use strict';

  angular
    .module('app.core')
    .run(appRun);

    
  /* @ngInject */
  function appRun($rootScope, $state, userservice, routerHelper) {
    var otherwise = '/404';
    routerHelper.configureStates(getStates(), otherwise);
      
      $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams, error) {
        if (!userservice.isAuth) {
          $state.go("logiin");
        }
      });
  }

  function getStates() {
    return [
      {
        state: '404',
        config: {
          url: '/404',
          templateUrl: 'app/core/404.html',
          title: '404'
        }
      }
    ];
  }
})();
