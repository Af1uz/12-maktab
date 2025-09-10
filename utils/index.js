const quotes = document.querySelectorAll(".quote");
let index = 0;

function showQuote() {
  quotes.forEach((q, i) => {
    q.classList.toggle("active", i === index);
  });
  index = (index + 1) % quotes.length;
}

setInterval(showQuote, 3000); // har 3 soniyada almashadi
