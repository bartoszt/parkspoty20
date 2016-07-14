(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('ShellController', ShellController);

  ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger'];
  /* @ngInject */
  function ShellController($rootScope, $timeout, config, logger) {
    var vm = this;
    vm.leftBarVisible = true;
      
    activate();
      
    function activate() {
      console.log('test');
      logger.success(config.appTitle + ' loaded!', null);
    }
      
    $rootScope.$watch(Parse.User.current(), function (value, oldValue) {
       logger.success("authchange");

      }, true);
  }
})();
