//1. Example
//var a=10;
//console.log(a);
//async b=20;
//console.log(20);
//O/P:SyntaxError: Unexpected identifier 'b'

//2. Example
//We will get ouput as Promise because we have specified return keyword
async function fun1(){
    return "HELLO";
}
console.log(fun1());

fun2=async()=>{
    return "KEC";
}
console.log(fun2());


//3. Example 
async function func1(){
    console.log("Sandhiya");
}
func1();

func2=async()=>{
  console.log("K");
}
func2();
