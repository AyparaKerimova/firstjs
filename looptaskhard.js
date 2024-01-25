//Part-1

const color = 'pink';

switch (color) {
    case 'red':
    case 'pink':
    case 'blue':
        console.log(color, " is color");
        break;
    default:
        console.log( color,"isn't color");
        break  ;
}

//Part-2

const matrix = [[1,2],[3,4],[5,6]];

const [arr1,arr2,arr3] = matrix

for(let i=0; i<=arr1.length-1; i++) {
    console.log(arr1[i])
}

for(let i=0; i<=arr2.length-1; i++) {
    console.log(arr2[i])
}

for(let i=0; i<=arr3.length-1; i++) {
    console.log(arr3[i])
}                       // Qısalda bilmədim buranı (for...of olmadan) (İzah 1)

//Part-3

const product = {
    name: "oil",
    price: 7,
    inStock: true
}


for (const property in product) {
  console.log(`${property}: ${product[property]}`);
}

//Part-4
const {price,inStock} = product

if (price<50 && inStock==true) {
    console.log("available")
} else{
    console.log("unavailable")
}