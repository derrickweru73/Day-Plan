alert("Script is connected")
// 1. Grab your existing HTML elements
const craftBtn = document.getElementById('craftBtn');
const resetBtn = document.getElementById('resetBtn');
const metricsOutput = document.getElementById('metricsOutput')

// 2. Add the Event Listener for the Form Submission
craftBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const nameInput = document.getElementById("name").value;
    const ageInput = document.getElementById ("age").value;

    document.getElementById("output").innerHTML = `welcome ${name}, Age: ${age}`
    // Validation: stop if inputs are empty
    if (!nameInput || !ageInput) {
        alert("Please enter both your name and age!");
        return;
    }
    const nameValue = nameInput.value.trim();
    const ageValue = parseInt(ageInput.value);


    // [FEATURE 1]: Save data to localStorage
    localStorage.setItem('crafterName', nameValue);
    localStorage.setItem('crafterAge', ageValue);

    // Run the dashboard compiler
    compileDashboard(nameValue, ageValue);
});

// 3. Core Function to Generate the Required Content
function compileDashboard(name, age) {
    const metricsOutput = document.getElementById('metricsOutput');

    // [FEATURE 4]: Calculate age in months
    const ageInMonths = age * 12;

    // [FEATURE 2]: Conditional statement for content access (Age 18 check)
    let accessMessage = "";
    if (age >= 18) {
        accessMessage = " Access Granted: You are old enough to access premium adult content.";
    } else {
        accessMessage = " Access Restricted: You are too young for adult content.";
    }

    // [FEATURE 5]: Use a loop to generate a motivational quote 5 times
    let quotesHTML = "";
    const motivationalQuote = " 'The secret of getting ahead is getting started.'";
    
    for (let i = 1; i <= 5; i++) {
        quotesHTML += `<p class="quote-item">${i}. ${motivationalQuote}</p>`;
    }

    // [FEATURE 3]: Update the UI cleanly using Template Literals
    metricsOutput.innerHTML = 
        "<div class='results-container'>" +
        "<h3>Hello, " + name + "! Welcome to your workspace.</h3>" +
        "<hr>" +
        "<p><strong>Your Age Profile:</strong> " + age + " years old (" + ageInMonths.toLocaleString() + " months old)</p>" +
        "<p class='status-msg'>" + accessMessage + "</p>" +
        "<div class='quotes-section'>" +
        "<h4>Daily Focus Reminders:</h4>" +
        quotesHTML +
        "</div>" +
        "</div>";
}
   

// 4. Reset Button Functionality
resetBtn.addEventListener('click', function() {
    document.querySelector('input[type="text"]').value = '';
    document.querySelector('input[type="number"]').value = '';
    localStorage.clear(); // Clears saved data
    document.getElementById('metricsOutput').innerHTML = <p>Welcome to DayPlan. Enter your data to begin designing your day.</p>;
});