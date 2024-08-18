let generatedText = "";
let startTime;
let currentIndex = 0;
let isActive = false;
let typedText = ""; // To keep track of the typed text
let testStarted = false; // To track if the test has started

function startTest() {
    const level = document.getElementById('level').value;
    generateText(level);
    document.getElementById('textBox').focus();
    testStarted = true;
    isActive = true; // Allow typing after starting the test
    document.getElementById('textBox').addEventListener('keydown', handleTyping);
    document.getElementById('textBox').addEventListener('click', activateBox);
}

const daftarHurufKanan = 'yuiophjklnm';
const daftarHurufKiri = 'qwertasdfgzxcvb'
const charListsComplete = 'qwertyuiopasdfghjkl;zxcvbnm,./'.split('');
function generateText(level) {
    const characters = levelData[level];
    generatedText = "";
    typedText = "";
	let introductionIteration;
	
	if (level == "randomWords"){
		introductionIteration = 30;
		while (Math.random() < 1/2){introductionIteration++}
		introductionIteration = Math.floor(Math.random()*introductionIteration);
		for (let i = 0; i < introductionIteration; i++) {
			generatedText += wordsGen(charListsComplete) + ' ';
		}
		inisialisasi();
		return
	}
	
	let kataShift = '';
	if (level == "leftShift"){
		introductionIteration = 10;
		while (Math.random() < 1/2){introductionIteration++}
		introductionIteration = Math.floor(Math.random()*introductionIteration);
		for (let i = 0; i < introductionIteration; i++) {
			generatedText += introduceShift('left') + ' ';
		}
		while (Math.random() < 1/2){
			introductionIteration = 5;
			while (Math.random() < 1/2){introductionIteration++}
			introductionIteration = Math.floor(Math.random()*introductionIteration);
			for (let i = 0; i < introductionIteration; i++) {
			generatedText += remindCharacter((charListsComplete.join('')+'YUIOPHJKLNM').split('')) + ' ';
			}
		}
		
		introductionIteration = 10;
		
		while (Math.random() < 1/2){introductionIteration++}
		introductionIteration = Math.floor(Math.random()*introductionIteration);
		for (let i = 0; i < introductionIteration; i++) {
			kataShift = wordsGen(charListsComplete);
			if (isWordValid(kataShift, (daftarHurufKanan + ';,./').split(''))){
				kataShift = kataShift.toUpperCase();
			}
			else if (isWordValid(kataShift[0], (daftarHurufKanan + ';,./').split(''))){
				kataShift = kataShift[0].toUpperCase() + kataShift.substring(1);
			}
			if (Math.random() < 1/2){kataShift += ','}
			generatedText += kataShift + ' ';
		}
		
		inisialisasi();
		return
	}
	
	if (level == "rightShift"){
		introductionIteration = 10;
		while (Math.random() < 1/2){introductionIteration++}
		for (let i = 0; i < introductionIteration; i++) {
			generatedText += introduceShift('right') + ' ';
		}
		while (Math.random() < 1/2){
			introductionIteration = 5;
			while (Math.random() < 1/2){introductionIteration++}
			introductionIteration = Math.floor(Math.random()*introductionIteration);
			for (let i = 0; i < introductionIteration; i++) {
			generatedText += remindCharacter((charListsComplete.join('')+'QWERTASDFGZXCVB').split('')) + ' ';
			}
		}
		
		introductionIteration = 10;
		
		while (Math.random() < 1/2){introductionIteration++}
		introductionIteration = Math.floor(Math.random()*introductionIteration);
		for (let i = 0; i < introductionIteration; i++) {
			kataShift = wordsGen(charListsComplete);
			if (isWordValid(kataShift, (daftarHurufKiri + ';,./').split(''))){
				kataShift = kataShift.toUpperCase();
			}
			else if (isWordValid(kataShift[0], (daftarHurufKiri + ';,./').split(''))){
				kataShift = kataShift[0].toUpperCase() + kataShift.substring(1);
			}
			if (Math.random() < 1/2){kataShift += ','}
			generatedText += kataShift + ' ';
		}
		
		inisialisasi();
		return
	}
	
	if (level == "shift"){
		introductionIteration = 10;
		while (Math.random() < 1/2){introductionIteration++}
		introductionIteration = Math.floor(Math.random()*introductionIteration);
		for (let i = 0; i < introductionIteration; i++) {
			generatedText += introduceShift() + ' ';
		}
		while (Math.random() < 1/2){
			introductionIteration = 5;
			while (Math.random() < 1/2){introductionIteration++}
			introductionIteration = Math.floor(Math.random()*introductionIteration);
			for (let i = 0; i < introductionIteration; i++) {
			generatedText += remindCharacter((charListsComplete.join('')+'QWERTASDFGZXCVBYUIOPHJKLNM').split('')) + ' ';
			}
		}
		
		introductionIteration = 10;
		
		while (Math.random() < 1/2){introductionIteration++}
		introductionIteration = Math.floor(Math.random()*introductionIteration);
		for (let i = 0; i < introductionIteration; i++) {
			kataShift = wordsGen(charListsComplete);
			if (Math.random() < 1/2){kataShift += ','}
			modeShift = Math.floor(Math.random()*3);
			if (modeShift == 0){
				generatedText += kataShift.toUpperCase() + ' ';
			}
			if (modeShift == 1){
				generatedText += kataShift[0].toUpperCase() + kataShift.substring(1) + ' ';
			}
			if (modeShift == 2){
				generatedText += kataShift + ' ';
			}
		}
		
		inisialisasi();
		return
	}
	
	

	introductionIteration = 10;
	while (Math.random() < 1/2){introductionIteration++}
	introductionIteration = Math.floor(Math.random()*introductionIteration);
    for (let i = 0; i < introductionIteration; i++) {
        generatedText += introduceCharacter(level) + ' ';
    }
	
	charLists = [];
	let charrSel = [];
	for (let i = 1; i <= level; i++){
		charrSel = levelData[i].cha;
		for (let j = 0; j < charrSel.length; j++){
			charLists = charLists.concat(charrSel[j]);
		}
	}
	
	if (level == 7){
		introductionIteration = 10;
		while (Math.random() < 1/2){introductionIteration++}
		introductionIteration = Math.floor(Math.random()*introductionIteration);
		for (let i = 0; i < introductionIteration; i++) {
			generatedText += wordsGen(charLists) + ', ';
		}
	}
	
	while (Math.random() < 1/2){
		introductionIteration = 5;
		while (Math.random() < 1/2){introductionIteration++}
		introductionIteration = Math.floor(Math.random()*introductionIteration);
		for (let i = 0; i < introductionIteration; i++) {
			generatedText += introduceCharacter(Math.floor(Math.random()*level)+1) + ' ';
		}
	}
	
	let pilih1; let pilih2; let pilih3; let pilih4;
	while (Math.random() < 1/2){
		introductionIteration = 5;
		pilih1 = levelData[Math.floor(Math.random()*level)+1].cha;
		pilih2 = levelData[Math.floor(Math.random()*level)+1].cha;
		pilih3 = levelData[Math.floor(Math.random()*level)+1].cha;
		pilih4 = levelData[Math.floor(Math.random()*level)+1].cha;
		levelData[0].cha = [[pilih1[Math.floor(Math.random()*pilih1.length)][Math.floor(Math.random()*2)],pilih2[Math.floor(Math.random()*pilih2.length)][Math.floor(Math.random()*2)]],[pilih3[Math.floor(Math.random()*pilih3.length)][Math.floor(Math.random()*2)],pilih4[Math.floor(Math.random()*pilih4.length)][Math.floor(Math.random()*2)]]];
		for (let i = 0; i < introductionIteration; i++) {
			generatedText += introduceCharacter(0) + ' ';
		}
	}
	

	
	
	while (Math.random() < 1/2){
		introductionIteration = 5;
		while (Math.random() < 1/2){introductionIteration++}
		introductionIteration = Math.floor(Math.random()*introductionIteration);
		for (let i = 0; i < introductionIteration; i++) {
			generatedText += remindCharacter(charLists) + ' ';
		}
	}
	
	introductionIteration = 10;
	while (Math.random() < 1/2){introductionIteration++}
	introductionIteration = Math.floor(Math.random()*introductionIteration);
	for (let i = 0; i < introductionIteration; i++) {
		if (level >= 7 && Math.random() < 1/2){ 
			generatedText += wordsGen(charLists) + ', ';
		}
		else{
			generatedText += wordsGen(charLists) + ' ';
		}		
	}
	
	inisialisasi();
}

