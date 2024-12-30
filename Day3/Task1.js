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

