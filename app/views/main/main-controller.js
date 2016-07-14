pacBioTestProject.controller('main-controller', function ($scope, $state) {

    $scope.currentState = $state.current;
    
    $scope.numbers = [1,2,3,4,6,7,8,9,10,11,12];
    
    $scope.letters = ["A","B","C","D","E","F","G","H"];

});