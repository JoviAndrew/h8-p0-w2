function xo(str) {
    var counterX = 0;
    var counterO = 0;

    for(var counter=0; counter<= str.length; counter++){
        if(str[counter] === 'x'){
            counterX++;
        }else if(str[counter] === 'o'){
            counterO++;
        }
    }
    
    if(counterX===counterO){
      return true;
    }else{
      return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
