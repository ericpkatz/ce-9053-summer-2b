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
      if (isFizzBuzz(i)) {
        results.push('FizzBuzz');
      }
      else if (isFizz(i)) {
        results.push('Fizz');
      }
      else if (isBuzz(i)) {
        results.push('Buzz');
      }
      else {
        results.push(i);
      }
    }
    return results;
  }
};