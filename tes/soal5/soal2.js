function getUnique(string){
    let v=string.split("")
    let uniqueArray=[];
    for(i=0;i< v.length;i++){
       if(uniqueArray.indexOf(v[i]) === -1){
             uniqueArray.push(v[i])
       }
    }
    uniqueArray.sort();
    hasilll=uniqueArray.join("");
    console.log(hasilll)
 }
 getUnique("pluginsangatkerensekali");