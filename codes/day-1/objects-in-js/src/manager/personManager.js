const { people } = require('../repository/personRepository')
function addPerson(personObj) {
    if (!exists(personObj.id)) {
        people.push(personObj)
        return true
    }
    return false
}
function fetchPeople() {
    return [...people]
}
function fetchById(id) {
    if (exists(id)) {
        const found = people.find(
            function (p) {
                return p.id === id
            }
        )
        return found
    }
    return null
}

function updatePerson(personObj) {
    if (exists(personObj.id)) {
        const found = people.find(
            function (p) {
                return p.id === personObj.id
            }
        )
        const copy = {
            ...found,
            name: personObj.name,
            salary: personObj.salary
        }
        const index = people.finIndex(
            function (p) {
                return p.id === personObj.id
            }
        )
        people.splice(index, 1, copy)
        return true
    }
    return false
}

function deletePerson(id) {
    if (exists(id)) {
        const index = people.finIndex(
            function (p) {
                return p.id === id
            }
        )
        people.splice(index, 1)
        return true
    }
    return false
}

function exists(id) {
    var index = people.findIndex(
        function (p) {
            return p.id === id
        }
    )
    return index !== -1
}

module.exports = {
    addPerson,
    updatePerson,
    deletePerson,
    fetchPeople,
    fetchById
}