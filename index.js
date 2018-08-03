function Fizzbuzz(mapping){
  this.mapping = mapping;
}

Fizzbuzz.prototype.value = function(n){
  let keyArray = Object.keys(this.mapping);
  let result = "";
  for (num of keyArray){
    if (n % num == 0){result += this.mapping[num];}
  }
  if (result == ""){return n;}
  return result;
}

module.exports = Fizzbuzz;
