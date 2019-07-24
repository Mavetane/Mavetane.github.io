function reverse(str){

    let splitedStr = str.split(" ");
    let temp = [];
    
    splitedStr.forEach((letter , index) => {
        if(index % 2 != 0){
          const secondLetter = letter.split("").reverse().join("");
         temp.push(secondLetter);
       } else {
        temp.push(letter)
        }
    })

    return temp.join(" ").trim();
      //WRITE SOME MAGIC //WRITE SOME MAGIC
}