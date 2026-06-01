const PAJAK_RATE = 0.11;

function hitungDiskonMember(totalHarga, statusMember) {
    if (statusMember === "VIP") return totalHarga * 0.1;
    if (statusMember === "Gold") return totalHarga * 0.05;
    return 0;
}

function hitungPotonganPromo(kodePromo) {
    if (kodePromo === "PROMO20") return 20000;
    if (kodePromo === "HEMAT10") return 10000;
    return 0;
}

function hitungTransaksiKasir(jumlahBarang, hargaBarang, statusMember, kodePromo) {
    let totalHarga = jumlahBarang * hargaBarang;
    
    totalHarga -= hitungDiskonMember(totalHarga, statusMember);
    totalHarga -= hitungPotonganPromo(kodePromo);
    
    const totalPajak = totalHarga * PAJAK_RATE;
    const totalAkhir = totalHarga + totalPajak;

    console.log("Total yang harus dibayar: " + totalAkhir);
    return totalAkhir;
}

hitungTransaksiKasir(5, 50000, "VIP", "PROMO20");