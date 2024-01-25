// Part-1

function calculateSum(arr) {
    let sum = 0                         
    for (let i=0; i< arr.length; i++) {
        sum+=arr[i]
    }
    return sum
}

console.log(calculateSum([2,3,4,5]))    //chatgpt'nin verdiyi taskda bu sualın cavabını əzbərlədiyim üçün yaza bildim.

console.log("_______________________________________")

//Part-2

let counter = 0
while (counter<=5) {
    console.log(counter)
    counter+=1
}

console.log("_______________________________________")

//Part-3

let countDown = 5

do {
    console.log(countDown)
    countDown-=1
} while (countDown>=0)

console.log("________________________________________")

//Part-4

function evaluateGrade(num) {
    if (num>=60) {
        console.log('passed')
    } else{
        console.log('failed')
    }
}

evaluateGrade(60)

