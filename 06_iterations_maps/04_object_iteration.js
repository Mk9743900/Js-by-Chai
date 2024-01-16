const obj = {
    js : "javaScript",
    cpp : "c++",
    rb : "ruby"
}

for (const key in obj) {
    // console.log(`keys ${key} : values ${obj[key]}`);
}

const myArray = [1,2,3,4,5]
for(const num in myArray){ // we cannot use array in forIn loops
    // console.log(num);
    //but like this we can usse
    console.log(myArray[num]);//this will work
}
// we cannot use for_in loops for maps
