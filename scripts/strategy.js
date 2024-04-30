let strategyContainer = document.getElementById("strategy");
let mapElem = document.createElement("div");


function continueFormingStrategy(data) {

    let positions = data[map];

    for (let i = 0; i < positions.length; i++) {

        let position = positions[i];
        let agent = position["agent"];
        let x = position["x"];
        let y = position["y"];
        
        let newEleme = document.createElement("img");
        newEleme.className = "agent";
        newEleme.style.top = y + "px";
        newEleme.style.left = x + "px";
        newEleme.src = "../resources/agents/" + agent + ".webp";

        let card = document.createElement("div");
        card.className = "card";
        card.style.top = (y - 2) + "px";
        card.style.left = (x - 2) + "px";

        mapElem.appendChild(card);
        mapElem.appendChild(newEleme);
    }    
    
}


function createMap(data) {

    mapElem.className = "map";
    mapElem.id = "map--" + map;

    strategyContainer.appendChild(mapElem);
    continueFormingStrategy(data)
}


function retrieveData() {
    fetch("../resources/positioning.json").then(res => res.json()).then(data => createMap(data))
}


let strategyOpacity = 0
function makeStrategyAppear() {

    if (strategyOpacity === 0) {
        retrieveData();
        strategyContainer.style.display = "block";
    }

    strategyOpacity = roundTo(strategyOpacity + .1, 1);
    strategyContainer.style.opacity = strategyOpacity;

    if (strategyOpacity === 1) {
        return;
    }

    window.requestAnimationFrame(makeStrategyAppear);
}