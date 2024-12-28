//1. Assignment operator
a=10
console.log(a)

//2. Unary operator
a++;
console.log(a);

//3. Arithmetic operator
a=10
b=20
c1=a+b;
c2=a-b;
c3=a*b;
c4=a/b;
c5=a%b;
console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);
console.log(c5);

//4. Relational operator
a=10
b=20
if(a>b)
{
    console.log("yes");
}
else{
    console.log("no");
}

var a=10;
var b=20;
if(a===b)
{
    console.log("equal");
}
{
    console.log("not equal");
}

//5. Logical operators
var a = true;
var b = false;
if (a && b) {
    console.log("Both are true");
} else {
    console.log("At least one is false");
}
if (a || b) {
    console.log("At least one is true");
} else {
    console.log("Both are false");
}
console.log(!a); 
console.log(!b); 

//6. Bitwise operators
a = 5; // 0101 in binary
b = 3; // 0011 in binary
console.log(a & b); // 1 (0101 & 0011 = 0001)
console.log(a | b); // 7 (0101 | 0011 = 0111)
console.log(a ^ b); // 6 (0101 ^ 0011 = 0110)
console.log(a >> 1); // 2 (0101 >> 1 = 0010)
console.log(a << 1); // 10 (0101 << 1 = 1010)

//7. Teranary operator
var a = 10;
var b = 20;
var result = (a > b) ? "a is greater" : "b is greater";
console.log(result); 