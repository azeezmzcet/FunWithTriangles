// const quizForm =document.querySelectorAll('.quiz-form');
// const submitAnswerBtn = document.querySelector('#submit-answer-btn');
// const outputE1 = document.querySelector('#output');

// const correctAnswers =["90°","right angled"];

// function calculateScore() {
//     let score = 0;
//     let index =  0;
//     const formResults =new FormData(quizForm);
//     // console.log(formResults);
//     for(let value of formResults.values()){ // wht entries 
//         if(value === correctAnswers[index]){
//             score = score +1; 
//         // console.log(entry);     
//           }
//           index =index +1;
             
//     }
//     outputE1.innerText="your score " +score;
    
// }

// submitAnswerBtn.addEventListener("click",calculateScore);


const quizForm = document.querySelector('.quiz-form');
const submitAnswerBtn = document.querySelector('#submit-answer-btn');
const outputE1 = document.querySelector('#output');

const correctAnswers = ["90°", "right angled"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    
    for (let value of formResults.values()) {
        if (value.toLowerCase().trim() === correctAnswers[index].toLowerCase()) {
            score += 1; 
        }
        index += 1;             
    }
    
    outputE1.innerHTML = "Your score: " + score;
}

submitAnswerBtn.addEventListener('click', calculateScore);




