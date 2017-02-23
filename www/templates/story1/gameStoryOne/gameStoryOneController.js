

app.controller("GameStoryOneController", ["$scope","ngAudio" ,function ($scope, ngAudio) {

  // $scope.duration = 100;
  // $scope.tracks =
  //   {
  //     audio: ngAudio.load('audio/GameStory1.mp3')
  //   };
  // $scope.track = $scope.tracks.audio;
  // $scope.track.volume = 0.05;
  // $scope.track.play();



  $scope.formParams = {};
  $scope.stage = "";
  $scope.formValidation = false;
  $scope.toggleObjView = false;


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
  $scope.toggleCenterAnchor = function () {$scope.centerAnchor = !$scope.centerAnchor};
  $scope.draggableObjects = [
    {
      name:'B',
      id: 1
    },{
      name:'E',
      id: 2
    },
    {
      name:'R',
      id: 3
    },
    {
      name:'G',
      id: 4
    },
    {
      name:'E',
      id: 2
    },
    {
      name:'L',
      id: 6
    },
    {
      name:'O',
      id: 7
    },
    {
      name:'R',
      id: 3
    }
    ,
    {
      name:'A',
      id: 9
    }
    ];
  // bergelora


  $scope.droppedObjects1 = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 2
    },
    {
      id: 6
    },
    {
      id: 7
    },
    {
      id: 3
    },
    {
      id: 9
    }
  ];


  var list_index = [0, 1, 2, 3, 4, 5, 6,7,8];
  $scope.random = function() {
    return 0.5 - Math.random();
  };
  var j = 0;
  while(list_index.length > 0) {
    var i = Math.floor(list_index.length * Math.random());
    if(i >= list_index.length)
      i --;
    var val = list_index.splice(i, 1);
    $scope.draggableObjects[j]._order = val[0];
    j ++;
  }

  $scope.onDropComplete1=function(index, data){
    if($scope.droppedObjects1[index].id === data.id && !$scope.droppedObjects1[index].name){
      $scope.droppedObjects1[index].name = data.name;
      $scope.draggableObjects.splice($scope.draggableObjects.indexOf(data), 1);
      data.letter = data.name;
    }

  };




}]);
