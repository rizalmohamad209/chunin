let nilaiAkhir = 80;
if(nilaiAkhir >=90 && nilaiAkhir <=100){
    console.log("A")
}else if(nilaiAkhir >=80 && nilaiAkhir <=89){
    console.log("B")
}else if(nilaiAkhir >=70 && nilaiAkhir <=79){
    console.log("C")
}else if(nilaiAkhir >=60 && nilaiAkhir <=69){
    console.log("D")
}else{
    console.log("E")
}


const hari=["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"]
switch("Minggu"){
    case"Senin":
    console.log("hari ini senin ")
    break;
    case"Selasa":
    console.log("Hari ini Selasa")
    break;
    case"Selasa":
    console.log("Hari ini Selasa")
    break;
    case"Rabu":
    console.log("Hari ini Rabu")
    break;
    case"Kamis":
    console.log("Hari ini Kamis")
    break;
    case"Jumat":
    console.log("Hari ini Jumat")
    break;
    case"Sabtu":
    console.log("Hari ini Sabtu")
    break;
    case"Minggu":
    console.log("Hari ini Libur")
    break;
    default:
    console.log("ini bukan hari")
}


//perbedaan if else dan switch case yaitu pada percabangan if else kita bisa memiliki lebih dari 1 kondisi dan nilai sedangkan pada switch hanya ada 1 kondisi dan dengan nilai yang bervariasi