//Immediately Invoked Funtion Expressions (IIFE)
//it is used to reduce the pollution due to global scope...
//to invoke funtion immediately

function chai() {//named IIFE
    console.log("DB CONNECTED");
};//this is normal funtion
chai();

(function chai2() {
    console.log("DB CONNECTED")//this is IIFC
})();//we have to break to use two iife.

(()=>(console.log("DB2 CONNECTED")))()//this is unnamed iife


