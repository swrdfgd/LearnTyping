uniqueTests.push(6);
uniqueTestsTitles["6"] = 'Yoru ni Kakeru';

intoTheNightLyrics = [
'Shizumu you ni tokete yuku you ni Futari dake no sora ga hirogaru yoru ni',
'"Sayonara" dake datta Sono hitokoto de subete ga wakatta Hi ga shizumi dashita sora to kimi no sugata Fensu goshi ni kasanatte ita Hajimete atta hi kara Boku no kokoro no subete o ubatta Dokoka hakanai kuuki o matou kimi wa Samishii me o shitetanda',
'Itsu datte chikkutakku to Naru sekai de nando datte sa Fureru kokoro nai kotoba urusai koe ni Namida ga koboresou demo Arikitari na yorokobi kitto futari nara mitsukerareru',
'Sawagashii hibi ni waraenai kimi ni Omoitsuku kagiri mabushii asu o Akenai yoru ni ochite yuku mae ni Boku no te o tsukande hora Wasurete shimaitakute tojikometa hibi mo Dakishimeta nukumori de tokasu kara Kowakunai yo itsuka hi ga noboru made Futari de iyou',
'Kimi ni shika mienai Nanika o mitsumeru kimi ga kirai da Mitorete iru ka no you na koi suru you na Sonna kao ga kirai da',
'Shinjiteitai kedo shinjirenai koto Sonna no dou shita tte kitto Korekara datte ikutsu mo atte Sono tanbi okotte naiteiku no Sore demo kitto itsuka wa kitto bokura wa kitto Wakari aeru sa shinjiteru yo',
'Mou iya datte tsukareta ndatte Gamushara ni sashinobeta boku no te o furiharau kimi Mou iya da tte tsukareta yo nante Hontou wa boku mo iitai nda',
'Ah hora mata chikkutakku to Naru sekai de nando datte sa Kimi no tame ni yooi shita kotoba dore mo todokanai "Owari ni shitai" da nante sa Tsurarete kotoba ni shita toki Kimi wa hajimete waratta',
'Sawagashii hibi ni waraenaku natte ita Boku no me ni utsuru kimi wa kirei da Akenai yoru ni koboreta namida mo Kimi no egao ni tokete iku',
'Kawaranai hibi ni naiteita boku o Kimi wa yasashiku owari e to sasou Shizumu you ni tokete yuku you ni Shimi tsuita kiri ga hareru Wasurete shimaitakute tojikometa hibi ni Sashinobete kureta kimi no te o toru Suzushii kaze ga sora o oyogu you ni ima fukinukete yuku Tsunaida te o hanasanaide yo Futari ima, yoru ni kakedashite iku',
];

function genTests6(){

 var hasil = intoTheNightLyrics[Math.floor(Math.random()*intoTheNightLyrics.length)];
 hasil += ' ' + intoTheNightLyrics[Math.floor(Math.random()*intoTheNightLyrics.length)];
 return hasil
}
