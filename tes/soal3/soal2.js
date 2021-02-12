function ranges(nilaiAwal, nilaiAkhir, dataArray) {
    dataArray.sort()
    let a = dataArray.indexOf(nilaiAwal);
    let b = dataArray.indexOf(nilaiAkhir);
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
      aa = dataArray.slice(a + 1, b);
      console.log(aa);
    } else if (dataArray.length < 5) {
      console.log("data kurang dari 5");
    } else {
      console.log(
        "data tidak di temukan nilai awal harus lebih kecil dari nilai akhir"
      );
    }
  }
  ranges(20, 60,[80,20,40,30, 45, 60]);