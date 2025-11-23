// Navigation Controller
luxonApp.controller('NavController', ['$scope', '$location', function($scope, $location) {
    $scope.mobileMenuOpen = false;

    $scope.toggleMenu = function() {
        $scope.mobileMenuOpen = !$scope.mobileMenuOpen;
    };

    $scope.isActive = function(route) {
        return $location.path() === route;
    };

    // Close mobile menu on route change
    $scope.$on('$routeChangeSuccess', function() {
        $scope.mobileMenuOpen = false;
    });
}]);

// Home Controller
luxonApp.controller('HomeController', ['$scope', function($scope) {
    // Home page logic
}]);

// Services Controller
luxonApp.controller('ServicesController', ['$scope', function($scope) {
    // Services page logic
}]);

// Portfolio Controller
luxonApp.controller('PortfolioController', ['$scope', function($scope) {
    $scope.filter = 'all';

    $scope.projects = [
        {
            title: '8-Camera Security System',
            neighborhood: 'Hyde Park',
            description: '8 Reolink cameras covering all entry points, integrated with existing WiFi network',
            systems: ['Security Cameras', 'NVR', 'Night Vision'],
            category: 'security'
        },
        {
            title: 'Smart Doorbell & Lighting Integration',
            neighborhood: 'Mt. Lookout',
            description: 'Video doorbell with smart lighting control for enhanced security and convenience',
            systems: ['Video Doorbell', 'Smart Lighting'],
            category: 'lighting'
        },
        {
            title: 'Complete Home Automation',
            neighborhood: 'Oakley',
            description: 'Whole-home integration including security, lighting, and climate control',
            systems: ['Security Cameras', 'Smart Locks', 'Lighting', 'Thermostat'],
            category: 'automation'
        },
        {
            title: '12-Camera Luxury System',
            neighborhood: 'Montgomery',
            description: 'Premium security with PTZ cameras, smart locks, and whole-home automation',
            systems: ['Security Cameras', 'PTZ', 'Smart Locks', 'Automation'],
            category: 'automation'
        },
        {
            title: 'Perimeter Security Installation',
            neighborhood: 'Indian Hill',
            description: '10 outdoor cameras with advanced night vision covering entire property perimeter',
            systems: ['Security Cameras', 'Night Vision', 'NVR'],
            category: 'security'
        },
        {
            title: 'Smart Lighting & Climate Control',
            neighborhood: 'Blue Ash',
            description: 'Whole-home lighting automation with smart thermostat integration',
            systems: ['Smart Lighting', 'Thermostat', 'Voice Control'],
            category: 'lighting'
        }
    ];

    $scope.setFilter = function(category) {
        $scope.filter = category;
    };

    $scope.filterProjects = function(project) {
        if ($scope.filter === 'all') {
            return true;
        }
        return project.category === $scope.filter;
    };
}]);

// About Controller
luxonApp.controller('AboutController', ['$scope', function($scope) {
    // About page logic
}]);

// Contact Controller
luxonApp.controller('ContactController', ['$scope', '$http', function($scope, $http) {
    $scope.formData = {
        name: '',
        email: '',
        phone: '',
        zipcode: '',
        projectType: '',
        message: ''
    };

    $scope.formStatus = {
        submitting: false,
        success: false,
        error: false,
        message: ''
    };

    $scope.submitForm = function() {
        if ($scope.contactForm.$valid) {
            $scope.formStatus.submitting = true;
            $scope.formStatus.success = false;
            $scope.formStatus.error = false;

            $http.post('/api/contact', $scope.formData)
                .then(function(response) {
                    $scope.formStatus.submitting = false;
                    $scope.formStatus.success = true;
                    $scope.formStatus.message = response.data.message;

                    // Reset form
                    $scope.formData = {
                        name: '',
                        email: '',
                        phone: '',
                        zipcode: '',
                        projectType: '',
                        message: ''
                    };
                    $scope.contactForm.$setPristine();
                    $scope.contactForm.$setUntouched();
                })
                .catch(function(error) {
                    $scope.formStatus.submitting = false;
                    $scope.formStatus.error = true;
                    $scope.formStatus.message = error.data.message || 'An error occurred. Please try again.';
                });
        }
    };
}]);
