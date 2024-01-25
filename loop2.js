// Part-1

const dayOfWeek = 'Sunday'

switch (dayOfWeek) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
    case 'Saturday':
    case 'Sunday':
        console.log('today is' , dayOfWeek)
        break;
    default:
        console.log('idk')
        break;
}

// Part-2

const numbers = [1,2,3,4,5]
let sum = 0

for (let i=0; i<=numbers.length; i++) {
    sum += i
    console.log('sum:', sum,'nums:', numbers[i]);

}

// Part-3

const fruits = ["apple", "watermelon", "melon"]

for (let i=0; i<= fruits.length-1; i++) {

    for(let j=1; j<=fruits.length; j++)

        console.log(fruits[i], j)
}                           // Nəyə görə 3 dəfə yazdırdığnı anlamadım. (İzah 2)

// Part-4

const student = {
    name: "Aypara",
    score: 59.9
}  

const {name,score} = student 

if (score>=60) {
    console.log("pass");
}
else{console.log("failed")}


