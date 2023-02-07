    function zero(func) {
      return number(0,func);
  }
  function one(func) {
      return number(1,func);
  }
  function two(func) {
      return number(2,func);
  }
  function three(func) {
      return number(3,func);
  }
  function four(func) {
      return number(4,func);
  }
  function five(func) {
      return number(5,func);
  }
  function six(func) {
      return number(6,func);
  }
  function seven(func) {
      return number(7,func);
  }
  function eight(func) {
      return number(8,func);
  }
  function nine(func) {
      return number(9,func);
  }
  
  function plus(number1) 
  {
    return function(number2)
     { 
        return number2 + number1; 
    };
  }
  function minus(number1)
   {
    return function(number2)
     {
   return number2 - number1;
    };
  }
  function times(number1) 
  {
    return function(number2)
     { 
        return number2 * number1; 
    };
  }

  function divided_by(number1)
   {
    return function(number2)
     { 
        return Math.floor(number2 / number1);
     };
  }

  function number(num, func) {
    if (func === undefined) 
    {
          return num;
    } 
      else
    {
          return func(num); 
    }
  }


  console.log( seven(times(five()))   );
  console.log( four(plus(nine()))     );
  console.log( eight(minus(three()))  );
  console.log( six(divided_by(two())) );
  console.log( eight(divided_by(three())) );