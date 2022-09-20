import { Person } from './models/person'
import * as manager from "./manager/personManager";

var addStatus = manager.addPerson(new Person('anil', 1, 1000))
if (addStatus) {
    console.log('added successfully')
    console.log(manager.fetchPeople())
}
else
    console.log('could not add')

var addStatus = manager.addPerson(new Person('sunil', 2, 2000))
if (addStatus) {
    console.log('added successfully')
    console.log(manager.fetchPeople())
}
else
    console.log('could not add')