angular
  .module('skoolforum')
  .factory('StudentResource',['$resource',function($resource){



    var data = $resource('https://api.parse.com/1/classes/Student/:id',{id:"@"}, {
              save: {
                  method: 'POST',
                  headers: {
                   'X-Parse-Application-Id': 'OXJqhw8TXb4dgsQXw3uTo3IxYGdL1pj0qjV0g0vW',
                   'X-Parse-REST-API-Key': 'TKEZxU6JOZAsTwlpbPhAnJlstvn938KtuzNhFDCU'
                  }
        }});

        return data;

  }]);


  
