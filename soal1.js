/**Buatlah sebuah program dari akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
- Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif" 
- Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"
Hint : gunakan rumus sqrt(x)/**
*/
const prompt = require('prompt-sync')({sigint: true});
function akarPangkat2(x) {
    // Cek apakah x adalah bilangan negatif
    if (x < 0) {
      return "Tidak bisa input bilangan negatif";
    }
  
    // Cek apakah x adalah bilangan ganjil
    if (x % 2 !== 0) {
      return "Tidak bisa input bilangan ganjil";
    }
  
    // Hitung akar pangkat 2 menggunakan rumus sqrt(x)
    let result = Math.sqrt(x);
    return result;
  }
  
  // Akar pangkat 2 pada bilangan genap
  let userInput = prompt("Masukkan bilangan genap: ");
  let inputNumber = parseInt(userInput);
  
  let output = akarPangkat2(inputNumber);
  
  if (typeof output === "number") {
    console.log(`Akar pangkat 2 dari ${inputNumber} adalah: ${output}`);
  } else {
    console.log(output);
  }
  

