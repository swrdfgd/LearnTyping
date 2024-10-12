// Array untuk menyimpan kalimat-kalimat acak dari Wikipedia
randomWiki = [];
randomWikiID = [];

// Fungsi untuk mengambil konten lengkap artikel acak dari Wikipedia
async function getRandomWikipediaContent(lang) {
	bahasa = ['en','id']
    const url = 'https://'+bahasa[lang]+'.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&explaintext&exlimit=1&generator=random&grnnamespace=0';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        let articleText = pages[pageId].extract;

        // Ganti semua newline (\n) dengan spasi
        articleText = articleText.replace(/\n/g, ' ');

        // Pisahkan artikel menjadi kalimat-kalimat
        //const sentences = articleText.match(/[^.!?]+[.!?]+/g);

        // Pilih satu kalimat secara acak
        //let randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
		let randomSentence = articleText.substring(Math.random()*articleText.length,Math.random()*articleText.length);
		
		if (randomSentence.length > 1){
			while (randomSentence[0] == ' '){
				randomSentence = randomSentence.substring(1);
				if (randomSentence.length == 0){
					randomSentence = charLists[Math.floor(Math.random()*charLists.length)]
				}
			}
		}

        return randomSentence;
    } catch (error) {
        console.error("Error fetching Wikipedia article:", error);
        return null;
    }
}

// Fungsi untuk memfilter teks berdasarkan charLists dengan pengecekan huruf besar/kecil
function filterTextByCharList(text) {
    return text.split('').map(char => {
		if (char === ' '){return char}
        // Jika karakter ada di charLists, biarkan tetap
        if (charLists.includes(char)) {
            return char;
        }
        // Jika tidak ada, cek apakah versi huruf kecilnya ada
        const lowerChar = char.toLowerCase();
        if (charLists.includes(lowerChar)) {
            return lowerChar;  // Gantikan dengan versi huruf kecil
        }
        // Jika tidak ada, hilangkan karakter tersebut (kembalikan string kosong)
        return '';
    }).join('');
}

// Fungsi untuk menambahkan kalimat ke dalam array randomWiki
async function addSentenceToArray() {
	let lang = Math.floor(Math.random()*2);
    const sentence = await getRandomWikipediaContent(lang);
    if (sentence) {
		if (lang == 0){
        randomWiki.push(sentence);}
		else{
			randomWikiID.push(sentence);
		}
        //console.log("Kalimat ditambahkan ke array:", sentence);
        //console.log("Array randomWiki saat ini:", randomWiki);
    } else {
        console.log("Gagal mengambil kalimat.");
    }
}

// Fungsi ini bisa dipanggil oleh tombol yang ada di HTML
// Misalnya: document.getElementById('add-button').addEventListener('click', addSentenceToArray);
