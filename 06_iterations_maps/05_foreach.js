//foreach
const array = [1,2,3,4,5,6]

array.forEach( function (items) {
    // console.log(items);
})

// array.forEach( (items)=>{console.log(items);})

// array.forEach( (items,index,arr)=>{console.log(items,index,arr);})

const myCoding = [
    {languageName : "javacsript",filName : "js" },
    {languageName : "python",filName : "py" },
    {languageName : "java",filName : "java" }, 
]
myCoding.forEach((items) => {
    console.log(items.filName);})