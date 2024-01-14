let a = 40 // this is local scope
if (true){// this is a block scope
    let a = 30
    const b = 40
    var c = 70// we can use var out of the loop 
}//{} are known as scope
console.log(a);
// console.log(b);
console.log(c);

//
//Closer - 
//Dom - document object model

function one() {
    const userName = "Israhar"
    function two() {
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website)//we can't use variable out side the code.
    two()
}
one()
//++++++++++++++++ intersting ++++++++++++
function addOne(num) {
    return num +1
}
console.log(addOne(2))

const addTwo = function (num) {//this is expretion 
    return num + 2
}
console.log(addTwo(5)) //we cant call the funtion which is stored in variable before decleartion of the variable