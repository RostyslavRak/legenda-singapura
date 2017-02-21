
  angular.module('LegendSingapore.home.ctrl', [])
  .controller('HomeController', function ($scope, $ionicPlatform,ngAudio,$state,$cordovaVibration) {

    $scope.duration = 100;

    $scope.tracks = [
      {
        audio: ngAudio.load('audio/The_Master.mp3')
      }
    ];
    $scope.track = $scope.tracks[0].audio;
    $scope.track.volume = 0.01;
     // $scope.track.play();

    $scope.goHome = function () {
      $state.go('home');
      console.log("vibrating");
      $cordovaVibration.vibrate($scope.duration);
    }



  });
