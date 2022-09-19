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