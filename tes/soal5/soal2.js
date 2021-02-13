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

 //pertama kita membuat function yang menerima parameter string 
 //kemudian string kita split sehingga spring sekarang nilainya berupa array 
 //lalu kita perisapkan variabel array result kosong
 //selanjutnya kita akan melakukan perulangan for ketika kondisi pada perulangan for terpenuhi maka akan melakukan pengkondisan
   //-jika index result sama dengan -1 maka array pada string index ke i akan di push ke variabel array result
 //jika perulangan sudah selesai maka kita akan mensorting ascending variabel array result 
 //setelah itu array result akan di join sehingga akan mengembalikan lagi ke tipe data string
