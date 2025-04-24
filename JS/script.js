// script.js
window.addEventListener('scroll', () => {
  document.querySelectorAll('.hero-visuals img, .card-hero').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

// Add animations for about section
window.addEventListener('scroll', () => {
  const aboutImage = document.querySelector('.about-image');
  const aboutText = document.querySelector('.about-text');

  if (aboutImage && aboutText) {
    const rect = aboutImage.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      aboutImage.classList.add('slide-in-right');
      aboutText.classList.add('slide-in-left');
    }
  }
});

// Scroll animation for partner logos
window.addEventListener('scroll', () => {
  document.querySelectorAll('.partner-logos img').forEach(img => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      img.classList.add('visible');
    }
  });
});

window.addEventListener('scroll', () => {
  document.querySelectorAll('.hero-visuals img, .card, .animate-left, .animate-right').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateX(0)';
    }
  });
});

// Animation classes
document.querySelectorAll('.animate-left').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateX(-50px)';
  el.style.transition = 'all 0.8s ease-out';
});

document.querySelectorAll('.animate-right').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateX(50px)';
  el.style.transition = 'all 0.8s ease-out';
});

document.querySelectorAll('.animate-up').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all 0.8s ease';
});

function exploreFeature() {
  alert("Feature coming soon! 🚀");
}

window.addEventListener('scroll', () => {
  document.querySelectorAll('.hero-visuals img, .card, .animate-left, .animate-right, .animate-up').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

// Optional: trigger animation on load for visible elements
window.dispatchEvent(new Event('scroll'));

document.querySelector('.get-started-form').addEventListener('submit', function(e) {
  e.preventDefault();
  this.reset(); // Reset form fields
});

function exploreFeature() {
  const targetSection = document.getElementById("get-started");
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Toggle mobile nav and burger animation
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  burger.classList.toggle('active');
});

// Highlight active link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});





