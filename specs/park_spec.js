const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 20);
    dinosaur3 = new Dinosaur('stegosaurus', 'herbivore', 300);
    dinosaur4 = new Dinosaur('carnotaurus', 'carnivore', 100);
    dinosaur5 = new Dinosaur('t-rex', 'carnivore', 45);
    dinosaur6 = new Dinosaur('oviraptor', 'omnivore', 60);
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3, dinosaur5, dinosaur6];
    park = new Park('Jurassic Park', 10, dinosaurs)
  })

  it('should have a name', function () {
    assert.strictEqual(park.name, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    assert.strictEqual(park.ticketPrice, 10);
  });

  it('should have a collection of dinosaurs', function () {
    assert.strictEqual(park.dinosaurs, dinosaurs);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur();
    assert.strictEqual(park.dinosaurs.length, 6);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeLastDinosaur();
    assert.strictEqual(park.dinosaurs.length, 4);

  });

  it('should be able to find all dinosaurs of a particular species', function () {
    assert.strictEqual(park.findDinosaursBySpecies('t-rex').length, 2);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.removeAllDinosaursOfSpecies('t-rex');
    assert.strictEqual(park.dinosaurs.length, 3);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    assert.deepStrictEqual(park.findMostPopularDino(), dinosaur3);

  });

  it('should be able to calculate the total number of visitors per day', function () {
    assert.strictEqual(park.getVisitorsPerDay(), 475);

  });

  it('should be able to calculate the total number of visitors per year - test standard year', function () {
    assert.strictEqual(park.getVisitorsPerYear(2018), 173375);

  });

  it('should be able to calculate the total number of visitors per year - test leap year', function () {
    assert.strictEqual(park.getVisitorsPerYear(2000), 173850);

  });

  it('should be able to calculate the total revenue from ticket sales for one year - test standard year', function () {
    assert.strictEqual(park.calculateAnnualRevenue(2018), 1733750);

  });

  it('should be able to calculate the total revenue from ticket sales for one year - test leap year', function () {
    assert.strictEqual(park.calculateAnnualRevenue(2000), 1738500);

  });

  it('should be able get an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function () {
    const actual = park.getDietTypes();
    const expected = { carnivore: 2, herbivore: 2, omnivore: 1 }
    assert.deepStrictEqual(actual, expected);

  });

});
