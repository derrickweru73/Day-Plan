// DOM ELEMENTS SELECTION
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

// Base quote engine string used inside the loop
const motivationalMessage = "Craft your day with intention. Consistency builds excellence!";

// INITIALIZATION ROUTINE (Fires on Application Boot/Page Reload)
/* DOMContentLoaded ensures this script waits to run until the browser is completely done building the raw HTML structure. */
document.addEventListener('DOMContentLoaded', initializeApplication);

function initializeApplication() {
    /* .getItem() goes into the browser's database and checks for values stored under these key names. */
    const savedName = localStorage.getItem('dc_name');
    const savedAge = localStorage.getItem('dc_age');

    /* if (savedName && savedAge) checks if BOTH pieces of data exist. If true, it loads the dashboard instantly. */
    if (savedName && savedAge) {
        /* parseInt() takes the saved age text string (like "25") and forces it into a real mathematical number (25). */
        processUserDashboard(savedName, parseInt(savedAge));
    } else {
        showCleanInputForm();
    }
}


// CORE PROCESSING FUNCTIONS
 
userForm.addEventListener('submit', function(event) {
    /* event.preventDefault() stops the HTML form from its default action, which is hard-refreshing the browser page. */
    event.preventDefault(); 

    /* .trim() cleanly chops away any accidental blank empty spaces the user typed at the start or end of their name. */
    const inputName = userNameInput.value.trim();
    const inputAge = parseInt(userAgeInput.value);

    /* .setItem() takes our working inputs and locks them safely into the browser's long-term memory cache. */
    localStorage.setItem('dc_name', inputName);
    localStorage.setItem('dc_age', inputage.toString()); /* .toString() safely converts our number back to text for storage. */

    processUserDashboard(inputName, inputAge);
});

function calculateAgeInMonths(ageInYears) {
    return ageInYears * 12; /* Simple calculation logic function returning the computed calculation product. */
}

function processUserDashboard(name, ageInYears) {
    const totalMonths = calculateAgeInMonths(ageInYears);

    /* This if...else statement evaluates our numeric age to conditionally choose text updates and styling branches. */
    if (ageInYears < 18) {
        /* Template literals use backticks (``) and ${} to smoothly inject variables straight into live text string code. */
        greeting.textContent = `Welcome, Apprentice Crafter ${name}!`;
        /* .style.color accesses the DOM stylesheet layout and changes the text color on the fly to "green". */
        ageDisplayParent.style.color = "green"; 
    } else {
        greeting.textContent = `Welcome Back, Master Crafter ${name}!`;
        /* Routes execution to turn the metrics display text "purple" for users 18 years old or older. */
        ageDisplayParent.style.color = "purple"; 
    }

    /* .toLocaleString() formats huge numbers automatically by adding commas (for example: converting 1200 into 1,200). */
    ageMonthsDisplay.textContent = totalMonths.toLocaleString();

    /* Invokes our loop generation engine and instructs it to cycle exactly 3 times through parameter variables. */
    renderRepeatedMessages(3);

    /* .classList manipulation adds or strips CSS visibility rules to hide the input card and open the results panel. */
    welcomeMessage.classList.add('hidden');
    dashboardContent.classList.remove('hidden');
    resetBtn.classList.remove('hidden');
    userForm.classList.add('hidden');
}

function renderRepeatedMessages(repeatCount) {
    /* .innerHTML = "" completely clears out old list items before the loop runs so text doesn't stack up infinitely. */
    quoteContainer.innerHTML = "";

    /* This for-loop starts counter "i" at 1, checks if it is <= 3, runs the code, and adds 1 to "i" (i++) every turn. */
    for (let i = 1; i <= repeatCount; i++) {
        /* document.createElement() commands JavaScript to build a brand-new, empty HTML <li> tag inside memory. */
        const listItem = document.createElement('li');
        
        /* .classList.add attaches our CSS rules to our fresh element so it inherits our left border design styles. */
        listItem.classList.add('quote-item');
        
        /* Binds our text dynamic counter number and message directly inside our floating virtual element tag. */
        listItem.textContent = `Name $(i): ${motivationalMessage}`;
        
        /* .appendChild takes our finished list item element and pastes it cleanly inside our live HTML list box. */
        quoteContainer.appendChild(listItem);
    }
}const motivationalMessage = "keep going!";

 // STORAGE DELETION ROUTINES
 function showCleanInputForm() {
    welcomeMessage.classList.remove('hidden');
    dashboardContent.classList.add('hidden');
    resetBtn.classList.add('hidden');
    userForm.classList.remove('hidden');
    userForm.reset(); /* .reset() completely clears out all text input fields inside our HTML profile form structure. */
}

resetBtn.addEventListener('click', function() {
    /* .removeItem() targets explicit database slots and completely wipes their records from browser cache files. */
    localStorage.removeItem('dc_name');
    localStorage.removeItem('dc_age');
    showCleanInputForm();
});