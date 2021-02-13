function nilai(nilai){
    const nilaiAkhir= nilai.reduce((sum,item)=> (sum+item))/4
    let jmlhData= 0;
    for(i=0;i<nilai.length;i++){
       if(typeof(nilai[i]) !== "number"){
           jmlhData += 0 
       }else{
            jmlhData +=1
       }
       }
       if(jmlhData===4){
        if(nilaiAkhir >= 90 && nilaiAkhir <=100){
            console.log("A")
        }else if(nilaiAkhir >= 80 && nilaiAkhir <= 89){
            console.log("B")
        }
        else if(nilaiAkhir >= 70 && nilaiAkhir <=79){
            console.log("C")
        }else if(nilaiAkhir >=60 && nilaiAkhir <=69){
            console.log("D")
        }else if(nilaiAkhir >=0 && nilaiAkhir <= 59){
            console.log("E")
        }else{
            console.log("Nilai minimaal 0 dan maksimal 100")
        }
       }else{
           console.log("Nilai harus number atau data nilai harus terdapat 4")
       } 
}
nilai([200,110,101,100])