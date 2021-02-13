### Soal 1 ke 2
#### Apakah perbedaan antara percabangan if-else dengan switch-case? Berikan contohnya dalam bentuk code sederhana!

```perbedaan if else dan switch case yaitu pada percabangan if else kita bisa memiliki lebih dari 1 kondisi dan nilai sedangkan pada switch hanya ada 1 kondisi dan dengan nilai yang bervariasi```

[Contoh if else dan switch case soal 1 ke 2](https://playcode.io/737200/)

```javascript
let nilaiAkhir = 95;
if(nilaiAkhir >=90 && nilaiAkhir <=100){
    console.log("A")
}else if(nilaiAkhir >=80 && nilaiAkhir <=89){
    console.log("B")
}else if(nilaiAkhir >=70 && nilaiAkhir <=79){
    console.log("C")
}else if(nilaiAkhir >=60 && nilaiAkhir <=69){
    console.log("D")
}else if(nilaiAkhir >=59 && nilaiAkhir <=0){
    console.log("E")
}else{
    console.log("Nilai minimum 0 dan maksimal 100")
}
```
Penjelasan if-else.

    Jadi di dalam kode diatas terdapat variabel nilaiAkhir = 95
    lalu ada pengkondisian jika nilaiAkhir = 90 sampai 100 maka akan memunculkan Grade nilai A
    dan jika nilaiAkhir = 80 sampai 89 maka akan memunculkan Grade nilai B,
    dan jika nilaiAkhir = 70 sampai 79 maka akan menampilkan Grade nilai C,
    dan jika nilaiAkhir = 60 sampai 69 maka akan menampilkan Grade nilai D,
    dan jika nilaiAkhir = 50 sampai 0 maka akan menampilkan Grade nilai E,
    selain itu maka akan menampilkan Nilai minimum 0 dan maksimal 100

```javascript
    const hari=["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"]
switch("Minggu"){
    case"Senin":
    console.log("hari ini senin ")
    break;
    case"Selasa":
    console.log("Hari ini Selasa")
    break;
    case"Selasa":
    console.log("Hari ini Selasa")
    break;
    case"Rabu":
    console.log("Hari ini Rabu")
    break;
    case"Kamis":
    console.log("Hari ini Kamis")
    break;
    case"Jumat":
    console.log("Hari ini Jumat")
    break;
    case"Sabtu":
    console.log("Hari ini Sabtu")
    break;
    case"Minggu":
    console.log("Hari ini Libur")
    break;
    default:
    console.log("ini bukan hari")
}
```
Penjelasan kode Switch Case

    Jadi kode diatas terdapat sebuah array hari yang menampung nama-nama hari
    Kemudian didalam switch terdapat value 'minggu'
    jika case = Senin maka akan menampilkan 'Hari ini Senin',kemudian akan di `break`.
    jika case = Selasa maka akan menampilkan 'Hari ini Selasa', kemudian akan di `break`.
    jika case = Rabu maka akan menampilkan 'Hari ini Rabu', kemudian akan di `break`.
    jika case = Kamis maka akan menampilkan 'Hari ini Kamis', kemudian akan di `break`.
    jika case = Jumat maka akan menampilkan 'Hari ini Jumat', kemudian akan di `break`.
    jika case = Sabtu maka akan menampilkan 'Hari ini Sabtu', kemudian akan di `break`.
    jika case = Minggu maka akan menampilkan 'Hari ini Minggu', kemudian akan di `break`.
    dan jika nilai switch tidak ada yang cocok dengan yang ada di case maka akan menampilkan 'ini bukan hari', kemudian akan di `break`.

    
