//reduce== we use mostly in total sum of cart

const myArray = [1,2,3]

const myTotal = myArray.reduce( (acc,currval) =>{ 
    console.log(`acc ${acc} and currval ${currval}`);
    return acc+currval},0)
console.log(myTotal);