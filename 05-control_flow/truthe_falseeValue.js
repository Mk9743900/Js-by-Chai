const userEmail = "@gmail.com"                          

if (userEmail){
    console.log("got the email");
} else{
    console.log("no email");
}

// falseeValue == false,0,-0,BigInt,"",null,undefined,NaN
//TruetheValue == true,"0","false",{},[],function(){}, 

//Nulish Coalescing Operator (??) : null undefined
const num = (num1)=>{return num1}

let val1;
val1 = null ?? num(10) //either this or that.there could be multiple ?? values

console.log(val1)

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("lesser") : console.log("greater");;