function generateVariableName() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    
    // Fungsi untuk memilih huruf acak dari alfabet
    function getRandomLetter() {
        return letters[Math.floor(Math.random() * letters.length)];
    }
    
    // Fungsi untuk menambahkan angka secara acak dari 0-9
    function getRandomDigit() {
        return Math.floor(Math.random() * 10);
    }

    let variableName = '';
	let variableName2 = '';
    let addingLetters = true;

    // Proses menambah huruf dengan peluang 1/2 untuk berhenti
    while (addingLetters) {
        variableName += getRandomLetter();
        addingLetters = Math.random() > 0.5; // 50% peluang untuk menambah huruf lagi
    }
	kataRandom = wordsGen(charLists);
	if (Math.random() < 1/2){
		variableName = kataRandom;
	}

	// Proses menambah huruf dengan peluang 1/2 untuk berhenti
	addingLetters = Math.random() > 0.5;
    while (addingLetters) {
        variableName2 += getRandomLetter();
        addingLetters = Math.random() > 0.5; // 50% peluang untuk menambah huruf lagi
    }
	
	kataRandom = wordsGen(charLists);
	if (Math.random() < 1/2){
		variableName2 = kataRandom;
	}
	if (variableName2.length > 0){
		variableName2 = variableName2[0].toUpperCase() + variableName2.substring(1);
	}
	
    let addingNumbers = Math.random() > 0.5; // 50% peluang untuk menambah angka
    let numberPart = '';

    // Proses menambah angka dengan peluang 1/2 untuk berhenti
    while (addingNumbers) {
        numberPart += getRandomDigit();
        addingNumbers = Math.random() > 0.5; // 50% peluang untuk menambah angka lagi
    }

    // Gabungkan nama variabel dengan angka (jika ada)
    return variableName + variableName2 + numberPart;
}


