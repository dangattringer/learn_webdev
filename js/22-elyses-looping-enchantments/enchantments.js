// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let cardSum = 0;
  stack.forEach((number, index) => {
    if (number === card) {
      cardSum += 1;
    }
  })
  return cardSum;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let sumEven = 0;
  let sumOdd = 0;
  for (const number of stack){
    if (number % 2 === 0){
      sumEven += 1;
    }else {
      sumOdd += 1;
    }
  }
  if (type) {
    return sumEven;
  }else{
    return sumOdd;
  }
}
