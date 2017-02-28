app.controller("GameStorySixController", ["$scope", "ngAudio", "$interval", function ($scope, ngAudio, $interval) {

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
    // Halilintar
    question: "mata petir; kilat",
    draggableObjects: [
      {name: 'H', id: 1, status:false},
      {name: 'A', id: 2, status:false},
      {name: 'L', id: 3, status:false},
      {name: 'I', id: 4, status:false},
      {name: 'L', id: 3, status:false},
      {name: 'I', id: 4, status:false},
      {name: 'N', id: 5, status:false},
      {name: 'T', id: 6, status:false},
      {name: 'A', id: 2, status:false},
      {name: 'R', id: 7, status:false}
    ],
    droppedObjects: [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 2},
      {id: 7}
    ]
  },
    {
      // duyung
      question: "sejenis binatang laut",
      draggableObjects: [
        {name: 'D', id: 1, status:false},
        {name: 'U', id: 2, status:false},
        {name: 'Y', id: 3, status:false},
        {name: 'U', id: 2, status:false},
        {name: 'N', id: 4, status:false},
        {name: 'G', id: 5, status:false}
      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 2},
        {id: 4},
        {id: 5}
        ]
    }, {
      // sombong
      question: "bersikap bongkak, angkuh",
      draggableObjects: [
        {name: 'S', id: 1, status:false},
        {name: 'O', id: 2, status:false},
        {name: 'M', id: 3, status:false},
        {name: 'B', id: 4, status:false},
        {name: 'O', id: 2, status:false},
        {name: 'N', id: 5, status:false},
        {name: 'G', id: 6, status:false}
      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 2},
        {id: 5},
        {id: 6}
      ]
    },
    {
      // ganas
      question: "bersifat liar, ganas, cenderung merosakkan harta benda",
      draggableObjects: [
        {name: 'G', id: 1, status:false},
        {name: 'A', id: 2, status:false},
        {name: 'N', id: 3, status:false},
        {name: 'A', id: 2, status:false},
        {name: 'S', id: 4, status:false}
      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 2},
        {id: 4}
      ]
    },
    {
      // musnah
      question: "binasa sama sekali",
      draggableObjects: [
        {name: 'M', id: 1, status:false},
        {name: 'U', id: 2, status:false},
        {name: 'S', id: 3, status:false},
        {name: 'N', id: 4, status:false},
        {name: 'A', id: 5, status:false},
        {name: 'H', id: 6, status:false}

      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6}

      ]
    },
    {
      // mengaum
      question: "bunyi kuat yang dihasilkan oleh singa dan harimau",
      draggableObjects: [
        {name: 'M', id: 1, status:false},
        {name: 'E', id: 2, status:false},
        {name: 'N', id: 3, status:false},
        {name: 'G', id: 4, status:false},
        {name: 'A', id: 5, status:false},
        {name: 'U', id: 6, status:false},
        {name: 'M', id: 1, status:false}
      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 1}
      ]
    },
    {
      // perahu
      question: "sejenis pengangkutan laut, sampan besar",
      draggableObjects: [
        {name: 'P', id: 1, status:false},
        {name: 'E', id: 2, status:false},
        {name: 'R', id: 3, status:false},
        {name: 'A', id: 4, status:false},
        {name: 'H', id: 5, status:false},
        {name: 'U', id: 6, status:false}
      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6}
      ]
    },
    {
      // nelayan
      question: "penangkap ikan di lautan",
      draggableObjects: [
        {name: 'N', id: 1, status:false},
        {name: 'E', id: 2, status:false},
        {name: 'L', id: 3, status:false},
        {name: 'A', id: 4, status:false},
        {name: 'Y', id: 5, status:false},
        {name: 'A', id: 4, status:false},
        {name: 'N', id: 1, status:false}

      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 4},
        {id: 1}
      ]
    },
    {
      // panahan
      question: "hasil perbuatan memanah atau melancarkan anak panah",
      draggableObjects: [
        {name: 'P', id: 1, status:false},
        {name: 'A', id: 2, status:false},
        {name: 'N', id: 3, status:false},
        {name: 'A', id: 2, status:false},
        {name: 'H', id: 4, status:false},
        {name: 'A', id: 2, status:false},
        {name: 'N', id: 3, status:false}
      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 2},
        {id: 4},
        {id: 2},
        {id: 3}
      ]
    },

    {
      // sakti
      question: "memiliki kekuasaan yang diluar kemampuan manusia",
      draggableObjects: [
        {name: 'S', id: 1, status:false},
        {name: 'A', id: 2, status:false},
        {name: 'K', id: 3, status:false},
        {name: 'T', id: 4, status:false},
        {name: 'I', id: 5, status:false}

      ],
      droppedObjects: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5}
      ]
    }
  ];


  $scope.heardsHalilintar = [
     {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
  ];


  $scope.heardsSinga = [
    {},{},{}, {}, {}, {}, {}, {}, {}, {}
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
          if(drag.id == drag.idS){
            drag.err = false;
          }else {
            drag.err = true;
          }
      });


      if($scope.gameOne[$scope.stageGame+1] != undefined){
        if(_.find($scope.droppedObjects, {"err": true})){
          $scope.heardsSinga.splice(0, 1);
          $scope.countError ++;
          if($scope.heardsSinga.length ===0){
            console.log('game over')
          }
          setTimeout(showWords, 2000);
        }else {
          if($scope.heardsHalilintar.length-1 ===0){
            stop = true;
            $scope.next('stageEndGame');
          }
          $scope.heardsHalilintar.splice(0, 1);
          $scope.stageGame++;
          showWords()

        }
      }else {
        if(_.find($scope.droppedObjects, {"err": true})){
          $scope.countError ++;
          setTimeout(showWords, 2000);
        }else {
          showWords()
        }
      }
    }
  };

}]);
