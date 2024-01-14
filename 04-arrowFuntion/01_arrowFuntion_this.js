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