
  var app = angular.module('LegendSingapore', [
    'ionic',
    'ngCordova',
    'ui.ace',
    'ngAudio',
    'video-background',

    // modules
    'LegendSingapore.home.ctrl',
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
        .state('index', {
          url: '/',
          abstract: true,
          templateUrl: 'templates/home/header.html',
        })
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
        .state('story-three', {
          url: '/story-three',
          templateUrl: 'templates/story3/story-three.html',
           controller: 'storyThreeController'
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
        .state('story-six', {
          url: '/story-six',
          templateUrl: 'templates/story6/story-six.html',
          controller: 'storySixController'
        });


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');
    });

