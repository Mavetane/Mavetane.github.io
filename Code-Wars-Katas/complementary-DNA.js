function DNAstrand(dna){
  var paired = [];
  // var search = function(dna){
      switch (dna){
          case "AAAA":
          paired.push("TTTT");
          break;
          case "ATTGC":
          // console.log("kdjk");
          paired.push("TAACG");
          break;
          case "GTAT":
          paired.push("CATA");
          break;

      // }
 };
//  for (var i = 0;i < dna.length;i++) {
//      search(dna[i]);
//  };
 return paired.join("");
}
  console.log(DNAstrand("ATTGC"));
  
  
  
