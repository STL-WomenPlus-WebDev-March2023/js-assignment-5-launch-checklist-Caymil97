// Write your JavaScript code here!

//const { myFetch, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        //DOM
        let pilot = document.querySelector("input[name='pilotName']").value;
        let copilot = document.querySelector("input[name='copilotName']").value;
        let fuelLevel = document.querySelector("input[name='fuelLevel']").value;
        let cargoLevel = document.querySelector("input[name='cargoMass']").value;
        let list = document.getElementById("faultyItems")
        if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
            alert("All fields are required!");
       
            return;
        } else {
        //formSubmission to validate list
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        }
    });

    let listedPlanets;
    myFetch().then(function (result) {
        listedPlanets = result;
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let imageUrl = planet.image;
        let moons = planet.moons;
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    });
});