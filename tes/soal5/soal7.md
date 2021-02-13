### Soal 5 ke 7
#### Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya

    1. Reverse method reverse di gunakan untuk membalikan index terakhir ke index pertama

    Contoh Penggunaan : 

```Javascript
    let nama = ["R","I","Z","A","L"]
    nama.reverse();
    console.log(nama)
```

    2. Pop method pop di gunakan untuk menghapus array pada index ke terakhir

    Contoh Penggunaan :

```javascript
    let angka = [1,2,3,4]
    angka.pop()
    console.log(angka)
```
    3. Unshift method unshift digunakan untuk menambahkan array pada awal index

    Contoh penggunaan :

```javascript
    let huruf = ['a','b','c','d']
    huruf.unshift("k")
    console.log(huruf)
```
    4. Shift method shift digunakan untuk menghapus array pada awal index

    Contoh penggunaan :

```javascript
     let hewan =['ayam','macan','kanguru']
    hewan.shift()
    console.log(hewan)
```
    5. Repeat method repeat di gunakan untuk menyalin string

    Contoh pengunaan :

```javascript
    let sayHai = "hai rizal "
    let rep =sayHai.repeat(10 )
    console.log(rep)
```
    6. Trim method trim digunakan untuk menghapus spasi baik itu di awal maupun di akhir

        Contoh Penggunaan:
      
```javascript
    let makanan= "   Mie Ayam "
    console.log(makanan.trim())
```
    7. Replace methode replace di gunakan untuk mengganti nilai pada index array

    Contoh penggunaan :

```javascript
    let abjad = ('aku sayang kamu')
    let ab=abjad.replace('aku','dia')
    console.log(ab) 
```
    8. Concat method concat di gunakan untuk menggabungkan array

    Contoh penggunaan :

```javascript
    let huruf1 = [1,2,3,4]
    let huruf2 = [8,9]
    let huruf3 = [12,14]
    let con=huruf1.concat(huruf2,huruf3)
    console.log(con)
```
    9. Substr method substr di gunakan untuk menampilkan huruf pada index ke 5 smpe ke 10

    Contoh penggunaan :

```javascript
    let str = "rizal mohamad"
    let sub=str.substr(5, 10)
    console.log(sub)
```
    10. Padstart method padStart di gunakan untuk menambah huruf atau angka di depan

    Contoh penggunaan :

```javascript
    let tambah = '6'
    let fix=tambah.padStart(4,'i')
    console.log(fix)
```
