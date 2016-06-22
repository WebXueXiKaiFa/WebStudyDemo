require.config({
    baseUrl: '/WebStudyDemo/assets/myjs',
    paths: {
        'angular': '../js/angular',
        'angular-ui-router': '../js/angular-route',
        'angular-async-loader': '../js/angular-async-loader'
    },
    shim: {
        'angular': {exports: 'angular'},
        'angular-ui-router': {deps: ['angular']}
    }
});

require(['angular','angular-ui-router', 'app-routes'], function (angular) {
    angular.element(document).find('html').attr('ng-app','app')
    angular.element(document).ready(function () {
        console.info(angular.element(document).find('html').attr('ng-app'));
        angular.bootstrap(document, ['app']);
    });
});
