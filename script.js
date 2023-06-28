let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY; //? posisi layar ketika scroll
    let offset = sec.offsetTop - 150; //? Ini Untuk Mengetahui apakah elemen tersebut sedang terlihat di layar atau tidak
    let height = sec.offsetHeight; //? Ini Untuk Mengetahui apakah elemen tersebut sedang terlihat di layar atau tidak
    let id = sec.getAttribute("id"); //? Ini Untuk Mendapatkan id dari tiap element

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*= " + id + "]")
          .classList.add("active");
      });
    }
  });
};
