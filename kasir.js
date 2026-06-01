function hitungTransaksiKasir(jumlahBarang, hargaBarang, statusMember, kodePromo) {
    let totalHarga = jumlahBarang * hargaBarang;
    
    if (statusMember == "VIP") {
        console.log("Mendapat diskon member VIP 10%");
        totalHarga = totalHarga - (totalHarga * 0.1);
    } else if (statusMember == "Gold") {
        console.log("Mendapat diskon member Gold 5%");
        totalHarga = totalHarga - (totalHarga * 0.05);
    }

    if (kodePromo == "PROMO20") {
        console.log("Potongan promo sebesar 20000");
        totalHarga = totalHarga - 20000;
    } else if (kodePromo == "HEMAT10") {
        console.log("Potongan promo sebesar 10000");
        totalHarga = totalHarga - 10000;
    }

    let pajak = totalHarga * 0.11;
    totalHarga = totalHarga + pajak;

    console.log("Total yang harus dibayar: " + totalHarga);
    return totalHarga;
}

hitungTransaksiKasir(5, 50000, "VIP", "PROMO20");