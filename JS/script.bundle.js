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

// --- Newsletter & Contact Form Submission Handler ---
document.addEventListener('DOMContentLoaded', () => {
  // Newsletter Form Submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent Formspree's default form submission

      const form = e.target;
      const formData = new FormData(form);

      // Send the form data to Formspree manually using Fetch API
      fetch(form.action, {
        method: "POST",
        body: formData,
      })
      .then(response => {
        if (response.ok) {
          Swal.fire({
            title: "Hurray!!!",
            text: "Thanks for subscribing to our newsletter",
            icon: "success",
            confirmButtonText: "OK"
          });
          form.reset(); // Reset the form after successful submission
        } else {
          // Show error if submission fails
          Swal.fire({
            title: "Oops!",
            text: "There was a problem submitting the form. Please try again later.",
            icon: "error",
            confirmButtonText: "OK"
          });
        }
      })
      .catch(error => {
        // In case of network failure or fetch issue
        Swal.fire({
          title: "Oops!",
          text: "There was a problem with your submission. Please try again later.",
          icon: "error",
          confirmButtonText: "OK"
        });
      });
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent Formspree's default form submission

      const form = e.target;
      const formData = new FormData(form);

      // Send the form data to Formspree manually using Fetch API
      fetch(form.action, {
        method: "POST",
        body: formData,
      })
      .then(response => {
        // Check if the response is successful (status 2xx)
        if (response.ok) {
          Swal.fire({
            title: "Forms Submitted!",
            text: "Thank you for contacting us",
            icon: "success",
            confirmButtonText: "OK"
          });
          form.reset(); // Reset the form after success
        } else {
          // If response is not OK, show an error message with the response status
          Swal.fire({
            title: "Oops!",
            text: `Error: ${response.statusText}`,
            icon: "error",
            confirmButtonText: "OK"
          });
        }
      })
      .catch(error => {
        // Handle network or other errors
        Swal.fire({
          title: "Oops!",
          text: "There was a problem with your submission. Please try again later.",
          icon: "error",
          confirmButtonText: "OK"
        });
      });
    });
  }
});

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
