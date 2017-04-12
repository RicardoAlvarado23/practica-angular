angular.module('app')
        .controller('PlaylistMetodosCtrl',['$scope','Playlist',function($scope,Playlist){
          $scope.playlist = Playlist.listar();
          $scope.borrar = function(id){
            Playlist.borrar(id);
          }
        }]);
