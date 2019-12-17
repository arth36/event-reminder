var myEventApp = angular.module('myEventApp', ['ngRoute', 'ngAnimate']);

myEventApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home',{
            templateUrl: 'views/home.html',
            component: 'EventController'
        })
        .when('/events',{
            templateUrl: 'views/events.html',
            component: 'EventController'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);