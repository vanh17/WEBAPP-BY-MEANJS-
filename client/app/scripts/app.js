'use strict';

/**
 * @ngdoc overview
 * @name newswebsiteApp
 * @description
 * # newswebsiteApp
 *
 * Main module of the application.
 */
// var app = angular.module('newswebsiteApp', [
//     //'restangular',
//     'ngRoute'
//   ]);
//   app.controller(
//     'ArticleCtrl', 
//     [
//         '$scope',
//         '$http',
//         function ($scope, $http) {
//             $scope.articles = [];
//             $scope.init = function() {
//               $http.get('http://localhost:3000/article').then(function(result) {
//                  $scope.articles = result.data;
//               });
//             }
//             $scope.init();
//         }
//     ]
//   );
//   app.config(['$routeProvider', 'RestangularProvider', function ($routeProvider, RestangularProvider) {
//     console.log("The code passed this point");
//     $RestangularProvider.setBaseUrl('http://localhost:3000');
//     $routeProvider.
//       when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'ArticleCtrl'
//       }).
//       when('/article', {
//         templateUrl: 'views/article.html',
//         controller: 'ArticleCtrl'
//       }).
//       otherwise({
//         redirectTo: '/'
//       });
//   }]);
//   app.factory('ArticleRestangular', function(Restangular) {
//     return Restangular.withConfig(function(RestangularConfigurer) {
//       RestangularConfigurer.setRestangularFields({
//         id: '_id'
//       });
//     });
//   });
//   app.factory('Article', function(ArticleRestangular) {
//     return ArticleRestangular.service('article');
//   });
var app = angular.module('newswebsiteApp', ['ngRoute']);
    app.controller(
      'ArticleCtrl', 
      [
         '$scope', 
         '$http', 
         function ($scope, $http) {
                $scope.articles = [];
                $scope.init = function() {
                   $http.get('http://localhost:3000/article').then(function(result) {
                     $scope.articles = result.data;
                   });
                }
                $scope.init();
         }
      ]
    );
    function specifyRoutes($routeProvider) {
      $routeProvider
         .when('/article', {templateUrl: 'views/article.html', controller: 'ArticleCtrl'}).
         otherwise({redirectTo: '/'});        
    }
    app.config(specifyRoutes);
