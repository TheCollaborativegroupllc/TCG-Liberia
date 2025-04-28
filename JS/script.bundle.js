// --- Burger Menu Toggle ---
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');
if (burger && navMenu) {
  burger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    burger.classList.toggle('active');
  });
}

// --- Smooth Scroll to "Get Started" ---
function exploreFeature() {
  const target = document.getElementById('get-started');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// --- Initial Animation State for Elements ---
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

// --- Scroll Reveal & Section Animations ---
function handleScrollAnimations() {
  // Reveal hero visuals, cards, and animated elements
  document.querySelectorAll(
    '.hero-visuals img, .card-hero, .card, .animate-left, .animate-right, .animate-up'
  ).forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });

  // About section animation
  const aboutImage = document.querySelector('.about-image');
  const aboutText = document.querySelector('.about-text');
  if (aboutImage && aboutText) {
    const rect = aboutImage.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      aboutImage.classList.add('slide-in-right');
      aboutText.classList.add('slide-in-left');
    }
  }

  // Partner logos reveal
  document.querySelectorAll('.partner-logos img').forEach(img => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      img.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleScrollAnimations);
// Trigger initial reveal
window.dispatchEvent(new Event('scroll'));

// --- Highlight Active Nav Link on Scroll ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
