var questions = ["q1","q2","q3","q4","q5"];

var answerSet = [
    {correct: 0, answers: ["a1-1","a1-2","a1-3","a1-4"]},
    {correct: 1, answers: ["a2-1","a2-2","a2-3","a2-4"]},
    {correct: 0, answers: ["a3-1","a3-2","a3-3","a3-4"]},
    {correct: 3, answers: ["a4-1","a4-2","a4-3","a4-4"]}, 
    {correct: 1, answers: ["a5-1","a5-2","a5-3","a5-4"]} 
];
//create a container div for the questions with their answers
var mainDiv = document.getElementById("mainDiv");
var h3q1 = document.getElementById("question");
var answersDiv = document.getElementById("answers");
var btn1El = document.getElementById("btn1");
var btn2El = document.getElementById("btn2");
var btn3El = document.getElementById("btn3");
var btn4El = document.getElementById("btn4");
var btns = [btn1El, btn2El, btn3El, btn4El];
var pEl = document.getElementById("subResult");
//timer start
//print question with answers
for (var i=0; i<5; i++) {
    
    h3q1.textContent = questions[i];
    var correctAnswer = answerSet[i].correct;
    console.log("correctAnswer: " + correctAnswer);
    for(var j=0; j<4; j++) {
        btns[j].textContent = answerSet[i].answers[j];
        if (j == correctAnswer) {
        btns[j].setAttribute("bingo","true");
        }
    }
    answersDiv.addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.matches("button")) {
            // if (bingo is true) {
                var pressedBtn = event.target;
                if (pressedBtn.bingo = "true") {
                    pEl.textContent = "Correct!";
                    //delay for 1 second
                } else {
                    //timer -10
                    pEl.textContent = "Wrong!";
                    //delay for 1 second
                }

            

       
       
        }
    });
}





//timer end









//   // We start the game with a score of 0.
//   var score = 0;

//   // Loop over every question object
//   for (var i = 0; i < questions.length; i++) {
//     // Display current question to user and ask OK/Cancel
//     var answer = confirm(questions[i].q);
    

//     // Compare answers
//     if ((answer === true && questions[i].a === "t") ||
//       (answer === false && questions[i].a === "f")) {
//       // Increase score
//       score++;
//       alert("Correct!");
//     }
//     else {
//       alert("Wrong!");
//     }
//   }

//   // Show total at end
//   alert("You got " + score + "/" + questions.length);