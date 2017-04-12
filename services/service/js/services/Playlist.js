angular.module('app')
    .service('Playlist', [function() {
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
        this.listar = function(){return playList;};
        this.borrar = function(id){playList.splice(id,1);};
    }])
