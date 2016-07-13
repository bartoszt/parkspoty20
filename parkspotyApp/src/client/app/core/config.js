(function() {
  'use strict';

  var core = angular.module('app.core');

  core.config(toastrConfig);

  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  }
    
  core.config(['ParseProvider', function(ParseProvider) {
    ParseProvider.initialize('ncxQCwgyxaysIZFzPsJZVeLHnBIHlXglsnGmvmid', 'XlVk1kRlIQOMg07WaIPoZsK9GAn7UHm394kp2a0W');
    ParseProvider.serverURL = 'https://parseapi.back4app.com';
  }]);    

  var config = {
    appErrorPrefix: '[PSpots Error] ',
    appTitle: 'Parkspoty 2.0'
  };

  core.value('config', config);

  core.config(configure);

  configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
  /* @ngInject */
  function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
  }
    
  console.log('test config');

})();
