angular.module('LegendSingapore.videoStoryOneRecordVoice.ctrl', [])
  .controller('videoStoryOneRecordVoiceController', ['$scope', 'ngAudio', '$ionicPlatform', 'Sounds', function ($scope, ngAudio, $ionicPlatform, Sounds) {

    $scope.cordova = {loaded: false};
    $ionicPlatform.ready(function () {
      $scope.$apply(function () {
        $scope.cordova.loaded = true;
      });
    });

    $scope.play = function (x) {
      console.log('play', x);
      Sounds.play(x);
    };

    $scope.record = function () {
      navigator.device.capture.captureAudio(function (e) {
          console.log('captureSuccess');
          console.dir(e);
          $scope.sound.file = e[0].localURL;
          $scope.sound.filePath = e[0].fullPath;
        }, function (e) {
          console.log('captureError', e);
        }, {duration: 10});
    };

    $scope.duration = 100;
    $scope.tracks =
      {
        audio1: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU-1.mp3'),
        audio2: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU-2.mp3'),
        audio3: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU-3.mp3'),
        audio4: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU-4.mp3'),
        audio5: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU-5.mp3'),
        audio6: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU-6.mp3'),
        audio7: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU-7.mp3'),
        audio8: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU-8.mp3'),
        audio9: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU-9.mp3'),
        audio10: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU-10.mp3'),
        audio11: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU-11.mp3'),
        audio12: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU-12.mp3'),
        audio13: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU-13.mp3'),
        audioIntro1: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNUtama_Intro_1.mp3'),
        audioIntro2: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNUMamanda_Intro2.mp3')
      };

    $scope.track.volume = 1;
    // $scope.track.play();
    $scope.duration = 100;
    $scope.poems = [{
      poem1_au: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-1.mp3'),
      showContent1: false,
      poem_cont: 'Pulaunya indah berpasir putih,\n Namanya Temasek haluan dituju; \n Sang Nila Utama semakin gigih, \n Hendak membuka negara baharu.'
    }, {
      poem1_au: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-2.mp3'),
      showContent1: false,
      poem_cont: 'Hendak bermalam di Kota Kluang, \n        Berjalan jauh bukan kepalang; \n    Semua barangan telah dibuang, \n        Namun badai menjadi penghalang.'
    }, {
      poem1_au: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-3.mp3'),
      showContent1: false,
      poem_cont: 'Pergi berburu di tengah hutan, \n  Membawa bersama barang keperluan; \n  Mahkota dibuang di tengah lautan, \n  Bahtera selamat  ke tempat tujuan.'
    }];


    $scope.formParams = {};
    $scope.stage = "";
    $scope.formValidation = false;
    $scope.toggleObjView = false;

    $scope.formParams = {
      cCEmail: '',
      cCEmailList: []
    };

    // Navigation functions
    $scope.next = function (stage) {
      //$scope.direction = 1;
      //$scope.stage = stage;

      $scope.formValidation = true;

      if ($scope.multiStepForm.$valid) {
        $scope.direction = 1;
        $scope.stage = stage;
        $scope.formValidation = false;
      }
    };

    $scope.back = function (stage) {
      $scope.direction = 0;
      $scope.stage = stage;
    };

    // CC email list functions
    $scope.addCCEmail = function () {
      $scope.rowId++;

      var email = {
        email: $scope.formParams.cCEmail,
        row_id: $scope.rowId
      };

      $scope.formParams.cCEmailList.push(email);

      $scope.formParams.cCEmail = '';
    };

    $scope.removeCCEmail = function (row_id) {
      for (var i = 0; i < $scope.formParams.cCEmailList.length; i++) {
        if ($scope.formParams.cCEmailList[i].row_id === row_id) {
          $scope.formParams.cCEmailList.splice(i, 1);
          break;
        }
      }
    };

    $scope.reset = function () {
      // Clean up scope before destorying
      $scope.formParams = {};
      $scope.stage = "";
    };
    // function play() {
    //   var audio = document.getElementById("audio1");
    //   audio.play();
    // };


  }]);
