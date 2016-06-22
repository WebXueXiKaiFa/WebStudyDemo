/**
 * Created by QYJ on 2016-06-22.
 */
define(function (require) {
    var app = require('app');
    app.controller('index', ['$scope', function($scope) {
        $scope.name = 'Home';
    }]);
});
