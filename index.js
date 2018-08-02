function Fizzbuzz(mapping){
  this.mapping = mapping;
  if (Object.keys(this.mapping).length != 2){
    this.invalidInput = "Invalid mapping. Please enter mappings for two numbers only.";
  }
}

Fizzbuzz.prototype.value = function(n){
  let keyArray = Object.keys(this.mapping);
  if (this.invalidInput){return this.invalidInput;}
  switch (0) {
    case n % (keyArray[0]*keyArray[1]):
      return this.mapping[keyArray[0]]+this.mapping[keyArray[1]];
    case n % keyArray[0]:
      return this.mapping[keyArray[0]];
    case n % keyArray[1]:
      return this.mapping[keyArray[1]];
    default:
      return n;
  }
}
module.exports = Fizzbuzz;
//let a = new Fizzbuzz({3: 'fizz', 5: 'buzz'});
//console.log(a.value(15));
//console.log(a.value(35));
