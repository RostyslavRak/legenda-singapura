app.controller("GameStoryOneController", ["$scope", "ngAudio", "$interval","$state", function ($scope, ngAudio, $interval, $state) {

  // $scope.duration = 100;
  // $scope.tracks =
  //   {
  //     audio: ngAudio.load('audio/GameStory1.mp3')
  //   };
  // $scope.track = $scope.tracks.audio;
  // $scope.track.volume = 0.05;
  // $scope.track.play();


  $scope.goStory0ne = function () {
    $state.go('story-one');
  };

  $scope.stageGame = 8;
  $scope.formParams = {};
  $scope.stage = "";
  $scope.formValidation = false;
  $scope.toggleObjView = false;
  $scope.droppedObjects = null;
  $scope.draggableObjects = null;
  $scope.countError = 0;
  $scope.time = 0;
  $scope.wordError = 1;
  var stop = false;

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


  $scope.centerAnchor = true;
  $scope.toggleCenterAnchor = function () {
    $scope.centerAnchor = !$scope.centerAnchor
  };

  $scope.gameOne = [{
    // bergelora
    question: "air laut yang berombak hebat",
    draggableObjects: [
      {name: 'B', id: 1, status:false},
      {name: 'E', id: 2, status:false},
      {name: 'R', id: 3, status:false},
      {name: 'G', id: 4, status:false},
      {name: 'E', id: 2, status:false},
      {name: 'L', id: 6, status:false},
      {name: 'O', id: 7, status:false},
      {name: 'R', id: 3, status:false},
      {name: 'A', id: 9, status:false}
    ],
    droppedObjects: [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 2},
      {id: 6},
      {id: 7},
      {id: 3},
      {id: 9}
    ]
  },
    {
      // karam
      question: "tenggelam ke dasar laut",
      draggableObjects: [
        {name: 'K', id: 1, status:false},
        {name: 'A', id: 2, status:false},
        {name: 'R', id: 3, status:false},
        {name: 'A', id: 2, status:false},
        {name: 'M', id: 4, status:false}
      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 2},
        {id: 4}]
    }, {
      // mahkota
      question: "alat kebesaran raja yang dipakai di kepala",
      draggableObjects: [
        {name: 'M', id: 1, status:false},
        {name: 'A', id: 2, status:false},
        {name: 'H', id: 3, status:false},
        {name: 'K', id: 4, status:false},
        {name: 'O', id: 5, status:false},
        {name: 'T', id: 6, status:false},
        {name: 'A', id: 2, status:false}
      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 2}
      ]
    },
    {
      // harta
      question: "barang-barang yang berharga",
      draggableObjects: [
        {name: 'H', id: 1, status:false},
        {name: 'A', id: 2, status:false},
        {name: 'R', id: 3, status:false},
        {name: 'T', id: 4, status:false},
        {name: 'A', id: 2, status:false}
      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 2}
      ]
    },
    {
      // mendarat
      question: "turun dari kapal di laut dan naik ke permukaan tanah",
      draggableObjects: [
        {name: 'M', id: 1, status:false},
        {name: 'E', id: 2, status:false},
        {name: 'N', id: 3, status:false},
        {name: 'D', id: 4, status:false},
        {name: 'A', id: 5, status:false},
        {name: 'R', id: 6, status:false},
        {name: 'A', id: 5, status:false},
        {name: 'T', id: 7, status:false}
      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 5},
        {id: 7}
      ]
    },
    {
      // terpegun
      question: "kaku dan tidak dapat berkata apa-apa",
      draggableObjects: [
        {name: 'T', id: 1, status:false},
        {name: 'E', id: 2, status:false},
        {name: 'R', id: 3, status:false},
        {name: 'P', id: 4, status:false},
        {name: 'E', id: 2, status:false},
        {name: 'G', id: 6, status:false},
        {name: 'U', id: 7, status:false},
        {name: 'N', id: 8, status:false}
      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 2},
        {id: 6},
        {id: 7},
        {id: 8}
      ]
    },
    {
      // gagah
      question: "kuat dan memiliki tenaga",
      draggableObjects: [
        {name: 'G', id: 1, status:false},
        {name: 'A', id: 2, status:false},
        {name: 'G', id: 1, status:false},
        {name: 'A', id: 2, status:false},
        {name: 'H', id: 3, status:false}
      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 1},
        {id: 2},
        {id: 3}
      ]
    },
    {
      // namakan
      question: "memberi sesuatu nama sebagai gelaran",
      draggableObjects: [
        {name: 'N', id: 1, status:false},
        {name: 'A', id: 2, status:false},
        {name: 'M', id: 3, status:false},
        {name: 'A', id: 2, status:false},
        {name: 'K', id: 4, status:false},
        {name: 'A', id: 2, status:false},
        {name: 'N', id: 1, status:false}

      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 2},
        {id: 4},
        {id: 2},
        {id: 1}
      ]
    },
    {
      // kencang
      question: "menjadi deras, laju, cepat",
      draggableObjects: [
        {name: 'K', id: 1, status:false},
        {name: 'E', id: 2, status:false},
        {name: 'N', id: 3, status:false},
        {name: 'C', id: 4, status:false},
        {name: 'A', id: 5, status:false},
        {name: 'N', id: 3, status:false},
        {name: 'G', id: 6, status:false}
      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 3},
        {id: 6}
      ]
    },

    {
      // bahtera
      question: "sejenis kapal kayu yang besar",
      draggableObjects: [
        {name: 'B', id: 1, status:false},
        {name: 'A', id: 2, status:false},
        {name: 'H', id: 3, status:false},
        {name: 'T', id: 4, status:false},
        {name: 'E', id: 5, status:false},
        {name: 'R', id: 6, status:false},
        {name: 'A', id: 2, status:false}
      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 2}
      ]
    }
  ];

  $scope.startTimer = function () {
    $interval(function () {
      if(stop){
        return;
      }
      $scope.time++
    }, 1000)
  };

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function showWords() {
    angular.forEach($scope.gameOne[$scope.stageGame].draggableObjects, function (data) {
      data.status = false;
    });
    angular.forEach($scope.gameOne[$scope.stageGame].droppedObjects, function (data) {
      delete data.name;
      delete data.idS;
      delete data.err;
    });
    $scope.droppedObjects = $scope.gameOne[$scope.stageGame].droppedObjects;
    $scope.draggableObjects = shuffle($scope.gameOne[$scope.stageGame].draggableObjects);
  }

  showWords();

  $scope.onDropComplete = function (index, data) {
    $scope.droppedObjects = $scope.gameOne[$scope.stageGame].droppedObjects;
    $scope.draggableObjects = $scope.gameOne[$scope.stageGame].draggableObjects;
    if (!$scope.droppedObjects[index].name) {
      $scope.droppedObjects[index].name = data.name;
      $scope.droppedObjects[index].idS = data.id;
      $scope.draggableObjects[$scope.draggableObjects.indexOf(data)].status = true;
      data.letter = data.name;
    }
    if (_.find($scope.draggableObjects, {"status": false}) == undefined) {
      angular.forEach($scope.droppedObjects, function (drag) {
        if (drag.id == drag.idS) {
          drag.err = false;
        } else {
          drag.err = true;
        }
      });


      if ($scope.gameOne[$scope.stageGame + 1] != undefined) {

        if (_.find($scope.droppedObjects, {"err": true})) {
          if ($scope.wordError >= 3) {
            $scope.wordError = 1;
            $scope.countError++;
            $scope.stageGame++;
            showWords();
          } else {
            $scope.wordError++;
            setTimeout(showWords, 2000);
          }
        } else {
          $scope.stageGame++;
          showWords()
        }
      } else {
        if (_.find($scope.droppedObjects, {"err": true})) {
          if ($scope.wordError >= 3) {
            $scope.wordError = 1;
            $scope.countError++;
          } else {
            $scope.wordError++;
            setTimeout(showWords, 2000);
          }
        } else {
          stop = true;
          $scope.next("stageEndGame");
        }
      }
    }
  };

}]);
