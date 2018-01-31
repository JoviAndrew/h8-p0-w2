//NOMOR 1

let row;
let column;


for(row=5; row>0; row--){
    console.log('*');
}

//====================================================================================
//NOMOR 2

//Initial Star
let currentStar='';

for(row=5; row>0; row--){
    for(column=0; column<5; column++){
        currentStar = currentStar + '*';
    }  
    console.log(currentStar);
    currentStar=''; //Reset the number of Stars
}

//====================================================================================
//NOMOR 3

//Initial Star
let currentStar='';

for(row=1; row<=5; row++){
    for(column=0; column<row; column++){
        currentStar = currentStar + '*';
    }  
    console.log(currentStar);
    currentStar=''; //Reset the number of Stars
}