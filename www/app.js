
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
        .state('gameStoryOne', {
          url: '/game/StoryOne',
          templateUrl: 'templates/story1/gameStoryOne/gameStory1.html',
          controller: 'GameStoryOneController'
        })


        .state('story-two', {
          url: '/story-two',
          templateUrl: 'templates/story2/storyTwo.html',
          controller: 'storyTwoController'
        })
        .state('videoStory2', {
          url: '/story-twe/videoStory2',
          templateUrl: 'templates/story2/video/videoStoryTwo.html'
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


        .state('story-four', {
          url: '/story-four',
          templateUrl: 'templates/story4/story-four.html',
        controller: 'storyFourController'
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


          .state('story-six', {
            url: '/story-six',
            templateUrl: 'templates/story6/story-six.html',
            controller: 'storySixController'
          })

        .state('videoStory6', {
          url: '/story-six/videoStory6',
          templateUrl: 'templates/story6/video/videoStorySix.html'
        });


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');
    });