function inisialisasi(){
	// Ensure no trailing space at the end
    generatedText = generatedText.trim();
    currentIndex = 0;

    updateTextBox();
    document.getElementById('wpm').textContent = "0";
    document.getElementById('accuracy').textContent = "0%";
    startTime = new Date().getTime()
}

function updateTextBox() {
    const textBox = document.getElementById('textBox');
    let displayText = "";

    for (let i = 0; i < generatedText.length; i++) {
        if (i === currentIndex) {
            displayText += `<span class="cursor-highlight">${generatedText[i]}</span>`;
        } else if (i < typedText.length) {
            if (typedText[i] === generatedText[i]) {
                displayText += `<span style="color:black;">${generatedText[i]}</span>`;
            } else {
				if (typedText[i] == ' '){
                displayText += `<span style="color:red">■</span>`;
				}
				else{
			    displayText += `<span style="color:red;">${typedText[i]}</span>`;
				}
            }
        } else {
            displayText += `<span style="color:#888;">${generatedText[i]}</span>`;
        }
    }

    textBox.innerHTML = displayText;
}

function activateBox() {
    if (testStarted) {
        isActive = true;
    }
}

function handleTyping(event) {
    if (!isActive) return;

    if (event.key.length === 1 && currentIndex < generatedText.length) {
        typedText += event.key;

        if (event.key === generatedText[currentIndex]) {
            currentIndex++;
        } else {
            currentIndex++;
        }
        updateTextBox();
        calculateWPM();
    } else if (event.key === 'Backspace' && currentIndex > 0) {
        typedText = typedText.slice(0, -1);
        currentIndex--;
        updateTextBox();
    }
	
	scrollToCursor();

    if (currentIndex === generatedText.length) {
        endTest();
    }
}

