function rot13(str) {
    let alpArray = "abcdefghijklmnopqrstuvwxyzabcdefghijklmn".toUpperCase().split("");
    let splittedString = str.split("");
    let decoded = [];

    for(var i = 0; i < splittedString.length; i++){
        if(alpArray.indexOf(splittedString[i]) == -1){
            decoded.push(splittedString[i]);
           
        }
        for(var j = 0; j < alpArray.length; j++){
            if(splittedString[i] == alpArray[j] && j <= 25){
                
                decoded.push(alpArray[j + 13]);
            }

        }
        
    }
    return decoded.join("");

}

console.log(rot13("SERR PBQR PNZC"));