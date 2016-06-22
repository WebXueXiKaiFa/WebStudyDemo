define(function (require, exports, module) {
    var angular = require('angular');
    var asyncLoader = require('angular-async-loader');

    require('angular-ui-router');
    angular.element(document).find('html').attr('ng-app','app');
    var app = angular.module('app', ['ui.router']);

    asyncLoader.configure(app);

    module.exports = app;
});
