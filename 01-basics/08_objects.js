// Object.create()
const mysym = Symbol("")//to access the symbols from the object
const jsUser = {
    name: "Hitesh",
    [mysym]: "key1",//we use [] brackets for the insertion of symbols.
    age : 18,
    location : "Jaipur",
    present : ["monday","saturday"]
}
console.log(jsUser.age);
console.log(jsUser["present"]);
// Object.freeze(jsUser)//the .freeze will lock the object.

jsUser.greeting = function () {//adding funtion to object
    console.log("Hello")
}
console.log(jsUser.greeting());//executing the funtion

//Object part 2
// const tinderUser = new Object()
const tinderUser = {}
tinderUser.isLoggedIn = true
tinderUser.userFullName = {firstName : "MD",lastName: "Khan"}//we can define a object inside a object
console.log(tinderUser.userFullName.firstName);//to acces we use this
// "?" by using we can tell if we dont fine any variable the do this

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "c",4:"d"}
const obj3 = Object.assign(obj1,obj2)//".assign" will add 2 objects
// or
// we can use .assign({},obj1,obj2)
const obj4 = {...obj1,...obj2}//we can use ...spread
console.log(obj4);

//to get the values from data base
const users = [
    id=1,
    name= "khan"
]
// to get keys and values we use .funtion ,we get values in array format


