### Soal 2 ke 2
#### klik gambar ini https://res.cloudinary.com/devloops7/image/upload/v1612761431/chunin/screenshot-docs.google.com-2021.02.08-12_14_19_byiobb.png lalu Ubahlah data tersebut menggunakan spread operator menjadi: name: nama anda email: email anda hobby: hobi anda . 2. Ambilah data “street dan city” tersebut menggunakan destructuring

[Code soal 2 ke 2](https://playcode.io/737198/)

```javascript
    let data = {
    id: 1,
    name: 'Leane Grahama',
    username: 'Bret',
    email: 'sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'apt. 556',
        city: 'Gwenborough',
        zipcode:'92998-3874',
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org'
    }
    let {address: {street,city}} =data
    data ={...data, name: 'Mohamad Rizal Khamami', email:'rizalmohamad209@gmail.com', hobi: 'Mendengarkan musik'}
    console.log(data)
    console.log(`${street} ${city}`)
```
    Penjelasan kode soal 2 ke 2

        1. Yang pertama harus kita lakukan yaitu menulis lagi object data seperti pada gambar
        2. Kemudian untuk mengubah properti nama,email, dan menambahkan properti hobi kita harus spread object data kemudian kita reasign name menjadi nama kita dan reasign email menjadi email kita, dan menambahkan properti hobi kita
        3. selanjtnya  untuk menampilkan street dan city kita harus melakukan destructuring pada object data yang mana di dalam object data terdapat juga object address 