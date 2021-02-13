const revereseKata = (kata) => {
    let newKata = reversedHuruf(kata);
    let temp= ''
    let result = ''
    for(i = 0; i < newKata.length; i++){
        if(newKata[i] === ' '){
            result += temp + ' '
            temp= '';
        }else{
            temp= newKata[i] + temp;
        }
    }
    return result+temp
}
const reversedHuruf = (word) => {
    let tempString = '';
    for(i=0;i< word.length;i++){
        tempString= word[i] + tempString
    }
    return tempString
}

console.log(revereseKata("Saya Cinta Plugin"))



