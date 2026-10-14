function ambilKataSatuTangan(tangan) {
    // 1. Dapatkan daftar kata sesuai bahasa yang dipilih
    const bahasa = document.getElementById('language').value;
    const daftarKata = (bahasa === 'en') ? englishWordsFreq : kataIndo;
    
    // 2. Siapkan array huruf berdasarkan tangan yang dipilih
    const hurufKananArr = 'yuiophjklnm'.split('');
    const hurufKiriArr = 'qwertasdfgzxcvb'.split('');
    
    let hurufDiizinkan = [];
    if (tangan === 'kiri') {
        hurufDiizinkan = hurufKiriArr;
    } else if (tangan === 'kanan') {
        hurufDiizinkan = hurufKananArr;
    } else {
        return "Pilih 'kiri' atau 'kanan'";
    }
    
    // 3. Saring (filter) seluruh daftar kata, sisakan yang hanya menggunakan huruf yang diizinkan
    // Menggunakan fungsi isWordValid yang sudah ada di script.js
    const kataTersaring = daftarKata.filter(kata => isWordValid(kata, hurufDiizinkan));
    
    // 4. Jika ada hasilnya, kembalikan satu kata secara acak
    if (kataTersaring.length > 0) {
        const acak = Math.floor(Math.random() * kataTersaring.length);
        return kataTersaring[acak].toLowerCase();
    } else {
        return "Tidak ada kata yang cocok di database.";
    }
}