function iq(number){
    pc = number.split(" ")
    let hitungGenap=0;
    let hitungGanjil=0;
    let resultGenap=0;
    let resultGanjil=0;
    for(i=0;i<pc.length;i++){
       if(pc[i] %2 === 1){
          hitungGanjil++
          resultGanjil= i+1
       }else if(pc[i] %2  === 0){
          hitungGenap++
          resultGenap= i+1
       }
    }
    if(hitungGenap === 1){
       console.log(resultGenap)
    }else{
       console.log(resultGanjil)
    }
 }
 iq("2 4 8 9 10")

 