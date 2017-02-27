angular.module('LegendSingapore.videoStoryTwoRecordVoice.ctrl', [])
  .controller('videoStoryTwoRecordVoiceController',  ['$scope', 'ngAudio', function($scope,ngAudio) {

    // START ------ Playlist of voices for characters
    $scope.duration = 100;
    $scope.tracks =
    {
      audio1_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-1.mp3'),
      audio2_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-2.mp3'),
      audio3_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-3.mp3'),
      audio4_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-4.mp3'),
      audio5_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-5.mp3'),
      audio6_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-6.mp3'),
      audio7_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-7.mp3'),
      audio8_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-8.mp3'),
      audio9_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-9.mp3'),
      audio10_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-10.mp3'),
      audio11_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-11.mp3'),
      audio12_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-12.mp3'),
      audio13_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-13.mp3'),
      audio14_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB-14.mp3'),
      audioIntro1_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_Intro_1.mp3'),
      audioIntro2_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_Intro_2.mp3')
    };

    $scope.track.volume = 1;
    // $scope.track.play();
    // END ------ Playlist of voices for characters
    $scope.duration = 100;
    $scope.poems =[{
      poem1_au:  ngAudio.load('templates/story2/videoStoryTwoRecordVoice/pantun/Pantun-PB-1.mp3'),
      showContent: false,
      poem_cont: 'Pergi memanah di Tanjung Ara,\n Busar dibalut si kain baldu; \n Mawar dan Melur dua bersaudara, \n Ke mana sahaja bersama selalu.'
    },{
      poem1_au: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/pantun/Pantun-PB-2.mp3'),
      showContent: false,
      poem_cont: 'Sakit terasa tidak terperi, \n   Jari terketuk tukul dan pahat; \n    Melur ditangkap dibawa lari, \n    Mawar berazam adik  diselamat.'
    },{
      poem1_au: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/pantun/Pantun-PB-3.mp3'),
      showContent: false,
      poem_cont: 'Berenang-renang ikan tenggiri, \n  Mengikut arus arah utara \n  Kasih saudara kekal abadi, \n  Menjadi pulau dua bersaudara.'
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

  $scope.reset = function() {
    // Clean up scope before destorying
    $scope.formParams = {};
    $scope.stage = "";
  };

}]);
