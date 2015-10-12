angular.module('app.controllers')
    .controller('ProjectNotesListController',['$scope','ProjectNotes','$routeParams',function($scope,ProjectNotes,$routeParams){
        $scope.projectNotes = ProjectNotes.query({
            id: $routeParams.id
        });
    }]);