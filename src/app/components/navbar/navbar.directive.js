(function() {
   'use strict';

   angular
     .module('skoolforum')
     .directive('navbar', navbar);

   /** @ngInject */
   function navbar() {
     var directive = {
       restrict: 'E',
       templateUrl: 'app/components/navbar/navbar.html',
       controller: NavbarController,
       controllerAs: 'vm',
       replace: true,
       bindToController: true
     };

     return directive;

     /** @ngInject */
     function NavbarController(AuthenticationService,$state) {
       var vm = this;

       vm.IsloggedIn = function(){
          return AuthenticationService.IsloggedIn();
       }

       vm.logOut = function(){
          AuthenticationService.logOut();
          $state.go('login');
       }


     }
   }

 })();
