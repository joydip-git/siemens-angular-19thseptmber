// function person(nameVal, idVal, salVal) {
//     this.name = nameVal
//     this.id = idVal
//     this.salary = salVal
// }
// person.prototype.print = function () {
//     return `${this.id}, ${this.name}, ${this.salary}`
// }

class Person {
    constructor(nameVal, idVal, salVal) {
        this.name = nameVal
        this.id = idVal
        this.salary = salVal
    }
    // print = function () {
    print() {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}

//console.log(Person.prototype)
const anilObj = new Person('anil', 1, 1000)
console.log(anilObj.__proto__)
const res = anilObj.print()
console.log(res)