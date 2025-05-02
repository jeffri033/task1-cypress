const prompt = require('prompt-sync')();

function cekUsia() {
    let arrayKelompokUsia = [];
    let kelompokUsia;

    let kategoriUsia = [{
            kategori: "Anak-anak",
            jumlah: 0
        }, 
        {
            kategori: "Remaja",
            jumlah: 0

        },
        {
            kategori: "Dewasa",
            jumlah: 0

        },
        {
            kategori: "Lansia",
            jumlah: 0

        }    
    ];


    // loop function
    while (true) {
        // input usia
        const usia = prompt("Masukkan usia (tahun) : ");

      
        // validasi inputan usia
        if (isNaN(usia)) {
            console.log("Error! Masukkan usia yang valid");
            continue;
        }

        
        // jika valid
        switch (true) {
            // Anak-anak    
            case (usia >= 0  && usia <= 12):
                kategoriUsia[0].jumlah += 1;
                break;
    
            // Remaja 
            case (usia >= 13  && usia <= 17):
                kategoriUsia[1].jumlah += 1;
                break;
    
            // Dewasa
            case (usia >= 18  && usia <= 59):
                kategoriUsia[2].jumlah += 1;
                break;
    
            // Lansia    
            case (usia >= 60):
                kategoriUsia[3].jumlah += 1;
                break;

            // jika invalid    
            default:
                console.log("Error! Masukkan usia yang valid");
                continue;
        }


        
        // tampilkan jumlah kelompok usia
        for (let item of kategoriUsia) {
            console.log(item.kategori + ': ' + item.jumlah + ' orang');
        }
       


        // tampilkan opsi input usia lagi
        const continueCheck = prompt("Apakah Anda ingin mengecek kelompok usia lagi? (y/n)").toLowerCase();
        if (continueCheck !== "y") {
            break;
        }

    }
}


// jalankan function cek usia
cekUsia();



