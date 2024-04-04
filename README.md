Apa itu HTML?

~HTML adalah singkatan dari Hyper Text Markup Language

~HTML adalah bahasa markup standar untuk membuat halaman Web

~HTML menjelaskan struktur halaman Web

~HTML terdiri dari serangkaian elemen

~Elemen HTML memberi tahu browser cara menampilkan konten

~Elemen HTML memberi label pada bagian konten seperti "ini adalah judul", "ini adalah paragraf", "ini adalah tautan", dll.


Contoh Dasar HTML

![Dasar HTML](/html-doc.png)

Deklarasi !DOCTYPE
Deklarasi tersebut !DOCTYPEmewakili tipe dokumen, dan membantu browser menampilkan halaman web dengan benar.

Itu hanya boleh muncul sekali, di bagian atas halaman (sebelum tag HTML apa pun).

Deklarasi ini !DOCTYPEtidak membedakan huruf besar-kecil.

Judul HTML
Judul HTML ditentukan dengan tag h1 to h6.

h1mendefinisikan judul yang paling penting. h6mendefinisikan judul yang paling tidak penting: 

![Heading](/heading.png)

dengan hasil :

![Show Heading](/show-heading.png)

Paragraf HTML
Paragraf HTML didefinisikan dengan p tag:

![p tag](/ptag.png)

dengan hasil:

![Paragraf](/paragraf.png)

Tautan HTML
Tautan HTML ditentukan dengan a tag:

![a tag](/a-tag.png)

hasilnya menjadi


![Anchor](/anchor.png)

ketika di klik tautan tersebut akan mengunjungi situs sesuai yang di arahkan

Gambar HTML
Gambar HTML ditentukan dengan img tag.

File sumber ( src), teks alternatif ( alt), width, dan heightdisediakan sebagai atribut:

![img tag](/img-tag.png)

dengan hasil :

![Gambar](/image.png)


Block HTML dan Elemen Inline


Elemen Tingkat Block

Elemen tingkat Block selalu dimulai pada baris baru, dan browser secara otomatis menambahkan beberapa spasi (margin) sebelum dan sesudah elemen.

Elemen tingkat Block selalu menempati seluruh lebar yang tersedia (meregangkan ke kiri dan kanan sejauh mungkin).

Dua elemen Block yang umum digunakan adalah: p dan div.

Elemen p mendefinisikan paragraf dalam dokumen HTML.

Elemen div mendefinisikan divisi atau bagian dalam dokumen HTML.

![Block Element](/block-code.png)

![Block Element](/block-level-element.png)


Elemen Inline

Elemen Inline tidak dimulai pada baris baru.

Elemen Inline hanya membutuhkan lebar sebanyak yang diperlukan.

Ini adalah elemen span di dalam paragraf.

![Inline Element](/inline-code.png)

![Inline Element](/inline-level-element.png)

Apa itu CSS?

~CSS adalah singkatan dari Cascading Style Sheet

~CSS menjelaskan bagaimana elemen HTML ditampilkan di layar, kertas, atau di media lain

~CSS menghemat banyak pekerjaan. Itu dapat mengontrol tata letak beberapa halaman web sekaligus

~Stylesheet eksternal disimpan dalam file CSS


CSS Syntax

![CSS syntax](/css-syntax.png)

Selector menunjuk ke elemen HTML yang ingin Anda styling.

Blok deklarasi berisi satu atau lebih deklarasi yang dipisahkan oleh titik koma.

Setiap deklarasi menyertakan nama properti CSS dan nilainya, dipisahkan oleh titik dua.

Beberapa deklarasi CSS dipisahkan dengan titik koma, dan blok deklarasi diapit oleh kurung kurawal.

Contoh :

![CSS code](/css-code.png)

Hasil :

![CSS result](/css-result.png)

CSS Selectors

Selector CSS digunakan untuk "menemukan" (atau memilih) elemen HTML yang ingin Anda beri gaya.

Kita dapat membagi pemilih CSS menjadi lima kategori:

Selector sederhana (pilih elemen berdasarkan nama, id, kelas)

Penyeleksi kombinator (memilih elemen berdasarkan hubungan tertentu di antara elemen tersebut)

Selector kelas semu (memilih elemen berdasarkan keadaan tertentu)

Pemilih elemen semu (memilih dan memberi gaya pada bagian elemen)

Pemilih atribut (memilih elemen berdasarkan atribut atau nilai atribut)

