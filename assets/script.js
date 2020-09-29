var questions = ["Q1","Q2","Q3","Q4","Q5"];
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
var timeLeft = document.getElementById("timeLeft");        
//i is for questions array index. i++ after each click event and call printQAs again
var i = 0;
var timer = 90;
var correctAnswer = 100;
printQAs();
// startQuiz(); 

//print question with answers to screen
function printQAs() {
    
        h3q1.textContent = questions[i];
        correctAnswer = answerSet[i].correct;
        
        //fill in the answers and set bingo to true for the correct answer
        for(var j=0; j<4; j++) {
            btns[j].textContent = answerSet[i].answers[j];
            if (j == correctAnswer) {
            btns[j].setAttribute("bingo","true");
            }
        }    
}
    
// timer start & eventListener
// function startQuiz(){
//     var mainTimer = setInterval(function(){
//         timeLeft.textContent = timer;
//         timer--;
        
        answersDiv.addEventListener("click", function(event) {
            // event.preventDefault();
            if(event.target.matches("button")) {
                // if (bingo is true) -> correct, else -> wrong
                    var pressedBtn = event.target
                    var isBingo = pressedBtn.getAttribute("bingo");
                    
                    if (isBingo == "true") {
                        pEl.textContent = "Correct!";
                    } else {
                        timer = timer - 10;
                        pEl.textContent = "Wrong! you lost 10 seconds."; 
                    } 
                    setTimeout(()=>{ 
                        pEl.textContent = ""; 
                    },2000);
                    i++;
                    resetTags();
                    printQAs();
                    //reset bingo for all buttons 
                        
            }
        });

        // if(timer == 0 || i>4){
        //     clearInterval(mainTimer);
        // } 

//     },1000);
// }       

function resetTags() {
    // set all bingos to false
    for(var index=0; index<btns.length; index++){
        btns[index].setAttribute("bingo","false");
    }
}