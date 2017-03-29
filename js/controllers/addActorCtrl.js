app.controller('addActorCtrl', function($scope, actorsService){
        $scope.addActor = function(){
            console.log($scope.actor);
            actorsService.addActor($scope.actor)
            .success(function(data){
                $scope.status = 'Usuario creado';
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
        }
});