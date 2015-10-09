# calc-function

```
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
```

### To run the function:

```
calc.add(1,2).power(3).subtract(1).divide(2,1).multiply(3,4).equals()
```

### The result should equal = 156
