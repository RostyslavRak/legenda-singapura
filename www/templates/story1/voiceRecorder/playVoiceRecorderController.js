
angular.module('LegendSingapore.PlayVoiceRecorder.ctrl', []).
controller('PlayVoiceRecorderController',  function($scope) {



  // Record audio
//
  function recordAudio() {
    var src = "myrecording.amr";
    var mediaRec = new Media(src,
      // success callback
      function() {
        console.log("recordAudio():Audio Success");
      },

      // error callback
      function(err) {
        console.log("recordAudio():Audio Error: "+ err.code);
      }
    );

    // Record audio
    mediaRec.startRecord();

    // Stop recording after 10 seconds
    setTimeout(function() {
      mediaRec.stopRecord();
    }, 10000);
  }

  // Play audio
//
  function playAudio(url) {
    // Play the audio file at url
    var my_media = new Media(url,
      // success callback
      function () {
        console.log("playAudio():Audio Success");
      },
      // error callback
      function (err) {
        console.log("playAudio():Audio Error: " + err);
      }
    );
    // Play audio
    my_media.play();
  }

});
