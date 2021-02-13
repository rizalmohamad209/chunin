const revereseSentence = (sentence) => {
    let newSentence = reversedWord(sentence);
    let tempString = ''
    let result = ''
    for(i = 0; i < newSentence.length; i++){
        if(newSentence[i] === ' '){
            result += tempString + ' '
            tempString= '';
        }else{
            tempString = newSentence[i] + tempString;
        }
    }
    return result+tempString;
}
const reversedWord = (word) => {
    let tempString = '';
    while(tempString.length !== word.length){
        tempString = word[tempString.length] + tempString
    };

    return tempString
}
console.log(revereseSentence("Plugin Cinta Saya"))