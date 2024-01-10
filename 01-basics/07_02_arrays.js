heros = ["thor","ironman","spidermen"]
dc = ["superman","batman","flash"]
const allHeros=heros.concat(dc)//it add the array ina new array
console.log(allHeros);

const allNewHeros = [...heros,...dc]// this ... is known as spread
console.log(allNewHeros);
// 
const realArr = [1,2,3,[4,5,6],7,[8,9,[10,11],12]]
console.log(realArr.flat(2))//in .flat we disassemble the array acording to depth or "Infinity" to clear all.
// [
//     1,  2, 3, 4,  5,
//     6,  7, 8, 9, 10,
//    11, 12
//  ]
console.log(realArr.flat(1))
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 10, 11 ], 12 ]

console.log(Array.isArray("khan"));
console.log(Array.isArray(realArr));// to find weather it is array or not
// 
console.log(Array.from("khan"));//[ 'k', 'h', 'a', 'n' ]return any thing to array
console.log(Array.from(123456));//[] intresting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))// .of funtion add values to th array