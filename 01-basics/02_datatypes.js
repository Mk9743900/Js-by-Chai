let score = null
let num = 4545
let string = "khan"
let bool = true
let isLoggedIn = 0 //0 is false, 1 is true
let booleanIsLoggedIn= Boolean(isLoggedIn)//by using Boolean keyord we convert any thing to string
console.log(booleanIsLoggedIn );
console.table([score,num,string,bool,booleanIsLoggedIn])

// Premitive data types 
// 7 types :String,Number,boolean,null,undefiened,symbol,Bigint
const id =Symbol("123")
const bigNumber = 4646516464646444656656565n
// hear "n" at the end of any number means BigInt
console.log(typeof(bigNumber))


// Reference (Non primitive)
// Array,object,Funtion
const heros = ["a","b","c"]
// object
const myObj = {
    name : "khan",
    age : 25
}
// funtion
const myFuntion = function(){
    console.table(typeof(myFuntion),myObj,heros)
}
myFuntion();
console.table()