### Soal 5 ke 4
#### Diberikan sebuah kalimat, ubah urutan kata-kata di dalam kalimat menjadi terbalik. Misalnya kalimat “Saya cinta PLUGIN”, output “PLUGIN cinta Saya” tanpa menggunakan built-in function / method bawaan dari javascript

[Code Soal 5 ke 4](https://playcode.io/737186/)

```javascript
        const revereseKata = (kata) => {
        let newKata = reversedHuruf(kata);
        let temp= ''
        let result = ''
        for(i = 0; i < newKata.length; i++){
            if(newKata[i] === ' '){
                result += temp + ' '
                temp= '';
            }else{
                temp= newKata[i] + temp;
            }
        }
        return result+temp
    }
    const reversedHuruf = (word) => {
        let tempString = '';
        for(i=0;i< word.length;i++){
            tempString= word[i] + tempString
        }
        return tempString
    }

    console.log(revereseKata("Saya Cinta Plugin"))
```
    Penjelasan kode soal 5 ke 4

        1. pertama kita harus membuat function reversedHuruf yang menerima parameter word
        2. kemudian kita siapin variabel string kosong buat menampung hasil dari looping
        3. lalu perulangan foor yang mana i=0;i lebih kecil dari panjang word, i di tambah 1
        4. setelah itu word[i] misal word[i] itu = n trus tempstringnya = "igulp" ,maka nigulp itu akan di push ke variabel . perulangan itu akan terus berjalan sampai kondisi i < word.length = false. jika sudah semua makan tempString akan di return
        5. jika function reversedHuruf sudah maka lanjut ke function reverseKata
        6. reverseKata menerima parameter kata. kemudian function reversed(kata) di panggil yang di bungkus dengan variabel newKata
        7. seperti biasanya kita memperisapkan variabel temp dan result untuk menyimpan data looping foor di 
        8. kemudian perulangan foor i=0, i lebih kecil dari panjang huruf newKata, i di tambah 1
        9. selanjutnya ada pengkondisian jika newKata[i] sama dengan spasi maka nilai yang ada di variabel temp di masukin ke variabel result
        10. selain itu temp = newKata[i] + temp yang artinya misal newKata[i] = p terus temp = lugin maka plugin akan di masukan ke dalam variabel temp
        11. perulangan akan terus berjalan sampai i lebih kecil world.length = false
        12. kemudian return result+temp kenapa harus ada result+temp karena ada nilai di variael temp yang belum ke push ke result sehinga kita tambahkan langsung ke result
        13. selesai