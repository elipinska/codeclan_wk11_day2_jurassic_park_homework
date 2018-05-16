const Park = function(name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeLastDinosaur = function() {
  this.dinosaurs.pop();
}

Park.prototype.findDinosaursBySpecies = function(species) {
  const dinosaursFound = [];

  for (dinosaur of this.dinosaurs) {
    if( dinosaur.species === species) {
      dinosaursFound.push(dinosaur);
    }

  }

  return dinosaursFound;

}

Park.prototype.removeAllDinosaursOfSpecies = function(species) {
  let newDinoArray = [];

  for (dinosaur of dinosaurs) {
    if (dinosaur.species != species) {
      newDinoArray.push(dinosaur);
    }
  }
  this.dinosaurs = newDinoArray;
}

Park.prototype.findMostPopularDino = function() {
  this.dinosaurs.sort(function(dino1, dino2) {
    return dino2.guestsAttractedPerDay - dino1.guestsAttractedPerDay;
  });

  return this.dinosaurs[0];
}

Park.prototype.getVisitorsPerDay = function() {

  let sum = this.dinosaurs.reduce((accumulator, currentDino) => {
  return accumulator + currentDino.guestsAttractedPerDay;
}, 0);

  return sum;
}

Park.prototype.getVisitorsPerYear = function(year) {

  function daysInAYear(year) {

    return isLeapYear(year) ? 366 : 365;
  }

  function isLeapYear(year) {
     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
   }


  return this.getVisitorsPerDay() * daysInAYear(year);
}

Park.prototype.calculateAnnualRevenue = function(year) {
  return this.getVisitorsPerYear(year) * this.ticketPrice;
}

Park.prototype.getDietTypes = function() {
  let allDietTypes = {};

  for (dinosaur of this.dinosaurs) {
    if (allDietTypes[dinosaur.diet] == undefined) {
      allDietTypes[dinosaur.diet] = 0;
    }
    allDietTypes[dinosaur.diet] += 1;
  }

  return allDietTypes;
}

module.exports = Park;
