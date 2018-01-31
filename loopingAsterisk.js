//NOMOR 1

let row;
let column;


for(row=5; row>0; row--){
    console.log('*');
}

//====================================================================================
//NOMOR 2

//Function Adding Star
function addStar(starTotal){
    return starTotal + '*';
}

//Initial Star
let currentStar='';

for(row=5; row>0; row--){
    for(column=0; column<5; column++){
        currentStar = addStar(currentStar);
    }  
    console.log(currentStar);
    currentStar=''; //Reset the number of Stars
}

//====================================================================================
//NOMOR 3

function addStar(starTotal){
    return starTotal + '*';
}

//Initial Star
let currentStar='';

for(row=1; row<=5; row++){
    for(column=0; column<row; column++){
        currentStar = addStar(currentStar);
    }  
    console.log(currentStar);
    currentStar=''; //Reset the number of Stars
}