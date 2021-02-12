function reverse(str){
    let pecah= str.split(" ")
    let result=""
     for(let i = pecah.length - 1; i >= 0; i--){
        result += pecah[i]+ " "; }
        return result
   }
   console.log(reverse("Saya Cinta PLUGIN"))
 