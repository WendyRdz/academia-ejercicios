/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */


var maxNumb = window.prompt("Maximum number to be conciderated?");

_sumFibs(maxNumb);

function _sumFibs(maxFibValue) {
    var sum, numx1, numy2;

    numx1 = 0;
    numy2 = 1;
    sum = numy2;

    for (var i = 1; i <= maxFibValue; i++) {
        console.log(sum);
        sum = numx1 + numy2;
        numx1 = numy2;
        numy2 = sum;
    }

    console.log(sum);
}


// bonus round
function _highestFibonacciNumber(maxFibValue) {
    var highest = 0;

    //define your base case, validate your input


    //do your work here

    return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
    sumFibs: _sumFibs,
    highestFibonacciNumber: _highestFibonacciNumber
};
