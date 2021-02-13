### Soal 4 ke 2
#### Buatlah program menggunakan method fetch untuk menampilkan semua title (hanya title nya saja) dari REST API dibawah ini https://dhiyo-api-article.herokuapp.com/articles Gunakan debugger console bawaan browser Chrome untuk melihat hasilnya

[Code Soal 4 ke 2](https://playcode.io/737191/)

```javascript
    let promise = fetch('https://dhiyo-api-article.herokuapp.com/articles')
    promise
    .then((response)=> response.json())
    .then((json)=>{ 
        const result=json.data.map((item)=>{
            return `tittle: ${item.tittle}`
        })
        console.log(result)
    })

    .catch((err)=>console.log(err))
    console.log('loading.....')
```
    Penjelasan kode soal 4 ke 2
        1. yang pertama kita membuat variabel promise yang isinya yaitu method fetch 
        2. method then di panggil 2 kali karena fetch akan mengembalikan response dalam bentuk object sedangkan then yang kedua digunakan untuk mengubah menjadi format json yang mengembalikan promise juga sehingga kita gunakan method then yang kedua untuk mendapatkan data response dalam format JSON.
        3. untuk mengambil semua data tittle kita gunakan map untuk menampilkan seluruh data yang berada di dalam array dan membuat arrow function yang mempunyai parameter item dan untuk menampilkan tittle kita perlu ketikan item.tittle
        4. untuk membuktikan bahwa asynchronus kita log loading di akhir pasti yang akan muncul di console loading dulu setelah request data berhasil maka akan menampilkan data 