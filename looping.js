//NOMOR 1

//Declaration & Assign initial Value
let counterPositif = 1;
let counterNegatif = 20;

console.log('LOOPING PERTAMA'); //Judul
//Looping
while(counterPositif <= 20){
    if(counterPositif%2 === 0){
        console.log(counterPositif+' - I love coding');
    }
    counterPositif++;
}

console.log('LOOPING KEDUA');
while(counterNegatif >= 0){
    if(counterNegatif%2 === 0){
        console.log(counterNegatif+' - I will become fullstack developer');
    }
    counterNegatif--;
}

//====================================================================================
//NOMOR 2
console.log('LOOPING PERTAMA');

for(counterPositif=1; counterPositif<=20; counterPositif++){
    console.log(counterPositif+' - I love coding');
}

console.log('LOOPING KEDUA');
for(counterNegatif=20; counterNegatif>=0; counterNegatif--){
    console.log(counterNegatif+' - I will become fullstack developer');
}

//====================================================================================
//NOMOR 3

//Kelipatan 1
for(let i=1; i<=100; i++){
    if(i%2===0){
        console.log('GENAP');
    }else{
        console.log('GANJIL');
    }
}

//Kelipatan 2
for(let i2=1; i2<=100; i2=i2+2){
    if(i2%3===0){
        console.log(i2+' Kelipatan 3');
    }
}

//Kelipatan 5
for(let i3=1; i3<=100; i3=i3+5){
    if(i3%6===0){
        console.log(i3+' Kelipatan 6');
    }
}

//Kelipatan 9
for(let i4=1; i4<=100; i4=i4+9){
    if(i4%10===0){
        console.log(i4+' Kelipatan 10');
    }
}