function endTest() {
    isActive = false;
    testStarted = false;
    document.getElementById('textBox').removeEventListener('keydown', handleTyping);
    document.getElementById('textBox').removeEventListener('click', activateBox);

    const endTime = new Date().getTime();
    calculateResults(endTime);
	
	if (document.getElementById('language').value == 'en'){
		document.getElementById('textBox').innerHTML += "<p style='color:green;'>Practice Completed!</p>";
	}
	else {
		document.getElementById('textBox').innerHTML += "<p style='color:green;'>Latihan Selesai!</p>";
	}
}

function calculateResults(endTime) {
    const timeTaken = (endTime - startTime) / 1000; // in seconds
    const wordsTyped = typedText.split(' ').length;
    const wpm = (wordsTyped / timeTaken) * 60;
    const accuracy = calculateAccuracy();

    document.getElementById('wpm').textContent = Math.round(wpm);
    document.getElementById('accuracy').textContent = accuracy + "%";
}

function calculateWPM() {
    if (testStarted) {
        const timeElapsed = (new Date().getTime() - startTime) / 1000; // in seconds
        const wordsTyped = typedText.split(' ').length;
        const wpm = (wordsTyped / timeElapsed) * 60;
        document.getElementById('wpm').textContent = Math.round(wpm);
    }
}

function calculateAccuracy() {
    let correctCharacters = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === generatedText[i]) {
            correctCharacters++;
        }
    }
    return Math.round((correctCharacters / generatedText.length) * 100);
}

