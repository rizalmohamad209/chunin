// Promise ke 1
let myPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("Hello World 1");
    }, 5000);
  });
  
  myPromise.then(function(success){
    console.log(success);
    console.log("Hello World 2");
  });


// Promise ke 2
let promise = new Promise((resolve,reject)=>{
    let prosess = true;
    if(prosess) resolve("berhasil")
    else reject("Network Error")
})

promise
.then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)})
console.log("loading....")

// Promise ke 3

promise= fetch('https://jsonplaceholder.typicode.com/todos/1')
  promise
  .then((response)=> response.json())
  .then((data)=> console.log(data))
  .catch((err)=> console.log(err))
  console.log("....loading")


     