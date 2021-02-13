const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// * Create a new variable called `totalBatteries` which is the sum of all of the
// battery amounts in the `batteryBatches` array. Naturally, use `reduce()` for this!
//const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
//array1.reduce(reducer)

let totalBatteries = batteryBatches.reduce(reducer)

