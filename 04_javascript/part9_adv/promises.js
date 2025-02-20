function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("Data Featched successfully");
            }
            else{
                reject("Error Fetching")
            }
        }, 3000);
    })
}

fetchData()
        .then((data)=> {
            console.log(data);
            return data.toLowerCase();
            
        }
        )
        .then((value)=>{
            console.log(value);
            
        })
        .catch((error)=> console.error(error)
        )


function simulateAsyncTask() {
  return new Promise((resolve) => {
    console.log("Task started");
    setTimeout(function () {
      console.log("Task finished");
    }, 2000);
  });
}