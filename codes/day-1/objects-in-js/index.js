//1. object-literal syntax
// var anilObject = {
//     //value properties
//     name: 'anil',
//     id: 1,
//     salary: 1000,
//     //functional properties
//     print: function () {
//         return `${this.id}, ${this.name}, ${this.salary}`
//     }
// }

//constructor function
function person(nameVal, idVal, salVal) {
    var a = 100
    this.name = nameVal
    this.id = idVal
    this.salary = salVal
    this.print = function () {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
    //return this
}

var anilObject = new person('anil', 1, 1000)


// console.log(anilObject.name)
// console.log(anilObject['salary'])
// console.log(anilObject.print())

for (var propName in anilObject) {
    var propValue = anilObject[propName]
    console.log(`${propName}:${propValue}`)
}