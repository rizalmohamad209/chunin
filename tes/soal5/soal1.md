### Soal 5 ke 1
#### Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka 0 (nol) dalam variabel tersebut merupakan pemisah antara satu bilangan dengan bilangan lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu, bilangan hasil pengurutan akan digabung kembali dengan tanpa pemisah dengan output berupa bilangan integer. Buatlah method/function yang menerima parameter hanya deret angka dan menghasilkan output seperti keterangan di atas. contoh (56431046145403146) menjadi (134561444561346)

[Code soal 5 ke 1](https://playcode.io/737189/)

```javascript
    function batas(deret){
    let result= ''
    let str=deret.toString();
    let pch = str.split(0)
    if(typeof(deret) !== "number"){
        console.log("Inputan Bukan Integer")
    }else{
    for(i=0;i<pch.length;i++){
    let strKsg= pch[i].split("")
        const hsl= strKsg.sort()
        result += hsl.join("")
    }
        console.log(parseInt(result))
    }
    }
    batas(5430222033304477)
```
    Penjelasan kode soal 5 ke 1
        1. Pertama kita membuat function batas yang menerima parameter deret
        2. kemudian kita bikin variabel result kosong gunanya untuk menampung hasil
        3. lalu deret kita bungkus variabel str. di sini kita  to string supaya bisa di split 
        4. setelah itu str di split(0) yang artinya akan mengembalikan nilai array dan semua 0 akan di hilangkan
        5. kemudian kiti bikin validasi jika typeof(deret) tidak sama = number maka akan menampilkan Inputan bukan Integer. typeof itu buat mengecek tipe data dari parameter deret
        6. selain itu makan akan ada perulangan for i = 0, i lebih kecil dari panjang array pch, i di tambah 1
        7. kemudian array pch indek ke [i] kita split("") yang artinya kita memisahkan perhuruf
        8. setelah sudah di pisahkan perhuruf kemudian kita sorting
        9. hasil sortinganya di push ke variabel result
        10. dan yang terakhir kita harus parseInt(result) yang artinya sebelumnya result itu tip datanya string makanya kita harus convert ke integer
        