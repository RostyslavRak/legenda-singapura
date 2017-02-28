
  angular.module('LegendSingapore.home.ctrl', [])

  .controller('HomeController', function ($scope, $ionicModal, $ionicPlatform,ngAudio,$state,$cordovaVibration) {

    $scope.messages = {
      titleMain: 'HEllo1',
      titleMain1: 'Hello2'
    };
    setTimeout(function () {
      $scope.messages.success = true;
    }, 1500);

    setTimeout(function () {
      $scope.messages.success = false;
    }, 3500);

    setTimeout(function () {
      $scope.messages.success1 = true;
    }, 3500);

    setTimeout(function () {
      $scope.messages.success1 = false;
    }, 4500);


    $scope.duration = 100;
    $scope.tracks =
      {
        audio: ngAudio.load('audio/Home1.mp3')
      };
    $scope.track = $scope.tracks.audio;
    $scope.track.volume = 0.03;
     $scope.track.play();


    $scope.goHome = function () {
      $state.go('home');
      // console.log("vibrating");
      // $cordovaVibration.vibrate($scope.duration);
    };


      $ionicModal.fromTemplateUrl('templates/info/info.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
      });




  });
