let x = 3.14    // number dengan desimal
let y = 3       // number tanpa desimal

//tidak seperti bahasa pemrograman yang lain, numbers dalam javascript
//selalu memiliki 64-bit floating point sehingga tidak ada tipe yang berbeda seperti
//integers, short, long, floating-point dan lain lain

let a = 999999999999999   // a akan menghasilkan 999999999999999
let b = 9999999999999999  // tapi b akan menghasilkan 10000000000000000

//ini dikarenakan floating-point dalam javascript akan akurat sampai 15 digit saja

console.log(x)
console.log(y)
console.log(a)
console.log(b)