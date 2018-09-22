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
var counter = 30;
var time; //for time interval manipulation

//display questionCount and current question text
function showCurrentQuestion(questionCount) {

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
}
showCurrentQuestion(questionCount);

//display answer options and assign data-name (in order to compare to answer)
function renderButtons(questionCount){
  
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

