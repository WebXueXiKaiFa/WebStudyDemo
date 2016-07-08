define(["angularAMD"],function (angularAMD) {
    // routes
    return {
        angularAMD:angularAMD,
        registerRoutes:function($stateProvider, $urlRouterProvider) {
        // default
        $urlRouterProvider.otherwise("/home");
        // route
        $stateProvider
            // home
            .state("home", angularAMD.route({
                url: "/home",
                templateUrl: "views/home.html",
                controller: "Home",
                controllerUrl: "controllers/home"
            }))

            // home
            .state("about", angularAMD.route({
                url: "/about",
                templateUrl: "views/about.html",
                controller: "About",
                controllerUrl: "controllers/about"
            }));
    }};
});
