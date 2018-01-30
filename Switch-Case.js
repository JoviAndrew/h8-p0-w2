var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

var bulanCharacter;

switch(bulan){
    case 1:
        bulanCharacter = 'Januari';
        break;
    case 2:
        bulanCharacter = 'Februari';
        break;
    case 3:
        bulanCharacter = 'Maret';
        break;
    case 4:
        bulanCharacter = 'April';
        break;
    case 5:
        bulanCharacter = 'Mei';
        break;
    case 6:
        bulanCharacter = 'Juni';
        break;
    case 7:
        bulanCharacter = 'Juli';
        break;
    case 8:
        bulanCharacter = 'Agustus';
        break;
    case 9:
        bulanCharacter = 'September';
        break;
    case 10:
        bulanCharacter = 'Oktober';
        break;
    case 11:
        bulanCharacter = 'November';
        break;
    case 12:
        bulanCharacter = 'Desember';
        break;
}

console.log(tanggal+' '+bulanCharacter+' '+tahun);