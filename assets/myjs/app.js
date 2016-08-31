define(["angular",
    "app-routes",
    "angular-ui-router",
], function (angular, routes) {
    // module
    var app = angular.module("app", ["ui.router"]);
    // config
    app.config(["$stateProvider", "$urlRouterProvider", routes.registerRoutes]);
    // bootstrap
    return  routes.angularAMD.bootstrap(app);
});