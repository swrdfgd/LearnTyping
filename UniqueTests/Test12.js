uniqueTests.push(12);
uniqueTestsTitles["12"] = 'Symbol Fever';

function genTests12(){
    daftarSimbol = '`' + `-=~!@#$%^&*()_+[]` + `\\` + `;',./{}|:"<>?`

    let kumpulanX = [];
    for (let i = 0; i < 25; i++) {
        // Panjang awal adalah 1 digit. 
        // Menggunakan Math.random() < 0.5 merepresentasikan peluang 1/2 untuk menambah digit.
        let panjangDigit = 1;
        while (Math.random() < 0.5) {
            panjangDigit++;
        }

        // Menyusun angka acak sesuai panjang digit (angka 0 boleh di depan)
        let angkaX = "";
        for (let j = 0; j < panjangDigit; j++) {
            // Mengambil angka acak 0-9 untuk setiap posisi digit
            angkaX += daftarSimbol[Math.floor(Math.random() * daftarSimbol.length)]; 
        }
        
        kumpulanX.push(angkaX);
    }

    // Menggabungkan seluruh bagian yang dipisahkan dengan spasi
    return `${kumpulanX.join(' ')}`;
}