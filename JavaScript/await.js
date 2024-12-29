async function funName()
{
    setTimeout(()=>{
          console.log("hello");
    },5000)
    console.log(await "hello")
}

arrowFunName = async() =>
{
    setTimeout(()=>{
        console.log("kec");
  },4000)
  console.log(await "kec")
}
funName()
arrowFunName()


//Example 4
async function f1(){
    setTimeout(()=>{
        return "HELLO";
    },1000)
    }
 console.log(f1());

 f2=async()=>{
    setTimeout(()=>{
        return "KEC";
    },1000)

}
 console.log(f2());

 //O/P:Promise { undefined }
    //Promise { undefined }


//Example 5
async function funn1(){
    setTimeout(()=>{
        return "HELLO";
    },1000)
    
 console.log(await "HELLO");
}

 funn2=async()=>{
    setTimeout(()=>{
        return "KEC";
    },1000)


 console.log(await "kec");
}

funn1();
funn2();