const user = {
    userName : "Israhar",
    price : 999,

    welcomeMesage : function () {
        console.log(`Welcome ${this.userName} to Website`);//by using 'this' we are able to acces current context..//
        // console.log(this)if we print 'this' we get all the variable in the scope.
    }

}
user.welcomeMesage()

//
function one() {
    let userName = "khan"
    console.log(this.userName); //we can use 'this' inside a funtion.
}
one()

//Arrow funtion
const addTwo = (num1,num2) =>{return num1+num2}//if we use {} we have to return
const addTwo2 = (num1,num2) =>(num1+num2)// if we use () no need to return.
console.log(addTwo(2,3))
console.log(addTwo2(3,3))