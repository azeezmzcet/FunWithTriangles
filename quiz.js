// const quizForm =document.querySelectorAll('.quiz-form');
// const submitAnswerBtn = document.querySelector('#submit-answer-btn');
// const outputE1 = document.querySelector('#output');

// const correctAnswers =["90°","right angled"];

// function calculateScore() {
//     let score = 0;
//     let index =  0;
//     const formResults =new FormData(quizForm);
//     // console.log(formResults);
//     for(let value of formResults.values()){   // wht entries 
//         if(value === correctAnswers[index]){
//             score = score +1; 
//         // console.log(entry);     
//           }
//           index =index +1;
             
//     }
//     outputE1.innerText="your score " +score;
    
// }

// submitAnswerBtn.addEventListener("click",calculateScore);

const outputE1 = document.querySelector("#output");
const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");

console.log('vvvvvvv');


const correctAnswers = ["90°", "right angled"];

submitAnswerBtn.addEventListener("click", calculateScore);

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    console.log('working',formResults);
    
    
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1; 
            console.log('qqqq');
            
        }
        index += 1;
        console.log('wwwww');
                     
    }
    
    outputE1.innerText = "Your score: " + score;

    console.log('eeeeee');
    
}


// console.log('tttttt');





