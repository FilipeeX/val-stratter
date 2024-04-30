let strategyContainer = document.getElementById("strategy");
let mapElem = document.createElement("div");


function getAgentNickById(id) {
    
    switch (id) {
        case 0:
            return "astra";
        case 1:
            return "brimstone";
        case 2:
            return "clove";
        case 3:
            return "harbor";
        case 4:
            return "omen";
        case 5:
            return "viper";
        case 6:
            return "iso";
        case 7:
            return "jett";
        case 8:
            return "neon";
        case 9:
            return "phoenix";
        case 10:
            return "raze";
        case 11:
            return "reyna";
        case 12:
            return "yoru";
        case 13:
            return "breach";
        case 14:
            return "fade";
        case 15:
            return "gekko";
        case 16:
            return "kayo";
        case 17:
            return "skye";
        case 18:
            return "sova";
        case 19:
            return "chamber";
        case 20:
            return "cypher";
        case 21:
            return "deadlock";
        case 22:
            return "killjoy";
        case 23:
            return "sage";
        default:
            return null;
    }

}


function continueFormingStrategy(data) {

    let positions = data[map];

    for (let i = 0; i < selected.length; i++) {

        let agentId = selected[i];
        let agentNick = getAgentNickById(agentId);

        if (!(agentNick in positions)) {
            continue;
        }

        let position = positions[agentNick];
        let x = position["x"];
        let y = position["y"];
        
        let newEleme = document.createElement("img");
        newEleme.className = "agent";
        newEleme.style.top = y + "px";
        newEleme.style.left = x + "px";
        newEleme.src = "../resources/agents/" + agentNick + ".webp";

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