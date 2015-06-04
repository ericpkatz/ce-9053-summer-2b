var FizzBuzz = {
  generate: function(max) {
    function isFizz(num){
      return num % 3 == 0;
    }
    
    function isBuzz(num){
      return num % 5 == 0;
    }
    
    function isFizzBuzz(num){
      return isFizz(num) && isBuzz(num);
    }
    var results = [];
    for (var i = 1; i <= max; i = i + 1) {
      var entry = i;
      if (isFizzBuzz(i)) {
        entry = 'FizzBuzz';
      }
      else if (isFizz(i)) {
        entry = 'Fizz';
      }
      else if (isBuzz(i)) {
        entry = 'Buzz';
      }
      results.push(entry);
    }
    return results;
  }
};