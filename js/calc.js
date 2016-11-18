 var app = angular.module("Calculator", ['readableTime']);
 app.controller("calc", function($scope) {
     // Default values for selects and inputs
     $scope.frags = $scope.sulfur = $scope.hqm = $scope.slots = 1;
     $scope.time_taken = 0;
     $scope.sulfurChange = function() {
         $scope.wood = (2.5 * $scope.sulfur) / $scope.slots;
     };
     $scope.fragsChange = function() {
         $scope.wood = (5 * $scope.frags) / $scope.slots;
     };
     $scope.hqmChange = function() {
         $scope.wood = (10 * $scope.hqm) / $scope.slots;
     };
     $scope.charcoalChange = function() {
         $scope.wood = ($scope.charcoal * 0.75);
     }
     $scope.woodChange = function() {
         $scope.sulfur = ($scope.slots * $scope.wood) / 2.5;
         $scope.frags = ($scope.slots * $scope.wood) / 5;
         $scope.hqm = ($scope.slots * $scope.wood) / 10;
     };
     $scope.$watch("wood", function() { //Every time that wood changes
         $scope.charcoal = ($scope.wood / 0.75);
         $scope.time_taken = 2 * $scope.wood;
     });
 });
