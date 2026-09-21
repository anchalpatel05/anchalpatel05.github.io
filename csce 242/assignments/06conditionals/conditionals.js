//toggle the navigation
//toggle the navigation
document.getElementById("toggle-nav").onclick = () => {
    const navList = document.getElementById("nav-list");
    const toggleNav = document.getElementById("toggle-nav");

    navList.classList.toggle("hide-small");

    if(navList.classList.contains("hide-small")) {
        toggleNav.innerHTML = "&#9660;";
    } else {
        toggleNav.innerHTML = "&#9650;";
    }
};

//show exercise 1 and hide exercise 2
document.getElementById("link-exercise-1").onclick = (e) => {
    e.preventDefault();

    document.getElementById("exercise-1").classList.remove("hidden");
    document.getElementById("exercise-2").classList.add("hidden");
};

//show exercise 2 and hide exercise 1
document.getElementById("link-exercise-2").onclick = (e) => {
    e.preventDefault();

    document.getElementById("exercise-1").classList.add("hidden");
    document.getElementById("exercise-2").classList.remove("hidden");

    //calculate days until December 4th
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), 11, 4);
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.ceil((lastDay - today) / millisecondsPerDay);

    const semesterDays = document.getElementById("semester-days");
    const semesterMessage = document.getElementById("semester-message");

    semesterDays.innerHTML = `You have ${daysLeft} days left in the semester`;

    if(daysLeft <= 7) {
        semesterMessage.innerHTML = "Push through, the semester is almost done!";
    } else if(daysLeft <= 30) {
        semesterMessage.innerHTML = "Keep Going! You are almost done!";
    } else if(daysLeft <= 90) {
        semesterMessage.innerHTML = "Lock in on your work, you are doing great!";
    } else {
        semesterMessage.innerHTML = "Not time to start counting down yet!";
    }
};

//when the user enters days missed, calculate points lost
document.getElementById("days-missed").onkeyup = (e) => {
    const daysMissed = parseInt(e.target.value);
    const deductionMessage = document.getElementById("deduction-message");
    const attendanceMessage = document.getElementById("attendance-message");

    const totalClasses = 25;
    const attendancePoints = 7;
    const pointsLost = daysMissed / totalClasses * attendancePoints;

    if(isNaN(daysMissed) || daysMissed < 0) {
        deductionMessage.innerHTML = "";
        attendanceMessage.innerHTML = "";
    } else if(daysMissed === 0) {
        deductionMessage.innerHTML =
            `You will lose ${pointsLost.toFixed(1)}% for skipping ${daysMissed} days.`;

        attendanceMessage.innerHTML =
            "Perfect attendance is a great goal!";
    } else if(daysMissed <= 2) {
        deductionMessage.innerHTML =
            `You will lose ${pointsLost.toFixed(1)}% for skipping ${daysMissed} days.`;

        attendanceMessage.innerHTML =
            "Try your best not to miss any more classes.";
    } else if(daysMissed <= 5) {
        deductionMessage.innerHTML =
            `You will lose ${pointsLost.toFixed(1)}% for skipping ${daysMissed} days.`;

        attendanceMessage.innerHTML =
            "Missing class can make it harder to keep up.";
    } else if(daysMissed <= 7) {
        deductionMessage.innerHTML =
            `You will lose ${pointsLost.toFixed(1)}% for skipping ${daysMissed} days.`;

        attendanceMessage.innerHTML =
            "You are missing valuable learning opportunities.";
    } else {
        deductionMessage.innerHTML =
            `You will lose ${pointsLost.toFixed(1)}% for skipping ${daysMissed} days.`;

        attendanceMessage.innerHTML =
            "This is not an online class, you are missing valuable learning opportunities.";
    }
};