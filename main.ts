/**
 * @author Miles Aube
 * @version 1.0.0
 * @date 2025-12-06
 * @fileoverview This program prints a 10 by 10 grid. Odd rows contain X's, even rows contain O's.
 */

// variables
let row = "";

// output
console.log("10 by 10 Grid with X's and O's:");

// loop through 10 rows
for (let rowVariable = 1; rowVariable <= 10; rowVariable++) {
  // loop through 10 columns
  for (let columnVariable = 1; columnVariable <= 10; columnVariable++) {
    if (rowVariable % 2 === 1) {
      // odd rows: add X
      row += "X ";
    } else {
      // even rows: add O
      row += "O ";
    }
  }
  // print the completed row
  console.log(row); 
  // reset row variable for next iteration
  row = "";
}

console.log("\nDone.");