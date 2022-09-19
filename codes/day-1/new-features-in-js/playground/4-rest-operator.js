//rest operator
function calculateAverage(name, ...arr) {
    let sum = 0;
    arr.forEach(
        function (num) {
            sum += num
        }
    )

    return sum / arr.length
}

const avg1 = calculateAverage('anil', 10, 20)
const avg2 = calculateAverage('sunil', 10, 20, 30)
const avg3 = calculateAverage('mahesh', 10, 20, 30, 40)

console.log(avg1, avg2, avg3)