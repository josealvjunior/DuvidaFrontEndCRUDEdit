angular.module('app.controllers')
    .controller('ProjectNotesEditController',
    ['$scope','$location','$routeParams','ProjectNotes',
        function($scope,$location,$routeParams, ProjectNotes){
        $scope.ProjectNotes = ProjectNotes.get({noteId: $routeParams.noteId});

        $scope.save = function () {
            if($scope.form.$valid){
                ProjectNotes.update({noteId: $routeParams.noteId},$scope.projectNotes,function(){
                    $location.path('/projectNotes');
                });
            }
        }
    }]);