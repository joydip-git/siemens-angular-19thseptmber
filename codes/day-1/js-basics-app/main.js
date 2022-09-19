console.log(x) //undefined
var x
x = 10
console.log(x) //10

for (var i = 0; i < 1; i++) {
    var x
    x = 20;
    console.log(x) //20
}
console.log(x) //10

//test()
function test() {
    console.log(x)
    var a
    a = 10
    console.log(a)
}
test()

//another()
var anoher
another = function () {

}
another()

console.log(a)
