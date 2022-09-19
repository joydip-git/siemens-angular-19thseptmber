var hiObj = {
    sayHi: function () {
        console.log('hi')
    }
}
var helloObj = {
    sayHello: function () {
        console.log('hello')
    }
}

//mix-in (Mixin)
var mainObj = {
    ownFn: function () {
        console.log('main fn')
    },
    ...hiObj,
    ...helloObj
}

// var mainObj = {
//     ownFn: function () {
//         console.log('main fn')
//     }
// }

//Object.assign(mainObj, helloObj, hiObj)

console.log(mainObj)


