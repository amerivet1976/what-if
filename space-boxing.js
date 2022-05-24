const prompt = require('prompt-sync')({sigint: true});


let earthWeight = prompt("What is your earth weight? ");

let Where = prompt("Please enter 1 for Venus, 2 for Mars, 3 for Jupiter, 4 for Saturn, 5 for Uranus, and 6 for Neptune");

let venusWeight = .78 * earthWeight;
let marsWeight = .39 * earthWeight;
let jupiterWeight = 2.65 * earthWeight;
let saturnWeight = 1.17 * earthWeight;
let uranusWeight = 1.05 * earthWeight;
let neptuneWeight = 1.23 * earthWeight;

if( Where = 1){
    console.log("You weigh "+ venusWeight)
} else if (Where = 2){
    console.lo("You weigh " + marsWeight)
}
else if (Where = 3){
    console.log("You weigh " + saturnWeight)
}   
else if (Where = 4){
    console.log(" You weigh " + uranusWeight)
}

else if (Where = 5){
    console.log(" You weigh " + neptuneWeight)
}
