const { Person } = require('./models/person')
const { addPerson, fetchPeople } = require('./manager/personManager')

var addStatus = addPerson(new Person('anil', 1, 1000))
if (addStatus) {
    console.log('added successfully')
    console.log(fetchPeople())
}
else
    console.log('could not add')

var addStatus = addPerson(new Person('sunil', 2, 2000))
if (addStatus) {
    console.log('added successfully')
    console.log(fetchPeople())
}
else
    console.log('could not add')

// console.log(module)

// const { add, subtract } = require('./utils')
// console.log(add(10, 20))
// console.log(subtract(10, 20))