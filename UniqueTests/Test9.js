uniqueTests.push(9);
uniqueTestsTitles["9"] = 'Names';

namaNama = [];
namaNamaBanyak = 1;
document.write('<scr' + 'ipt src="https://cdn.jsdelivr.net/gh/swrdfgd/LearnTyping/UniqueTests/Names/names'+Math.ceil(Math.random()*namaNamaBanyak)+'.js"></scr' + 'ipt>')

function genTests9(){
 var hasil = namaNama[Math.floor(Math.random()*namaNama.length)];
 for (let i = 1; i < 50; i++){
	hasil += ' ' + namaNama[Math.floor(Math.random()*namaNama.length)];
 }

 return hasil
}
