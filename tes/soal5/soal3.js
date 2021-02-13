const aritmatika = (n,a,b) => {
    let res = [a]
    for ( i = 1; i < n; i++) {
        res.push(a+=b)
    }
    console.log(res);
 }
 aritmatika(12,3,5);

 //Seperti biasa kita membuat function yang menerima parameter n,a,dan b
 //kemudian kita membuat variabel res yang berupa array yang nilai awalnya yaitu parameter a
 //selanjutnya kita membuat perulangan for yang mana i nilai awalnya adalah  1 dan i lebih kecil dari n lalu i di tambah
 //setelah itu kita akan mem push nilai hasil dari a di tambah b dan di masukan ke dalam variabel res
 //dan akan menampilkan nilai dari variabel res