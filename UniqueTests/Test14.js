uniqueTests.push(14);
uniqueTestsTitles["14"] = 'Right Hand';

function genTests14(){
 var hasil = ambilKataSatuTangan('kanan')
 for (let i = 1; i < 50; i++){
	hasil += ' ' + ambilKataSatuTangan('kanan');
 }

 return hasil
}
