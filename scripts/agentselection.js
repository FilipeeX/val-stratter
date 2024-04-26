let agents = [
    document.getElementById("agent-to-select--astra"),
    document.getElementById("agent-to-select--brimstone"),
    document.getElementById("agent-to-select--clove"),
    document.getElementById("agent-to-select--harbor"),
    document.getElementById("agent-to-select--omen"),
    document.getElementById("agent-to-select--viper"),
    document.getElementById("agent-to-select--iso"),
    document.getElementById("agent-to-select--jett"),
    document.getElementById("agent-to-select--neon"),
    document.getElementById("agent-to-select--phoenix"),
    document.getElementById("agent-to-select--raze"),
    document.getElementById("agent-to-select--reyna"),
    document.getElementById("agent-to-select--yoru"),
    document.getElementById("agent-to-select--breach"),
    document.getElementById("agent-to-select--fade"),
    document.getElementById("agent-to-select--gekko"),
    document.getElementById("agent-to-select--kayo"),
    document.getElementById("agent-to-select--skye"),
    document.getElementById("agent-to-select--sova"),
    document.getElementById("agent-to-select--chamber"),
    document.getElementById("agent-to-select--cypher"),
    document.getElementById("agent-to-select--deadlock"),
    document.getElementById("agent-to-select--killjoy"),
    document.getElementById("agent-to-select--sage"),
];

var selected = [];
var dissolving = [];


function getAgentElemByAgentId(agent) {
    return agents[agent];
}


function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
}


function dissolveAgents() {
    
    for (agent of dissolving) {

        let agentElem = getAgentElemByAgentId(agent);
        let dissolvedPercent = agentElem.style.opacity.split("%")[0];

        if (dissolvedPercent === "") {
            agentElem.style.opacity = "1";
        } else if (dissolvedPercent > 0) {
            agentElem.style.opacity = +dissolvedPercent - 0.02;
        } else {
            agentElem.style.opacity = 0;
            agentElem.style.display = "none";
            dissolving = removeItemAll(dissolving, agent)
        }
    }

    if (dissolving.length < 1) {
        return;
    }

    window.requestAnimationFrame(dissolveAgents)
}


function selectAgent(agent) {
    selected.push(agent);
    dissolving.push(agent);
    window.requestAnimationFrame(dissolveAgents)
}


function astra() {
    selectAgent(0);
}

function brimstone(){
    selectAgent(1)
}

function clove(){
    selectAgent(2)
}

function harbor(){
    selectAgent(3)
}

function omen(){
    selectAgent(4)
}

function viper(){
    selectAgent(5)
}

function iso(){
    selectAgent(6)
}

function jett(){
    selectAgent(7)
}

function neon(){
    selectAgent(8)
}

function phoenix(){
    selectAgent(9)
}

function raze(){
    selectAgent(10)
}

function reyna(){
    selectAgent(11)
}

function yoru(){
    selectAgent(12)
}

function breach(){
    selectAgent(13)
}

function fade(){
    selectAgent(14)
}

function gekko(){
    selectAgent(15)
}

function kayo(){
    selectAgent(16)
}

function skye(){
    selectAgent(17)
}

function sova(){
    selectAgent(18)
}

function chamber(){
    selectAgent(19)
}

function cypher(){
    selectAgent(20)
}

function deadlock(){
    selectAgent(21)
}

function killjoy(){
    selectAgent(22)
}

function sage(){
    selectAgent(23)
}
