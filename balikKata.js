   function balikKata(kata) {
    //Split String
    var stringDiPecah = kata.split("");

    //Reverse array formation
    var stringPutarArray = stringDiPecah.reverse();
    
    //Gabungin array jadi string
    var gabungArray = stringPutarArray.join("");
    
    return gabungArray;
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS