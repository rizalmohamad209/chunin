//reverse
let nama = ["R","I","Z","A","L"]
nama.reverse();
console.log(nama)

//method reverse di gunakan untuk membalikan

//pop
let angka = [1,2,3,4]
angka.pop()
console.log(angka)
 //method pop di gunakan untuk menghapus array pada index ke terakhir


 //unshift
 let huruf = ['a','b','c','d']
 huruf.unshift("k")
 console.log(huruf)
 //method unshift digunakan untuk menambahkan array pada awal index

 //shift
 let hewan =['ayam','macan','kanguru']
 hewan.shift()
 console.log(hewan)
 //method shift digunakan untuk menghapus array pada awal index

//repeat
 let sayHai = "hai rizal "
let rep =sayHai.repeat(10 )
console.log(rep)
//method repeat di gunakan untuk menyalin string

//trim
let makanan= "   Mie Ayam "
console.log(makanan.trim())
//method trim digunakan untuk menghapus spasi baik itu di awal maupun di akhir


//replace
let abjad = ('aku sayang kamu')
let ab=abjad.replace('aku','dia')
console.log(ab)
//replace di gunakan untuk mengganti nilai pada index array

//concat
let huruf1 = [1,2,3,4]
let huruf2 = [8,9]
let huruf3 = [12,14]
let con=huruf1.concat(huruf2,huruf3)
console.log(con)
//method concat di gunakan untuk menggabungkan array


//substr
let str = "rizal mohamad"
let sub=str.substr(5, 10)
console.log(sub)
//method substr di gunakan untuk menampilkan huruf pada index ke 5 smpe ke 10


//padStart
let tambah = '6'
let fix=tambah.padStart(4,'i')
console.log(fix)
//method padStart di gunakan untuk menambah huruf atau angka di depan