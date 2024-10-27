// Mobile Menu Toggle
function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
}

// Close mobile menu on link click
function closeMenu() {
  document.getElementById("mobile-menu").style.display = "none";
}

// Cookie Popup
function acceptCookies() {
  document.getElementById("cookie-popup").style.display = "none";
}

const slides = document.querySelectorAll(".carousel-slide img");
const bullets = document.querySelectorAll(".carousel-bullets .bullet");
let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"));
  bullets.forEach((bullet) => bullet.classList.remove("active"));

  if (n >= slides.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = n;
  }

  slides[currentSlide].classList.add("active");
  bullets[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    showSlide(index);
  });
});

function autoSlide() {
  nextSlide();
}

setInterval(autoSlide, 2000);


// JavaScript for testimonial slider
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
}


//: Auto-rotate testimonials every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
}, 5000);