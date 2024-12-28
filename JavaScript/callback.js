databasesharing=()=>{
    console.log("Data stored successfully");
    }
function submitform(formMsg,dbs){
    setTimeout(()=>{
        dbs()
        console.log(formMsg);
    },2000)
   
}
submitform("form submitted successfully",databasesharing)
