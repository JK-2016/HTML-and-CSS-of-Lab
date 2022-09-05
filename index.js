const questionEl = document.getElementById('question');
let isSubmitted = false;
class Question  {
    constructor(question,choices,answer){
        this.question = question;
        this.choices =choices;
        this.answer = answer;
    var choosenAnswer;   
    var btnId; 

    };
}
function loadQuestion(qArray,index){
    queryEl.forEach(butt=>{
        butt.style.backgroundColor ='#01BBFF';       
    });
    document.getElementById('question').innerHTML = qArray[index].question;
    for(let i=0;i<4;i++){
        document.getElementById('choice'+i).innerHTML = qArray[index].choices[i];
    }
    document.getElementById('progress').innerText = "Question "+ (index+1) + " of  " + qArray.length;    
    document.getElementById(qArray[index].btnId).style.backgroundColor='salmon';
}
// document.addEventListener("click",answerclick);
let queryEl=document.querySelectorAll("[id^='btn']");
queryEl.forEach(element => {
    element.addEventListener("click",answerclick);
});  

let travButt= document.querySelectorAll("#prev,#next");
    travButt.forEach(element => {
        element.addEventListener("click",traverse);
    }); 

document.getElementById('submit').addEventListener("click",submit);

function answerclick(){
    
    if (!isSubmitted) {
        console.log("Choosen option is " + this.firstChild.innerHTML);
        qs[index].btnId=this.id;
        console.log(this.id);
        qs[index].choosenAnswer = this.firstChild.innerHTML;
        queryEl.forEach(butt => {
            console.log(butt);
            butt.style.backgroundColor = '#01BBFF';
            if ((butt === this)) {
                this.style.backgroundColor = 'salmon';
            }
        });
    }
}
function traverse(){

    if (!isSubmitted) {
        if (this.innerHTML === "Prev") {
            if (index >= 1) {
                index--;
                loadQuestion(qs, index);
            }

        }
        else {
            if (index <= qs.length - 2) {
                index++;
                loadQuestion(qs, index);
            }
        }
    } 
}
function submit(){
    let score =0;
    qs.forEach(q => {
        if(q.answer===q.choosenAnswer){
            score++;
        } 
    });
    isSubmitted=true;
    console.log(score);
    showScores(score);
}
function showScores(score) {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score is: " + score + " and percentage is: "+(score/qs.length*100)+"%"+"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  };
  
let qs = [
        new Question("Apple - Starts with",["A","B","C","D"],"A"),
        new Question("Bat - Starts with",["A","B","C","D"],"B"),
        new Question("No.of letters in 'CAT'",["1","2","3","4"],"3")
        ];
let index=0;
loadQuestion(qs,index);
