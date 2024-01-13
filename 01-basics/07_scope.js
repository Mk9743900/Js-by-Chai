let a = 40 // this is local scope
if (true){// this is a block scope
    let a = 30
    const b = 40
    var c = 70// we can use var out of the loop 
}
console.log(a);
// console.log(b);
console.log(c);

//
