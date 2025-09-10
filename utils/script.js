// const quotes = document.querySelectorAll(".quote");
// let index = 0;

// function showQuote() {
//   quotes.forEach((q, i) => {
//     q.classList.toggle("active", i === index);
//   });
//   index = (index + 1) % quotes.length;
// }

// setInterval(showQuote, 3000);


// const quotes = document.querySelectorAll(".quote");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// let index = 0;

// // Slaydni ko‘rsatish
// function showQuote(i) {
//   quotes.forEach((q, ind) => {
//     q.classList.toggle("active", ind === i);
//   });
// }

// // Keyingi slayd
// nextBtn.addEventListener("click", () => {
//   index = (index + 1) % quotes.length;
//   showQuote(index);
// });

// // Oldingi slayd
// prevBtn.addEventListener("click", () => {
//   index = (index - 1 + quotes.length) % quotes.length;
//   showQuote(index);
// });

// // Avtomatik almashish
// setInterval(() => {
//   index = (index + 1) % quotes.length;
//   showQuote(index);
// }, 4000);


// Slider
// const quotes = document.querySelectorAll(".quote");
// let index = 0;
// function showQuote() {
//   quotes.forEach((q, i) => q.classList.toggle("active", i === index));
//   index = (index + 1) % quotes.length;
// }
// setInterval(showQuote, 4000);

// // Yulduzcha bosilganda card chiqsin
// const star = document.querySelector(".star-icon");
// const colorfulCard = document.querySelector(".colorful-card");

// star.addEventListener("click", () => {
//   colorfulCard.style.display =
//     colorfulCard.style.display === "block" ? "none" : "block";
// });

// Slider
// const quotes = document.querySelectorAll(".quote");
// let index = 0;
// function showQuote() {
//   quotes.forEach((q, i) => q.classList.toggle("active", i === index));
//   index = (index + 1) % quotes.length;
// }
// setInterval(showQuote, 4000);

// // Yulduzcha bosilganda card chiqsin
// const star = document.querySelector(".star-icon");
// const colorfulCard = document.querySelector(".colorful-card");

// star.addEventListener("click", () => {
//   colorfulCard.style.display =
//     colorfulCard.style.display === "block" ? "none" : "block";
// });
// Slider
const quotes = document.querySelectorAll(".quote");
let index = 0;
function showQuote() {
  quotes.forEach((q, i) => q.classList.toggle("active", i === index));
  index = (index + 1) % quotes.length;
}
setInterval(showQuote, 4000);

// Sehrli lampa card
const lamp = document.querySelector(".lamp-icon");
const magicCard = document.querySelector(".magic-card");

lamp.addEventListener("click", () => {
  magicCard.style.display =
    magicCard.style.display === "block" ? "none" : "block";
});
