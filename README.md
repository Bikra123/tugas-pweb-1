Apa itu HTML?
~HTML adalah singkatan dari Hyper Text Markup Language
~HTML adalah bahasa markup standar untuk membuat halaman Web
~HTML menjelaskan struktur halaman Web
~HTML terdiri dari serangkaian elemen
~Elemen HTML memberi tahu browser cara menampilkan konten
~Elemen HTML memberi label pada bagian konten seperti "ini adalah judul", "ini adalah paragraf", "ini ~adalah tautan", dll.

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



