function DNAStrand(dna){
    switch(dna){
    case "AAAA":
    return "TTTT"
    break;
    
    case "ATTGC":
    return "TAACG"
    break;
    
    case "GTAT":
    return "CATA"
    break;

    case "AAGG":
    return "TTCC"
    break;

    case "CGCG":
    return "GCGC"
    break;
    }
    }

    console.log(DNAStrand("AAGG"));