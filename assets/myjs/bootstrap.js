require.config({
    baseUrl: 'assets/myjs',
    paths: {
        // angular
        "angular": "../js/angular.min",

        // angular-ui
        "angular-ui-router": "../js/angular-ui-router.min",

        // angularAMD
        "angularAMD": "../js/angularAMD.min",
        "ngload": "../js/ngload.min"
    },
    shim: {
        // angular
        "angular": { exports: "angular" },

        // angular-ui
        "angular-ui-router": ["angular"],

        // angularAMD
        "angularAMD": ["angular"],
        "ngload": ["angularAMD"]
    },
    deps: ['app']
});