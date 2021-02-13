function batas(deret){
  let result= ''
  let str=deret.toString();
  let pch = str.split(0)
  if(typeof(deret) !== "number"){
    console.log("Inputan Bukan Integer")
  }else{
   for(i=0;i<pch.length;i++){
   let strKsg= pch[i].split("")
    const hsl= strKsg.sort()
    result += hsl.join("")
   }
     console.log(parseInt(result))
  }
   }
   batas(5430222033304477)


   