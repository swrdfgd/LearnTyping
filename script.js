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

function generateText(level) {
    const characters = levelData[level];
    generatedText = "";
    typedText = "";

    let spaceProbability = 0.1; // Probability of adding a space (10%)

	let introductionIteration = 10;
	while (Math.random() < 1/2){introductionIteration++}
    for (let i = 0; i < introductionIteration; i++) {
        generatedText += introduceCharacter(level) + ' ';
    }
	
	while (Math.random() < 1/2){
		introductionIteration = 5;
		while (Math.random() < 1/2){introductionIteration++}
		for (let i = 0; i < introductionIteration; i++) {
			generatedText += introduceCharacter(Math.ceil(Math.random()*level)) + ' ';
		}
	}
	
	let pilih1; let pilih2; let pilih3; let pilih4;
	while (Math.random() < 1/2){
		introductionIteration = 5;
		pilih1 = levelData[Math.floor(Math.random()*5)+1].cha;
		pilih2 = levelData[Math.floor(Math.random()*5)+1].cha;
		pilih3 = levelData[Math.floor(Math.random()*5)+1].cha;
		pilih4 = levelData[Math.floor(Math.random()*5)+1].cha;
		levelData[0].cha = [[pilih1[Math.floor(Math.random()*pilih1.length)][Math.floor(Math.random()*2)],pilih2[Math.floor(Math.random()*pilih2.length)][Math.floor(Math.random()*2)]],[pilih3[Math.floor(Math.random()*pilih3.length)][Math.floor(Math.random()*2)],pilih4[Math.floor(Math.random()*pilih4.length)][Math.floor(Math.random()*2)]]];
		for (let i = 0; i < introductionIteration; i++) {
			generatedText += introduceCharacter(0) + ' ';
		}
	}
	
	let charLists = [];
	let charrSel = [];
	for (let i = 1; i <= level; i++){
		charrSel = levelData[i].cha;
		for (let j = 0; j < charrSel.length; j++){
			charLists = charLists.concat(charrSel[j]);
		}
	}
	
	while (Math.random() < 1/2){
		introductionIteration = 5;
		while (Math.random() < 1/2){introductionIteration++}
		for (let i = 0; i < introductionIteration; i++) {
			generatedText += remindCharacter(charLists) + ' ';
		}
	}
	
	introductionIteration = 10;
	while (Math.random() < 1/2){introductionIteration++}
	for (let i = 0; i < introductionIteration; i++) {
		generatedText += wordsGen(charLists) + ' ';
	}

    // Ensure no trailing space at the end
    generatedText = generatedText.trim();
    currentIndex = 0;

    updateTextBox();
    document.getElementById('wpm').textContent = "0";
    document.getElementById('accuracy').textContent = "0%";
    startTime = new Date().getTime();
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
                displayText += `<span style="color:red;">${generatedText[i]}</span>`;
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
    document.getElementById('textBox').innerHTML += "<p style='color:green;'>Test Completed!</p>";
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
			hasil += charIntro2[Math.floor(Math.random()*charIntro2.length)].repeat(Math.ceil(Math.random()*4));
			break;
		case 1:
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			indeks = Math.floor(Math.random()*2);
			hasil += (charIntro2[indeks] + charIntro2[1 - indeks]).repeat(Math.ceil(Math.random()*2));
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
			hasil+= (pil[0] + pil[1]).repeat(Math.ceil(Math.random()*2));
			break;
		case 15:
			pil = [];
			charIntro2 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[0] = charIntro2[Math.floor(Math.random()*2)];
			charIntro3 = charIntro[Math.floor(Math.random()*charIntro.length)];
			pil[1] = charIntro3[Math.floor(Math.random()*2)];
			hasil+= pil[0].repeat(Math.ceil(Math.random()*4)) + ' ' + pil[1].repeat(Math.ceil(Math.random()*4));
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
    // Ubah semua huruf pada kata menjadi huruf kecil
    word = word.toLowerCase();
    
    // Iterasi melalui setiap huruf dalam kata
    for (let i = 0; i < word.length; i++) {
        // Cek apakah huruf tidak ada di array allowedLetters
        if (!allowedLetters.includes(word[i])) {
            return false; // Jika tidak ada, kembalikan false
        }
    }
    
    return true; // Jika semua huruf ada di array, kembalikan true
}

function wordsGen(charLists){
	let pilihanKata = englishWordsFreq[Math.floor(Math.random()*englishWordsFreq.length)];
	if (isWordValid(pilihanKata,charLists)){return pilihanKata};
	return remindCharacter(charLists);
}

const levelData = {
	0: {cha: [], comment:''},
    1: {cha:[['a','s'],['l',';']], comment:''},
    2: {cha:[['d','f'],['j','k']], comment:''},
    3: {cha:[['g','h']], comment:''},
    4: {cha:[['r','u']], comment:''},
    5: {cha:[['e','i']], comment:''},
	6: {cha:[['v','m']], comment:''},
	7: {cha:[['c',',']], comment:''},
	8: {cha:[['t','y']], comment:''},
	9: {cha:[['b','n']], comment:''},
	10: {cha:[['w','o']], comment:''},
	11: {cha:[['x','.']], comment:''},
	12: {cha:[['q','p']], comment:''},
	13: {cha:[['z','/']], comment:''},
};
