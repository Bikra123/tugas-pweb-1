const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) { //menampilkan setiap nilai dalam array numbers
  txt += numbers[x] + " "; 
}

console.log(txt)