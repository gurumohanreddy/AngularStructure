(function() {
   'use strict';

   angular
     .module('skoolforum')
     .run(runBlock);

   /** @ngInject */
   function runBlock($rootScope, $state, AuthenticationService) {

         $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
             if (toState.authenticate && !AuthenticationService.IsloggedIn()){
               $state.transitionTo("login");
               event.preventDefault();
             }

             if(AuthenticationService.IsloggedIn() && toState.name === 'login' ){
                $state.transitionTo("home");
                event.preventDefault();
             }

         });

   }

 })();
