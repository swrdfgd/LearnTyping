uniqueTests.push(15);
uniqueTestsTitles["15"] = 'Left Hand';

function genTests15(){
 var hasil = ambilKataSatuTangan('kiri')
 for (let i = 1; i < 50; i++){
	hasil += ' ' + ambilKataSatuTangan('kiri');
 }

 return hasil
}
