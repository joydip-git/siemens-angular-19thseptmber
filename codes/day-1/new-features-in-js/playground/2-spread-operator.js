var obj = {
    name: 'anil',
    id: 1,
    salary: 1000
}
//... => spread operator
var copyObj = { ...obj }
// for (const propName in obj) {
//     const propValue = obj[propName]

//     copyObj[propName] = propValue
// }

console.log(copyObj)

const numbers = [1, 2, 3, 4]
const copyNumbers = [...numbers]
console.log(copyNumbers)