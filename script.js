let careerScore = {

    // Science
    Chemist: 0,
    Microbiologist: 0,
    FoodTechnologist: 0,
    EnvironmentalScientist: 0,
    Pharmacist: 0,

    // Technology
    AIEngineer: 0,
    SoftwareEngineer: 0,
    DataScientist: 0,
    CybersecurityAnalyst: 0,

    // Engineering
    ChemicalEngineer: 0,
    CivilEngineer: 0,
    MechanicalEngineer: 0,

    // Healthcare
    MedicalLaboratoryScientist: 0,
    PublicHealthOfficer: 0,

    // Business
    BusinessAnalyst: 0,
    Accountant: 0,
    MarketingExecutive: 0,
    FinancialAnalyst: 0,

    // Education
    Teacher: 0,
    Lecturer: 0,

    // Creative
    GraphicDesigner: 0,
    UXUIDesigner: 0,

    // Government
    ScienceOfficer: 0,
    SustainabilityOfficer: 0
};



function calculateResult(){


let answers = document.querySelectorAll(
    'input[type="radio"]:checked'
);



answers.forEach(answer => {


let value = answer.value;



// ===== INTERESTS =====


// Science
if(value === "science"){

    careerScore.Chemist += 40;
    careerScore.Microbiologist += 35;
    careerScore.FoodTechnologist += 35;
    careerScore.Pharmacist += 30;

}

// Technology
if(value === "technology"){

    careerScore.AIEngineer += 40;
    careerScore.SoftwareEngineer += 35;
    careerScore.DataScientist += 35;
    careerScore.CybersecurityAnalyst += 30;

}

// Engineering
if(value === "engineering"){

    careerScore.ChemicalEngineer += 40;
    careerScore.CivilEngineer += 35;
    careerScore.MechanicalEngineer += 35;

}

// Healthcare
if(value === "healthcare"){

    careerScore.Pharmacist += 35;
    careerScore.MedicalLaboratoryScientist += 40;
    careerScore.PublicHealthOfficer += 30;

}

// Business
if(value === "business"){

    careerScore.BusinessAnalyst += 35;
    careerScore.Accountant += 35;
    careerScore.MarketingExecutive += 35;
    careerScore.FinancialAnalyst += 35;

}

// Education
if(value === "education"){

    careerScore.Teacher += 40;
    careerScore.Lecturer += 35;

}

// Creative
if(value === "creative"){

    careerScore.GraphicDesigner += 40;
    careerScore.UXUIDesigner += 35;

}

// Environment
if(value === "environment"){

    careerScore.EnvironmentalScientist += 40;
    careerScore.SustainabilityOfficer += 35;
    careerScore.ScienceOfficer += 30;

}





// ===== PERSONALITY =====

// Problem Solving
if(value === "problemSolving"){

    careerScore.Chemist += 15;
    careerScore.AIEngineer += 20;
    careerScore.SoftwareEngineer += 15;
    careerScore.DataScientist += 15;
    careerScore.ChemicalEngineer += 15;

}

// Communication
if(value === "communication"){

    careerScore.BusinessAnalyst += 20;
    careerScore.MarketingExecutive += 20;
    careerScore.Teacher += 20;
    careerScore.PublicHealthOfficer += 15;

}

// Leadership
if(value === "leadership"){

    careerScore.BusinessAnalyst += 20;
    careerScore.MarketingExecutive += 15;
    careerScore.Teacher += 10;

}

// Curiosity
if(value === "curiosity"){

    careerScore.Chemist += 15;
    careerScore.Microbiologist += 20;
    careerScore.FoodTechnologist += 15;
    careerScore.DataScientist += 15;

}

// Resilience
if(value === "resilience"){

    careerScore.EnvironmentalScientist += 15;
    careerScore.MedicalLaboratoryScientist += 15;
    careerScore.CivilEngineer += 10;

}

// Research
if(value === "research"){

    careerScore.Chemist += 20;
    careerScore.Microbiologist += 20;
    careerScore.FoodTechnologist += 15;
    careerScore.ScienceOfficer += 15;

}

// Creative
if(value === "creative"){

    careerScore.GraphicDesigner += 25;
    careerScore.UXUIDesigner += 25;

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


// Rank all careers from highest to lowest

let rankedCareers = Object.entries(careerScore)
.sort((a,b)=> b[1] - a[1]);




// Create career results

let careerResults = rankedCareers.map(career => {

return {

name: career[0],

score: Math.min(career[1] + 40, 95)

};

});


// Save result

localStorage.setItem(
"careerResults",
JSON.stringify(careerResults)
);


// Go to AI Analysis

window.location.href="analysis.html";
}
