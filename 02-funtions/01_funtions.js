function sayMyName(any) {
    console.log("a");
    console.log("b");
    console.log("c");
    console.log("d");

}
// sayMyName()// to execute

// 
function addTwoNumber(num1,num2) {
    return num1+num2//return statement
}
const result = addTwoNumber(3,3)
// console.log(result)

//
function loginUserMessage(userName ="Sam"){
    if (!userName) {
        console.log("Please enter a username");
        return
    }
    return `${userName} just logged in`;
}
console.log(loginUserMessage("khan"))//if user name is not give then it is undefined.

function calculateCartPrice(...numX) {
    return numX
}
console.log(calculateCartPrice(30,100,300,5000));
//
const obj = {
    name : "khan",
    age : 25
}
function handleObj(anyobj) {
    console.log(`This is the ${anyobj.name} ,my age is ${anyobj.age}`);
}
handleObj(obj)

const newArray = [200,100,500,600]//how to handle array in funtions 
function handleArr(getArray) {
    return getArray[2]
}
console.log(handleArr(newArray))
//
//Scope****


