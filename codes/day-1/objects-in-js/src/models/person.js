// function person(nameVal, idVal, salVal) {
//     this.name = nameVal
//     this.id = idVal
//     this.salary = salVal
//     this.print = function () {
//         return `${this.id}, ${this.name}, ${this.salary}`
//     }
// }
class Person {
    constructor(nameVal, idVal, salVal) {
        this.name = nameVal
        this.id = idVal
        this.salary = salVal
    }
    print() {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}