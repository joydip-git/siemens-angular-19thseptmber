//function declaration
var beforeRes = add(12, 3)
console.log(beforeRes)

function add(a, b) {
    return a + b;
}

var res = add(12, 13);
console.log(res)

// var beforeSubRes = subtract(12, 3)
// console.log(beforeSubRes)
//function expression
var subtract = function (a, b) {
    return a - b
}

var subRes = subtract(12, 3)
console.log(subRes)

// var x = 12;
// x = 'abcd'
// var expo = x.toExponential(2)
// console.log(expo)