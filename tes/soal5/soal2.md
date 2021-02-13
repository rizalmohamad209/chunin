### Soal 5 ke 2
#### Buatlah sebuah function yang dapat mengembalikan string baru yang telah diurutkan dari a - z akan tetapi tidak diperbolehkan ada huruf yang sama. Contoh : (pluginsangatkerensekali) menjadi (aegiklnprsu)

[Code soal 5 ke 2](https://playcode.io/737188/)

```javascript
        function getUnique(string){
        string.split("")
        let result=[];
        for(i=0;i< string.length;i++){
        if(result.indexOf(string[i]) === -1){
                result.push(string[i])
        }
        }
        result.sort();
        hasil=result.join("");
        console.log(hasil)
    }
    getUnique("pluginsangatkerensekali");
```
    Penjelasan kode soal 5 ke 2
        1. pertama kita membuat function yang menerima parameter string 
        2. kemudian string kita split sehingga spring sekarang nilainya berupa array 
        3. lalu kita perisapkan variabel array result kosong
        4. selanjutnya kita akan melakukan perulangan for ketika kondisi pada perulangan for terpenuhi maka akan melakukan pengkondisan
        5. jika index result sama dengan -1 maka array pada string index ke i akan di push ke variabel array result
        6. jika perulangan sudah selesai maka kita akan mensorting ascending variabel array result 
        7. setelah itu array result akan di join sehingga akan mengembalikan lagi ke tipe data string
