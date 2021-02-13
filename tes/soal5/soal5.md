### Soal 5 ke 5 
#### Anton sedang bersiap untuk mengikuti tes IQ. Tes yang paling sering keluar adalah mencari angka mana yang berbeda dari yang lain. Anton mengamati bahwa pasti ada satu angka yang berbeda dari yang lain dalam hal pemerataan. Buatlah sebuah program yang dapat membantu Anton untuk mengetahui di posisi manakah angka yang berbeda. Catatan Posisi angka dimulai dari satu (1) bukan nol (0)

[Code soal 5 ke 5](https://playcode.io/737145/)

```javascript
        function iq(number){
        pc = number.split(" ")
        let hitungGenap=0;
        let hitungGanjil=0;
        let resultGenap=0;
        let resultGanjil=0;
        for(i=0;i<pc.length;i++){
        if(pc[i] %2 === 1){
            hitungGanjil++
            resultGanjil= i+1
        }else if(pc[i] %2  === 0){
            hitungGenap++
            resultGenap= i+1
        }
        }
        if(hitungGenap === 1){
        console.log(resultGenap)
        }else{
        console.log(resultGanjil)
        }
    }
    iq("2 4 8 9 10")
```

    Penjelasan kode soal 5 ke 5

        1. kita split dahulu parameter number supaya menghasilkan nilai array baru
        2. kemudian buat variabel hitungGenap,hitungGanjil,resultGenap,dan resultGanjil yang nilainya 0
        3. selanjutnya kita membuat perulangan for loop yang mana i nilai awalnya 0,i lebih kecil dari panjang array pc, dan i di tambah 1
        4. lalu masuk ke pengkondisian untuk membedakan mana yang nilainya genap dan ganjil
        5. jika array pc index ke i modulus 2 sama dengan 0 maka nilai  variabel hitungGanjil akan bertambah 1 dan nilai variabel resultGanjil akan di tambah i+1 
        6. jika array pc index ke i modoulus 2 sama dengan 1 maka nilai variabel hitungGenap akan bertambah 1 dan nilai variabel resultGenap akan di tambah i+1 
        7. setelah itu akan ada pengkondisian jika hitungGenap sama dengan satu maka akan memunculkan nilai dari resultGenap
        8. selain itu akan memunculkan nilai dari resultGanjil 