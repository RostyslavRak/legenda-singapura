angular.module('LegendSingapore.videoStoryTwoRecordVoice.ctrl', [])
    .controller('videoStoryTwoRecordVoiceController', ['$scope', 'ngAudio', function ($scope, ngAudio) {

        // START ------ Playlist of voices for characters
        $scope.duration = 100;
        $scope.countQuestion = 0;
        $scope.tracks =
        {
            audio1_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_1.mp3'),
            audio2_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_2.mp3'),
            audio3_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_3.mp3'),
            audio4_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_4.mp3'),
            audio5_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_5.mp3'),
            audio6_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_6.mp3'),
            audio7_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_7.mp3'),
            audio8_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_8.mp3'),
            audio9_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_9.mp3'),
            audio10_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_10.mp3'),
            audio11_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_11.mp3'),
            audio12_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_12.mp3'),
            audio13_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_13.mp3'),
            audio14_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_14.mp3'),
            audioIntro1_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_Intro_1.mp3'),
            audioIntro2_s2: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/audio_s2/PB_Intro_2.mp3')
        };

        $scope.track.volume = 1;
        // $scope.track.play();
        // END ______ Playlist of voices for characters
        $scope.duration = 100;
        $scope.poems = [{
            poem1_au: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/pantun/Pantun_PB_1.mp3'),
            showContent: false,
            poem_cont: 'Pergi memanah di Tanjung Ara,\n Busar dibalut si kain baldu; \n Mawar dan Melur dua bersaudara, \n Ke mana sahaja bersama selalu.'
        }, {
            poem1_au: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/pantun/Pantun_PB_2.mp3'),
            showContent: false,
            poem_cont: 'Sakit terasa tidak terperi, \n   Jari terketuk tukul dan pahat; \n    Melur ditangkap dibawa lari, \n    Mawar berazam adik  diselamat.'
        }, {
            poem1_au: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/pantun/Pantun_PB_3.mp3'),
            showContent: false,
            poem_cont: 'Berenang_renang ikan tenggiri, \n  Mengikut arus arah utara \n  Kasih saudara kekal abadi, \n  Menjadi pulau dua bersaudara.'
        }];

        $scope.pantun1 = [{
            done: false,

            audio: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/comprehension/Comprehension-PB-Q1.mp3'),
            question: "Siapakah Mawar dan Melur? ",
            answers: [
                {
                    done: false,
                    title: "A",
                    answer: "Mereka merupakan sepasang kawan.",
                    success: false
                },
                {
                    done: false,
                    title: "B",
                    answer: "Mereka merupakan sepasang sepupu.",
                    success: false
                },
                {
                    done: false,
                    title: "C",
                    answer: "Mereka merupakan sepasang adik beradik.",
                    success: true
                }]
        },
            {
                done: false,
                audio: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/comprehension/Comprehension-PB-Q2.mp3'),
                question: "Mengapakah Mawar dan Melur berlari?",
                answers: [
                    {
                        done: false,
                        title: "A",
                        answer: "Mereka telah dikejar oleh sekumpulan lanun.",
                        success: true
                    },
                    {
                        done: false,
                        title: "B",
                        answer: "Mereka telah dikepung oleh sekumpulan lanun",
                        success: false
                    },
                    {
                        done: false,
                        title: "C",
                        answer: "Mereka telah ditangkap oleh sekumpulan lanun.",
                        success: false
                    }]
            },
            {
                done: false,
                audio: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/comprehension/Comprehension-PB-Q3.mp3'),
                question: "Apakah yang dilakukan Mawar setelah Melur dibawa lari?",
                answers: [
                    {
                        done: false,
                        title: "A",
                        answer: "Mawar mengekori lanun-lanun tersebut.",
                        success: true
                    },
                    {
                        done: false,
                        title: "B",
                        answer: "Mawar menentang lanun-lanun tersebut.",
                        success: false
                    },
                    {
                        done: false,
                        title: "C",
                        answer: "Mawar memperdaya lanun-lanun tersebut.",
                        success: false
                    }]
            },
            {
                done: false,
                audio: ngAudio.load('templates/story2/videoStoryTwoRecordVoice/comprehension/Comprehension-PB-Q4.mp3'),
                question: "Mengapakah Melur terjun ke laut?",
                answers: [
                    {
                        done: false,
                        title: "A",
                        answer: "Melur mahu menyelamatkan diri.",
                        success: true
                    },
                    {
                        done: false,
                        title: "B",
                        answer: "Melur mahu berjumpa dengan kakaknya Minah.",
                        success: false
                    },
                    {
                        done: false,
                        title: "C",
                        answer: "Melur mahu mengalahkan lanun-lanun tersebut.",
                        success: false
                    }]
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

        // $scope.myform = true;
        // $scope.formData = true;
        // if (myform.formData.$valid) {
        //     addClass("black")
        //     $scope.stage = stage;
        //     $scope.formValidation = false;
        // }
        // $scope.next = function (stage) {
        //     //$scope.direction = 1;
        //     //$scope.stage = stage;
        //
        //     $scope.formValidation = true;
        //
        //     if ($scope.multiStepForm.$valid) {
        //         $scope.direction = 1;
        //         $scope.stage = stage;
        //         $scope.formValidation = false;
        //     }
        // };
        //   console.log('hhh');
        //   var result = document.getElementsByClassName("multi-files");
        //   $('.comprehension_box_s2 input[value="1"]')
        // }

    }]);
