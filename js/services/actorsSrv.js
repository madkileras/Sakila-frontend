app.service('actorsService', function($http){
        var urlBase = 'http://localhost:8080/SAKILA-BACKEND/actors';
        this.getActors = function(){
            return $http.get(urlBase);
        };

        this.addActor = function(actor){
            return $http.post(urlBase, actor);
        }
});
