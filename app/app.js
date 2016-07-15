'use strict';

angular.module('pacBioTestProject', [
    'ui.router',
    'mainCtrl',
    'dataService',
    'LocalStorageModule'
    ]).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    // route for the home page
        .state('main', {
        url: '/',
        views: {
            'content': {
                templateUrl: '/app/views/pages/main.html',
                controller: 'mainCtrl',
                controllerAs: 'main'
            }
        }
    });

    // if route is not found
    $urlRouterProvider.otherwise('/');

    // set our apt our app to have pretty URLS
    $locationProvider.html5Mode(true);
});