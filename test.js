const chai = require('chai');
const should = chai.should();
const Fizzbuzz = require('./index');

let mappings = {
  3: "map3",
  5: "map5",
};

let fizzfunction = new Fizzbuzz(mappings);

describe("fizzbuzz with two numbers mappings", function() {
  it("returns the value itself when it is not in the mappings", function() {
    fizzfunction.value(1).should.equals(1);
    fizzfunction.value(2).should.equals(2);
  });

  it("returns the mapping when it is a multiple of 3 and 5", function() {
    fizzfunction.value(15).should.equals("map3map5");
    fizzfunction.value(45).should.equals("map3map5");
  });

  it("returns the mapping when it is a multiple of 5", function() {
    fizzfunction.value(5).should.equals("map5");
    fizzfunction.value(20).should.equals("map5");
  });

  it("returns the mapping when it is a multiple of 3", function() {
    fizzfunction.value(9).should.equals("map3");
    fizzfunction.value(6).should.equals("map3");
  });
});



let mappings1 = {
  3: "map3",
  5: "map5",
  7: "map7"
};

let fizzfunction1 = new Fizzbuzz(mappings1);

describe("fizzbuzz with more than two numbers mapping", function() {
  it("returns invalid mappings when mappings are given for more than 2 numbers", function() {
    fizzfunction1.value(1).should.equals("Invalid mapping. Please enter mappings for two numbers only.");
    fizzfunction1.value(2).should.equals("Invalid mapping. Please enter mappings for two numbers only.");
  });
});
