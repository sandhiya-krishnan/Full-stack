array = [10,20,30,[40.5,50.6],"a","KEC",true]
console.log(array);

//1.for...in loop
for (var a in array) {
    console.log("Element present in index",a,"is",array[a])
}

//2.for...of loop
for (var b of array) {
    console.log(b);
}