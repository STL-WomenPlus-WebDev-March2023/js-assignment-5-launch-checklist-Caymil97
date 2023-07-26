// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById(`missionTarget`);
    missionTarget.innerHTML = `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src='${imageUrl}'>
   `
}

function validateInput(testInput) {
    if (testInput === "" || testInput === null || testInput === 0) {
        return `Empty`;
    } else if ((!isNaN(Number(testInput)))) {
        return `Is a Number`;
    } else {
        return `Not a Number`;
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    
    // Validation that fields are filled, is a number, not a number
    if (validateInput(pilot) === `Empty` || validateInput(copilot) === `Empty` || fuelLevel === `Empty` || cargoLevel === `Empty`) {
     alert("All fields are required");
    } else if (validateInput(pilot) === `Is a Number` || validateInput(copilot) === `Is a Number`) {
     alert("Please enter alphabetical characters for pilot and copilot");
    } else if (validateInput(fuelStatus) === `Not a Number` || validateInput(cargoStatus) === `Not a Number`) {
     alert("Please enter numerical values for fuel and cargo status");
    } else {
     pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
     copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready`;
     list.style.visibility = 'hidden';
    }

   if(Number(fuelLevel) < 10000) {
    fuelStatus.innerHTML = `Fuel too low for launch`;
    list.style.visibility = `visible`;
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = `red`
   } else if (Number(cargoLevel) > 10000) {
    cargoStatus.innerHTML = `Cargo mass too high for launch`;
    list.style.visibility = `visible`;
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = `rgb(199, 37, 78)`
   } else if (Number(cargoLevel) < 10000 && Number(fuelLevel) >= 10000) {
    list.style.visibility = `visible`;
    fuelStatus.innerHTML = `Enough fuel for journey`;
    cargoStatus.innerHTML = `Cargo mass low enough for takeoff`;
    launchStatus.innerHTML = `Shuttle is ready for launch`;
    launchStatus.style.color = `rgb(65, 159, 106)`;
   }

} 


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let idx = Math.floor(Math.random() * planets.length);
    return planets [idx]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
