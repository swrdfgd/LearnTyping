uniqueTests.push(5);
uniqueTestsTitles["5"] = 'Sprunki';

sprunkiNames = [
'Oren','Raddy','Clukr','Fun Bot', 'Vineria', 'Gray', 'Brud', 'Garnold', 'OWAKCX', 'Sky', 'Mr. Sun', 'Durple', 'Mr. Tree', 'Simon', 'Tunner', 'Mr. Fun Computer', 'Wenda', 'Pinki', 'Jevin', 'Black', 
];
sprunkiLyrics = [
"Hello Would you like to have some fun with us right now Come on Come sing along with us It is fun time Hello Would you like to have some fun With us right now Come on Come sing along with us It is fun time",
"Oren, Raddy, Clukr, Brud Funbot, Vineria, Garnold, Grey Mr. Sun, Durple, OWACKX, Sky Making music in the sun Oren, Raddy, Clukr, Brud Funbot, Vineria, Garnold, Grey Mr. Sun, Durple, OWACKX, Sky Making music in the sun",
"YOU CANNOT HIDE YOU ARE NOT SAFE SOMETHING IS WRONG CUZ THEY ARE ALL DEAD NOTHING IS REAL NOTHING IS RIGHT YOU CANNOT RUN YOU CANNOT HIDE",
"Hello Would you like to have some fun With us right now Come on Come sing along with us It is fun time",
"We got Wenda and Pinky and Mr. Tree So much fun for you and me We got Mr. Fun Computer And Mr. Black The sprunki friends always have our back We got Jevin and Tunner And don't forget Simon All the Sprunkis together (?) Always singing and rhyming They know how to dance And they know how to get funky Theyre the cutest in the world and their name is sprunki",
"Hello Would you like to have some fun With us right now Come on Come sing along with us It is fun time",
];

function genTests5(){
 var hasil = sprunkiNames[Math.floor(Math.random()*sprunkiNames.length)];
 for (let i = 1; i < 10; i++){
	hasil += ' ' + sprunkiNames[Math.floor(Math.random()*sprunkiNames.length)];
 }

 hasil += ' ' + sprunkiLyrics[Math.floor(Math.random()*sprunkiLyrics.length)];
 hasil += ' ' + sprunkiLyrics[Math.floor(Math.random()*sprunkiLyrics.length)];
 return hasil
}
