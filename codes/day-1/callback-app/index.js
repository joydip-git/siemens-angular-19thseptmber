function filterValues(arr, fnRef) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
        // if (arr[i] % 2 === 0) {
        var status = fnRef(arr[i])
        if (status) {
            result.push(arr[i])
        }
    }
    return result;
}

var numbers = [1, 3, 2, 4, 5, 7, 6, 0, 9, 8]
var filterEveneLogic = function (num) {
    return num % 2 === 0
}
var filterOddLogic = function (num) {
    return num % 2 !== 0
}
var filteredEvenArray = filterValues(numbers, filterEveneLogic)
var filteredOddArray = filterValues(numbers, filterOddLogic)
console.log("even numbers")
console.log(filteredOddArray)
console.log("odd numbers")
for (var i = 0; i < filteredEvenArray.length; i++) {
    console.log(filteredEvenArray[i])
}

var employees = [
    {
        name: 'anil',
        salary: 1000
    },
    {
        name: 'joy',
        salary: 3000
    },
    {
        name: 'sunil',
        salary: 2000
    }
]

var filterBySalary = function (emp) {
    return emp.salary > 1500
}

//var records = filterValues(employees, filterBySalary)
var records = employees.filter(filterBySalary)
var found = employees.find(
    function (emp) {
        return emp.salary === 1000
    }
)
console.log(found)

var foundIndex = employees.findIndex(
    function (emp) {
        return emp.salary === 2000
    }
)
console.log(foundIndex)
console.log(records)

var transformedArray = numbers.map(
    function (num) {
        return num * 5
    }
)
console.log(numbers)
console.log(transformedArray)

//var sortLogic = (e1, e2) => e1.salary - e2.salary
var sortLogic = function (e1, e2) { return e1.salary - e2.salary }
employees.sort(
    // function (e1, e2) {
    //     return e1.salary - e2.salary
    // }

)
console.log(employees)



