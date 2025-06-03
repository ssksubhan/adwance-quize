
const questions = [
    { 
        question:" What does the filter() method do in JavaScript?",
        answers:[
            {text:"Sorts the array",correct:false} ,
            {text:"Modifies each element of the array",correct:false} ,
            {text:"Returns a new array with elements that pass the test",correct:true} ,
            {text:"Changes the original array",correct:false} 

        ]
    },


     { 
        question:" What is the return value of the filter() method?",
        answers:[
            {text:"The count of matching elements",correct:false} ,
            {text:"A new array",correct:true} ,
            {text:"Returns a new array with elements that pass the test",correct:false} ,
            {text:"a boolean value",correct:false} 

        ]
    },


     { 
        question:" What type of value should the callback function passed to filter() return for an element to be included in the result?",
        answers:[
            {text:" String",correct:false} ,
            {text:"Object",correct:false} ,
            {text:"boolean",correct:true} ,
            {text:"Changes the original array",correct:false} 

        ]
    },


     { 
        question:" Which statement is true about filter()?",
        answers:[
            {text:"Sorts the array",correct:false} ,
            {text:"Modifies each element of the array",correct:false} ,
            {text:"Returns a new array with elements that pass the test",correct:false} ,
            {text:"It creates a new array with elements that return true from the callback",correct:true} 

        ]
    },


     { 
        question:" What happens if no elements pass the test in filter()?",
        answers:[
            {text:"An empty array is returned",correct:true} ,
            {text:"Modifies each element of the array",correct:false} ,
            {text:"Returns a new array with elements that pass the test",correct:false} ,
            {text:"Changes the original array",correct:false} 

        ]
    }


    
];


 
const currentQue=document.getElementById("question");
const answerButtons =document.getElementById("answer-button");
const nextBtns =document.getElementById("nextBtn");


let currentQuestionIndex=0;
let score=0;



function startQuize(){
    currentQuestionIndex=0;
    score=0;
nextBtns.innerHTML="Next";
showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
    currentQue.innerHTML = questionNo + "."+ currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    })
}
function resetState(){
    nextBtns.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
        
    }   
}

    function selectAnswer(e){
        const selectedBtn=e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled= true;
        });
        nextBtns.style.display="block";

    }
    function showScore(){
        resetState();
        currentQue.innerHTML =`you scored ${score}out of ${questions.length}!`
        
        nextBtns.innerHTML="PlayAgain";
        nextBtns.style.display="block";
    }
    function handeleNextButton(){
        currentQuestionIndex++;
        
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore()
        }
    }
    nextBtns.addEventListener("click",()=>{
        if(currentQuestionIndex < questions.length){
            handeleNextButton();
        }else{
            startQuize();
        }

    })
 startQuize();