Halaman ini akan menjelaskan penyeleksi CSS paling dasar.


Selector elemen CSS

![CSS code](/css-code.png)

Selector memeberi gaya pada semua elemen p
Dan hasilnya :

![CSS result](/css-result.png)

Selector ID CSS

Selector id menggunakan atribut id dari elemen HTML untuk memilih elemen tertentu.

Id suatu elemen bersifat unik dalam suatu halaman, sehingga pemilih id digunakan untuk memilih satu elemen unik!

Untuk memilih elemen dengan id tertentu, tulis karakter hash (#), diikuti dengan id elemen tersebut.

Contoh :

![ID Selector](/id-selelector-code.png)

Hasil :

![ID Selector Result](/id-selector-result.png)


CSS Color

dalam CSS anda bisa menggunakan 4 tipe value warna yaitu dengan :

~Warna yang di sediakan secara default oleh css misal Tomato

~Warna dengan rgb misal rgb(255, 99, 71)

~Warna dengan hsl misal hsl(9, 100%, 64%)

~dan yang paling sering digunakan adalah dengan hex code #ff6347

ketiganya menghasilkan warna yang sama yaitu tomato tetapi dengan penulisan yang berbeda


CSS Backgrounds

Properti background CSS digunakan untuk menambahkan efek background pada elemen.

Berikut beberapa contoh pada CSS

Background-color

![Background Color Code](/bg-color-code.png)

![Background Color Result](/bg-color-result.png)

background-image

![Background Image Code](/bg-image-code.png)

![Background Image Result](/bg-image-result.png)

Background-repeat

Secara default, background-imageproperti mengulangi gambar secara horizontal dan vertikal.

Beberapa gambar sebaiknya diulang hanya secara horizontal atau vertikal, atau gambar tersebut akan terlihat aneh, seperti ini:

![Example Background Image Code](/exmple-bg-image-code.png)

![Example Background Image Result](/exmple-bg-image-result.png)

Jika gambar di atas diulang hanya secara horizontal ( background-repeat: repeat-x;), latar belakang akan terlihat lebih baik:

![Background Repeat Cpde](/bg-repeat-code.png)

![Background Repeat Result](/bg-repeat-result.png)

background(properti singkatan/shorthand)

Di bandingkan menggunakan code 

![Background Longhand](/bg-long-code.png)

akan lebih efisien jika di tuliskan dengan

![Background Shorthand](/bg-shorthand.png)

keduanya akan menghasilkan hasil yang sama
*fokus pada background nya saja

![Background Shorthand Result](/bg-shorthand-result.png)

CSS Borders

Properti border CSS memungkinkan Anda menentukan gaya, lebar, dan warna batas elemen.

Border Style

Properti border-stylemenentukan jenis batas yang akan ditampilkan.

Nilai-nilai berikut diperbolehkan:

~dotted- Mendefinisikan batas titik-titik

~dashed- Mendefinisikan batas putus-putus

~solid- Mendefinisikan batas yang solid

~double- Mendefinisikan perbatasan ganda

~groove- Mendefinisikan batas beralur 3D. Efeknya bergantung pada nilai warna batas

~ridge- Mendefinisikan batas bergerigi 3D. Efeknya bergantung pada nilai warna batas

~inset- Mendefinisikan batas sisipan 3D. Efeknya bergantung pada nilai warna batas

~outset- Mendefinisikan batas awal 3D. Efeknya bergantung pada nilai warna batas

~none- Tidak mendefinisikan batas

~hidden- Mendefinisikan perbatasan tersembunyi

![Border Style](/border-style.png)

CSS Border Width

Properti border-widthmenentukan lebar keempat batas.

Lebar dapat diatur sebagai ukuran tertentu (dalam px, pt, cm, em, dll) atau dengan menggunakan salah satu dari tiga nilai yang telah ditentukan sebelumnya: tipis, sedang, atau tebal

Contoh:

![Border Width Code](/border-width-code.png)

![Border Width Result](/border-width-result.png)

CSS Rounded Borders

Properti border-radius digunakan untuk menambahkan batas membulat ke suatu elemen

![Border Radius Code](/border-radius-code.png)

![Border Radius Result](/border-radius-result.png)

CSS Box Model

Dalam CSS, istilah "box model" digunakan ketika berbicara tentang desain dan tata letak.

box model CSS pada dasarnya adalah sebuah kotak yang membungkus setiap elemen HTML. Terdiri dari  konten, padding, batas dan margin. Gambar di bawah mengilustrasikan box model:

![Box Model](/box-model.png)

Penjelasan dari semua bagian:

Content - Isi kotak, tempat teks dan gambar muncul

Padding - Menghapus area di sekitar konten. Paddingnya transparan

Border - Perbatasan yang mengelilingi padding dan konten

Margin - Membersihkan area di luar perbatasan. Marginnya transparan

CSS Outline

Outline adalah garis yang digambar di sekeliling elemen, DI LUAR border, untuk membuat elemen "menonjol".

![Outline](/outline.png)

CSS Outline Style

Properti outline-style memiliki style yang sama dengan border berikut contohnya:

![Outline Style Code](/outline-code.png)

![Outline Style Result](/outline-style-result.png)

CSS Layout - The position Property

Properti ini positionmenentukan jenis metode pemosisian yang digunakan untuk suatu elemen(static, relative, fixed, absolute dan sticky).

Properti positionmenentukan jenis metode penentuan posisi yang digunakan untuk suatu elemen.

Ada lima nilai posisi yang berbeda:

~static

~relative

~fixed

~absolute

~sticky

Elemen kemudian diposisikan menggunakan properti atas, bawah, kiri, dan kanan. Namun, properti ini tidak akan berfungsi kecuali position properti tersebut disetel terlebih dahulu. Mereka juga bekerja secara berbeda tergantung pada nilai posisi.

CSS Layout - Overflow

Properti CSS overflowmengontrol apa yang terjadi pada konten yang terlalu besar untuk dimasukkan ke dalam suatu area.

overvlow: visible

Secara default, overflow adalah visible, artinya tidak terpotong dan ditampilkan di luar kotak elemen

![Overflow visible](/overflow-visible.png)

overflow:hidden

Dengan value hidden, overflow terpotong, dan konten lainnya disembunyikan:

![Overflow hidden](/overflow-hidden.png)

overflow: scroll

Menetapkan nilainya menjadi scroll, luapan terpotong dan bilah gulir ditambahkan untuk menggulir ke dalam kotak. Perhatikan bahwa ini akan menambahkan bilah gulir secara horizontal dan vertikal (meskipun Anda tidak memerlukannya):

![Overflow scroll](/overflow-scroll.png)

overflow:auto

Sama seperti scroll tapi akan menjadi scroll jika diperlukan

![Overflow auto](/overflow-auto.png)

JavaScript Introduction

JavaScript Dapat Mengubah Konten HTML
Salah satu dari banyak metode JavaScript HTML adalah getElementById().

Contoh di bawah ini "menemukan" elemen HTML (dengan id="demo"), dan mengubah konten elemen (innerHTML) menjadi "Halo JavaScript":

document.getElementById("demo").innerHTML = "Hello JavaScript";

maka content HTML yang memiliki attribute id bernilai "demo" akan berubah menjad Hello Javascript

Sintaks JavaScript

Sintaks JavaScript adalah seperangkat aturan, bagaimana program JavaScript dibuat:

Cara memnbuat variable:

var x;

let y;

Cara menggunakan variable:

x = 5;

y = 6;

let z = x + y;

JavaScript Variables

Variabel adalah Wadah untuk Menyimpan Data

Variabel JavaScript dapat dideklarasikan dengan 4 cara:

~Secara otomatis 

contoh x = 5;

~Menggunakan var

contoh var x = 5;

Menggunakan let

contoh let x = 5;

Menggunakan const

contoh const x = 5;



JavaScript Data Types

JavaScript memiliki 8 Tipe Data

1. String
2. Angka
3. Bigint
4. Boolean
5. Tidak terdefinisi
6. Null
7. Simbol
8. Objek

Tipe Data Objek
Tipe data objek dapat berisi:

1. Sebuah Objek
2. Sebuah Array
3. Sebuah Tanggal

contoh:

![Tipe Data](/data-type.png)

##JavaScript adalah bahasa pemrograman dinamis yang digunakan untuk menambahkan fungsionalitas interaktif ke halaman web. Javascript memungkinkan kita membuat elemen web yang dinamis dan responsif, seperti menu drop-down, animasi, game web, dan aplikasi web interaktif lainnya.

##JavaScript dijalankan di sisi klien, yang berarti kode JS dieksekusi di browser web pengguna. Dengan begitu, kita dapat membuat perubahan real-time pada halaman web tanpa perlu memuat ulang halaman.