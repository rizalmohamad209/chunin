### Soal 1 ke 3
#### Apakah yang dimaksud dengan function dan method dalam Javascript? Jelaskan perbedaannya! dan berikan contohnya dalam bentuk code sederhana

Perbedaan function dan method

 ```Function adalah sepotong kode untuk dijalankan. method adalah Fungsi yang ada di dalam Objek.```

[Contoh function sederhanma dan method soal 1 ke 3](https://playcode.io/737201/)

```javascript
    function sum(a,b){
        return  a+b
    }
     console.log(sum(5,10))
```
Penjelasan kode function diatas :

    Di atas terdapat sebuah function namanya sum yang menerima sebuah parameter a dan b
    kemudian function diatas mengembalikan return yang mana parameter a dan b di masukan yaitu a+b.
    selanjutnya function sum di log dengan nilai parameter a=5 dan b=10

```javascript
    const welcome = {
    kota: 'Tegal',
    selamat:()=>{
       return `Selamat Datang di ${welcome.kota}`
      }
    }
    console.log(obj.hai())
```
Penjelasan kode method diatas :
    Di atas terdapat object welcome yang memilki properti kota, dan ada properti selamat 
    memilki sebuah nilai method. dimana method tersebut mengembalikan sebuah return `Selamat Datang di ${welcome.kota}`.
    dimana $'{welcome.kota}' mengambil dari properti kota dari object welcome.


