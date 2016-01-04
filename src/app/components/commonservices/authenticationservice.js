angular
  .module('skoolforum')
  .service('AuthenticationService',['$q',function($q){

            var vm = this;

            var deffered = $q.defer();

            //initialize the parse
            vm.init = function(){
              Parse.initialize("OXJqhw8TXb4dgsQXw3uTo3IxYGdL1pj0qjV0g0vW","B6fAQ3HcASbpb4hKrAVoVgMy5p2U5CGe3CXLGJPg");
            }

            //parse service for login
            vm.login = function(username,password){
              Parse.User.logIn(username,password, {
                    success: function(user) {
                    deffered.resolve(user);
                    },
                    error: function(user, error) {
                      console.log("Error logging in:"+error.message);
                      deffered.reject(error);
                    }
                  });

                  return deffered.promise;
            }

            //Destroy the session
            vm.logOut = function(){
              Parse.User.logOut();

            }


            vm.currentUser = function(){
              return Parse.User.current();
            }

          // !! converts object to boolean
            vm.IsloggedIn =function(){
              return !!vm.currentUser();
            }

            vm.init();

}]);
