//holds all the information for one vacation
class Vacation {
    constructor(title, type, description, thingsToDo, image, map) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.map = map;
    }

    //returns a section with the vacation's title, type and picture for the gallery
    get card() {
        const section = document.createElement("section");
        section.classList.add("vacation-card");

        const header = document.createElement("div");
        header.classList.add("card-header");
        header.append(createElement("h3", this.title));
        header.append(createElement("p", this.type + " Vacation"));
        section.append(header);

        const img = document.createElement("img");
        img.src = "images/" + this.image;
        img.alt = this.title;
        section.append(img);

        section.onclick = () => {
            this.showPopup();
        };

        return section;
    }

    //fills the popup with this vacation's information and opens it
    showPopup() {
        const modalMap = document.getElementById("modal-map");
        modalMap.innerHTML = "";
        const iframe = document.createElement("iframe");
        iframe.src = this.map;
        modalMap.append(iframe);

        const modalInfo = document.getElementById("modal-info");
        modalInfo.innerHTML = "";
        modalInfo.append(createElement("h3", this.title));
        modalInfo.append(createDetail("Type", this.type));
        modalInfo.append(createDetail("Description", this.description));
        modalInfo.append(createDetail("Things To Do", this.thingsToDo));

        document.getElementById("vacation-modal").style.display = "block";
    }
}

//creates an element with the given tag and text
const createElement = (tag, text) => {
    const element = document.createElement(tag);
    element.innerHTML = text;
    return element;
};

//creates a paragraph with a bold label followed by its value
const createDetail = (label, value) => {
    const p = document.createElement("p");
    p.append(createElement("strong", label + ": "));
    p.append(value);
    return p;
};

//returns the google maps embed link for a place
const getMap = (place) => {
    return "https://maps.google.com/maps?q=" + place + "&output=embed";
};

//all of the vacations
const vacations = [];
vacations.push(new Vacation("Asheville", "Mountain", "An artsy mountain city known for its breweries, music scene and the Biltmore Estate.", "Tour the Biltmore, explore the River Arts District, drive the Blue Ridge Parkway.", "asheville.jpg", getMap("Asheville,+NC")));
vacations.push(new Vacation("Boone", "Mountain", "A scenic college town in the Blue Ridge Mountains with beautiful hiking and skiing.", "Go skiing, visit Appalachian State University, hike Grandfather Mountain.", "boone.jpg", getMap("Boone,+NC")));
vacations.push(new Vacation("Blowing Rock", "Mountain", "A charming little mountain village with cozy shops and stunning overlooks.", "See The Blowing Rock, shop on Main Street, ride Tweetsie Railroad.", "blowing-rock.jpg", getMap("Blowing+Rock,+NC")));
vacations.push(new Vacation("Chimney Rock", "Mountain", "A towering rock formation overlooking Lake Lure and Hickory Nut Gorge.", "Climb to the top of Chimney Rock, hike to Hickory Nut Falls, kayak on Lake Lure.", "chimney-rock.jpg", getMap("Chimney+Rock,+NC")));
vacations.push(new Vacation("Hilton Head", "Beach", "A relaxing island getaway with wide sandy beaches and gorgeous sunsets.", "Bike the beach trails, golf at Harbour Town, take a dolphin tour.", "hilton-head.jpg", getMap("Hilton+Head+Island,+SC")));
vacations.push(new Vacation("Folly Beach", "Beach", "A laid back surf town just outside of Charleston with a famous fishing pier.", "Walk the Folly Beach Pier, surf the waves, see the Morris Island Lighthouse.", "folly-beach.jpg", getMap("Folly+Beach,+SC")));
vacations.push(new Vacation("Wrightsville Beach", "Beach", "A bright and lively beach near Wilmington with clear blue water.", "Paddleboard in the sound, walk the Loop, eat fresh seafood.", "wrightsville-beach.jpg", getMap("Wrightsville+Beach,+NC")));
vacations.push(new Vacation("Kiawah Island", "Beach", "A peaceful barrier island with quiet beaches, marshes and lots of wildlife.", "Bike along the beach, visit Beachwalker Park, go birdwatching.", "kiawah-island.jpg", getMap("Kiawah+Island,+SC")));

//add every vacation's card to the gallery
const showVacations = () => {
    const gallery = document.getElementById("vacations");

    vacations.forEach((vacation) => {
        gallery.append(vacation.card);
    });
};

//close the popup when the x is clicked
document.getElementById("close-modal").onclick = () => {
    document.getElementById("vacation-modal").style.display = "none";
};

showVacations();
