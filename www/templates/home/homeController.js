
  angular.module('LegendSingapore.home.ctrl', [])

  .controller('HomeController', function ($scope, $ionicModal, $ionicPlatform,ngAudio,$state,$cordovaVibration) {

    $scope.duration = 100;
    $scope.tracks =
      {
        audio: ngAudio.load('audio/Home.mp3')
      };
    $scope.track = $scope.tracks.audio;
    $scope.track.volume = 0.02;
    $scope.track.play();


    $scope.goHome = function () {
      $state.go('home');
      console.log("vibrating");
      $cordovaVibration.vibrate($scope.duration);
    };
      $ionicModal.fromTemplateUrl('templates/info/info.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
      });
  });
