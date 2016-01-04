  angular
    .module('skoolforum')
    .controller('LoginController', ['AuthenticationService','$state',function(AuthenticationService,$state){
          var vm = this;

          vm.enter = function(){
            AuthenticationService.login(vm.username,vm.password)
            .then(
                function(user){
                  console.log("Logged in as :"+user.get("username"));
                  vm.username = "";
                  vm.password = "";
                  $state.go('home');
                },
                function(error){
                    //error
                });

          }



    }]);
