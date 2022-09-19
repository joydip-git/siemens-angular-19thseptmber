function addPerson(personObj) {
    if (!exists(personObj.id)) {
        people.push(personObj)
        return true
    }
    return false
}
function fetchPeople() {
    return people
}
function fetchById(id) {

}

function updatePerson(personObj) {

}

function deletePerson(id) {

}

function exists(id) {
    var index = people.findIndex(
        function (p) {
            return p.id === id
        }
    )
    return index !== -1
}