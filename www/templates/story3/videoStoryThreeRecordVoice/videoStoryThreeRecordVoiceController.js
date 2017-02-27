angular.module('LegendSingapore.videoStoryThreeRecordVoice.ctrl', [])
  .controller('videoStoryThreeRecordVoiceController',  ['$scope', 'ngAudio', function($scope,ngAudio) {


    // START ------ Playlist of voices for characters
    $scope.duration = 100;
    $scope.tracks =
    {


      audio1_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-1.mp3'),
      audio2_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-2.mp3'),
      audio3_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-3.mp3'),
      audio4_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-4.mp3'),
      audio5_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-5.mp3'),
      audio6_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-6.mp3'),
      audio7_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-7.mp3'),
      audio8_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-8.mp3'),
      audio9_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-9.mp3'),
      audio10_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-10.mp3'),
      audio11_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-11.mp3'),
      audio12_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-12.mp3'),
      audio13_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-13.mp3'),
      audio14_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-14.mp3'),

      audioIntro1_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-Intro 1.mp3'),
      audioIntro2_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-Intro 2.mp3'),
      audioIntro3_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-Intro 3.mp3'),
      audioIntro4_s3: ngAudio.load('templates/story3/videoStoryThreeRecordVoice/audio_s3/RM-Intro 4.mp3')
    };

    $scope.track.volume = 1;
    // $scope.track.play();
    // END ------ Playlist of voices for characters

    //Start ------ Poems_story3___

    $scope.track.volume = 1;
    // $scope.track.play();
    $scope.duration = 100;
    $scope.poems =[{
      poem1_au:  ngAudio.load('www/templates/story3/videoStoryThreeRecordVoice/pantun/Pantun-RM-1.mp3'),
      showContent1: false,
      poem_cont: 'Pisang emas di atas dulang, \n  Mari dimakan tepi istana; \n Radin Mas bersedih bukan kepalang, \n Ayahnya hilang entah ke mana.'
    },{
      poem1_au: ngAudio.load('www/templates/story3/videoStoryThreeRecordVoice/pantun/Pantun-RM-2.mp3'),
      showContent1: false,
      poem_cont: 'Luka dijari terasa pedih, \n  Bila terkait dicuck duri; \n        Radin Mas merintih menanggung sedih, \n Dipaksa berkahwin  Si ibu tiri.'
    },{
      poem1_au: ngAudio.load('www/templates/story3/videoStoryThreeRecordVoice/pantun/Pantun-RM-3.mp3'),
      showContent1: false,
      poem_cont: 'Bahtera berlayar dari muara, \n          Hendak berlayar ke Tanah Jawa;  \n   Ayah bersedih duka nan lara, \n  Radin Mas berkorban tergadai nyawa.'
    }];
    // END ------ Poems_story3___

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
