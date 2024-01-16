const myNum = [1,2,3,4,5,6,7,8,9]

let newNum = myNum.map( (num) => {return num+10})
// console.log(newNum);

//chainning  = we can use different multiple of .map & filter
newNum = myNum
                .map( (num) => num*10)
                .map( (num) => num+1)
console.log(newNum);               