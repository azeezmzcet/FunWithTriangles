const sides=document.querySelectorAll('.side-input');
const hypotenuseBtn=document.querySelector('#hypotenuse-btn');
const outputE1 =document.querySelector('#output');


function calculateSumOfSquares(a,b){
    const SumOfSquares =a*a + b*b;
    console.log(SumOfSquares);
    return SumOfSquares;
    
}

function calculateHypotenuse(){
    console.log('hyponetenuse');
   const SumOfSquares= calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value) ); //typecasing
   const lengthOfHypotenuse =Math.sqrt(SumOfSquares);
   //console.log(SumOfSquares);
   console.log(lengthOfHypotenuse);
   outputE1.innerHTML="the lenth of hupineuse" + lengthOfHypotenuse
   
    
}

hypotenuseBtn.addEventListener("click",calculateHypotenuse);