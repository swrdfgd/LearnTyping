// Array berisi domain dari situs email terkenal
const famousDomains = ["gmail", "yahoo", "outlook", "hotmail", "icloud"];

// Array berisi TLD (top-level domain) terkenal yang cocok dengan situs terkenal
const famousTlds = [".com", ".co", ".net"];

// Array berisi TLD acak untuk domain non-terkenal
const randomTlds = [".com", ".net", ".org", ".co", ".id", ".io", ".tech", ".xyz"];

// Fungsi untuk menghasilkan angka acak
function getRandomNumber() {
  return Math.floor(Math.random() * 100); // Angka acak dari 0 sampai 99
}

// Fungsi untuk mengambil elemen acak dari sebuah array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Fungsi untuk menghasilkan domain acak dengan peluang 50% dari domain terkenal
function getRandomDomain() {
  if (Math.random() > 0.5) {
    // Jika peluang benar, ambil dari domain terkenal
    const famousDomain = getRandomElement(famousDomains);
    const famousTld = getRandomElement(famousTlds);
    return `${famousDomain}${famousTld}`;
  } else {
    // Jika tidak, ambil dari domain acak
    const randomDomain = wordsGen(charLists);
    const randomTld = getRandomElement(randomTlds);
    return `${randomDomain}${randomTld}`;
  }
}

// Fungsi untuk menghasilkan email acak
function generateRandomEmail() {
  // Ambil kata acak untuk nama pengguna
  let username = wordsGen(charLists);

  // Tentukan apakah akan menambahkan angka atau tidak (peluang 50%)
  if (Math.random() > 0.5) {
    username += Math.floor(Math.random() * 10);
  }

  // Ambil domain acak (berpeluang domain terkenal atau acak)
  const domain = getRandomDomain();

  // Gabungkan menjadi email
  const email = `${username}@${domain}`;
  return email;
}

// Contoh penggunaan
console.log(generateRandomEmail());
