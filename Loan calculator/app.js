//document.getElementById("results").style.display = "none";
//document.getElementById("loader").style.display = "none";

submitBtn = document.getElementById("loan-form");
submitBtn = document.getElementById("submit");

//submitBtn.addEventListener('submit', function(e) {
    //document.getElementById("results").style.display = "none";
    //document.getElementById("loader").style.display = "block";
    //setTimeout(calculateResults, 2000);

    //e.preventDefault();
//});






function calculateResults(e) {
    const loanAmountUI = document.getElementById("amount");
    const interestRateUI = document.getElementById("interest");
    const yearsUI = document.getElementById("years");

    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interests");


    console.log(loanAmountUI.value, interestRateUI.value, yearsUI.value);
    
    const principal = parseFloat(loanAmountUI);
    const calculatedInterest = parseFloat(interestRateUI) /100 /12;
    const calculatedPayments = parseFloat(yearsUI.value) * 12; 

    const x = Math.pow(1 +  calculatedPayments, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) { 
        //console.log(monthly);
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);


    } else {
        manageError("Please, review your input");
    }





    e.preventDefault();
}

function manageError(errorMsg) {
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");
    
    const errorDiv = document.createElement("div");
    errorDiv.className = "alert alert-danger";

    const errorTextNode = document.createTextNode(errorMsg);
    errorDiv.appendChild(errorTextNode);

    card.insertBefore(errorDiv, heading);
    

    windows.setTimeout(clearError,3000)
}

function clearError(){ 
    document.getElementById("customAlert").remove();
}

