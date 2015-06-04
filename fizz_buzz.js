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
    
    function getEntry(num){
      if (isFizzBuzz(num)) {
        return 'FizzBuzz';
      }
      else if (isFizz(num)) {
        return 'Fizz';
      }
      else if (isBuzz(num)) {
        return 'Buzz';
      }      
      return num;
    }
    var results = [];
    for (var i = 1; i <= max; i = i + 1) {
      results.push(getEntry(i));
    }
    return results;
  }
};