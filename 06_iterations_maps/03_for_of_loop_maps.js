//for of

const myArray = [1,2,3,4,5]
for (const val of myArray) {
    // console.log(val);
}

const greeting = "hello world"
for (const char of greeting){
    console.log(char);
}

//Maps == they are like arreys
///prop = they dont have duplicates

const maps = new Map()
maps.set('IN',"India")
maps.set("USA","Unitedd States of America")
maps.set("Fr","France")

console.log(maps);

for (const [key,value] of maps) {//we can iterate like this only in maps&array
    // console.log(key,":",value);
}
