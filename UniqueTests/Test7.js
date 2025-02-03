uniqueTests.push(7);
uniqueTestsTitles["7"] = 'a b c';
daftarHurufABC = 'abcdefghijklmnopqrstuvwxyz'

function genTests7(){
	hasil = ''
	for (let i = 0; i < daftarHurufABC.length; i++){
		hasil += daftarHurufABC[i].repeat(Math.ceil(Math.random()*5));
	}
	for (let i = 0; i < daftarHurufABC.length; i++){
		hasil += daftarHurufABC[i].repeat(Math.floor(Math.random()*5)) + ' ';
	}
	hasil += ' ' + daftarHurufABC;
	return hasil
}
