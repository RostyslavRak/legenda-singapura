
angular.module('LegendSingapore.storyOne.ctrl', []).
controller('storyOneController', ['$scope', '$ionicModal','$state', function($scope,$ionicModal,$state) {

  $scope.goStory0ne = function () {
    $state.go('story-one');
  };


  $scope.videoStop = true;
  setTimeout(function () {
    $scope.videoStop = false;
  }, 13000);

  $scope.introVideo = {
    mp4: 'templates/story1/video/S1_intro.mp4'
  };
  $scope.fullVideo = {
    mp4: 'templates/story1/video/storyOneVideo.mp4'
  }



}]);