function introduceCharacter(level){
	let charIntro = levelData[level].cha
	let charIntro2;
	let charIntro3;
	let charIntro4;
	let charIntro5;
	let pil = [];
	let indeks;
	let indeks2 = [];
	let modeIntro = Math.floor(Math.random()*16);
	let hasil = ''
	switch(modeIntro){
		case 0:
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			hasil += charIntro2[Math.floor(Math.random()*charIntro2.length)].repeat(Math.floor(Math.random()*4)+1);
			break;
		case 1:
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			indeks = Math.floor(Math.random()*2);
			hasil += (charIntro2[indeks] + charIntro2[1 - indeks]).repeat(Math.floor(Math.random()*2)+1);
			break;
		case 2:
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			indeks = Math.floor(Math.random()*2);
			hasil += charIntro2[indeks] + charIntro2[1 - indeks] + charIntro2[1 - indeks] + charIntro2[indeks];
			break;
		case 3:
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			indeks = Math.floor(Math.random()*2);
			hasil += charIntro2[indeks].repeat(2) + charIntro2[1 - indeks].repeat(2);
			break;
		case 4:
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			hasil += charIntro2[Math.floor(Math.random()*2)] + charIntro2[Math.floor(Math.random()*2)] + charIntro2[Math.floor(Math.random()*2)];
			break;
		case 11:
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			indeks2 = [Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2)];
			hasil += charIntro2[indeks2[0]] + charIntro2[indeks2[1]] + charIntro2[indeks2[2]] + ' ';
			hasil += charIntro2[1 - indeks2[0]] + charIntro2[1 - indeks2[1]] + charIntro2[1 - indeks2[2]];
			break;
		case 5:
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			hasil += charIntro2[Math.floor(Math.random()*2)] + charIntro2[Math.floor(Math.random()*2)] + charIntro2[Math.floor(Math.random()*2)] + charIntro2[Math.floor(Math.random()*2)];
			break;
		case 12:
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			indeks2 = [Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2)];
			hasil += charIntro2[indeks2[0]] + charIntro2[indeks2[1]] + charIntro2[indeks2[2]] + charIntro2[indeks2[3]] + ' ';
			hasil += charIntro2[1 - indeks2[0]] + charIntro2[1 - indeks2[1]] + charIntro2[1 - indeks2[2]] + charIntro2[1 - indeks2[3]];
			break;
		case 6:
			pil = [];
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[0] = charIntro2[Math.floor(Math.random()*2)];
			charIntro3 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[1] = charIntro3[Math.floor(Math.random()*2)];
			hasil+= (pil[0] + pil[1]).repeat(Math.floor(Math.random()*2)+1);
			break;
		case 15:
			pil = [];
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[0] = charIntro2[Math.floor(Math.random()*2)];
			charIntro3 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[1] = charIntro3[Math.floor(Math.random()*2)];
			hasil+= pil[0].repeat(Math.floor(Math.random()*4)+1) + ' ' + pil[1].repeat(Math.floor(Math.random()*4)+1);
			break;
		case 7:
			pil = [];
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[0] = charIntro2[Math.floor(Math.random()*2)];
			charIntro3 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[1] = charIntro3[Math.floor(Math.random()*2)];
			hasil+= pil[0].repeat(2) + pil[1].repeat(2);
			break;
		case 8:
			pil = [];
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[0] = charIntro2[Math.floor(Math.random()*2)];
			charIntro3 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[1] = charIntro3[Math.floor(Math.random()*2)];
			charIntro4 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[2] = charIntro4[Math.floor(Math.random()*2)];
			hasil+= pil[0] + pil[1] + pil[2];
			break;
		case 13:
			pil = [];
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[0] = charIntro2[Math.floor(Math.random()*2)];
			charIntro3 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[1] = charIntro3[Math.floor(Math.random()*2)];
			charIntro4 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[2] = charIntro4[Math.floor(Math.random()*2)];
			hasil+= pil[0] + pil[1] + pil[2] + ' ' + pil[Math.floor(Math.random()*3)] + pil[Math.floor(Math.random()*3)] + pil[Math.floor(Math.random()*3)];
			break;
		case 9:
			pil = [];
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[0] = charIntro2[Math.floor(Math.random()*2)];
			charIntro3 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[1] = charIntro3[Math.floor(Math.random()*2)];
			charIntro4 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[2] = charIntro4[Math.floor(Math.random()*2)];
			charIntro5 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[3] = charIntro5[Math.floor(Math.random()*2)];
			hasil+= pil[0] + pil[1] + pil[2]+ pil[3];
			break;
		case 14:
			pil = [];
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[0] = charIntro2[Math.floor(Math.random()*2)];
			charIntro3 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[1] = charIntro3[Math.floor(Math.random()*2)];
			charIntro4 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[2] = charIntro4[Math.floor(Math.random()*2)];
			charIntro5 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[3] = charIntro5[Math.floor(Math.random()*2)];
			hasil+= pil[0] + pil[1] + pil[2]+ pil[3] + ' ' + pil[Math.floor(Math.random()*4)] + pil[Math.floor(Math.random()*4)] + pil[Math.floor(Math.random()*4)]+ pil[Math.floor(Math.random()*4)];
			break;
		case 10:
			for (let i = 0; i < 5; i++){
				hasil += charIntro[Math.floor(Math.random()*charIntro.length)][Math.floor(Math.random()*2)];
			}
			break;
	}
	
	if (Math.random() < 1/2){hasil = hasil + ' ' + hasil.split('').reverse().join('')}
	return hasil
}

