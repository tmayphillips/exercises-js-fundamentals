/*
  Require the printHelpers module, which allows us to do things like print
  characters without always inserting a new line, print characters multiple
  times, etc.
*/
let helpers = require('../printHelpers');

/**
 * Given an integer `height`, prints a hollow square `height` characters tall
 * consisting of `#` characters for the border.
 *
 * Note, this PRINTS a square, it does not RETURN a square.
 *
 * @example
 * printHollowSquare(3); // Prints the following:
 * ###
 * # #
 * ###
 *
 * @example
 * printHollowSquare(4); // Prints the following:
 * ####
 * #  #
 * #  #
 * ####
 *
 * @param {number} height - The height of the square to print
 */
function printHollowSquare(height) {

  let char = "#"
  let result = ""
  

  for (let i = 0; i < height; i++) {
    for (let x = 0; x < height; x++) {
      
      if (i === 0 || i === height - 1) {
          
      }
      else if (x === 0 || x === height - 1) {
          result += char
        }
        else { result += " "}
      }

      result += "\n"
    }
    console.log(result)
  }

/**
 * For testing purposes, prints a diagram of the given height.
 */
function hollowSquarePrintTest(height) {
  console.log('');
  console.log(`Printing a HOLLOW SQUARE of height ${height}:`);

  printHollowSquare(height);
}

if (require.main === module) {
  /*
    Sanity checking console output is challenging. Think about how you might do it.

    For now, we simply print out a few example inputs and verify by sight that they're
    what we expect.
  */

  hollowSquarePrintTest(1);
  hollowSquarePrintTest(2);
  hollowSquarePrintTest(4);
  hollowSquarePrintTest(6);
  hollowSquarePrintTest(10);
}

module.exports = printHollowSquare;
