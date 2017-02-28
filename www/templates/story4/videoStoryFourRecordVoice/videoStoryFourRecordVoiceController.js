angular.module('LegendSingapore.videoStoryFourRecordVoice.ctrl', [])
  .controller('videoStoryFourRecordVoiceController',  ['$scope', 'ngAudio', function($scope,ngAudio) {

    // START ------ Playlist of voices for characters
    $scope.duration = 100;
    $scope.countQuestion = 0;

    $scope.tracks =
    {
      audio1_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-1.mp3'),
      audio2_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-2.mp3'),
      audio3_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-3.mp3'),
      audio4_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-4.mp3'),
      audio5_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-5.mp3'),
      audio6_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-6.mp3'),
      audio7_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-7.mp3'),
      audio8_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-8.mp3'),
      audio9_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-9.mp3'),
      audio10_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-10.mp3'),
      audio11_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-11.mp3'),
      audio12_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-12.mp3'),
      audio13_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-13.mp3'),
      audio14_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-14.mp3'),
      audio15_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-15.mp3'),
      audio16_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-16.mp3'),
      audio17_s4: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/audio_s4/B-17.mp3'),

      audioIntro1_s4: ngAudio.load('templates/story4/videoStoryFourRecordVoice/audio_s4/B-Intro 1.mp3'),
      audioIntro2_s4: ngAudio.load('templates/story4/videoStoryFourRecordVoice/audio_s4/B-Intro 2.mp3')
    };

    $scope.track.volume = 1;
    // $scope.track.play();
    // END ------ Playlist of voices for characters


    // START ------ Poems_story4___
    $scope.duration = 100;
    $scope.poems =[{

      poem1_au:  ngAudio.load('templates/story4/videoStoryFourRecordVoice/pantun/Pantun-SDT-1.mp3'),
      showContent: false,
      poem_cont: 'Anak busut di tengah bendang,\n  Semut api belajar memanjat; \n Gergasi takut dibunuh Badang, \n Berjanji penuhi segala hajat.'
    },{
      poem1_au: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/pantun/Pantun-SDT-2.mp3'),
      showContent: false,
      poem_cont: 'Keris campuran tujuh besi,\n  Buat hadiah putera raja; \n    Badang memakan muntah gergasi, \n  Menjadi kuat gagah perkasa.'
    },{
      poem1_au: ngAudio.load(' templates/story4/videoStoryFourRecordVoice/pantun/Pantun-SDT-3.mp3'),
      showContent: false,
      poem_cont: ' Sungguh tinggi terbang Si Helang, \n  Tingginya sampai jauh ke awan; \n   Gagahnya Badang sudah terbilang, \n  Digeruni musuh ditakuti lawan.'
    }];

    // END ------ Poems_story4___

    <!--START         Comprehension       questions -->
    $scope.pantun1 = [{
      done: false,
      audio: ngAudio.load('templates/story4/videoStoryFourRecordVoice/comprehension/Comprehension-B-Q1.mp3'),
      question: "Apakah yang dilakukan oleh Badang setiap hari?",
      answers: [
        {
          done: false,
          title: "A",
          answer: "Memasang lukah. ",
          success: true
        },
        {
          done: false,
          title: "B",
          answer: "Mengangkat batu.",
          success: false
        },
        {
          done: false,
          title: "C",
          answer: "Membuat perangkap.",
          success: false
        }]
    },
      {
        done: false,
        audio: ngAudio.load('templates/story4/videoStoryFourRecordVoice/comprehension/Comprehension-B-Q2.mp3'),
        question: "Mengapakah Badang menjadi marah?",
        answers: [
          {
            done: false,
            title: "A",
            answer: "Ikan yang ditangkap telah mati.",
            success: false
          },
          {
            done: false,
            title: "B",
            answer: "Ikan di dalam lukahnya terlepas ke sungai",
            success: false
          },
          {
            done: false,
            title: "C",
            answer: "Ikan yang ditangkap telah dimakan seseorang.",
            success:  true
          }]
      },
      {
        done: false,
        audio: ngAudio.load('templates/story4/videoStoryFourRecordVoice/comprehension/Comprehension-B-Q3.mp3'),
        question: ". Bagaimanakah gergasi itu melepaskan diri?",
        answers: [
          {
            done: false,
            title: "A",
            answer: "Gergasi  itu berjanji tidak akan mengganggu Badang.",
            success: false
          },
          {
            done: false,
            title: "B",
            answer: "Gergasi itu berjanji akan membuat Badang menjadi kuat.",
            success:  true
          },
          {
            done: false,
            title: "C",
            answer: "Gergasi itu berjanji tidak akan memakan ikan-ikan tangkapan Badang.",
            success: false
          }]
      },
      {
        done: false,
        audio: ngAudio.load('templates/story4/videoStoryFourRecordVoice/comprehension/Comprehension-B-Q4.mp3'),
        question: "Badang dilantik menjadi apa?",
        answers: [
          {
            done: false,
            title: "A",
            answer: "Nelayan",
            success: false
          },
          {
            done: false,
            title: "B",
            answer: "Pahlawan",
            success: false
          },
          {
            done: false,
            title: "C",
            answer: "Hulubalang",
            success:  true
          }]
      }];
    <!--END         Comprehension       questions -->


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