function remindCharacter(charLists){
	let numChar = 5;
	let hasil = '';
	while (Math.random() < 1/2){numChar ++}
	numChar = Math.floor(Math.random()*numChar) + 1;
	for (let i = 0; i < numChar; i++){
		hasil += charLists[Math.floor(Math.random()*charLists.length)]
	}
	return hasil
}


function isWordValid(word, allowedLetters) {
	var allowedLetters2 = allowedLetters;
	allowedLetters2 = allowedLetters.concat([' ']);
    // Ubah semua huruf pada kata menjadi huruf kecil
    word = word.toLowerCase();
    
    // Iterasi melalui setiap huruf dalam kata
    for (let i = 0; i < word.length; i++) {
        // Cek apakah huruf tidak ada di array allowedLetters
        if (!allowedLetters2.includes(word[i])) {
            return false; // Jika tidak ada, kembalikan false
        }
    }
    
    return true; // Jika semua huruf ada di array, kembalikan true
}

function wordsGen(charLists){
	let pilihanKata = '';
	if (document.getElementById('language').value == 'en'){
		pilihanKata = englishWordsFreq[Math.floor(Math.random()*englishWordsFreq.length)];
	}
	else {
		pilihanKata = kataIndo[Math.floor(Math.random()*kataIndo.length)];
	}
	pilihanKata = pilihanKata.toLowerCase();
	if (isWordValid(pilihanKata,charLists)){return pilihanKata};
	return remindCharacter(charLists);
}

