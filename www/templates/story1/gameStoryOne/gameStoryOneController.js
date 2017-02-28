app.controller("GameStoryOneController", ["$scope", "ngAudio", "$interval", function ($scope, ngAudio, $interval) {

  // $scope.duration = 100;
  // $scope.tracks =
  //   {
  //     audio: ngAudio.load('audio/GameStory1.mp3')
  //   };
  // $scope.track = $scope.tracks.audio;
  // $scope.track.volume = 0.05;
  // $scope.track.play();


  $scope.stageGame = 0;
  $scope.formParams = {};
  $scope.stage = "";
  $scope.formValidation = false;
  $scope.toggleObjView = false;
  $scope.droppedObjects = null;
  $scope.draggableObjects = null;
  $scope.countError = 0;
  $scope.time = 0;
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
      {name: 'B', id: 1},
      {name: 'E', id: 2},
      {name: 'R', id: 3},
      {name: 'G', id: 4},
      {name: 'E', id: 2},
      {name: 'L', id: 6},
      {name: 'O', id: 7},
      {name: 'R', id: 3},
      {name: 'A', id: 9}
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
        {name: 'K', id: 1},
        {name: 'A', id: 2},
        {name: 'R', id: 3},
        {name: 'A', id: 2},
        {name: 'M', id: 4}
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
        {name: 'M', id: 1},
        {name: 'A', id: 2},
        {name: 'H', id: 3},
        {name: 'K', id: 4},
        {name: 'O', id: 5},
        {name: 'T', id: 6},
        {name: 'A', id: 2}
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
        {name: 'H', id: 1},
        {name: 'A', id: 2},
        {name: 'R', id: 3},
        {name: 'T', id: 4},
        {name: 'A', id: 2}
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
        {name: 'M', id: 1},
        {name: 'E', id: 2},
        {name: 'N', id: 3},
        {name: 'D', id: 4},
        {name: 'A', id: 5},
        {name: 'R', id: 6},
        {name: 'A', id: 5},
        {name: 'T', id: 7}
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
        {name: 'T', id: 1},
        {name: 'E', id: 2},
        {name: 'R', id: 3},
        {name: 'P', id: 4},
        {name: 'E', id: 2},
        {name: 'G', id: 6},
        {name: 'U', id: 7},
        {name: 'N', id: 8}
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
        {name: 'G', id: 1},
        {name: 'A', id: 2},
        {name: 'G', id: 1},
        {name: 'A', id: 2},
        {name: 'H', id: 3}
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
        {name: 'N', id: 1},
        {name: 'A', id: 2},
        {name: 'M', id: 3},
        {name: 'A', id: 2},
        {name: 'K', id: 4},
        {name: 'A', id: 2},
        {name: 'N', id: 1}

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
        {name: 'K', id: 1},
        {name: 'E', id: 2},
        {name: 'N', id: 3},
        {name: 'C', id: 4},
        {name: 'A', id: 5},
        {name: 'N', id: 3},
        {name: 'G', id: 6}
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
        {name: 'B', id: 1},
        {name: 'A', id: 2},
        {name: 'H', id: 3},
        {name: 'T', id: 4},
        {name: 'E', id: 5},
        {name: 'R', id: 6},
        {name: 'A', id: 2}
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
      $scope.draggableObjects.splice($scope.draggableObjects.indexOf(data), 1);
      data.letter = data.name;
    }
    if ($scope.draggableObjects.length === 0) {
      angular.forEach($scope.droppedObjects, function (drag) {
          if(drag.id == drag.idS){
            drag.err = false;
          }else {
            drag.err = true;
          }
      });

      if($scope.countError > 2){
        $scope.next('stageGameOver');
        console.log("game over! time - " + $scope.time);
        stop = true;
        return;
      }
      if($scope.gameOne[$scope.stageGame] != undefined){
        $scope.stageGame++;
        if(_.find($scope.droppedObjects, {"err": true})){
          $scope.countError ++;
          setTimeout(showWords, 2000);
        }else {
          showWords()
        }
      }else {
        stop = true;
        $scope.next('stageEndGame');
      }
    }
  };

}]);
