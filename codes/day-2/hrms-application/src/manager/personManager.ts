import { Person } from '../models/person'
import { people } from '../repository/personRepository'

export function addPerson(personObj: Person): boolean {
    if (!exists(personObj.id)) {
        people.push(personObj)
        return true
    }
    return false
}

export function fetchPeople(): Person[] {
    return [...people]
}

export function fetchById(id: number): Person | undefined | null {
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

export function updatePerson(personObj: Person): boolean {
    if (exists(personObj.id)) {
        const found = people.find(
            function (p) {
                return p.id === personObj.id
            }
        )
        if (found) {
            found.name = personObj.name
            found.salary = personObj.salary
            return true
        }
        else
            return false

    }
    return false
}

export function deletePerson(id: number): boolean {
    if (exists(id)) {
        const index = people.findIndex(
            function (p) {
                return p.id === id
            }
        )
        people.splice(index, 1)
        return true
    }
    return false
}

function exists(id: number): boolean {
    var index = people.findIndex(
        function (p) {
            return p.id === id
        }
    )
    return index !== -1
}