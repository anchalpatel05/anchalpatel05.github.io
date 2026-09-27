//add cars when the page loads
window.onload = () => {
    const colors = ["#6f70d8", "#ff8a70", "#31c5bf", "#b9e54d", "#5b31ae", "#b17ace"];

    for(let i = 0; i < 6; i++) {
        //little bit of w3 schools and a little bit of AI was used on this part
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.floor(Math.random() * 90) + 2;
        const top = Math.random() < .5 ? 10 : 68;

        createCar(color, left, top);
    }
};

//create one car with a color and location on the road
const createCar = (color, left, top) => {
    const road = document.getElementById("road");
    const car = document.createElement("div");
    const frontWheel = document.createElement("div");
    const backWheel = document.createElement("div");

    car.classList.add("car");
    frontWheel.classList.add("wheel", "front-wheel");
    backWheel.classList.add("wheel", "back-wheel");

    car.style.setProperty("--car-color", color);
    car.style.left = left + "%";
    car.style.top = top + "%";

    car.append(frontWheel);
    car.append(backWheel);
    road.append(car);
};