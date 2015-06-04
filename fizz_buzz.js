var FizzBuzz = {
  generate: function(max) {
    var results = [];
    for (var i = 1; i <= max; i = i + 1) {
      if (i % 3 == 0 && i % 5 == 0) {
        results.push('FizzBuzz');
      }
      else if (i % 3 == 0) {
        results.push('Fizz');
      }
      else if (i % 5 == 0) {
        results.push('Buzz');
      }
      else {
        results.push(i);
      }
    }
    return results;
  }
};