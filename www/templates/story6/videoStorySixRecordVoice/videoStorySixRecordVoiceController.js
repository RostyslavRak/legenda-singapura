angular.module('LegendSingapore.videoStorySixRecordVoice.ctrl', [])
  .controller('videoStorySixRecordVoiceController',  ['$scope', 'ngAudio', function($scope,ngAudio) {


    // START ------ Playlist of voices for characters
    $scope.duration = 100;
    $scope.tracks =
    {


      audio1_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-1.mp3'),
      audio2_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-2.mp3'),
      audio3_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-3.mp3'),
      audio4_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-4.mp3'),
      audio5_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-5.mp3'),
      audio6_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-6.mp3'),
      audio7_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-7.mp3'),
      audio8_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-8.mp3'),
      audio9_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-9.mp3'),
      audio10_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-10.mp3'),
      audio11_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-11.mp3'),
      audio12_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-12.mp3'),
      audio13_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-13.mp3'),
      audio14_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-14.mp3'),
      audio15_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-15.mp3'),
      audio16_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-16.mp3'),
      audio17_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-17.mp3'),
      audio20_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-18.mp3'),

      audioIntro1_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-Intro 1.mp3'),
      audioIntro2_s6: ngAudio.load('templates/story6/videoStorySixRecordVoice/audio_s6/SD-Intro 2.mp3')
    };

    $scope.track.volume = 1;
    // $scope.track.play();
    // END ------ Playlist of voices for characters


    //Start ------ Poems_story6___

    $scope.track.volume = 1;
    // $scope.track.play();
    $scope.duration = 100;
    $scope.poems =[{
      poem1_au:  ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-1.mp3'),
      showContent1: false,
      poem_cont: ' Tak dapat telinga tanduk dipulas, \n   Jangan lah ia jadi ikutan;\n   Halilintar menyerang tiada belas,\n Perahu musnah karam di lautan. '
    },{
      poem1_au: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-2.mp3'),
      showContent1: false,
      poem_cont: 'Hendak memetik buah berangan, \n  Jangan dilupa sebatang galah; \n      Singa Duyung gagah menangkis serangan, \n   Halilintar lari mengaku kalah.'
    },{
      poem1_au: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-3.mp3'),
      showContent1: false,
      poem_cont: 'Kerja yang berat menjadi ringan, \n  Bergotong-royong penuh selesa;  \n    Penduduk selamat dari serangan, \n  Pulau menjadi aman sentosa.'
    }];
    // END ------ Poems_story6___





















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
