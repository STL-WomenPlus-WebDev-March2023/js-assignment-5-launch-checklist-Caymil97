// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "" || testInput === null || testInput === 0); {
        return `Empty`
    } else if ((!isNaN(Number(testInput)))) {
        return `Is a Number`
    } else {
        return `Not a Number`
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilot = document.getElementById('pilotStatus');
   let copilot = document.getElementById('copilotStatus');
   let fuelStatus = document.getElementyById('fuelStatus');
   let cargoStatus = document.getElementById('cargoStatus');
//validation that fields are filled, is a number, not a number
   if (validateInput(pilot) === `Empty` || (validateInput(copilot) === `Empty` || fuelStatus === `Empty` ||
   cargoStatus === `Empty`) {
    alert(`All fields are required`);
   } else if (validateInput(pilot) === `Is a Number` || validateInput(copilot) === `Is a Number`) {
    alert(`Please enter alphabetical characters for pilot and copilot`)
   } else if (validateInput(fuelStatus) === `Not a Number` || validateInput(cargoStatus) === `Not a Number`) {
    alert(`Please enter numerical values for fuel and cargo status`)
   } else {
    pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
    copilotStatus.innerHTMl = `Co-Pilot ${copilot} is ready`

   }

} 


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
