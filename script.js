// alert tombol contact
document.getElementById("contactButton").addEventListener("click", function () {
  alert("Makasih udah contact aku!");
});

// submit form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Pesan kamu berhasil dikirim 🚀");
  this.reset();
});

// foto klik zoom
const foto = document.querySelector(".profile-img");
foto.addEventListener("click", function () {
  foto.classList.toggle("active");
});
// typing effect
const text = "Welcome to my website";
let index = 0;

function typingEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 80);
  }
}

typingEffect();