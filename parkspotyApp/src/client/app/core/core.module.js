(function() {
  'use strict';

  angular
    .module('app.core', [
      'ngAnimate', 'ngSanitize', 'ngParse',
      'blocks.exception', 'blocks.logger', 'blocks.router',
      'ui.router', 'ngplus'
    ]);
})();
