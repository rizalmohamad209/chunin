function nilai(indonesia,inggris,matematika, ipa){
    let hsl = (indonesia + inggris + matematika + ipa) / 4
    console.log(hsl)
    if(hsl >= 90 && hsl <=100){
        console.log("A")
    }else if(hsl >= 80 && hsl <= 89){
        console.log("B")
    }
    else if(hsl >= 70 && hsl <=79){
        console.log("C")
    }else if(hsl >=60 && hsl <=69){
        console.log("D")
    }else{
        console.log("E")
    }
}

nilai(60,70,85,69)