let myDate = new Date()
console.log(myDate.toString());
// Wed Jan 10 2024 18:08:38 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());
// Wed Jan 10 2024
console.log(myDate.toLocaleDateString());
// 10/1/2024
console.log(myDate.toLocaleTimeString())
// 6:16:44 pm

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate);
// 2023-01-22T18:30:00.000Z
console.log(myCreatedDate.toLocaleDateString())
// 23/1/2023

// Time Stamp

let myTimeStamp =   Date.now()
console.log(myTimeStamp)
console.log(Date.now);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate())

newDate.toLocaleString('')