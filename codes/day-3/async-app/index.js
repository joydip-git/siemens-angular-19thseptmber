const divide = function (a, b) {
    const p = new Promise(
        function (resolveFn, rejectFn) {
            setTimeout(
                () => {
                    const result = a / b
                    if (result === Infinity) {
                        //throw new Error('can not divide by zero')
                        //rejectFn(new Error('can not divide by zero'))
                        rejectFn('can not divide by zero')
                    }
                    resolveFn(result)
                }, 2000
            )
        }
    )
    return p
}

const add = function (a, b) {
    return a + b
}

const divPromise = divide(10, 2)
divPromise.then(
    function (data) {
        console.log(data)
    },
    function (err) {
        //console.log(err.message)
        console.log(err)
    }
)

const addRes = add(10, 2)
console.log(addRes)