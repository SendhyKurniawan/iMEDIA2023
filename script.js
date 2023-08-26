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
const cardbtn1 = document.getElementById("cardbtn1")
const cardbtn2 = document.getElementById("cardbtn2")
const cardbtn3 = document.getElementById("cardbtn3")

// card1.addEventListener("mouseover", function () {
//   cardbtn1.classList.remove("btnbefore");
//   cardbtn1.classList.add("btnafter");
  
// });
// card1.addEventListener("mouseleave", function () {
//   cardbtn1.classList.add("btnbefore");
//   cardbtn1.classList.remove("btnafter");
// });

// card2.addEventListener("mouseover", function () {
//   cardbtn2.classList.remove("btnbefore");
//   cardbtn2.classList.add("btnafter");
  
// });
// card2.addEventListener("mouseleave", function () {
//   cardbtn2.classList.add("btnbefore");
//   cardbtn2.classList.remove("btnafter");
// });

// card3.addEventListener("mouseover", function () {
//   cardbtn3.classList.remove("btnbefore");
//   cardbtn3.classList.add("btnafter");
  
// });
// card3.addEventListener("mouseleave", function () {
//   cardbtn3.classList.add("btnbefore");
//   cardbtn3.classList.remove("btnafter");
// });
