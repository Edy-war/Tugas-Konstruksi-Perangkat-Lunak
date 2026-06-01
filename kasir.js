function proses_transaksi(j_barang, h_barang, status_member, kode_promo) {
    let t = j_barang * h_barang;
    
    if (status_member == "VIP") {
        console.log("Mendapat diskon member VIP 10%");
        t = t - (t * 0.1);
    } else if (status_member == "Gold") {
        console.log("Mendapat diskon member Gold 5%");
        t = t - (t * 0.05);
    }


    if (kode_promo == "PROMO20") {
        console.log("Potongan promo sebesar 20000");
        t = t - 20000;
    } else if (kode_promo == "HEMAT10") {
        console.log("Potongan promo sebesar 10000");
        t = t - 10000;
    }

    let pajak = t * 0.11;
    t = t + pajak;

    console.log("Total yang harus dibayar: " + t);
    return t;
}

proses_transaksi(5, 50000, "VIP", "PROMO20");