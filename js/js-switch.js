//Metode ini getDay()mengembalikan hari kerja sebagai angka antara 0 dan 6.
// (Minggu=0, Senin=1, Selasa=2 ..)
// Contoh ini menggunakan nomor hari kerja untuk menghitung nama hari kerja:

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}