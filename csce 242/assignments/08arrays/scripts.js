//international city destinations, the key is the name and the value is the map to embed
const cities = [];
cities["Paris"] = "https://maps.google.com/maps?q=Paris,+France&output=embed";
cities["Tokyo"] = "https://maps.google.com/maps?q=Tokyo,+Japan&output=embed";
cities["London"] = "https://maps.google.com/maps?q=London,+England&output=embed";
cities["Rome"] = "https://maps.google.com/maps?q=Rome,+Italy&output=embed";

//island destinations, the key is the name and the value is the map to embed
const islands = [];
islands["Maui"] = "https://maps.google.com/maps?q=Maui,+Hawaii&output=embed";
islands["Bahamas"] = "https://maps.google.com/maps?q=Bahamas&output=embed";
islands["Bali"] = "https://maps.google.com/maps?q=Bali,+Indonesia&output=embed";
islands["Maldives"] = "https://maps.google.com/maps?q=Maldives&output=embed";

//show the destinations for the type the user picks
document.getElementById("destination-type").onchange = (e) => {
    const destinationList = document.getElementById("destination-list");
    const mapArea = document.getElementById("map-area");
    destinationList.innerHTML = "";
    mapArea.innerHTML = "";

    let destinations = [];

    if(e.target.value == "cities"){
        destinations = cities;
    } else if(e.target.value == "islands"){
        destinations = islands;
    }

    for(let destination in destinations){
        destinationList.append(createDestination(destination, destinations[destination]));
    }
};

//create a list item with a link to one destination
const createDestination = (name, map) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerHTML = name;
    a.href = "#";
    li.append(a);

    a.onclick = (e) => {
        e.preventDefault();
        showMap(map);
    };

    return li;
};

//show the map for the destination that was clicked
const showMap = (map) => {
    const mapArea = document.getElementById("map-area");
    mapArea.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.src = map;
    mapArea.append(iframe);
};
