// ELEMENTS SELECTION
const userForm = document.getElementById('userForm');
const userNameInput = document.getElementById('userName');
const userAgeInput = document.getElementById('userAge');
const resetBtn = document.getElementById('resetBtn');

const welcomeMessage = document.getElementById('welcomeMessage');
const dashboardContent = document.getElementById('dashboardContent');
const greeting = document.getElementById('greeting');
const ageMonthsDisplay = document.getElementById('ageMonths');
const ageDisplayParent = document.getElementById('ageDisplayParent');
const quoteContainer = document.getElementById('quoteContainer');

const motivationalMessage = "Craft your day with intention. Consistency builds excellence!";

 document.addEventListener('DOMContentLoaded', initializeApplication);

function initializeApplication() {
     const savedName = localStorage.getItem('dc_name');
    const savedAge = localStorage.getItem('dc_age');

     if (savedName && savedAge) {
         processUserDashboard(savedName, parseInt(savedAge));
    } else {
        showCleanInputForm();
    }
}


// CORE FUNCTIONS
 
userForm.addEventListener('submit', function(event) {
     event.preventDefault(); 

     const inputName = userNameInput.value.trim();
    const inputAge = parseInt(userAgeInput.value);

     localStorage.setItem('dc_name', inputName);
    localStorage.setItem('dc_age', inputage.toString()); /* .toString() safely converts our number back to text for storage. */

    processUserDashboard(inputName, inputAge);
});

function calculateAgeInMonths(ageInYears) {
    return ageInYears * 12; /* Simple calculation logic function returning the computed calculation product. */
}

function processUserDashboard(name, ageInYears) {
    const totalMonths = calculateAgeInMonths(ageInYears);

     if (ageInYears < 18) {
         greeting.textContent = `Welcome, Apprentice Crafter ${name}!`;
         ageDisplayParent.style.color = "green"; 
    } else {
        greeting.textContent = `Welcome Back, Master Crafter ${name}!`;
         ageDisplayParent.style.color = "purple"; 
    }

     ageMonthsDisplay.textContent = totalMonths.toLocaleString();

     renderRepeatedMessages(3);

    // .classList manipulation adds or strips CSS visibility rules to hide the input card and open the results panel. 
    welcomeMessage.classList.add('hidden');
    dashboardContent.classList.remove('hidden');
    resetBtn.classList.remove('hidden');
    userForm.classList.add('hidden');
}

function renderRepeatedMessages(repeatCount) {
    // .innerHTML  completely clears out old list items before the loop runs so text doesn't stack up infinitely. 
    quoteContainer.innerHTML = "";

    // This for-loop starts counter "i" at 1, checks if it is <= 3, runs the code, and adds 1 to "i" (i++) every turn. 
    for (let i = 1; i <= repeatCount; i++) {
         const listItem = document.createElement('li');
        
         listItem.classList.add('quote-item');
        
         listItem.textContent = `Name $(i): ${motivationalMessage}`;
        
         quoteContainer.appendChild(listItem);
    }
}
  
 
 // STORAGE DELETION ROUTINES

function showCleanInputForm() {
    welcomeMessage.classList.remove('hidden');
    dashboardContent.classList.add('hidden');
    resetBtn.classList.remove('hidden');
    userForm.classList.remove('hidden');
    userForm.reset(); 
} 


resetBtn.addEventListener('click', function() {
   
    // .removeItem  
    localStorage.removeItem('dc_name');
    localStorage.removeItem('dc_age');
    showCleanInputForm();
});