function introduceShift(dir = ''){
	let daftarHurufShift;
	if (dir == 'left'){daftarHurufShift = daftarHurufKanan}
	else if (dir == 'right'){daftarHurufShift = daftarHurufKiri}
	else {daftarHurufShift = daftarHurufKanan + daftarHurufKiri}	
	let modeIntro = Math.floor(Math.random()*18);
	let hasil = '';
	let pilHuruf = '';
	let perulangan = 0;
	let charIntro2 = [];
	let charIntro3 = [];
	let charIntro4 = [];
	let charIntro5 = [];
	let indeks = 0;
	let pil = [];
	switch(modeIntro){
		case 0:
			hasil += daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)].toUpperCase().repeat(Math.floor(Math.random()*4)+1);
			break;
		case 16:
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			perulangan = Math.floor(Math.random()*4)+1
			hasil += pilHuruf.toUpperCase().repeat(perulangan) + ' ' + pilHuruf.repeat(perulangan);
			break;
		case 17:
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			perulangan = Math.floor(Math.random()*4)+1
			hasil += pilHuruf.repeat(perulangan) + ' ' + pilHuruf.toUpperCase().repeat(perulangan);
			break;
		case 1:
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro2 = [pilHuruf, pilHuruf.toUpperCase()];
			indeks = Math.floor(Math.random()*2);
			hasil += (charIntro2[indeks] + charIntro2[1 - indeks]).repeat(Math.floor(Math.random()*2)+1);
			break;
		case 2:
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro2 = [pilHuruf, pilHuruf.toUpperCase()];
			indeks = Math.floor(Math.random()*2);
			hasil += charIntro2[indeks] + charIntro2[1 - indeks] + charIntro2[1 - indeks] + charIntro2[indeks];
			break;
		case 3:
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro2 = [pilHuruf, pilHuruf.toUpperCase()];
			indeks = Math.floor(Math.random()*2);
			hasil += charIntro2[indeks].repeat(2) + charIntro2[1 - indeks].repeat(2);
			break;
		case 4:
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro2 = [pilHuruf, pilHuruf.toUpperCase()];
			hasil += charIntro2[Math.floor(Math.random()*2)] + charIntro2[Math.floor(Math.random()*2)] + charIntro2[Math.floor(Math.random()*2)];
			break;
		case 11:
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro2 = [pilHuruf, pilHuruf.toUpperCase()];
			indeks2 = [Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2)];
			hasil += charIntro2[indeks2[0]] + charIntro2[indeks2[1]] + charIntro2[indeks2[2]] + ' ';
			hasil += charIntro2[1 - indeks2[0]] + charIntro2[1 - indeks2[1]] + charIntro2[1 - indeks2[2]];
			break;
		case 5:
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro2 = [pilHuruf, pilHuruf.toUpperCase()];
			hasil += charIntro2[Math.floor(Math.random()*2)] + charIntro2[Math.floor(Math.random()*2)] + charIntro2[Math.floor(Math.random()*2)] + charIntro2[Math.floor(Math.random()*2)];
			break;
		case 12:
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro2 = [pilHuruf, pilHuruf.toUpperCase()];
			indeks2 = [Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2)];
			hasil += charIntro2[indeks2[0]] + charIntro2[indeks2[1]] + charIntro2[indeks2[2]] + charIntro2[indeks2[3]] + ' ';
			hasil += charIntro2[1 - indeks2[0]] + charIntro2[1 - indeks2[1]] + charIntro2[1 - indeks2[2]] + charIntro2[1 - indeks2[3]];
			break;
		case 6:
			pil = [];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro2 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[0] = charIntro2[Math.floor(Math.random()*2)];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro3 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[1] = charIntro3[Math.floor(Math.random()*2)];
			hasil+= (pil[0] + pil[1]).repeat(Math.floor(Math.random()*2)+1);
			break;
		case 15:
			pil = [];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro2 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[0] = charIntro2[Math.floor(Math.random()*2)];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro3 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[1] = charIntro3[Math.floor(Math.random()*2)];
			hasil+= pil[0].repeat(Math.floor(Math.random()*4)+1) + ' ' + pil[1].repeat(Math.floor(Math.random()*4)+1);
			break;
		case 7:
			pil = [];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro2 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[0] = charIntro2[Math.floor(Math.random()*2)];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro3 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[1] = charIntro3[Math.floor(Math.random()*2)];
			hasil+= pil[0].repeat(2) + pil[1].repeat(2);
			break;
		case 8:
			pil = [];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro2 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[0] = charIntro2[Math.floor(Math.random()*2)];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro3 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[1] = charIntro3[Math.floor(Math.random()*2)];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro4 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[2] = charIntro4[Math.floor(Math.random()*2)];
			hasil+= pil[0] + pil[1] + pil[2];
			break;
		case 13:
			pil = [];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro2 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[0] = charIntro2[Math.floor(Math.random()*2)];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro3 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[1] = charIntro3[Math.floor(Math.random()*2)];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro4 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[2] = charIntro4[Math.floor(Math.random()*2)];
			hasil+= pil[0] + pil[1] + pil[2] + ' ' + pil[Math.floor(Math.random()*3)] + pil[Math.floor(Math.random()*3)] + pil[Math.floor(Math.random()*3)];
			break;
		case 9:
			pil = [];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro2 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[0] = charIntro2[Math.floor(Math.random()*2)];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro3 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[1] = charIntro3[Math.floor(Math.random()*2)];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro4 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[2] = charIntro4[Math.floor(Math.random()*2)];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro5 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[3] = charIntro5[Math.floor(Math.random()*2)];
			hasil+= pil[0] + pil[1] + pil[2]+ pil[3];
			break;
		case 14:
			pil = [];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro2 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[0] = charIntro2[Math.floor(Math.random()*2)];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro3 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[1] = charIntro3[Math.floor(Math.random()*2)];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro4 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[2] = charIntro4[Math.floor(Math.random()*2)];
			pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
			charIntro5 = [pilHuruf, pilHuruf.toUpperCase()];
			pil[3] = charIntro5[Math.floor(Math.random()*2)];
			hasil+= pil[0] + pil[1] + pil[2]+ pil[3] + ' ' + pil[Math.floor(Math.random()*4)] + pil[Math.floor(Math.random()*4)] + pil[Math.floor(Math.random()*4)]+ pil[Math.floor(Math.random()*4)];
			break;
		case 10:
			for (let i = 0; i < 5; i++){
				pilHuruf = daftarHurufShift[Math.floor(Math.random()*daftarHurufShift.length)];
				charIntro2 = [pilHuruf, pilHuruf.toUpperCase()];
				hasil += charIntro2[Math.floor(Math.random()*2)];
			}
			break;
	}
	if (Math.random() < 1/2){hasil = hasil + ' ' + hasil.split('').reverse().join('')}
	return hasil
}

