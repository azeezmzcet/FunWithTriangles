const inputs = document.querySelectorAll('.angle-input');

const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputE1= document.querySelector('#output');

function calculateSumOfAngles(angle1 ,angle2 , angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
   // console.log(sumOfAngles);
    return sumOfAngles;
}


function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value, inputs[1].value,inputs[2].value));
    //console.log(sumOfAngles);
    if(sumOfAngles === 180){
        //console.log('yay the angle form a trigle');
        outputE1.innerText="yay the angle from a trigle"       
        
    }else{
       // console.log('oh oh the angle doint from trigle');
        outputE1.innerText="oh oh the angle do not from trigle"
        
        
    }
}

isTriangleBtn.addEventListener("click",isTriangle)