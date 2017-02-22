app.factory("draggableData", function () {
  var data = [
    {
      fruitname: "a",
      fruitimg: "boxGame_A.png"
    }, {
      fruitname: "b",
      fruitimg: "boxGame_B.png"
    }, {
      fruitname: "e",
      fruitimg: "boxGame_E.png"
    }, {
      fruitname: "e",
      fruitimg: "boxGame_E.png"
    },{
      fruitname: "o",
      fruitimg: "boxGame_O.png"
    }, {
      fruitname: "r",
      fruitimg: "boxGame_R.png"
    }, {
      fruitname: "l",
      fruitimg: "boxGame_L.png"
    }, {
      fruitname: "g",
      fruitimg: "boxGame_G.png"
    }, {
      fruitname: "r",
      fruitimg: "boxGame_R.png"
    }
  ];

  return data;
}); //

app.factory("droppableData", function () {
  var data = [
    {
      id:2,
      fruitname: "e",
      fruitimg: "boxGame.png"
    }, {
      id:7,
      fruitname: "o",
      fruitimg: "boxGame.png"
    }, {
      id:8,
      fruitname: "r",
      fruitimg: "boxGame.png"
    }, {
      id:6,
      fruitname: "l",
      fruitimg: "boxGame.png"
    }, {
      id:4,
      fruitname: "g",
      fruitimg: "boxGame.png"
    }, {
      id:1,
      fruitname: "b",
      fruitimg: "boxGame.png"
    }, {
      id:9,
      fruitname: "a",
      fruitimg: "boxGame.png"
    }
    , {
      id:5,
      fruitname: "e",
      fruitimg: "boxGame.png"
    },
     {
      id:3,
      fruitname: "r",
      fruitimg: "boxGame.png"
    }
  ];

  return data;
}); ///

app.controller("GameStoryOneController", ["$scope", "draggableData", "droppableData","$timeout" ,function ($scope, draggableData, droppableData,$timeout) {

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




  $scope.draggableArray = draggableData;
  $scope.droppableArray = droppableData;

  //shuffle the array for randomness
  $scope.draggableArray = _.shuffle($scope.draggableArray);
  $scope.droppableArray = _.shuffle($scope.droppableArray);

  $scope.draggableArrayLength = $scope.draggableArray.length;

  $scope.doraemonStatus = "sleeping";
  $scope.setDoraemonStatus = function (value) {
    $scope.$apply(function () {
      $scope.doraemonStatus = value;
    })
  }


  $scope.$watch(function () {
    return $scope.score;
  }, function (newVal, oldVal) {
    if (newVal !== oldVal) {
      console.log("array length", $scope.draggableArrayLength, "score", newVal)
      if (newVal == $scope.draggableArrayLength) {
        console.log("game over");
        $timeout(function(){
          $scope.setDoraemonStatus("finish")
        },2000)
      }
    }
  });

  $scope.removeFromArray = function (value) {
    console.log(value);
    angular.forEach($scope.draggableArray, function (arrvalue, arrindex) {
      var fruitname = arrvalue.fruitname;
      if (fruitname == value) {
        $scope.matchedIndex = arrindex;
      }
    });
    $scope.$apply(function () {
      $scope.draggableArray.splice($scope.matchedIndex, 1);
    })
  }

}]); //

app.directive("dragme", ["$timeout", function ($timeout) {
  return {
    restrict: "A",
    replace: true,
    scope: {
      myindex: "=",
      setDoraemon: "&"
    },
    link: function ($scope, $elem, $attr) {
      var backgroundImage = $attr.backgroundimage;
      var answerData = $attr.answerdata;
      var myBgcolor = $attr.bgcolor;
      var myLeft = parseInt($attr.left);

      $elem.addClass("draggable");
      $elem.attr("data-answerimage", backgroundImage);
      $elem.attr("data-answerdata", answerData);
      $elem.attr("data-myindex", $scope.myindex);

      $elem.css({
        left: myLeft,
        backgroundImage: "url(imgGame/" + backgroundImage + ")"
      });

      $elem.draggable({
        helper: "clone",
        revert: true,
        appendTo: "body",
        zIndex: 100,
        drag: function (event, ui) {
          $(ui.helper).css("border", "0px");
          $scope.setDoraemon({
            value: "dragging"
          })
        }
      })

    }
  }
}]); ///

app.directive("dropme", ["$timeout", function ($timeout) {
  return {
    restrict: "A",
    replace: true,
    scope: {
      setScore: "&",
      removeArray: "&",
      setDoraemon: "&"
    },
    link: function ($scope, $elem, $attr) {
      var backgroundImage = $attr.backgroundimage;
      var answerData = $attr.fruitname;

      $elem.addClass("droppable");
      $elem.attr("data-answerimage", backgroundImage);
      $elem.attr("data-answerdata", answerData);
      $elem.css({
        backgroundImage: "url(imgGame/" + backgroundImage + ")"
      });
      $elem.droppable({
        accept: ".draggable",
        drop: function (event, ui) {
          var droppedElem = ui.draggable;
          var myAnswer = $(this).attr("data-answerdata");
          if ($(droppedElem).attr("data-answerdata") == myAnswer) { //if both match
            $(this).css("background-image", "url(imgGame/" + droppedElem.attr("backgroundimage") + ")");
            $(this).attr("data-isanswered", "yes");
            $scope.setScore({
              value: 1
            });
            $scope.removeArray({
              value: $(droppedElem).attr("data-answerdata")
            });
            $scope.setDoraemon({
              value: "happy"
            })
          } else {
            $(this).effect("shake");
            $scope.setDoraemon({
              value: "tease"
            })
          }

        }
      })
    }
  }
}]);
