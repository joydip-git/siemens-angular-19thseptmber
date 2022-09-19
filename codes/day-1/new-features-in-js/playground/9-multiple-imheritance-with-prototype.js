function person(nameVal, idVal, salVal) {
    this.name = nameVal
    this.id = idVal
    this.salary = salVal
}
person.prototype.print = function () {
    return `${this.id}, ${this.name}, ${this.salary}`
}

function trainer(nameVal, idVal, salVal, subjectVal) {
    person.call(this, nameVal, idVal, salVal)
    this.subject = subjectVal
}
trainer.prototype.print = function () {
    //const partialInfo = person.prototype.print.apply(this)
    const partialInfo = this.__proto__.print.apply(this)
    return `${partialInfo}, ${this.subject}`
}

Object.setPrototypeOf(trainer.prototype, person.prototype)

const obj = new trainer('anil', 1, 1000, 'JS')
console.log(obj)