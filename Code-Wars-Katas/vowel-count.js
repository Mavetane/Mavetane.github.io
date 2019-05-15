function getCount(str) {
  var vowelsCount = 0;

  var vowels = ["a", "e", "i", "o" , "u"];

  var spiltedString = str.split("");
  for (var i = 0; i < spiltedString.length; i++) {
    vowels.forEach((element) => {
      if (element == spiltedString[i]) {
        vowelsCount++;

      }
    })
  }


  return vowelsCount;
}
console.log(getCount("o a kak ushakov lil vo kashu kakao"))


