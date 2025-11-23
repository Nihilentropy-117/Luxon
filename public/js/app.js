// Initialize AngularJS app
var luxonApp = angular.module('luxonApp', ['ngRoute']);

// Configure routes
luxonApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'HomeController'
        })
        .when('/services', {
            templateUrl: '/views/services.html',
            controller: 'ServicesController'
        })
        .when('/portfolio', {
            templateUrl: '/views/portfolio.html',
            controller: 'PortfolioController'
        })
        .when('/about', {
            templateUrl: '/views/about.html',
            controller: 'AboutController'
        })
        .when('/contact', {
            templateUrl: '/views/contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/'
        });

    // Enable HTML5 mode (remove #! from URLs if server is configured)
    // $locationProvider.html5Mode(true);
}]);

// Scroll to top on route change
luxonApp.run(['$rootScope', '$window', function($rootScope, $window) {
    $rootScope.$on('$routeChangeSuccess', function() {
        $window.scrollTo(0, 0);
    });
}]);
