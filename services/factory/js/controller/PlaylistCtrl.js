angular.module('app')
        .controller('PlaylistCtrl',['$scope','Playlist',function($scope, Playlist){
          $scope.playlist = Playlist.listar();
        }])
