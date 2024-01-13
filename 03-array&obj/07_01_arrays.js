// Array
const myArray = [0,1,2,3,4,5]

console.log(myArray[1]);//indexing

const heros=["hi","hello"]
// or 
const heros1 = new Array(1,2,3,4)
console.log(heros1[2]);

heros1.push(5)//to add the value
console.log(heros1);

heros1.pop()// to delete the last value

heros1.unshift(0)// it add 0 at the biggning of the array

console.log(heros1.includes(0));
console.log(heros1.includes(8))

//slice,splice
console.log("A",myArray)

const myn1 = myArray.slice(1,3)//it makes the copy of the elements then remove from the dupe

const myn2 = myArray.splice(1,3)//its removes the elements from the array

console.log(`Slice ${myn1}`)// Slice 1,2
console.log(`Splice ${myn2}`);// Splice 1,2,3
console.log(myArray)//[ 0, 4, 5 ]  after the splice

// ////////


