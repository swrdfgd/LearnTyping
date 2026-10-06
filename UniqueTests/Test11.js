uniqueTests.push(11);
uniqueTestsTitles["11"] = 'Numbers';


function genTests11(){
// Fungsi pembantu untuk mengacak urutan karakter (permutasi)
    function acakString(str) {
        let arr = str.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Tukar posisi elemen
        }
        return arr.join('');
    }

    // 1. String yang konstan
    const bagian1 = "01234567890";
    const bagian2 = "0987654321";
    
    // 2. Permutasi dari 123456789
    const permutasi1 = acakString("123456789");
    const permutasi2 = acakString("123456789"); // Permutasinya lagi

    // 3. Menghasilkan 25 angka acak (X) dengan distribusi geometri
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
            angkaX += Math.floor(Math.random() * 10).toString(); 
        }
        
        kumpulanX.push(angkaX);
    }

    // Menggabungkan seluruh bagian yang dipisahkan dengan spasi
    return `${bagian1} ${bagian2} ${permutasi1} ${permutasi2} ${kumpulanX.join(' ')}`;
}
