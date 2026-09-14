const speech = document.querySelector("#speech");
const speechContent = document.querySelector("#speech-content");

const beverage = document.querySelector("#beverage");
const beverageOutput = document.querySelector("#beverage-output");

const sunImage = document.querySelector("#sun-image");
const stickerColumn = document.querySelector("#sticker-column");

/* Speech */
speech.onclick = () => {
    speechContent.innerHTML = "<span class='speech-bubble'>Hi!</span>";
};

/* Beverage */
beverage.onchange = () => {
    beverageOutput.innerHTML = beverage.value + ": Nice Choice!";
};

/* Sticker */
sunImage.onclick = () => {
    const sticker = document.createElement("span");

    sticker.classList.add("sticker");
    sticker.innerHTML = "&#127774";

    sticker.style.left = Math.floor(Math.random() * 75) + "%";
    sticker.style.top = Math.floor(Math.random() * 65) + "%";

    stickerColumn.append(sticker);
};