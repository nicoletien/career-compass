let careerScore = {

    Chemist: 0,

    EnvironmentalScientist: 0,

    AIEngineer: 0,

    BusinessAnalyst: 0,

    ResearchOfficer: 0

};



function calculateResult(){


let answers = document.querySelectorAll(
    'input[type="radio"]:checked'
);



answers.forEach(answer => {


let value = answer.value;



// ===== INTERESTS =====


// Science interest

if(value === "science"){

    careerScore.Chemist += 35;

    careerScore.EnvironmentalScientist += 25;

    careerScore.ResearchOfficer += 30;

}



// Technology interest

if(value === "technology"){

    careerScore.AIEngineer += 40;

}



// Business interest

if(value === "business"){

    careerScore.BusinessAnalyst += 40;

}



// Research interest

if(value === "research"){

    careerScore.Chemist += 25;

    careerScore.ResearchOfficer += 35;

}



// Environment interest

if(value === "environment"){

    careerScore.EnvironmentalScientist += 40;

}





// ===== PERSONALITY =====


// Problem solving

if(value === "problemSolving"){

    careerScore.Chemist += 15;

    careerScore.AIEngineer += 15;

    careerScore.ResearchOfficer += 20;

}



// Communication

if(value === "communication"){

    careerScore.BusinessAnalyst += 20;

    careerScore.EnvironmentalScientist += 10;

}



// Leadership

if(value === "leadership"){

    careerScore.BusinessAnalyst += 20;

}



// Curiosity

if(value === "curiosity"){

    careerScore.ResearchOfficer += 15;

    careerScore.Chemist += 15;

}



// Resilience

if(value === "resilience"){

    careerScore.EnvironmentalScientist += 10;

    careerScore.ResearchOfficer += 10;

}


});




// Find highest career


let bestCareer = Object.keys(careerScore).reduce(
    
(a,b)=> careerScore[a] > careerScore[b] ? a : b

);




// Calculate percentage


let matchPercentage = Math.min(
Math.round((careerScore[bestCareer] / 100) * 100),
95
);




// Save result


localStorage.setItem(
    "career",
    bestCareer
);


localStorage.setItem(
    "match",
    matchPercentage
);



window.location.href="analysis.html";


}
