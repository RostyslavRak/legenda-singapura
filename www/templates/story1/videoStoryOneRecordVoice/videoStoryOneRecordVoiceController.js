angular.module('LegendSingapore.videoStoryOneRecordVoice.ctrl', [])
  .controller('videoStoryOneRecordVoiceController',  ['$scope', 'ngAudio', function($scope, ngAudio) {


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

  $scope.reset = function() {
    // Clean up scope before destorying
    $scope.formParams = {};
    $scope.stage = "";
  };
    // function play() {
    //   var audio = document.getElementById("audio1");
    //   audio.play();
    // };


  }]);
