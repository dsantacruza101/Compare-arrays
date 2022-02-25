// simpleArryaComparison
/*
function compareTriplets(a, b) {

    var result = [];
    let p1 = 0;
    let p2 = 0;

    for (let i = 0; i < a.length && i < b.length; i++) {
        if (a[i] > b[i]) {
            result = [(p1 = p1 + 1), p2];

        } else if (a[i] === b[i]) {
            result = [p1, p2]
        } else {
            result = [p1, (p2 = p2 + 1)];

        }
    }

    return result;
    console.log(result);
}


console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
*/

// calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    let leftDiagSum = 0;
    let rightDiagSum = 0;
    for (let i = 0; i < arr.length; i++) {
        leftDiagSum += arr[i][i];
        rightDiagSum += arr[i][arr[i].length - (i + 1)];
    }
    let sum = Math.abs(leftDiagSum - rightDiagSum);
    return sum;
}