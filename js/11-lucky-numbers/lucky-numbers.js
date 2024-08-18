// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let a1 = String(array1.join(''));
  let a2 = String(array2.join(''));
  let sum = Number(a1) + Number(a2);
  return sum;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let str = String(value);
  var lowRegStr = str.toLowerCase();
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
  
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === null || input === undefined || input === '') {
    return 'Required field';
  }
  if (isNaN(Number(input)) || Number(input) === 0) {
    return 'Must be a number besides 0';
  }
  return '';
}
