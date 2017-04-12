angular.module('app')
      .factory('Playlist',[function(){
        var playList = [
          'American Idiot',
          '21 Guns',
          'Wake up when septembers end',
          'Boulevard Of Broked Dreams',
          'Revolution Radio',
          'Still Breathing',
          'When I Come Around',
          'Bang Bang'
        ];
        var listar =  function(){return playList;};
        var borrar = function(id){ playList.splice(id,1);};
        return{
          listar : listar,
          borrar : borrar
        };
      }]);
