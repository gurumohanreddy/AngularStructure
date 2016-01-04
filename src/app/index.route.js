(function() {
   'use strict';

   angular
     .module('skoolforum')
     .config(routerConfig);

   /** @ngInject */
   function routerConfig($stateProvider, $urlRouterProvider) {
     $stateProvider
       .state('login', {
         url: '/',
         templateUrl: 'app/login/login.html',
         controller: 'LoginController',
         controllerAs: 'vm',
         authenticate:false
       })
       .state('home', {
         url: '/home',
         templateUrl: 'app/components/home/home.html',
         controller: 'HomeController',
         controllerAs: 'vm',
         authenticate: true
       })
       .state('students', {
         url: '/students',
         templateUrl: 'app/components/students/students.html',
         controller: 'StudentController',
         controllerAs: 'vm',
         authenticate: true
       });

     $urlRouterProvider.otherwise('/');
   }

 })();
