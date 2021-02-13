### Soal 3 ke 1
#### Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan callback function dengan data sebagai berikut: const name = [‘Abigail’, ‘Alexandra’, ‘Alison’, ‘Amanda’, ‘Angela’, ’Bella’, ‘Carol’, ‘Caroline’, ‘Carolyn’, ‘Deirdre’, ‘Diana’, ‘Elizabeth’, ‘Ella’, ‘Faith’, ‘Olivia’, ‘Penelope’]. Contoh: searchName(“an”, 3, callback)

[Code Soal 3 ke 1](https://playcode.io/737195/)

```javascript
    const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];
function utama(mengandung,jumlah,callback){
 let namaa=names.map((item)=>{ return item.toLowerCase(); })
 let second=  namaa.filter((nama)=>{
  return nama.includes(mengandung.toLowerCase())   
  })
  callback(second,jumlah)
}
function toUpperCase (second,jumlah){
 let upper=second.map((val)=>{
  return val.charAt(0).toUpperCase()+val.slice(1) 
 })
 let result=upper.slice(0,jumlah)
 console.log(result)
}
utama('a',8,toUpperCase)
```
    Penjelasan kode soal 3 ke 1

        1. Pertama kita membuat function yang menerima paramater mengandung,jumlah,callback
        2. kita perlu mengubah semua nilai yang terdapat array names menjadi lowercase atau huruf kecil semua
        3. kemudia namaa di bungkus variabel second disini kita akan menerapkan filter nama, kemduian bikin arrow function yang parameternya nama kemudian di return nama.includes artinya di parameter nama apakah ada yang mengandung karakter paramater mengandung.
        4. selanjutnya function callback yang parameternya second dan jumlah
        5. kemudian kita membuat function toUpperCase untuk mengubah huruf besar di awal kalimat dan menampilkan jumlah array yang di inginkan
        6. pada function toUpperCase yang menerima paramater second,dan jumlah. parameter second dan jumlah itu sendiri di dapatkan dari function utama
        7. kemudian second di map yang artinya menampilkan semua data yang tedapat pada array second kemudian buat arrow function yang parameternya val
        8. lalu retrun val.charAt(0) artinya setiap array huruf pertamanya akan di to UpperCase atau di ubah menjadi kapital kemudian di slice mulai dari index ke 1
        9. untuk menentukan jumlah yang ingin di tampilkan kita harus slice(0,jumlah) yang artinya 0 itu adalah mulai di tampilkan index ke 0 dan jumlah itu artinya 0 sampai ke parameter jumlah
        10. setelah itu kita tampilkan variabel result