
function batas(deret){
    let strKsg;
    let jd=deret.toString();
    let pch = jd.split(0)
   for(i=0;i<pch.length;i++){
    strKsg= pch[i].split("")
    const hsl= strKsg.sort()
    let res=hsl.join("")
     parseInt(process.stdout.write(res))
   }
   process.stdout.write('\n')
     return strKsg
   }
   batas(543022203330440)