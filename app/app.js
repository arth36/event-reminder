var myEventApp = angular.module('myEventApp', ['ngRoute', 'ngAnimate']);

myEventApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home',{
            templateUrl: 'views/home.html',
            controller: 'EventController'
        })
        .when('/events',{
            templateUrl: 'views/events.html',
            controller: 'EventController'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);

myEventApp.controller('EventController', ['$scope', '$http', function( $scope,$http ){
    $http.get('/data/events.json').then(successCallback, errorCallback);
    function successCallback( data ){
        $scope.events = data.data;
    }
    function errorCallback(error){
        console.log('No Event Found')
    }
}]);