
var questionBank = [{
  question: "What was the name of Angelica's doll in the show 'Rugrats'?",
  options: ["Cindy", "Clarissa", "Cynthia", "Candy"],
  answer: "Cynthia"
},{
  question: "Who wrote the book series 'Goosebumps'?",
  options: ["Lois Lowy", "R.L. Stine", "Dav Pilkey", "Zack Morris"],
  answer: "R.L. Stine"
},{
  question: "The gameshow where teams competed to find lost treasures in a Mayan templ was called?",
  options:["Secrets of the Lost Temple", "Paths of the Pyramids", "The Mayan Maze", "Legends of the Hidden Temple"],
  answer: "Legends of the Hidden Temple"
},{
  question: "What was the name of Ross and Rachel's baby from the show 'Friends'?",
  options: ["Lily", "Emily", "Emma", "Alexis"],
  answer: "Emma"
},{
  question: "The toy 'Bop It!' had three inputs: 'Bop It', 'Twsit It', and...?",
  options: ["Pull It", "Boop It", "Yank It", "Beep It"],
  answer: "Pull It"
},{
  question: "This 1990 movie was directed by Martin Scorsese and starred Robert De Niro, Ray Liotta, and Joe Pesci.",
  options: ["Reservoir Dogs", "Badfellas", "Goodfellas", "Mob Men"],
  answer: "Goodfellas"
},{
  question: "'I did not have sexual relations with that women', referred to whom?",
  options: ["Monica Bellussi", "Monica Geller", "Lorlei Gilmore", "Monica Lewinski"],
  answer: "Monica Lewinski"
},{
  question: "The First sheep was successfully cloned in 1996, what was that sheeps name?",
  options: ["Peggy", "Dolly", "Donna", "Polly"],
  answer: "Dolly"
},{
  question: "The phrase 'You Got It Dude' was coined by whom on the show 'Full House'?",
  options: ["D.J. Tanner", "Stephanie Tanner", "Joey Gladstone", "Michelle Tanner"],
  answer: "Michelle Tanner"
},{
  question: "The band Ace of Base was from what country?",
  options: ["Denmark", "Sweden", "Scandinavia", "Norway"],
  answer: "Sweden"
}];

var questionCount = 0;
var right = 0;
var wrong = 0;
var notAnswered = 0;
var outOfTime = false;
var counter = 15;
var answerPageCounter = 5;
var time; //for time interval manipulation

//hide reset button
$("#resetButton").hide()

// function that keeps time
function timer(){
  clearInterval(time);
  time = setInterval(displayCountdown, 1000)
}
// show countdown
function displayCountdown(){
  timer();
  counter--;
  $("#timer").html("<h2>" + counter + "</h2>");

  if (counter === 0){
    stopTimer();
    unanswered();
    // function will run after times up
  }
}
// stop timer
function stopTimer(){
  clearInterval(time);
}
// display countDown for answerPage
function timerAnswerPage(){
  clearInterval(time);
  time = setInterval(displayCountdownAnswerPage, 1000);
}

function displayCountdownAnswerPage(){
  timerAnswerPage();
  answerPageCounter--;
  $("#timer").empty();
  $("#timer").html("<h2>" + answerPageCounter + "</h2>");

  if (answerPageCounter === 0){
    counter = 15;
    stopTimer();
    showCurrentQuestion();
  }
  // function to reset game
  if (questionCount == (questionBank.length-1)){
    endingMessage();
  }
}

//display questionCount and current question text
function showCurrentQuestion() {
  $("#triviaSpot").empty();
  displayCountdown();

  var questDiv = $("<div>");
  var questCount = $("<h4>");
  var questText = $("<h3>");
  
  questCount.text((questionCount+1) + ' out of ' + (questionBank.length));
  questText.text(questionBank[questionCount].question);
  questDiv
          .append(questCount)
          .append(questText);
  $("#triviaSpot").append(questDiv);

  renderButtons(questionCount);
  $("#startButton").hide();

  if(questionCount > 10){
    endingMessage();
  }
}

//display answer options and assign data-name (in order to compare to answer)
function renderButtons(){
  
  for( var i = 0; i < questionBank[questionCount].options.length; i++) {
  var button = $("<button>");
  button 
        .addClass("buttonOptions")
        .attr("data-name", questionBank[questionCount].options[i])
        .text(questionBank[questionCount].options[i])
  $("#triviaSpot").append(button);
  console.log(button);
  }
}
//function to collect users' clicked button input and run if statements for game
function chosenOption(){
  clearInterval(time);
  var userChoice = $(this).attr("data-name");
  
  if (userChoice === questionBank[questionCount].answer) {
    correctAnswer();
  } else if (userChoice != questionBank[questionCount].answer) {
    incorrectAnswer();
  } else {
    unanswered();
  };
}
// start game on click (render questions and display timer)
$("#startButton").on("click", showCurrentQuestion);

//bind clicked answer to dom to get data-name
$(document).on("click", ".buttonOptions", chosenOption);

// correct answer function
function correctAnswer(){
  clearInterval(time)
  questionCount++;
  right++;
  $("#triviaSpot").empty();
  var correctText = $("<h2>");
  correctText.text("You got it dude!")
  $("#triviaSpot").append(correctText);
  resetCounters();
  displayCountdownAnswerPage();
}
  

// incorrect answer function
function incorrectAnswer(){
  clearInterval(time)
  questionCount++;
  wrong++;
  $("#triviaSpot").empty();
  var wrongText = $("<h2>");
  wrongText.text("Bummer! The right answer was: " + questionBank[questionCount-1].answer);
  $("#triviaSpot").append(wrongText);
  resetCounters();
  displayCountdownAnswerPage();
}
// unanswered function
function unanswered(){
  clearInterval(time)
  questionCount++;
  notAnswered++;
  $("#triviaSpot").empty();
  var unansweredText = $("<h2>");
  unansweredText.text("Too fast! ... Sike! Too slow man.");
  $("#triviaSpot").append(unansweredText);
  resetCounters();
  displayCountdownAnswerPage();
  }
  


// ending message function and when to display
function endingMessage(){
  clearInterval(time);
  $("#timer").empty();
  $("#resetButton").show();
  $("#triviaSpot").empty();
  var endMsg = $("<h2>");
  endMsg.text("Looks like you got " + right + " right, " + wrong + "wrong, and " + notAnswered + " unanswered.");
  $("#triviaSpot").append(endMsg);

}

// reset function and button 
function reset(){
  questionCount = 0;
  right = 0;
  wrong = 0;
  notAnswered = 0;
  counter = 15;
  answerPageCounter = 5;

  showCurrentQuestion();
}

$("#resetButton").on("click", reset);

// reset counters 
function resetCounters(){
  if (questionCount>1){
    answerPageCounter = 5;
    counter = 15;
  }
}



