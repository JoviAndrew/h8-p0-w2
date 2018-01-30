var nama = '';
var peran = '';

if(nama === ''){
    console.log('Nama harus diisi!');
}else{
    console.log('Halo '+nama+', Pilih peranmu untuk memulai game!');

    if(peran === ''){
        console.log('Peran harus diisi!');   
    }else if(peran === 'Ksatria'){
        console.log('Selamat datang di Dunia Proxytia, '+nama);
        console.log('Halo Ksatria '+nama+',kamu dapat menyerang dengan senjatamu!"');
    }else if(peran === 'Tabib'){
        console.log('Selamat datang di Dunia Proxytia, '+nama);
        console.log('Halo Tabib '+nama+', kamu akan membantu temanmu yang terluka."');
    }else if(peran === 'Penyihir'){
        console.log('Selamat datang di Dunia Proxytia, '+nama);
        console.log('Halo Penyihir '+nama+', ciptakan keajaiban yang membantu kemenanganmu!"');
    }
}