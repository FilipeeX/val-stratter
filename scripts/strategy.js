let strategyContainer = document.getElementById("strategy");


let strategyOpacity = 0
function makeStrategyAppear() {

    if (strategyOpacity === 0) {
        strategyContainer.style.display = "block";
    }

    strategyOpacity = roundTo(strategyOpacity + .1, 1);
    strategyContainer.style.opacity = strategyOpacity;

    if (strategyOpacity === 1) {
        return;
    }

    window.requestAnimationFrame(makeStrategyAppear);
}