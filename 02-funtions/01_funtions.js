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
console.log(loginUserMessage())//if user name is not give then it is undefined.

