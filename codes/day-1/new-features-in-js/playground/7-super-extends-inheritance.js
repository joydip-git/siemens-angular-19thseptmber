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

class Trainer extends Person {
    constructor(name, id, salary, subject) {
        super(name, id, salary)
        this.subject = subject
    }
    print() {
        const partialInfo = super.print()
        return `${partialInfo},${this.subject}`
    }
}

const anilObj = new Trainer('anil', 1, 1000, 'JS')
const res = anilObj.print()
console.log(res)