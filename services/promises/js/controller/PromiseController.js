angular.module('app')
      .controller('PromiseController',['$scope','PromiseService',function($scope, PromiseService){
          PromiseService.checkServer().then(function(r){
            $scope.status = r;
          });

          PromiseService.checkHTTP().then(function(result){
            $scope.http = result;
          },function(err){
            $scope.http = err;
          });

          PromiseService.checkDB().then(function(result){
            $scope.db = result;
          },function(err){
            $scope.db = err;
          });


          PromiseService.checkSSL().then(function(result){
            $scope.ssl = result;
          },function(err){
            $scope.ssl = err;
          },function(notif){
            $scope.notif = notif
          });
      }]);
