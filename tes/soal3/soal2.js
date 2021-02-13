function ranges(nilaiAwal, nilaiAkhir, dataArray) {
    dataArray.sort()
    let a = dataArray.indexOf(nilaiAwal);
    let b = dataArray.indexOf(nilaiAkhir);
    if (dataArray.includes(nilaiAwal) && dataArray.includes(nilaiAkhir)){
    if(nilaiAwal < nilaiAkhir && dataArray.length > 5) {
      let range = dataArray.slice(a + 1, b);
      console.log(range);
    } else if (dataArray.length < 5) {
      console.log("data kurang dari 5");
    } else {
      console.log(
        "nilai awal harus lebih kecil dari nilai akhir"
      );
    }
  }else{
    console.log("Nilai Awal dan nilai akhir tidak terdapat pada data array")
  }
  }
  ranges(20,80,[80,20,40,30,45,60]);

  //kita membuat sebuah function yang menerima parameter nilaiAwal,nilaiAkhir,dan dataArray
  //supaya dataArray ter sorting ascending kita gunakan built in function sort
  //kemudian kita mendeklarasikan variabel a yaitu sebagai indexOf yang artinya index ke berapa nilaiAwal pada dataArray dan begitu juga sebaliknya pada variabel b
  //selanjutnya kita membuat validasi untuk mengecek nilaiAwal ada nilanya pada dataArray dan juga mengecek juga nilaiAkhir apakah ada di dalam dataArray jika nilaiAwal dan nilaiAkhir tidak terdapat pada dataArray maka akan menampilkan Nilai Awal dan nilai akhir tidak terdapat pada data array
  //jika ada maka akan membuat validasi lagi jika nilai awal lebih kecil dari nilai akhir dan dataArray panjangnya lebih dari 5 maka data array akan di slice mulai dari index ke a+1 sampai index ke b kemudian di tampilkan ke console
  //jika panjang dataArray kurang dari 5 maka akan menampilkan data kurang dari 5
  //selain itu akan menampilkan nilai awal harus lebih kecil dari nilaiAkhir
