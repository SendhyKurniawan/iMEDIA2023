var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 0,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const youtube = document.querySelector('#youtube');
const instagram = document.querySelector('#instagram');
const facebook = document.querySelector('#facebook');
const cardbtn1 = document.querySelector('#cardbtn1');
const cardbtn2 = document.querySelector('#cardbtn2');
const cardbtn3 = document.querySelector('#cardbtn3');

// add a click event listener to the div
cardbtn1.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  window.location.href = 'GedungA.html';
});
// add a click event listener to the div
cardbtn2.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  window.location.href = 'GedungD.html';
});
// add a click event listener to the div
cardbtn3.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  window.location.href = 'GedungE.html';
});
// add a click event listener to the div
youtube.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  window.open('https://drive.google.com/drive/folders/14wSkVFz6x_0E--yvVW1pKGMqqOE11d_J');
});
// add a click event listener to the div
instagram.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  window.open('https://drive.google.com/drive/folders/14wSkVFz6x_0E--yvVW1pKGMqqOE11d_J');
});
// add a click event listener to the div
facebook.addEventListener('click', function() {
  // specify the action to take when the div is clicked
  window.open('https://drive.google.com/drive/folders/14wSkVFz6x_0E--yvVW1pKGMqqOE11d_J');
});

const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const cardbody1 = document.getElementById("cardbody1")
const cardbody2 = document.getElementById("cardbody2")
const cardbody3 = document.getElementById("cardbody3")
const almyra = document.getElementById("almyra")
const amanda = document.getElementById("amanda")
const citra = document.getElementById("citra")
const najma = document.getElementById("najma")
const photoalmyra = document.getElementById("photoalmyra")
const photoamanda = document.getElementById("photoamanda")
const photocitra = document.getElementById("photocitra")
const photonajma = document.getElementById("photonajma")

// photoalmyra.addEventListener("mouseover", function () {
//   almyra.classList.remove("d-none");
//   almyra.classList.remove("tidaktampil");
//   almyra.classList.add("tampil");
// });
// photoalmyra.addEventListener("mouseleave", function () {
//   almyra.classList.remove("tampil");
//   almyra.classList.add("tidaktampil");
//   almyra.classList.add("d-none");
// });

// photoamanda.addEventListener("mouseover", function () {
//   amanda.classList.remove("d-none");
//   amanda.classList.remove("tidaktampil");
//   amanda.classList.add("tampil");
// });
// photoamanda.addEventListener("mouseleave", function () {
//   amanda.classList.remove("tampil");
//   amanda.classList.add("tidaktampil");
//   amanda.classList.add("d-none");
// });

// photocitra.addEventListener("mouseover", function () {
//   citra.classList.remove("tidaktampil");
//   citra.classList.remove("d-none");
//   citra.classList.add("tampil");
// });
// photocitra.addEventListener("mouseleave", function () {
//   citra.classList.remove("tampil");
//   citra.classList.add("tidaktampil");
//   citra.classList.add("d-none");
// });

// photonajma.addEventListener("mouseover", function () {
//   najma.classList.remove("d-none");
//   najma.classList.remove("tidaktampil");
//   almyra.classList.add("tampil");
// });
// photonajma.addEventListener("mouseleave", function () {
//   najma.classList.remove("tampil");
//   najma.classList.add("tidaktampil");
//   najma.classList.add("d-none");
// });

const overlaycatalog1 = document.getElementById("overlaycatalog1");
const overlaycatalog3 = document.getElementById("overlaycatalog2");
const overlaycatalog2 = document.getElementById("overlaycatalog3");
const overlaycatalog4 = document.getElementById("overlaycatalog4");
const overlaycatalog5 = document.getElementById("overlaycatalog5");
const overlaycatalog6 = document.getElementById("overlaycatalog6");

