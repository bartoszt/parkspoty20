(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['userservice'];
  /* @ngInject */
  function DashboardController(userservice) {
    var vm = this;
    vm.news = {
      title: 'Parkspoty 2.0 Panel',
      description: 'desc'
    };
    vm.messageCount = 0;
    vm.people = [];
    vm.title = 'Parkspoty 2.0';

    activate();

    function activate() {
        userservice.authRequired()
    }
  }
})();