const levelData = {
	0: {cha: [], comment:{id: '', en: ''}},
    1: {cha:[['a','s'],['l',';']], comment:{id: '<b>Letakkan jari-jari ke baris rumah</b><br>Perhatikan bahwa ada tonjolan kecil di huruf f dan j untuk membantu menempatkan jari dengan benar di baris rumah.<br>Letakkan jari kelingking kiri di huruf a, jari manis kiri di huruf s, jari tengah kiri di huruf d, dan jari telunjuk kiri di huruf f.<br>Letakkan jari telunjuk kanan di huruf j, jari tengah kanan di huruf k, jari manis kanan di huruf l, dan jari kelingking kanan di tanda titik koma (;).<br>Gunakan jari kelingking kiri untuk menekan huruf a, jari manis kiri untuk menekan huruf s, jari manis kanan untuk menekan huruf l, dan jari kelingking kanan untuk menekan tanda titik koma (;).<br>Tekan spasi dengan ibu jari/jempol', en: '<b>Place your fingers on the home row</b><br>Note that there are small bumps on the f and j keys to help you position your fingers correctly on the home row.<br>Place your left pinky finger on the letter a, your left ring finger on the letter s, your left middle finger on the letter d, and your left index finger on the letter f.<br>Place your right index finger on the letter j, your right middle finger on the letter k, your right ring finger on the letter l, and your right pinky finger on the semicolon (;).<br>Use your left pinky finger to press the letter a, your left ring finger to press the letter s, your right ring finger to press the letter l, and your right pinky finger to press the semicolon (;).<br>Press the spacebar with your thumb'}},
	2: {cha:[['d','f'],['j','k']], comment:{id: 'Gunakan jari tengah kiri untuk menekan huruf d<br>Gunakan jari telunjuk kiri untuk menekan huruf f<br>Gunakan jari telunjuk kanan untuk menekan huruf j<br>Gunakan jari tengah kanan untuk menekan huruf k', en:'Use the left middle finger to press the letter d<br>Use the left index finger to press the letter f<br>Use the right index finger to press the letter j<br>Use the right middle finger to press the letter k'}},
    3: {cha:[['g','h']], comment:{id: 'Gunakan jari telunjuk kiri untuk menekan huruf g<br>Gunakan jari telunjuk kanan untuk menekan huruf h', en:'Use the left index finger to press the letter g<br>Use the right index finger to press the letter h'}},
    4: {cha:[['r','u']], comment:{id: 'Gunakan jari telunjuk kiri untuk menekan huruf r<br>Gunakan jari telunjuk kanan untuk menekan huruf u', en:'Use the left index finger to press the letter r<br>Use the right index finger to press the letter u'}},
    5: {cha:[['e','i']], comment:{id: 'Gunakan jari tengah kiri untuk menekan huruf e<br>Gunakan jari tengah kanan untuk menekan huruf i', en:'Use the left middle finger to press the letter e<br>Use the right middle finger to press the letter i'}},
	6: {cha:[['v','m']], comment:{id: 'Gunakan jari telunjuk kiri untuk menekan huruf v<br>Gunakan jari telunjuk kanan untuk menekan huruf m', en:'Use the left index finger to press the letter v<br>Use the right index finger to press the letter m'}},
	7: {cha:[['c',',']], comment:{id: 'Gunakan jari tengah kiri untuk menekan huruf c<br>Gunakan jari tengah kanan untuk menekan tanda koma (,)', en:'Use the left middle finger to press the letter c<br>Use the right middle finger to press the comma (,)'}},
	8: {cha:[['t','y']], comment:{id: 'Gunakan jari telunjuk kiri untuk menekan huruf t<br>Gunakan jari telunjuk kanan untuk menekan huruf y', en:'Use the left index finger to press the letter t<br>Use the right index finger to press the letter y'}},
	9: {cha:[['b','n']], comment:{id: 'Gunakan jari telunjuk kiri untuk menekan huruf b<br>Gunakan jari telunjuk kanan untuk menekan huruf n', en:'Use the left index finger to press the letter b<br>Use the right index finger to press the letter n'}},
	10: {cha:[['w','o']], comment:{id: 'Gunakan jari manis kiri untuk menekan huruf w<br>Gunakan jari manis kanan untuk menekan huruf o', en:'Use the left ring finger to press the letter w<br>Use the right ring finger to press the letter o'}},
	11: {cha:[['x','.']], comment:{id: 'Gunakan jari tengah kiri untuk menekan huruf x<br>Gunakan jari tengah kanan untuk menekan tanda titik (.)', en:'Use the left middle finger to press the letter x<br>Use the right middle finger to press the period (.)'}},
	12: {cha:[['q','p']], comment:{id: 'Gunakan jari kelingking kiri untuk menekan huruf q<br>Gunakan jari kelingking kanan untuk menekan huruf p', en:'Use the left pinky finger to press the letter q<br>Use the right pinky finger to press the letter p'}},
	13: {cha:[['z','/']], comment:{id: 'Gunakan jari kelingking kiri untuk menekan huruf z<br>Gunakan jari kelingking kanan untuk menekan tanda garis miring (/)', en:'Use the left pinky finger to press the letter z<br>Use the right pinky finger to press the slash (/)'}},
	"randomWords": {comment: {id: 'Latihan mengetik kata-kata acak',en: 'Practicing typing random words'}},
	"leftShift": {comment: {id: '<b>Shift Kiri</b><br>Tekan tombol Shift kiri dengan kelingking kiri untuk mengetik huruf besar dari huruf yang berada di bagian kanan keyboard. Misalnya, jika Anda menekan Shift kiri bersamaan dengan huruf l, maka akan menghasilkan huruf L yang besar.', en: '<b>Left Shift</b><br>Press the left Shift key with the left pinky finger to type uppercase letters of the characters located to the right side of the keyboard. For example, pressing the left Shift key along with the letter l will produce the uppercase letter L.'}},
	"rightShift": {comment: {id: '<b>Shift Kanan</b><br>Tekan tombol Shift kanan dengan kelingking kanan untuk mengetik huruf besar dari huruf yang berada di bagian kiri keyboard. Misalnya, jika Anda menekan Shift kanan bersamaan dengan huruf a, maka akan menghasilkan huruf A yang besar.',en: '<b>Right Shift</b><br>Press the right Shift key with the right pinky finger to type uppercase letters of the characters located to the left side of the keyboard. For example, pressing the right Shift key along with the letter a will produce the uppercase letter A.'}},
	"shift": {comment: {id: 'Latihan menggunakan kedua tombol shift',en: 'Practising using both shift keys'}},
};

