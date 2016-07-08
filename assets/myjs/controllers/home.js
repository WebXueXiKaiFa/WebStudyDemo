define(['angularAMD','services/userService'], function (angularAMD) {
    angularAMD.controller('Home',["$scope","UserService", function ($scope,UserService) {
        $scope.title = UserService.getUser();
    }]);
});