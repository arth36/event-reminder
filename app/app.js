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
    $scope.prevEvents=new Array();
    $scope.upcomingEvents=new Array();
    $scope.runningEvents=new Array();
    
    $scope.prevevents=function(event){

        var q = new Date();
        var m = q.getMonth()+1;
        var d = q.getDate();
        var y = q.getFullYear();
        var date=y + "-" + m + "-" + d;
        var ndate= event.date;
        if(date>ndate)
        {
            $scope.previoustitle='Previous Events';
            $scope.prevEvents.push(event);
        }
    }

    $scope.runningevents=function(event){

        var q = new Date();
        var m = q.getMonth()+1;
        var d = q.getDate();
        var y = q.getFullYear();
        var date=y + "-" + m + "-" + d;
        var ndate= event.date;
        if(date==ndate)
        {
            $scope.runningtitle='Running Events';
            $scope.runningEvents.push(event);
        }
    }

    $scope.upcomingevents=function(event){
    
        var q = new Date();
        var m = q.getMonth()+1;
        var d = q.getDate();
        var y = q.getFullYear();
        var date=y + "-" + m + "-" + d;
        var ndate= event.date;
        if(date<ndate)
        {
            $scope.upcomingtitle='Upcoming Events';
            $scope.upcomingEvents.push(event);
        }
    }
    
    $http.get('/data/events.json').then(successCallback, errorCallback);
    function successCallback( data ){
        $scope.events = data.data;
        $scope.len= $scope.events.length;
        //console.log($scope.len);
    }
    function errorCallback(error){
        console.log('No Event Found');
    }
}]);