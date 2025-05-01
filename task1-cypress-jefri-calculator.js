const prompt = require('prompt-sync')();

function calculator() {
  // loop operation calculator   
  while (true) {

    // tampilkan pilihan operasi
    let pilihanOperasi = `Pilih operasi:
    1. Penjumlahan
    2. Pengurangan
    3. Perkalian
    4. Pembagian`;

    console.log(pilihanOperasi);


    // input operasi
    const operator = prompt("Masukkan jenis operasi (1-4) : ");

      
    // validasi inputan operasi

    const arrayPilihan = ["1", "2", "3", "4"];

    
    if (!arrayPilihan.includes(operator)) {
        console.log("Error! Masukkan pilihan yang valid");
        continue;
    }



    // input angka
    const num1 = parseFloat(prompt("Masukkan angka 1 : "));
    const num2 = parseFloat(prompt("Masukkan angka 2 : "));


    // validasi inputan angka
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Error! Masukkan angka yang valid");
      continue;
    }


    // hitung hasil operasi
    let jenisOperasi;
    let result;
    switch (operator) {
      case "1":
        jenisOperasi = "Penjumlahan";
        result = num1 + num2;
        break;

      case "2":
        jenisOperasi = "Pengurangan";
        result = num1 - num2;
        break;

      case "3":
        jenisOperasi = "Perkalian";
        result = num1 * num2;
        break;

      case "4":
        jenisOperasi = "Pembagian";

        if (num2 === 0) {
          console.log("Tidak dapat dilakukan pembagian dengan angka 0.");
          continue;
        }

        result = num1 / num2;
        break;
    }


    // tampilkan hasil operasi
    console.log(`Operasi: ${jenisOperasi}`);
    console.log(`Angka 1: ${num1}`);
    console.log(`Angka 2: ${num2}`);
    console.log(`Hasil: ${result}`);


    // tampilkan opsi hitung ulang
    const continueCalculation = prompt("Apakah Anda ingin berhitung lagi? (y/n)").toLowerCase();
    if (continueCalculation !== "y") {
      break;
    }
  }
}


// jalankan function calculator
calculator();
