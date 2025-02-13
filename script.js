function exponentialPopulationGrowth() {
    let initialPopulation = parseFloat(prompt("Enter the value for the initial population:"));
    let rateOfGrowth = parseFloat(prompt("Enter the value for the rate of growth:"));
    let timeInHours = parseFloat(prompt("Enter the value for the time in hours:"));

    let finalPopulation = Math.round(initialPopulation * Math.pow(Math.E, (rateOfGrowth*timeInHours)));

    let locationOfMonster = prompt("Enter the location of the monster: ");
    let nameOfMonster = prompt("Enter the name of the monster:");

    let nameAndLocationOfMonster = locationOfMonster.concat(" ", nameOfMonster).toUpperCase();

    document.getElementById("result").innerHTML = "After " + timeInHours +  " hours, the population of " + nameAndLocationOfMonster + " has increased to " + finalPopulation;
}