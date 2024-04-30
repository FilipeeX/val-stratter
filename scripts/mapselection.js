let mapSelectionContainer = document.getElementById("map-selection")
let agentSelectionContainer = document.getElementById("agent-selection")

let map = undefined;


let agentSelectionOpacity = 0
function makeAgentSelectionAppear() {

    if (agentSelectionOpacity === 0) {
        agentSelectionContainer.style.display = "block";
    }

    agentSelectionOpacity = roundTo(agentSelectionOpacity + .1, 1);
    agentSelectionContainer.style.opacity = agentSelectionOpacity;

    if (agentSelectionOpacity === 1) {
        return;
    }

    window.requestAnimationFrame(makeAgentSelectionAppear);
}


let mapSelectionOpacity = 100
function dissolveMapSelection() {

    mapSelectionOpacity -= 10;
    mapSelectionContainer.style.opacity = mapSelectionOpacity + "%";

    if (mapSelectionOpacity === 0) {
        mapSelectionContainer.style.display = "none";
        requestAnimationFrame(makeAgentSelectionAppear);
        return;
    }

    window.requestAnimationFrame(dissolveMapSelection);
}


function selectMap(mapa) {
    map = mapa
    requestAnimationFrame(dissolveMapSelection)
}


function ascent() {
    selectMap("ascent")
}

function bind() {
    selectMap("bind")
}

function breeze() {
    selectMap("breeze")
}

function icebox() {
    selectMap("icebox")
}

function lotus() {
    selectMap("lotus")
}

function split() {
    selectMap("split")
}

function sunset() {
    selectMap("sunset")
}
