module.exports = function solveEquation(equation) {

    let arr = equation.split(' ');
    /*console.log(equationSplitted);*/
    let a,b,c, D, d, x1, x2, result = [];

    a = parseInt(arr[0]);
    b = parseInt(arr[3] + arr[4]);
    c = parseInt(arr[7] + arr[8]);

    D = (b * b) - 4 * a * c;
    d = Math.round(Math.sqrt(D));
    x1 = ((-b) + d) / (2 * a);
    x2 = ((-b) - d) / (2 * a);

    result.push(x1);
    result.push(x2);

    if (result[1] < result[0]) {

        result[0] = result[0] + result[1];
        result[1] = result[0] - result[1];
        result[0] = result[0] - result[1];
    }

    return result;
}
