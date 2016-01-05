  angular
    .module('skoolforum')
    .controller('StudentController',['$http',function($http){
                          var vm = this;

                          appId ='OXJqhw8TXb4dgsQXw3uTo3IxYGdL1pj0qjV0g0vW';
                          restId = 'TKEZxU6JOZAsTwlpbPhAnJlstvn938KtuzNhFDCU';

                        vm.addstudent = function(){
                              $http({
                                 method: 'POST',
                                 url: 'https://api.parse.com/1/classes/Student',
                                 headers: {'X-Parse-Application-Id': appId, 'X-Parse-REST-API-Key': restId,
                                 'Content-Type': 'application/json'},
                                 data: vm.newstudent

                              }).success(function(data){
                                 console.log(data);
                                 vm.initialize();

                              }).error(function(data){
                                 console.log(data)
                              });

                        }
                        vm.initialize = function(){
                          vm.newstudent = {};
                        }
                        vm.initialize();

}]);
