
  var app = angular.module('LegendSingapore', [
    'ionic',
    'ngCordova',
    'ui.ace',
    'ngAudio',
    'video-background',

    // modules
    'LegendSingapore.home.ctrl',
    'LegendSingapore.info.ctrl',
    'LegendSingapore.storyOne.ctrl',
    'LegendSingapore.videoStoryOneRecordVoice.ctrl',
    'LegendSingapore.videoStoryTwoRecordVoice.ctrl',
    'LegendSingapore.videoStoryThreeRecordVoice.ctrl',
    'LegendSingapore.videoStoryFourRecordVoice.ctrl',
    'LegendSingapore.videoStoryFiveRecordVoice.ctrl',
    'LegendSingapore.videoStorySixRecordVoice.ctrl',
    'LegendSingapore.storyTwo.ctrl',
    'LegendSingapore.storyThree.ctrl',
    'LegendSingapore.storyFour.ctrl',
    'LegendSingapore.storyFive.ctrl',
    'LegendSingapore.storySix.ctrl'
  ])


    .run(function ($ionicPlatform) {

      $ionicPlatform.ready(function () {

        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      })
    })

    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider

        .state('home', {
          url: '/home',
          templateUrl: 'templates/home/home.html',
          controller: 'HomeController'
        })
        .state('story-one', {
          url: '/story-one',
          templateUrl: 'templates/story1/storyOne.html',
           controller: 'storyOneController'
        })
        .state('videoStory1', {
          url: '/story-one/videoStory1',
          templateUrl: 'templates/story1/video/videoStoryOne.html'
        })
        .state('videoStoryOneRecordVoice', {
          url: '/story-one/videoStoryOneRecordVoice',
          templateUrl: 'templates/story1/videoStoryOneRecordVoice/videoStoryOneRecordVoice.html',
          controller: 'videoStoryOneRecordVoiceController'
        })

        .state('story-two', {
          url: '/story-two',
          templateUrl: 'templates/story2/storyTwo.html',
          controller: 'storyTwoController'
        })
          .state('videoStory2', {
            url: '/story-two/videoStory2',
            templateUrl: 'templates/story2/video/videoStoryTwo.html'
          })
          .state('videoStoryTwoRecordVoice', {
            url: '/story-two/videoStoryTwoRecordVoice',
            templateUrl: 'templates/story2/videoStoryTwoRecordVoice/videoStoryTwoRecordVoice.html',
            controller: 'videoStoryTwoRecordVoiceController'
          })

        .state('story-three', {
          url: '/story-three',
          templateUrl: 'templates/story3/story-three.html',
           controller: 'storyThreeController'
        })

        .state('videoStory3', {
          url: '/story-three/videoStory3',
          templateUrl: 'templates/story3/video/videoStoryThree.html'
        })
          .state('videoStoryThreeRecordVoice', {
            url: '/story-three/videoStoryTreeRecordVoice',
            templateUrl: 'templates/story3/videoStoryThreeRecordVoice/videoStoryThreeRecordVoice.html',
            controller: 'videoStoryThreeRecordVoiceController'
          })


        .state('story-four', {
          url: '/story-four',
          templateUrl: 'templates/story4/story-four.html',
        controller: 'storyFourController'
        })
          .state('videoStory4', {
            url: '/story-four/videoStory4',
            templateUrl: 'templates/story4/video/videoStoryFour.html'
          })
          .state('videoStoryFourRecordVoice', {
            url: '/story-four/videoStoryFourRecordVoice',
            templateUrl: 'templates/story4/videoStoryFourRecordVoice/videoStoryFourRecordVoice.html',
            controller: 'videoStoryFourRecordVoiceController'
          })


        .state('story-five', {
          url: '/story-five',
          templateUrl: 'templates/story5/story-five.html',
           controller: 'storyFiveController'
        })

        .state('videoStory5', {
          url: '/story-five/videoStory5',
          templateUrl: 'templates/story5/video/videoStoryFive.html'
        })
          .state('videoStoryFiveRecordVoice', {
            url: '/story-five/videoStoryFiveRecordVoice',
            templateUrl: 'templates/story5/videoStoryFiveRecordVoice/videoStoryFiveRecordVoice.html',
            controller: 'videoStoryFiveRecordVoiceController'
          })

          .state('story-six', {
            url: '/story-six',
            templateUrl: 'templates/story6/story-six.html',
            controller: 'storySixController'
          })

        .state('videoStory6', {
          url: '/story-six/videoStory6',
          templateUrl: 'templates/story6/video/videoStorySix.html'
        })
          .state('videoStorySixRecordVoice', {
            url: '/story-six/videoStorySixRecordVoice',
            templateUrl: 'templates/story6/videoStorySixRecordVoice/videoStorySixRecordVoice.html',
            controller: 'videoStorySixRecordVoiceController'
          });


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');
    });

