angular.module('app')
    .factory('PromiseService', ['$q', function($q) {
        var checkServer = function() {
            var def = $q.defer();
            setTimeout(function() {
                def.resolve('Online')
            }, 2000);
            return def.promise;
        };

        var checkHTTP = function() {
            var def = $q.defer();
            setTimeout(function() {
                if (Math.floor(Math.random() * 100) > 50) {
                    def.resolve('Online');
                } else {
                    def.reject('El servicio no esta disponible');
                }
            }, 5000);
            return def.promise;
        };

        var checkDB = function() {
            var def = $q.defer();
            setTimeout(function() {
                if (Math.floor(Math.random() * 100) > 50) {
                    def.resolve('Online');
                } else {
                    def.reject('El servicio no esta disponible');
                }
            }, 3000);
            return def.promise;
        }

        var checkSSL = function(){
          var def = $q.defer();
          setTimeout(function(){
            def.notify('Comprobación de conexión segura iniciada');
              if( Math.floor(Math.random() * 100 ) > 50){
                def.notify('Las conxiones seguras están habilitadas');
                def.resolve('Online');
              }else{
                def.notify('Las conexiones seguras están desactivadas');
                def.reject('El servicio no esta disponible');
              }
          },4000);
          return def.promise;
        };

        return {
          checkServer : checkServer,
          checkSSL : checkSSL,
          checkDB : checkDB,
          checkHTTP : checkHTTP
        }
    }]);
