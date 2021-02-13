### Soal 4 ke 1
#### Buatlah 3 program bebas dengan menggunakan promise

[Code Soal 4 ke 1](https://playcode.io/737194/)

```javascript
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
```
    Penjelasan kode soal 4 ke 1

        promise 1
        1. promise sederhana yang saya buat yaitu untuk menampilkan kata hello word 1 ketika method then menerima sinyal resolve (sukses), disini saya membuat membuat function setTimeout selama 5 detik baru muncul hello world 1 kemudian hello world 2 
        promise 2
        1. jika kode diatas dijalankan maka akan menghasilkan log berhasil, jika kita ubah variabel proses menjadi false maka akan menghasilkan log Network Error. karena method then untuk menangkap sinyal resolve (sukse) sedangkan catch menangkap sinyak reject (error)

        promise 3
        1. yang pertama kita membuat variabel promise yang isinya yaitu method fetch 
        2. method then di panggil 2 kali karena fetch akan mengembalikan response dalam bentuk object sedangkan then yang kedua digunakan untuk mengubah menjadi format json yang mengembalikan promise juga sehingga kita gunakan method then yang kedua untuk mendapatkan data response dalam format JSON.
        3. untuk menampilkan data pada fetch kita menggunakan then yang ke dua untuk mendapatkan data response lalu buat arrow function yang parameternya data kemudian di log data