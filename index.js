var calc = (function () {
  var total = 0;
  var index = 0;
  return {
    add: function () {
      for(index in arguments) {
        total += arguments[index];
      }
      return this;
    },
    power: function () {
      for(index in arguments) {
        total = Math.pow(total, arguments[index]);
      }
      return this;
    },
    subtract: function () {
      for(index in arguments) {
        total -= arguments[index];
      }
      return this;
    },
    divide: function () {
      for(index in arguments) {
        total /= arguments[index];
      }
    return this;
    },
    multiply: function () {
      for(index in arguments) {
        total *= arguments[index];
      }
    return this;
    },
    equals: function () {
    var equal = total;
    total = 0;  
    return equal;
    }
  };
})();

// To run the function:

calc.add().power().subtract().divide().multiply().equals()
