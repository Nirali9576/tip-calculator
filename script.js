
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");

const tipButtons = document.querySelectorAll(".tip-btn");

const calculateBtn = document.getElementById("calculate-btn");
const resetBtn = document.getElementById("reset-btn");

const billResult = document.getElementById("bill-result");
const tipResult = document.getElementById("tip-result");
const totalResult = document.getElementById("total-result");
const personResult = document.getElementById("person-result");

const message = document.getElementById("message");

let tipPercentage = 15;

// Select tip percentage
tipButtons.forEach(button => {
    button.addEventListener("click", function() {

        tipButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        tipPercentage = Number(this.dataset.tip);

        message.textContent = "";
    });
});

// Calculate bill
function calculateTip() {

    const billAmount = Number(billInput.value);
    const people = Number(peopleInput.value);

    if (billInput.value.trim() === "" || billAmount <= 0) {
        message.textContent = "Please enter a valid bill amount!";
        return;
    }

    if (peopleInput.value.trim() === "" ||
        !Number.isInteger(people) || people <= 0) {
        message.textContent = "Please enter a valid number of people!";
        return;
    }

    const tipAmount = billAmount * tipPercentage / 100;

    const totalBill = billAmount + tipAmount;

    const perPerson = totalBill / people;

    billResult.textContent = "₹" + billAmount.toFixed(2);

    tipResult.textContent = "₹" + tipAmount.toFixed(2);

    totalResult.textContent = "₹" + totalBill.toFixed(2);

    personResult.textContent = "₹" + perPerson.toFixed(2);

    message.textContent = "";
}

// Calculate button event
calculateBtn.addEventListener("click", calculateTip);

// Reset calculator
function resetCalculator() {

    billInput.value = "";
    peopleInput.value = "1";

    tipPercentage = 15;

    tipButtons.forEach(button => {
        button.classList.remove("active");

        if (button.dataset.tip === "15") {
            button.classList.add("active");
        }
    });

    billResult.textContent = "₹0.00";
    tipResult.textContent = "₹0.00";
    totalResult.textContent = "₹0.00";
    personResult.textContent = "₹0.00";

    message.textContent = "";
}

// Reset button event
resetBtn.addEventListener("click", resetCalculator);
