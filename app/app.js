var pacBioTestProject = angular.module('pacBioTestProject', [
    'ui.router',
    'd3'
]);

// Routes config
pacBioTestProject.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            views: {
                'content': {
                    templateUrl: 'app/views/main/main.html',
                    controller: 'main-controller'
                }
            }
        })
});