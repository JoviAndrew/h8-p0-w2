function konversiMenit(menit) {
    // you can only write your code here!
    var detik = menit;      //Nampung input detik
    var counter = detik     //Membuat counter untuk looping
    menit = 0;

    while(detik >= 60){
        if(detik >= 60){
            menit++;
        }
        detik = detik - 60;
    }

    if(detik < 10){
        detik = '0'+detik;      
    }

    var waktu = menit + ':' + detik;

    return waktu;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00 
