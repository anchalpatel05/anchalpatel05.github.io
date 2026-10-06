document.querySelector(".menu").onclick = () => {
    document.querySelector(".main-nav").classList.toggle("show");
};

const budgetForm = document.querySelector(".budget-card");

if (budgetForm) {
    budgetForm.oninput = () => {
        const income = Number(document.getElementById("income").value);
        const rent = Number(document.getElementById("rent").value);
        const groceries = Number(document.getElementById("groceries").value);
        const transportation = Number(document.getElementById("transportation").value);
        const entertainment = Number(document.getElementById("entertainment").value);
        const result = document.querySelector(".budget-result");

        if (income <= 0) {
            result.innerHTML = "Enter your income above to see results";
            result.classList.remove("good", "bad");
            return;
        }

        const leftover = income - rent - groceries - transportation - entertainment;

        if (leftover >= 0) {
            result.innerHTML = "You have $" + leftover + " left over each month!";
            result.classList.add("good");
            result.classList.remove("bad");
        } else {
            result.innerHTML = "You are $" + (leftover * -1) + " over budget each month.";
            result.classList.add("bad");
            result.classList.remove("good");
        }
    };
}
