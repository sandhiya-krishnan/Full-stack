//LOCATION FINDER(SYNCHRONOUS PROGRAMMING)
//Example 1
function locationFinder(){
     train=7;
    return new Promise((resolve,reject)=>{
        if(train==7){
            resolve("TRAIN IS ON TIME"); 
        }
        else{
            reject("TRAIN IS DELAYED");
        }
     })
}
console.log(locationFinder());

//Example 2
function locationFinder1(){
    train=8;
    return new Promise((resolve,reject)=>{
        if(train==7){
           resolve("TRAIN IS ON TIME"); 
        }
        else{
           reject("TRAIN IS DELAYED");
       }
    })
}

locationFinder1().then((message)=>{
    console.log(message);
}).catch(function(message){
    console.log(message);
})  



//Example 3
async function locationFinder2(){
    train=7;
    return new Promise((trainArrived,trainYetToArrive)=>{
        setTimeout(()=>{
            if(train==7){
                trainArrived("TRAIN IS ON TIME");
            }
            else{
                trainYetToArrive("TRAIN IS DELAYED");
            }
        },1000)
        })
    }





//Example 3
function isTimeConsumption(t){
    time=999
    return time <= t;
}

function isValidLocation(loc){
    location="Goa"
    return loc==location
}

function locationFinder3(){
    loc="Goa"
    time=1000
    return new Promise((locFound,locNotFound)=>{
        setTimeout(()=>{
            if(isValidLocation(loc) && isTimeConsumption(time)){
                locFound("Location Found");

            }
            else{
                locNotFound("Location Not Found");
            }
        },time)
    })
}
locationFinder3().then((message)=>{
       console.log(message);
    }).catch(function(message){
        console.log(message);
    })