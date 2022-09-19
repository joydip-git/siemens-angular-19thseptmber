var obj = {
    name: 'anil',
    id: 1,
    salary: 1000
}

// const nameVal = obj.name
// const idVal = obj.id
// const salVal = obj['salary']

//object destructuring
const { name: nameVal, id: idVal, salary: salVal } = obj

console.log(nameVal, idVal, salVal)


const numbers = [1, 2, 3, 4]
const [a, b, c, d] = numbers

console.log(a, b, c, d)

const [, m, , n] = numbers

console.log(m, n)