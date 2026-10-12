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

const appList = document.getElementById("app-list");

const showApps = async () => {
    try {
        const response = await fetch("https://anchalpatel05.github.io/json/apps.json");
        const apps = await response.json();

        apps.forEach((app) => {
            let tagClass = "res-tag";
            if (app.price == "PAID") {
                tagClass = "res-tag paid";
            }

            appList.innerHTML += `
                <article class="res-card ${app.color}">
                    <div class="res-head">
                        <div class="res-icon"><img src="${app.img_name}" alt="${app.name} icon"></div>
                        <div>
                            <h3>${app.name}</h3>
                            <p class="res-sub">${app.category}</p>
                        </div>
                        <p class="${tagClass}">${app.price}</p>
                    </div>
                    <p>${app.description}</p>
                </article>
            `;
        });
    } catch (error) {
        appList.innerHTML = "<p>Sorry, the apps could not be loaded right now.</p>";
    }
};

if (appList) {
    showApps();
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    const contactResult = document.getElementById("contact-result");

    contactForm.addEventListener("invalid", () => {
        contactResult.innerHTML = "Please fill out every field correctly.";
        contactResult.className = "contact-result bad";
    }, true);

    contactForm.onsubmit = async (e) => {
        e.preventDefault();
        contactResult.innerHTML = "Sending...";
        contactResult.className = "contact-result";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: new FormData(contactForm)
            });

            if (response.status == 200) {
                contactResult.innerHTML = "Thanks! Your message was sent.";
                contactResult.className = "contact-result good";
                contactForm.reset();
            } else {
                contactResult.innerHTML = "Sorry, your message could not be sent.";
                contactResult.className = "contact-result bad";
            }
        } catch (error) {
            contactResult.innerHTML = "Sorry, your message could not be sent.";
            contactResult.className = "contact-result bad";
        }

        setTimeout(() => {
            contactResult.innerHTML = "";
        }, 3000);
    };
}
