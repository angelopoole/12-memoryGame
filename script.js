var userPoint = 0;
var faceUp = [];
var assignments = 1;
var divIds = [];
var matches = 0;

function fillBoard() {
  console.log('HI');
  var cards = ["rock", "scissors", "paper"];
  //TODO: randomly assign positions to the tiles on the screen call
  // addTileToBoard here
  // Hint: You can use a forEach or a for loop
  for (var i=0; i<3; i++) {
    console.log('HI3', i);
    addTileToBoard(cards[i]);
  }
   console.log('HI2');
}

function shuffle(array) {
  //TODO: use this method to shuffle the array
  var newArray = [];
  var length = array.length;

  for(var i = 0; i < length; i++) {
    var arrLen = array.length;
    var randomPick = Math.floor(Math.random() * arrLen);
    var element = array[randomPick];
    newArray.push(element);
    array.splice(array.indexOf(element), 1);
    arrLen --;
  }

  return newArray;
}

function addTileToBoard(element) {
  //TODO: randomly assign ids to the divs
  var rock =  "<div id=\"" + assignments +"\" class=\""+ element + " token\"><img src=\"rock.jpg\"></div>";
  var scissors =  "<div id=1" + assignments +"\" class=\""+ element + " token\"><img src=\"scissors.jpg\"></div>";
  var paper =  "<div id=2" + assignments +"\" class=\""+ element + " token\"><img src=\"paper.jpeg\"></div>";
  $(".game").append(div);
  assignments ++;
}

function clearBoard() {
  $(".game").empty();
}

function checkTilesMatch(array) {
  //TODO: check to see if the value of the 2 face up tile match

}

function setPoint() {
    $('#userPoint').text(userPoint);
}

function evaluate( evt ) {
    var tileType = evt.target.getAttribute('class');
    var divID = evt.target.getAttribute("id");
    //TODO: If this is first tile clicked store the card if it is the second tile
    // clicked check to see if it is the same as the first.
}


$(document).ready(function() {
 console.log("this is running");
  fillBoard();
  function bop(elm) {
      $(elm).fadeOut('fast').delay(1).fadeIn('fast');
  }

  

  $('.token').click( function(e) {
      var element = e.toElement.classList[0]
      var id = e.toElement.getAttribute("id")
      bop(this);
      evaluate(e);
  });


});
