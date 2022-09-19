var addStatus = addPerson(new person('anil', 1, 1000))
if (addStatus) {
    console.log('added successfully')
    console.log(people)
}
else
    console.log('could not add')

var addStatus = addPerson(new person('sunil', 2, 2000))
if (addStatus) {
    console.log('added successfully')
    console.log(people)
}
else
    console.log('could not add')