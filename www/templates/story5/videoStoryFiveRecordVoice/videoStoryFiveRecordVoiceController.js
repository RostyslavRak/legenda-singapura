angular.module('LegendSingapore.videoStoryFiveRecordVoice.ctrl', [])
  .controller('videoStoryFiveRecordVoiceController',   ['$scope', 'ngAudio', function($scope,ngAudio) {



    // START ------ Playlist of voices for characters
    $scope.duration = 100;
    $scope.tracks =
    {
      audio1_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-1.mp3'),
      audio2_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-2.mp3'),
      audio3_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-3.mp3'),
      audio4_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-4.mp3'),
      audio5_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-5.mp3'),
      audio6_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-6.mp3'),
      audio7_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-7.mp3'),
      audio8_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-8.mp3'),
      audio9_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-9.mp3'),
      audio10_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-10.mp3'),
      audio11_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-11.mp3'),
      audio12_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-12.mp3'),
      audio13_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-13.mp3'),
      audio14_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-14.mp3'),
      audio15_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-15.mp3'),

      audioIntro1_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-Intro 1.mp3'),
      audioIntro2_s5: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/audio_s5/SDT-Intro 2.mp3')
    };

    $scope.track.volume = 1;
    // $scope.track.play();
    // END ------ Playlist of voices for characters

    // START ------ Poems_story4___
    $scope.duration = 100;
    $scope.poems =[{


      poem1_au:  ngAudio.load('templates/story5/videoStoryFiveRecordVoice/pantun/Pantun-B-1.mp3'),
      showContent: false,
      poem_cont: ' Pagi hari memasang lukah,\n Lukah dipasang  di tepi titi; \n   Rakyat terkejut pantai berdarah, \n    Diserang todak tiada berhenti.'
    },{
      poem1_au: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/pantun/Pantun-B-2.mp3'),
      showContent: false,
      poem_cont: 'Anak Merbah di atas dahan,\n  Melihat angsa di dalam reban; \n  Todak menyerang tanpa kasihan, \n Rakyat jelata menjadi korban.'
    },{
      poem1_au: ngAudio.load('templates/story5/videoStoryFiveRecordVoice/pantun/Pantun-B-3.mp3'),
      showContent: false,
      poem_cont: 'Sejuk-sejuk air telaga, \n  Boleh diminum dibuat ubat; \n Nadim yang bijak akal geliga, \n   Todak dihalang negara diselamat.'
    }];

    // END ------ Poems_story4___

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

}]);
