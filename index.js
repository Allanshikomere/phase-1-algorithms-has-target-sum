function hasTargetSum(array, target) {
  // Write your algorithm here
  if (array.length < 2) {
    return false;
}
const seen = new Set();
    for (const num of array) {
        const complement = target - num;
        if (seen.has(complement)) {
            return true; 
        }
        seen.add(num);
    }
    return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Check if there are at least two elements in the array
  Create a set to store seen values
  Iterate through the array
  Check if the complement is in the set
  Add the current number to the set

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
