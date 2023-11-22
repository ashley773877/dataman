// 1. math problems
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;


const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50);

const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

console.log(isValid);

const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  //are all # dividible by 5
  const alldivisibleby5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
  console.log("they are all divisible by 5");

  // is first number larger than last
  const isfirstlarger = n1 > n4;
  console.log("the first number is larger than the second");

  //arithmetic chain
  const result = ( n1 - n2) * n3 % n4; 
  console.log("the result is -25"); 

  // change isover25
  const isUnderOrEqualTo25 = n1 + n2 + n3 // couldnt complete

  //Pt. 2 practical math 
  const totalDistance = 1500; // miles
  const fuelEfficiency = {
    55: 30, 60: 28, 75: 23,
  };
  const fuelBudget = 175; // dollars
  const costPerGallon = 3; // dollars 

  //fuel needed for the entire trip 
  const calculateFuelNeeded = (speed) => totalDistance / fuelEfficiency[speed];

// totoal fuel needed for trip at each speed
const fuel55 = calculateFuelNeeded(55);
const fuel60 = calculateFuelNeeded(60);
const fuel75 = calculateFuelNeeded(75);

// total cost of fuel at each speed
const cost55 = fuel55 * costPerGallon;
const cost60 = fuel60 * costPerGallon;
const cost75 = furl70 * costPerGallon;

// see which speed stays better budget
let speed;
let totalCost
if (cost55 <= fuelBudget) {
    console.log(" 55 is enough");
} else if (cost60 <= fuelBudget) {
    console.log("60 is enough");
} else if (cost75 <= fuelBudget) {
    console.log("75 is enough")
} else {
    console.log("budget is not enough for the entire trip")
}
 


