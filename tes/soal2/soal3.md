### Soal 2 ke 3
#### Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” yg berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka

[Code dari soal 2 ke 3](Link Playcode)

```javascript
    segitiga=(number)=>{
    let printSegita = number
    for ( i=printSegita;i>=1;i--){
        for(k=printSegita -1;k>=i ;k--){
            process.stdout.write(" ");
        }
        for(j=i;j>=1;j--){
            process.stdout.write(" "+j);
        }
        process.stdout.write("\n");
    }   
    }
    segitiga(5)
```
    Penjelasan kode soal 2 ke 3

        1. Pertama kita harus membuat variabel printSegita yang nilainya itu dari parameter number, variabel printSegitiga di gunakan untuk mencetak jumlah tinggi segitga dan lebar segitiga
        2. kemudian pada perulangan pertama for loop i = printSegitiga (5), i lebih besar = 1 kemduan ; i di kurangi 1
        3. lalu masuk lagi pada perulangan for loop kedua k=printSegtiga -1 (4); k lebih besar = i (4); k di kurangi 1,jika kondisi k lebih dari = 1 false maka keluar dari perulangan kedua. pada perulangan kedua di gunakan untuk mencetak spasi
        4. selanjutnya masuk ke perulangan for loop ke 3 j=i (4), j lebih besar = 1, j di kurangi 1, kemudian cetak " "+j(5) perulangan ke tiga akan di ulang terus sampe kondisi j lebih besar = 1 hasilnya false, jika suda false maka akan keluar dari perulangan ke 3
        5. setelah itu kembali lagi ke perulangan 1 karena kondisinya masih true yaiut i = 4 dan i lebih besar  = 1 
        6. semua perulangan akan terus berjalan sebelum perulangan itu sendiri hasilnya false
