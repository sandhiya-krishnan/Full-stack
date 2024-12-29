array = [10,20,30,[40.5,50.6],"a","KEC",true]
console.log(array);
//Example1
array.forEach((index,element)=>{
    console.log("index is",index,"element is",element)
})

//Example2
obj = {
    "firstName": "Sandhiya",
    "lastName": "K",
    "age": 19,
}
console.log(obj.age);
for (key in obj)
{
    value=obj[key]
    console.log(key,value)
}
Object.keys(obj).forEach(key => {
    const value = obj[key];
    console.log(key, value);
})

//1.for...in loop
for (var a in array) {
    console.log("Element present in index",a,"is",array[a])
}

//2.for...of loop
for (var b of array) {
    console.log(b);
}
