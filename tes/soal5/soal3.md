### Soal 5 ke 3
#### buatlah fungsi yang menampilkan angka, berdasarkan urutan angka yang sudah di tentukan. Yang menerima 3 parameter: n = urutan angka yang ingin dicari, a = angka pertama, b = selisih tiap angka

[Code Soal 5 ke 3](https://playcode.io/737187/)

```javascript
        const aritmatika = (n,a,b) => {
        let res = [a]
        for ( i = 1; i < n; i++) {
            res.push(a+=b)
        }
        console.log(res);
    }
    aritmatika(12,3,5);
```

Penjelasan kode soal 5 ke 3
     1. seperti biasa kita membuat function yang menerima parameter n,a,dan b
     2. kemudian kita membuat variabel res yang berupa array yang nilai awalnya yaitu parameter a
     3. selanjutnya kita membuat perulangan for yang mana i nilai awalnya adalah  1 dan i lebih kecil dari n lalu i di tambah
     4. setelah itu kita akan mem push nilai hasil dari a di tambah b dan di masukan ke dalam variabel res
     5. dan akan menampilkan nilai dari variabel res