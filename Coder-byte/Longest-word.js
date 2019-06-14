function LongestWord(str) { 
    var strSplit = str.split(' ');
    
    var longWord = "";
    
    for (var i = 0; i < strSplit.length;i++){
        if(strSplit[i].length > longWord.length) {
            longWord = strSplit[i];
        }
    }
    
      // code goes here  
      return longWord; 
             
    }
       
    // keep this function call here 
    console.log(LongestWord("I'm an inconspicous poet and I love reading."));                            
    
    
      