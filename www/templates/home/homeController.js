
  angular.module('LegendSingapore.home.ctrl', [])

  .controller('HomeController', function ($scope, $ionicModal, $ionicPlatform,ngAudio,$state,$cordovaVibration) {

    $scope.messages = {
      titleMain: '',
      titleMain1: '',
      titleMain2: ''
    };

    $scope.messages.success = true;

    setTimeout(function () {
      $scope.messages.success = false;
      $scope.messages.success1 = true;
    }, 2500);

    setTimeout(function () {
      $scope.messages.success1 = false;
      $scope.messages.success2 = true;
    }, 5000);

    $scope.openHomePage =function () {
      $scope.messages.success2 = false;
    };


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
