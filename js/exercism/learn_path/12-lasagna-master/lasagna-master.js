/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
/**
 * 
 * @param {number | undefined} remainingTime 
 * @returns {string}
 */
export function cookingStatus(remainingTime){
    if (remainingTime == undefined){
        return 'You forgot to set the timer.';
    }
    if (remainingTime === 0){
        return 'Lasagna is done.';
    }
    return 'Not done, please wait.';
}

/**
 * 
 * @param {string[]} layers 
 * @param {number} avgPrepTime 
 * @returns {number}
 */
export function preparationTime(layers, avgPrepTime=2){
    let sum = 0;
    layers.forEach( _ => {
        sum += avgPrepTime;
    })
    return sum;
}

/**
 * 
 * @param {string[]} layers 
 * @returns {Quantities}
 */
export function quantities(layers){
    const noodles = 50;
    const sauce = 0.2;
    let noodlesSum = 0;
    let sauceSum = 0;
    layers.filter(item => (item == 'noodles' || item == 'sauce')).forEach( item => {
        if (item === 'noodles'){
        noodlesSum += noodles;
    }
        if (item === 'sauce'){
            sauceSum += sauce;
        }
    })
    return { noodles: noodlesSum, sauce: sauceSum }
}

/**
 * 
 * @param {string[]} friendsList 
 * @param {string[]} myList
 * @returns {undefined} 
 */
export function addSecretIngredient(friendsList, myList){
    let lastItem = friendsList.slice(-1)[0]; 
    myList.push(lastItem);
}

/**
 * 
 * @param {object} recipe 
 * @param {number} numOfPort 
 * @returns {object}
 */
export function scaleRecipe(recipe, numOfPort){
    let myRecipe = {};
    for (let key in recipe){
        myRecipe[key] = recipe[key] * numOfPort / 2;
    }
    return myRecipe;
}