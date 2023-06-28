let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY; //? Posisi Layar Pada Browser Ketika User Scrolling
    let offset = sec.offsetTop - 150; //? Sebagai posisi section dari atas halaman
    let heightSection = sec.offsetHeight; //? Tinggi section
    let id = sec.getAttribute("id"); //? Atribut dari elemen section

    if (top >= offset && top < offset + heightSection) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*= " + id + "]")
          .classList.add("active");
      });
    }
  });
};

/*
Untuk menentukan apakah section tersebut sedang terlihat di layar
atau tidak, kode tersebut menggunakan variabel top untuk mengetahui posisi 
layar ketika user melakukan scroll, variabel offset untuk mengetahui 
posisi section tersebut terhadap top page, dan variabel height
untuk mengetahui tinggi section tersebut.
Jika section tersebut sedang terlihat di layar, 
kode tersebut akan menambahkan class active pada link navigasi yang terkait
dengan section tersebut. Hal ini dilakukan dengan cara mengambil id dari section 
tersebut menggunakan method getAttribute, kemudian mencari link navigasi 
yang memiliki atribut href yang sama dengan id section tersebut 
menggunakan method querySelector. Setelah itu, class active 
ditambahkan pada link navigasi tersebut menggunakan method classList.add.
*/
