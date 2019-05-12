// Generated by CoffeeScript 2.4.0
(function() {
  var buzzTheFizz, isBuzz, isFizz;

  isFizz = function(x) {
    return x % 3 === 0;
  };

  isBuzz = function(x) {
    return x % 5 === 0;
  };

  buzzTheFizz = function(length = 100) {
    var i, j, result;
    result = [];
    for (i = j = 1; j <= 100; i = ++j) {
      if (isFizz(i) && isBuzz(i)) {
        result.push("FizzBuzz");
      } else if (isFizz(i)) {
        result.push("Fizz");
      } else if (isBuzz(i)) {
        result.push("Buzz");
      } else {
        result.push(i);
      }
    }
    return result;
  };

  console.log(buzzTheFizz(1000));

}).call(this);

//# sourceMappingURL=fizzbuzz.coffeescript.js.map
