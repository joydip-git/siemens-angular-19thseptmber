var x = 100
function outer() {
    var a
    a = 10
    function inner() {
        var b
        b = 20
        var res
        res = a + b + x
        console.log(res)
    }
    //inner()
    return inner
}
function change() {
    x = 300
}
var innerFn = outer();

innerFn();
x = 200