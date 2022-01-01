// alert("hi");



var buttonColours = ["red", "blue", "green", "yellow"];



var gamePattern = [];

var userClickedPattern = [];


var cnt = 0;
changeHeader(0);






function nextSequence() {
  cnt++;

  $("h1").text("Level" + " " + cnt);
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


  playSound(randomChosenColour);

}


$(".btn").click(function handler(event) {

  var userChosenColor = event.target.id;
  $("#" + userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(userChosenColor);
  animateClick(event);
  console.log(userChosenColor);
  userClickedPattern.push(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});


function checkAnswer(curr_level) {
  if (userClickedPattern[curr_level] === gamePattern[curr_level]) {
    console.log("success");
    if(userClickedPattern.length===gamePattern.length){
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }


  }
   else
   {
    console.log("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    });
    startOver();
  }
}



function startOver(){
  cnt=0;
  userClickedPattern=[];
  gamePattern=[];
}


function playSound(name) {
  // $("button").click(function(e){
  var a = new Audio("sounds/" + name + ".mp3");
  a.play();
  // });
}


function animateClick(e) {
  $("#" + e.target.id).addClass("pressed");
  setTimeout(function() {
    $("#" + e.target.id).removeClass("pressed");
  }, 100);

}

function changeHeader(cnt) {
  $(document).keydown(function() {
    $("h1").text("Level" + " " + cnt);
    nextSequence();
  });
}




// function playSound(randomChosenColor){
//   switch(randomChosenColor)
//   {
//     case "red":
//     var audio = new Audio("sounds/red.mp3");
//     audio.play();
//     break;
//
//     case "green":
//     var audio = new Audio("sounds/green.mp3");
//     audio.play();
//     break;
//
//     case "yellow":
//     var audio = new Audio("sounds/yellow.mp3");
//     audio.play();
//     break;
//
//     case "blue":
//     var audio = new Audio("sounds/blue.mp3");
//     audio.play();
//     break;
//
//
//   }

// $("#"+randomChosenColor).click(function(event){
//        $("#"+randomChosenColor).addClass("pressed");
//
//        playSound(randomChosenColor);
//
//        handler(event);
//
//        setTimeout(function(){
//             $("#"+randomChosenColor).removeClass("pressed");
//         } , 100);
// });
