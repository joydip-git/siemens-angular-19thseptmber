function person(nameVal, idVal, salVal) {
    this.name = nameVal
    this.id = idVal
    this.salary = salVal
    this.print = function () {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}

Object.prototype.show = function () {
    return this.name
}
console.log(person.prototype)

var anilObj = new person('anil', 1, 1000)
// anilObj.show = function () {
//     return this
// }

var res = anilObj.show()
console.log(res)

console.log(anilObj.hasOwnProperty('show'))
console.log(person.prototype.hasOwnProperty('show'))
console.log(Object.prototype.hasOwnProperty('show'))