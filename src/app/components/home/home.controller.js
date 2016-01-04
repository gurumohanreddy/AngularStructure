  angular
    .module('skoolforum')
    .controller('HomeController', ['EntitiesListService',function(EntitiesListService){
        var vm = this;
        vm.entities = EntitiesListService.entityData();

  }]);
