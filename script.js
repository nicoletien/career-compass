// Store user assessment result

let userResult = {

science:0,

technology:0,

business:0,

communication:0,

leadership:0,

creativity:0,

problemSolving:0

};


// Calculate career potential

function calculateResult(){


let totalScore = 0;


// Personality score

let personalityAnswers = document.querySelectorAll(
'input[type="radio"]:checked'
);


personalityAnswers.forEach(answer=>{


if(answer.value=="Strongly Agree"){

totalScore +=20;

}

else if(answer.value=="Agree"){

totalScore +=15;

}

else{

totalScore +=10;

}


});



// Convert into percentage


let potential = Math.min(
Math.round(totalScore/3),
100
);



localStorage.setItem(
"potential",
potential
);



window.location.href="analysis.html";


}