const textTranslate = [
	["selectLanguage", "Select Language:", "Pilih Bahasa:"],
	["chooseLevel", "Choose Level:", "Pilih Level:"],
	["startButton", "Start", "Mulai"],
	["teksAkurasi", "Accuracy", "Akurasi"],
]

function changeLang(){
	let bahasa = document.getElementById('language').value;
	if (bahasa == 'en'){bahasa = 1}
	else {bahasa = 2}
	for (let i = 0; i < textTranslate.length; i++){
		document.getElementById(textTranslate[i][0]).innerHTML = textTranslate[i][bahasa];
	}
	instructionUpdate();
}

function instructionUpdate(){
	let bahasa = document.getElementById('language').value;
	document.getElementById('instructions').innerHTML = levelData[document.getElementById('level').value].comment[bahasa];
}

function scrollToCursor() {
    const textBox = document.getElementById('textBox');
    const cursorElement = textBox.querySelector('.cursor-highlight');

    if (cursorElement) {
        const cursorRect = cursorElement.getBoundingClientRect();
        const textBoxRect = textBox.getBoundingClientRect();

        // Check if the cursor is out of view (above, below, left, or right of the visible area)
        const isOutOfView =
            cursorRect.top < textBoxRect.top || // Cursor is above the visible area ???
            cursorRect.bottom > textBoxRect.bottom || // Cursor is below the visible area ???
            cursorRect.left < textBoxRect.left || // Cursor is to the left of the visible area ???
            cursorRect.right > textBoxRect.right; // Cursor is to the right of the visible area ???

        if (isOutOfView) {
            cursorElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
        }
    }
}

instructionUpdate()