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
var quizDiv = document.getElementById("quizContainer");
var h3q1 = document.getElementById("question");
var answersDiv = document.getElementById("answers");
var btn1El = document.getElementById("btn1");
var btn2El = document.getElementById("btn2");
var btn3El = document.getElementById("btn3");
var btn4El = document.getElementById("btn4");
var btns = [btn1El, btn2El, btn3El, btn4El];
var pEl = document.getElementById("subResult");
var finalResultEl = document.getElementById("finalResult");
var timeLeft = document.getElementById("timeLeft");        
//currentQuestion is for questions array index. currentQuestion++ after each click event and call printQAs again
var currentQuestion = 0;
var correctAnswer = -1;  //placeholder for answerSet.correct value
var storeResult;
printQAs();


//print question with answers to screen
function printQAs() {
    
        h3q1.textContent = questions[currentQuestion];
        correctAnswer = answerSet[currentQuestion].correct;
        
        //fill in the answers and set bingo to true for the correct answer
        for(var j=0; j<4; j++) {
            btns[j].textContent = answerSet[currentQuestion].answers[j];
            if (j == correctAnswer) {
            btns[j].setAttribute("bingo","true");
            }
        }    
}
    
// timer start & eventListener        
answersDiv.addEventListener("click", function(event) {
    event.preventDefault();
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
            currentQuestion++;
            if(currentQuestion<5){
            //reset bingo for all buttons
            resetTags();
            printQAs();
        } else {
            
            return;
        }
                
                
    } 
});
var saveScoreDiv = document.getElementById("saveScore");
var initialsForm = document.getElementById("initialsForm");
var timer = 60;
var mainTimer = setInterval(function(){
    timeLeft.textContent = timer;
    timer--;
    //check if quiz is over
    if(currentQuestion > 4){
        storeResult = timer + 2; //+2 to compensate for the last setTimeout in Q5
        timeLeft.textContent = "Done!";
        quizDiv.innerHTML = "";
        finalResultEl.textContent = "Final Result is: " + storeResult;
        initialsForm.setAttribute("style","visibility: visible;");
        clearInterval(mainTimer);
        
    } else if (timer < 0) {
        timeLeft.textContent = "Out of Time!";
        quizDiv.innerHTML = "";
        clearInterval(mainTimer);
    }

},1000);

////////////
//storing scores in localStorage
///////////


var initialsText = document.getElementById("initialsText");
var key = ""; //key for localStorage
var value = ""; //value for localStorage
initialsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var dateTime = new Date();
    var initialsInput = initialsText.value.trim();
    // Return from function early if submitted is blank
    if (initialsText === "") {
      return;
    }
    key = initialsInput + "-" + dateTime;
    value = storeResult;
    localStorage.setItem(key,value); 
    initialsText.value = "";
  });



function resetTags() {
    // set all bingos to false
    for(var index=0; index<btns.length; index++){
        btns[index].setAttribute("bingo","false");
    }
}