const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i) {
  index = i;
  if (index >= slide.length) index = 0;
  if (index < 0) index = slide.length - 1;
  slides.style.transform = `translateX(${-index * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
  showSlide(index + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(index - 1);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
  });
});

// avtomatik aylanish
setInterval(() => {
  showSlide(index + 1);
}, 4000);

const card = document.querySelector(".person-card");
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });