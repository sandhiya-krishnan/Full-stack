//callback function with the multiple callbacks
const databasesharing = () => {
    console.log("Data stored successfully");
  };
  
  const sendEmailNotification = () => {
    console.log("Email notification sent");                            
  };
  
  function submitform(formMsg, dbs, notify) {
    setTimeout(() => {
      dbs(); 
      notify(); 
      console.log(formMsg);
    }, 5000);
  }
  
  submitform("Form submitted successfully", databasesharing, sendEmailNotification);