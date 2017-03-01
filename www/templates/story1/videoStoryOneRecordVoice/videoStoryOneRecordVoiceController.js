angular.module('LegendSingapore.videoStoryOneRecordVoice.ctrl', [])
  .controller('videoStoryOneRecordVoiceController',  ['$scope','ngAudio','$state', function($scope, ngAudio,$state) {

    $scope.goStory0ne = function () {
      $state.go('story-one');
    };

    $scope.video_s1 = {
      mp4: 'templates/story1/video/s1_SN01.mp4'
    };
    $scope.video_s2 = {
      mp4: 'templates/story1/video/s1_SN02.mp4'
    };
    $scope.video_s3 = {
      mp4: 'templates/story1/video/s1_SN03.mp4'
    };
    $scope.video_s4 = {
      mp4: 'templates/story1/video/s1_SN04.mp4'
    };
    $scope.video_s5 = {
      mp4: 'templates/story1/video/s1_SN05.mp4'
    };
    $scope.video_s6 = {
      mp4: 'templates/story1/video/s1_SN06.mp4'
    };
    $scope.video_s7 = {
      mp4: 'templates/story1/video/s1_SN07.mp4'
    };
    $scope.video_s8 = {
      mp4: 'templates/story1/video/s1_SN08.mp4'
    };
    $scope.video_s9 = {
      mp4: 'templates/story1/video/s1_SN09.mp4'
    };
    $scope.video_s10 = {
      mp4: 'templates/story1/video/s1_SN10.mp4'
    };
    $scope.video_s11 = {
      mp4: 'templates/story1/video/s1_SN11.mp4'
    };
    $scope.video_s12 = {
      mp4: 'templates/story1/video/s1_SN12.mp4'
    };
    $scope.video_s13 = {
      mp4: 'templates/story1/video/s1_SN13.mp4'
    };
    $scope.video_s14 = {
      mp4: 'templates/story1/video/s1_SN14.mp4'
    };



    // START ______ Playlist of voices for characters
    $scope.duration = 100;
    $scope.countQuestion = 0;
    $scope.countPantun = 0;
    $scope.tracks =
    {
      audio1: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU_1.mp3'),
      audio2: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU_2.mp3'),
      audio3: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU_3.mp3'),
      audio4: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU_4.mp3'),
      audio5: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU_5.mp3'),
      audio6: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU_6.mp3'),
      audio7: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU_7.mp3'),
      audio8: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU_8.mp3'),
      audio9: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU_9.mp3'),
      audio10: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU_10.mp3'),
      audio11: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU_11.mp3'),
      audio12: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU_12.mp3'),
      audio13: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNU_13.mp3'),
      audioIntro1: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNUtama_Intro_1.mp3'),
      audioIntro2: ngAudio.load('templates/story1/videoStoryOneRecordVoice/audio_s1/SNUMamanda_Intro2.mp3')
    };
    // END ______ Playlist of voices for characters

    //Start ______ Poems_story1___
    $scope.track.volume = 1;
    // $scope.track.play();
    $scope.duration = 100;
    $scope.poems =[{
      done: false,
      poem1_au:  ngAudio.load('templates/story1/videoStoryOneRecordVoice/pantun/Pantun_SNU_1.mp3'),
      showContent1: true,
      poem_cont: 'Pulaunya indah berpasir putih,\n' +
      ' Namanya Temasek haluan dituju; \n ' +
      'Sang Nila Utama semakin gigih, \n ' +
      'Hendak membuka negara baharu.'
    },{
      done: false,
      poem1_au: ngAudio.load('templates/story1/videoStoryOneRecordVoice/pantun/Pantun_SNU_2.mp3'),
      showContent1: false,
      poem_cont: 'Hendak bermalam di Kota Kluang, \n ' +
      'Berjalan jauh bukan kepalang; \n ' +
      'Semua barangan telah dibuang, \n ' +
      'Namun badai menjadi penghalang.'
    },{
      done: false,
      poem1_au: ngAudio.load('templates/story1/videoStoryOneRecordVoice/pantun/Pantun_SNU_3.mp3'),
      showContent1: false,
      poem_cont: 'Pergi berburu di tengah hutan, \n' +
      'Membawa bersama barang keperluan; \n ' +
      'Mahkota dibuang di tengah lautan, \n' +
      'Bahtera selamat  ke tempat tujuan.'
    }];
//END ______ Poems_story1___




    <!--START         Comprehension       questions -->
    $scope.pantun1 = [{
      done: false,

      audio: ngAudio.load('templates/story1/videoStoryOneRecordVoice/comprehension/Comprehension-SNU-Q1.mp3'),
      question: "Apakah yang telah terjadi kepada bahtera yang mereka naiki pada awal cerita?",
      answers: [
        {
          done: false,
          title: "A",
          answer: "Bahtera hampir karam. ",
          success: true
        },
        {
          done: false,
          title: "B",
          answer: "Bahtera dipukul ombak.",
          success: false
        },
        {
          done: false,
          title: "C",
          answer: "Bahtera telah tenggelam.",
          success: false
        }]
    },
      {
        done: false,
        audio: ngAudio.load('templates/story1/videoStoryOneRecordVoice/comprehension/Comprehension-SNU-Q2.mp3'),
        question: "Apakah yang Sang Nila Utama terpaksa buang pada akhirnya?",
        answers: [
          {
            done: false,
            title: "A",
            answer: "Hartanya.",
            success: false
          },
          {
            done: false,
            title: "B",
            answer: "Mahkotanya",
            success: true
          },
          {
            done: false,
            title: "C",
            answer: "Barang-barang bahteranya.",
            success: false
          }]
      },
      {
        done: false,
        audio: ngAudio.load('templates/story1/videoStoryOneRecordVoice/comprehension/Comprehension-SNU-Q3.mp3'),
        question: "Bagaimanakah kesudahan nasib bahtera Sang Nila Utama  itu?",
        answers: [
          {
            done: false,
            title: "A",
            answer: "Karam di lautan.",
            success: false
          },
          {
            done: false,
            title: "B",
            answer: "Pecah dipukul ombak.",
            success: false
          },
          {
            done: false,
            title: "C",
            answer: "Selamat mendarat di pulau.",
            success: true
          }]
      },
      {
        done: false,
        audio: ngAudio.load('templates/story1/videoStoryOneRecordVoice/comprehension/Comprehension-SNU-Q4.mp3'),
        question: "Binatang apa yang dilihat Sang Nila Utama?",
        answers: [
          {
            done: false,
            title: "A",
            answer: "Harimau.",
            success: false
          },
          {
            done: false,
            title: "B",
            answer: "Singa.",
            success: true
          },
          {
            done: false,
            title: "C",
            answer: "Serigala.",
            success: false
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
