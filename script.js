//pencegah spasi
document.addEventListener('keydown', function(event) {
    // Cek apakah tombol yang ditekan adalah spasi (key code 32)
    // atau kombinasi Shift + Spasi (Shift + key code 32)
    if (event.code === 'Space' || (event.shiftKey && event.code === 'Space')) {
        // Mencegah perilaku default (scrolling)
        event.preventDefault();
    }
});

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
	
	if (level == "randomWords2"){
		introductionIteration = 30;
		while (Math.random() < 1/2){introductionIteration++}
		introductionIteration = Math.floor(Math.random()*introductionIteration);
		for (let i = 0; i < introductionIteration; i++) {
			pilihanKata = wordsGen(charListsComplete);
			if (Math.random() < 1/10){
				pilihanKata = pilihanKata[0].toUpperCase() + pilihanKata.substring(1);
			}
			generatedText += pilihanKata + ' ';
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
			if(Math.random() < 1/2){kataShift += ','}
			else if(Math.random() < 1/5){kataShift += '.'}
			else if(Math.random() < 1/10) {kataShift += ';'}
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
			if(Math.random() < 1/2){kataShift += ','}
			else if(Math.random() < 1/5){kataShift += '.'}
			else if(Math.random() < 1/10) {kataShift += ';'}
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
			if(Math.random() < 1/2){kataShift += ','}
			else if(Math.random() < 1/5){kataShift += '.'}
			else if(Math.random() < 1/10) {kataShift += ';'}
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
	
	charLists = [];
	let charrSel = [];
	for (let i = 1; i <= level; i++){
		charrSel = levelData[i].cha;
		for (let j = 0; j < charrSel.length; j++){
			if (charrSel[j][0]==charrSel[j][1]){
				charLists.push(charrSel[j][0]);
			}
			else{
				charLists = charLists.concat(charrSel[j]);
			}
		}
	}
	if (level >= 14){
		charLists = charLists.concat('QWERTYUIOPASDFGHJKLZXCVBNM'.split(''));
		if (level >= 16){
			numberS = [];
			for (let i = 16; i <= Math.min(level,20); i++){
					numberS = numberS.concat(levelData[i].cha[0]);
			}
		}
	}	

	introductionIteration = 10;
	while (Math.random() < 1/2){introductionIteration++}
	introductionIteration = Math.floor(Math.random()*introductionIteration)+1;
    for (let i = 0; i < introductionIteration; i++) {
		if (levelData[level].cha[0][1] == levelData[level].cha[0][0]){
				levelData[level].cha[0][1] = charLists[Math.floor(Math.random()*charLists.length)];
				generatedText += introduceCharacter(level) + ' ';
				levelData[level].cha[0][1] = levelData[level].cha[0][0];
		}
		else{generatedText += introduceCharacter(level) + ' ';}
    }
	
	if (level >= 16 && level <= 20){
		while (Math.random() < 1/2){
			introductionIteration = 5;
			while (Math.random() < 1/2){introductionIteration++}
			introductionIteration = Math.floor(Math.random()*introductionIteration);
			levelData[0].cha = [[numberS[Math.floor(Math.random()*numberS.length)],numberS[Math.floor(Math.random()*numberS.length)]],[numberS[Math.floor(Math.random()*numberS.length)],numberS[Math.floor(Math.random()*numberS.length)]]]
			for (let i = 0; i < introductionIteration; i++) {
				generatedText += introduceCharacter(0) + ' ';
			}
		}
	}
	
	if (level >= 14 && level <= 15){
		introductionIteration = 10;
		symbols = '?:'
		while (Math.random() < 1/2){introductionIteration++}
		introductionIteration = Math.floor(Math.random()*introductionIteration);
		for (let i = 0; i < introductionIteration; i++) {
			generatedText += wordsGen(charLists);
			if (Math.random() < 1/5){
				generatedText += symbols[level - 14];
			}
			generatedText += ' ';
		}
	}
	
	if (level == 11){
		introductionIteration = 10;
		while (Math.random() < 1/2){introductionIteration++}
		introductionIteration = Math.floor(Math.random()*introductionIteration);
		for (let i = 0; i < introductionIteration; i++) {
			generatedText += wordsGen(charLists);
			if (Math.random() < 1/5){
				generatedText += '.';
			}
			generatedText += ' ';
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
	
	while (Math.random() < 1/2 && (level >= 16) && (level <= 20)){
		introductionIteration = 5;
		while (Math.random() < 1/2){introductionIteration++}
		introductionIteration = Math.floor(Math.random()*introductionIteration);
		for (let i = 0; i < introductionIteration; i++) {
			angkaAcak = ''
			angkaAcak = numberS[Math.floor(Math.random()*numberS.length)];
			while (Math.random()<1/2){
				angkaAcak += numberS[Math.floor(Math.random()*numberS.length)];
			}
			generatedText += angkaAcak + ' ';
		}
	}
	
	while (Math.random() < 1/2){
		introductionIteration = 10;
		while (Math.random() < 1/2){introductionIteration++}
		introductionIteration = Math.floor(Math.random()*introductionIteration);
		for (let i = 0; i < introductionIteration; i++) {
			kataSpesial = extraSpecialLevel(level);
			if (kataSpesial != ''){
				generatedText += kataSpesial + ' ';
			}
		}
	}
	
	while (Math.random() < 1/2){
		introductionIteration = 5;
		while (Math.random() < 1/2){introductionIteration++}
		introductionIteration = Math.floor(Math.random()*introductionIteration);
		for (let i = 0; i < introductionIteration; i++) {
			kataSpesial = extraSpecialLevel(Math.floor(Math.random()*level)+1);
			if (kataSpesial != ''){
				generatedText += kataSpesial + ' ';
			}
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
		while (Math.random() < 1/2){introductionIteration++}
		introductionIteration = Math.floor(Math.random()*introductionIteration);
		pilih1 = levelData[Math.floor(Math.random()*level)+1].cha;
		pilih2 = levelData[Math.floor(Math.random()*level)+1].cha;
		pilih3 = levelData[Math.floor(Math.random()*level)+1].cha;
		pilih4 = levelData[Math.floor(Math.random()*level)+1].cha;
		levelData[0].cha = [[pilih1[Math.floor(Math.random()*pilih1.length)][Math.floor(Math.random()*2)],pilih2[Math.floor(Math.random()*pilih2.length)][Math.floor(Math.random()*2)]],[pilih3[Math.floor(Math.random()*pilih3.length)][Math.floor(Math.random()*2)],pilih4[Math.floor(Math.random()*pilih4.length)][Math.floor(Math.random()*2)]]];
		if (level >= 14){
			levelData[0].cha = [[charLists[Math.floor(Math.random()*charLists.length)],charLists[Math.floor(Math.random()*charLists.length)]],[charLists[Math.floor(Math.random()*charLists.length)],charLists[Math.floor(Math.random()*charLists.length)]]]
		}
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
		kataBaru = wordsGen(charLists)
		modeShift = Math.floor(Math.random()*10);
		if (level < 14){modeShift = 2}
		if (modeShift == 9){
			kataBaru = kataBaru.toUpperCase();
		}
		if (modeShift >= 5){
			kataBaru = kataBaru[0].toUpperCase() + kataBaru.substring(1);
		}
		if (level >= 16 && Math.random() < 1/level){ 
			kataBaru = numberS[Math.floor(Math.random()*numberS.length)] + ' ' + kataBaru;
		}
		if (level >= 15 && Math.random() < 1/20){ 
			generatedText += kataBaru + ': ';
		}
		else if (level >= 14 && Math.random() < 1/10){ 
			generatedText += kataBaru + '? ';
		}
		else if (level >= 11 && Math.random() < 1/5){ 
			generatedText += kataBaru + '. ';
		}
		else if (level >= 7 && Math.random() < 1/2){ 
			generatedText += kataBaru + ', ';
		}
		else if ((level < 7 && Math.random() < 1/2) || (Math.floor(Math.random()*level)==0)){
			generatedText += kataBaru + '; ';
		}
		else{
			generatedText += kataBaru + ' ';
		}		
	}
	
	let bahasa = document.getElementById('language').value;
	if (bahasa == 'en'){
		if (randomWiki.length > 0){
				introductionIteration = 1;
				//while (Math.random() < 1/2){introductionIteration++}
				//introductionIteration = Math.floor(Math.random()*introductionIteration);
				for (let i = 0; i < introductionIteration; i++) {
					pilihanWiki = randomWiki[Math.floor(Math.random()*randomWiki.length)] + ' ' + randomWiki[Math.floor(Math.random()*randomWiki.length)] + ' ' + randomWiki[Math.floor(Math.random()*randomWiki.length)];
					pilihanWiki = filterTextByCharList(pilihanWiki);
					pilihanWiki = pilihanWiki.substring(Math.random()*pilihanWiki.length,Math.random()*pilihanWiki.length);
					while (pilihanWiki.length >= 2*(generatedText.length)){
						pilihanWiki = pilihanWiki.substring(Math.random()*pilihanWiki.length,Math.random()*pilihanWiki.length);
					}
					generatedText += pilihanWiki + ' ';
				}
		}
	}
	else{
		if (randomWikiID.length > 0){
				introductionIteration = 1;
				//while (Math.random() < 1/2){introductionIteration++}
				//introductionIteration = Math.floor(Math.random()*introductionIteration);
				for (let i = 0; i < introductionIteration; i++) {
					pilihanWiki = randomWikiID[Math.floor(Math.random()*randomWikiID.length)] + ' ' + randomWikiID[Math.floor(Math.random()*randomWikiID.length)] + ' ' + randomWikiID[Math.floor(Math.random()*randomWikiID.length)];
					pilihanWiki = filterTextByCharList(pilihanWiki);
					pilihanWiki = pilihanWiki.substring(Math.random()*pilihanWiki.length,Math.random()*pilihanWiki.length);
					while (pilihanWiki.length >= 2*(generatedText.length)){
						pilihanWiki = pilihanWiki.substring(Math.random()*pilihanWiki.length,Math.random()*pilihanWiki.length);
					}
					generatedText += pilihanWiki + ' ';
				}
		}
	}
	
	generatedText = generatedText.replace(/\s+/g, ' ').trim();
	inisialisasi();
}

function inisialisasi(){
	// Ensure no trailing space at the end
    generatedText = generatedText.trim();
	panjangText = 20;
	while (Math.random() < 1/2){panjangText ++}
	panjangText = Math.floor(Math.random()*panjangText) + 1;
	if (generatedText.length < panjangText){startTest(); return}
    currentIndex = 0;

    updateTextBox();
    document.getElementById('wpm').textContent = "0";
    document.getElementById('accuracy').textContent = "0%";
	firstLetter = false;
    
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
		if (!firstLetter){
			firstLetter = true;
			startTime = new Date().getTime()
		}
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
        wpm = (wordsTyped / timeElapsed) * 60;
		if (wpm == Infinity){wpm =''}
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
    if (charLists.includes('/') && Math.random() < 1/(charLists.length)){
		if (document.getElementById('language').value == 'en'){
			pilihanKata2 = englishWordsFreq[Math.floor(Math.random()*englishWordsFreq.length)];
		}
		else {
			pilihanKata2 = kataIndo[Math.floor(Math.random()*kataIndo.length)];
		}
		pilihanKata2 = pilihanKata2.toLowerCase();
		pilihanKata = pilihanKata + '/' + pilihanKata2;
	}
	if (isWordValid(pilihanKata,charLists)){return pilihanKata};
	return remindCharacter(charLists);
}

function wordsGenShift(charLists){
	let hasil = wordsGen(charLists)
	modeShift = Math.floor(Math.random()*10);
	if (modeShift == 9){
		hasil = hasil.toUpperCase();
	}
	if (modeShift >= 5){
		hasil = hasil[0].toUpperCase() + hasil.substring(1);
	}
	return hasil
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


function extraSpecialLevel(n){
	let hasilExtra = ''
	n = '' + n
	
	switch (n) {
		case '15':
			if (Math.random() <1/2){
				kataBaru = wordsGenShift(charLists);
				hasilExtra = kataBaru + ': ';
				kataBaru = wordsGenShift(charLists);
				hasilExtra += kataBaru + ', '
				kataBaru = wordsGenShift(charLists);
				hasilExtra += kataBaru
				while (Math.random() <1/2){
					kataBaru = wordsGenShift(charLists);
					hasilExtra += ', ' + kataBaru
				}
			}
			else{
			}
			break;
		case '19':
			if (Math.random() <1/2){
				let jamAcak = '2' + (2 + Math.floor(Math.random()*3));
				let menitAcak = '' + (2 + Math.floor(Math.random()*4)) + (2 + Math.floor(Math.random()*8));
				let titikKomaJam = jamAcak + ':' + menitAcak;
				if (Math.random() < 1/2){
					menitAcak ='' + (2 + Math.floor(Math.random()*4)) + (2 + Math.floor(Math.random()*8));
					titikKomaJam += ':' + menitAcak;
				}
				hasilExtra = titikKomaJam;
			}
			else{
				let angkaAcak = numberS[Math.floor(Math.random()*numberS.length)];
				while (Math.random() < 1/2){angkaAcak += numberS[Math.floor(Math.random()*numberS.length)]}
				hasilExtra = angkaAcak + ' ' + wordsGenShift(charLists);
			}
			break;
		case '20':
			if (Math.random() <1/2){
				let jamAcak = Math.floor(Math.random()*24);
				if (jamAcak < 10){jamAcak = '0' + jamAcak}
				let menitAcak = Math.floor(Math.random()*60);
				if (menitAcak < 10){menitAcak = '0' + menitAcak}
				let titikKomaJam = jamAcak + ':' + menitAcak;
				if (Math.random() < 1/2){
					menitAcak = Math.floor(Math.random()*60);
					if (menitAcak < 10){menitAcak = '0' + menitAcak}
					titikKomaJam += ':' + menitAcak;
				}
				hasilExtra = titikKomaJam;
			}
			else{
				let angkaAcak = numberS[Math.floor(Math.random()*numberS.length)];
				while (Math.random() < 1/2){angkaAcak += numberS[Math.floor(Math.random()*numberS.length)]}
				hasilExtra = angkaAcak + ' ' + wordsGenShift(charLists);
			}
			break;
		case '23':
			if (Math.random() < 1/2){
				kataBaru = wordsGen(charLists)
				modeShift = Math.floor(Math.random()*3);
				if (modeShift == 0){
					kataBaru = kataBaru.toUpperCase();
				}
				if (modeShift == 1){
					kataBaru = kataBaru[0].toUpperCase() + kataBaru.substring(1);
				}
				hasilExtra = '#' + kataBaru;
			}
			else{
			}
			break;
	}
	
	return hasilExtra
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
	"randomWords2": {comment: {id: 'Latihan mengetik kata-kata acak dengan huruf kapital',en: 'Practicing typing random words with capital letters'}},
	14: {cha:[['?','?']], comment:{id: 'Shift Kiri + / = ?', en:'Left Shift + / = ?'}},
	15: {cha:[[':',':']], comment:{id: 'Shift Kiri + ; = :', en:'Left Shift + ; = :'}},
	16: {cha:[['4','7']], comment:{id: 'Gunakan jari telunjuk kiri untuk menekan angka 4<br>Gunakan jari telunjuk kanan untuk menekan angka 7', en:'Use the left index finger to press the number 4<br>Use the right index finger to press the number 7'}},
	17: {cha:[['5','6']], comment:{id: 'Gunakan jari telunjuk kiri untuk menekan angka 5<br>Gunakan jari telunjuk kanan untuk menekan angka 6', en:'Use the left index finger to press the number 5<br>Use the right index finger to press the number 6'}},
	18: {cha:[['3','8']], comment:{id: 'Gunakan jari tengah kiri untuk menekan angka 3<br>Gunakan jari telunjuk kanan untuk menekan angka 8', en:'Use the left middle finger to press the number 3<br>Use the right index finger to press the number 8'}},
	19: {cha:[['2','9']], comment:{id: 'Gunakan jari manis kiri untuk menekan angka 2<br>Gunakan jari manis kanan untuk menekan angka 9', en:'Use the left ring finger to press the number 2<br>Use the right ring finger to press the number 9'}},
	20: {cha:[['1','0']], comment:{id: 'Gunakan jari kelingking kiri untuk menekan angka 1<br>Gunakan jari kelingking kanan untuk menekan angka 0', en:'Use the left pinky finger to press the number 1<br>Use the right pinky finger to press the number 0'}},

	21: {cha:[['$','&']], comment:{id: 'Shift Kanan + 4 = $<br>Shift Kiri + 7 = &', en:'Right Shift + 4 = $<br>Left Shift + 7 = &'}},
	22: {cha:[['%','^']], comment:{id: 'Shift Kanan + 5 = %<br>Shift Kiri + 6 = ^', en:'Right Shift + 5 = %<br>Left Shift + 6 = ^'}},
	23: {cha:[['#','*']], comment:{id: 'Shift Kanan + 3 = #<br>Shift Kiri + 8 = *', en:'Right Shift + 3 = #<br>Left Shift + 8 = *'}},
	24: {cha:[['@','(']], comment:{id: 'Shift Kanan + 2 = @<br>Shift Kiri + 9 = (', en:'Right Shift + 2 = @<br>Left Shift + 9 = ('}},
	25: {cha:[['!',')']], comment:{id: 'Shift Kanan + 1 = !<br>Shift Kiri + 0 = )', en:'Right Shift + 1 = !<br>Left Shift + 0 = )'}},
	26: {cha:[['\'','\'']], comment:{id: 'Gunakan jari kelingking kanan untuk menekan tanda petik (\') di samping kanan ;', en:'Use the right pinky finger to press the quotation mark (\') next to the right of ;'}},
	27: {cha:[['"','"']], comment:{id: 'Shift Kiri + \' = "', en:'Left Shift + \' = "'}},
	28: {cha:[['<','>']], comment:{id: 'Shift Kiri + , = &lt;<br>Shift Kiri + . = &gt', en:'Right Shift + , = &lt;<br>Left Shift + . = &gt'}},
	29: {cha:[['[',']']], comment:{id: 'Gunakan jari kelingking kanan untuk menekan simbol [<br>Gunakan jari kelingking kanan sedikit lebih jauh untuk menekan simbol ]', en:'Use your right pinky finger to press the symbol [<br>Use your right pinky finger slightly further to press the symbol ]'}},
    30: {cha:[['-','=']], comment:{id: 'Seperti biasa, kelingking kanan lagi untuk menekan tanda kurang (-) dan sama dengan (=) :)', en:'As usual, the right pinky again to press the minus (-) and equals (=) signs :)'}},
	31: {cha:[['{','}']], comment:{id: 'Shift + [] = {}', en:'Shift + [] = {}'}},
	32: {cha:[['\\','\\']], comment:{id: 'Kelingking kanan', en:'Right pinky'}},

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
	const element = document.querySelector('.cursor-highlight'); // Mencari elemen dengan class cursor-highlight
	if (element) {
		// Menggunakan metode alternatif untuk scroll
		const elementPosition = element.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({
			top: elementPosition,
			behavior: 'smooth' // Animasi scroll
		});
	}
}

instructionUpdate()