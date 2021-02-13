### Soal 2 ke 1
#### Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4 nilai yakni Bahasa indonesia,Bahasa Inggris Matematika dan IPA, yang di dalam program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut: 90 - 100 = A, 80 - 89 = B, 70 - 79 = C, 60 - 69 = D, 0 - 59 = E

[Code Soal 2 ke 1](https://playcode.io/737197/)

```javascript
    function nilai(nilai){
    const nilaiAkhir= nilai.reduce((sum,item)=> (sum+item))/4
    let jmlhData= 0;
    for(i=0;i<nilai.length;i++){
       if(typeof(nilai[i]) !== "number"){
           jmlhData += 0 
       }else{
            jmlhData +=1
       }
       }
       if(jmlhData===4){
        if(nilaiAkhir >= 90 && nilaiAkhir <=100){
            console.log("A")
        }else if(nilaiAkhir >= 80 && nilaiAkhir <= 89){
            console.log("B")
        }
        else if(nilaiAkhir >= 70 && nilaiAkhir <=79){
            console.log("C")
        }else if(nilaiAkhir >=60 && nilaiAkhir <=69){
            console.log("D")
        }else if(nilaiAkhir >=0 && nilaiAkhir <= 59){
            console.log("E")
        }else{
            console.log("Nilai minimaal 0 dan maksimal 100")
        }
       }else{
           console.log("Nilai harus number atau data nilai harus terdapat 4")
       } 
}
nilai([200,110,101,100])
```
    Penjelasan kode soal 2 ke 1

        1. Buat sebuah function untuk menghitung rata"nilai un dan hasil gradenya
        2. Pertama Kita menghitng nilai rata" dari parameter nilai yang berisi array dimana isinya berupa nilai mata pelajaran, kita hitung menggunakan reduce. fungsi reduce ini digunakan untuk melakukan operasi tertentu terhadap setiap item dari array. disini kita menambahkan seluruh item kemudian di bagi 4
        3. Disini kita membuat variabel jmlhData yang nilainya 0 
        4. kemudian kita membuat sebuah perulangan for yang gunanya untuk mengecek semua berapa no indexnya pada array nilai.
        5. setelah itu ada pekondisian if else untuk mengetahui tipe data pada semua index, jika terdapat index pada array nilai tidak sama dengan number maka variabel jmlhData ditambah 0 selain itu variabel jmlhData ditambah 1;
        6. selanjutnya jika jmlhData sama dengan 4 maka akan menentukan grade nilanya sebagai berikut
            -jika nilaiAkhir lebih dari sama dengan  90 sampai kurang dari sama dengan 100 akan mencetak A
            -jika nilaiAkhir lebih dari sama dengan  80 sampai kurang dari sama dengan 89 akan mencetak B
            -jika nilaiAkhir lebih dari sama dengan  70 sampai kurang dari sama dengan 79 akan mencetak C
            -jika nilaiAkhir lebih dari sama dengan  60 sampai kurang dari sama dengan 69 akan mencetak D
            -jika nilaiAkhir lebih dari sama dengan 0 sampai kurang dari sama dengan 59 akan mencetak E
            -selain itu maka akan mencetak nilai minimum 0 dan maksimal 100
        7. selain itu jika jmlhData tidak sama dengan 4 maka akan mencetak Nilai harus number atau data nilai harus terdapat 4    
