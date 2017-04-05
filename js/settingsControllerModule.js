;(function(angular){
    var settingsControllerModule = angular.module('settingsControllerModule',[]);
    settingsControllerModule.controller('settingsController',function($scope){
        $scope.$parent.active = '/settings';
    });
})(angular);