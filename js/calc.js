 var app = angular.module("Calculator", ['readableTime']);
 app.controller("calc", function($scope) {
     // Default values for selects and inputs
     $scope.frags = $scope.sulfur = $scope.hqm = $scope.slots = 1;
     $scope.time_taken = 0;
     $scope.calculateTime = function() {
         $scope.time_taken = 2 * $scope.wood;
     }
     $scope.sulfurChange = function() {
         $scope.wood = (2.5 * $scope.sulfur) / $scope.slots;
         $scope.calculateTime();
     };
     $scope.fragsChange = function() {
         $scope.wood = (5 * $scope.frags) / $scope.slots;
         $scope.calculateTime();
     };
     $scope.hqmChange = function() {
         $scope.wood = (10 * $scope.hqm) / $scope.slots;
         $scope.calculateTime();

     };
     $scope.charcoalChange = function() {
         $scope.wood = $scope.charcoal * 0.75;
         $scope.calculateTime();
     }
     $scope.woodChange = function() {
         $scope.sulfur = ($scope.slots * $scope.wood) / 2.5;
         $scope.frags = ($scope.slots * $scope.wood) / 5;
         $scope.hqm = ($scope.slots * $scope.wood) / 10;
         $scope.charcoal = ($scope.wood / 0.75);
         $scope.calculateTime();
     };
 });
