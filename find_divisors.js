/*
Create a function named divisors/Divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

*/

function divisors(integer) {
  let divisorArray = [];
  
  // if(prime) return `#{integer} is prime`
  
  function isPrime(n) {
    let start = 2;
    while (start <= Math.sqrt(n)) {
      if (n % start++ < 1) return false;
    }
    return n > 1;
  }
  
 
  // return array of integer divisors !not 1 or integer

  for(let i = 2; i <= integer-1; i++) {
    if(isPrime(integer)) return `${integer} is prime`
    if(integer % i === 0) divisorArray.push(i)
  }

  return divisorArray;

};
