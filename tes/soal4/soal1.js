// Promise ke 1
let promise = new Promise((resolve,reject)=>{
    let prosess = true;
    if(prosess) resolve("berhasil")
    else reject("Network Error")
})

promise
.then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)})
console.log("loading....")

// Promise ke 2

// promise= fetch('https://jsonplaceholder.typicode.com/todos/1')
//   promise
//   .then((response)=> response.json())
//   .then((data)=> console.log(data))
//   .catch((err)=> console.log(err))
//   console.log("....loading")

// Promise ke 3

  const plugin = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            Singkatan: 'Politeknik Linux User Group Indonesia',
            alamat: 'Ndalem Parikesit',
            
        }]);
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'brebes',
            temp: 26,
            kondisi: 'cerah berawan'
        }])
    }, 500)
});

Promise.all([plugin, cuaca])
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })
    console.log("loading....")