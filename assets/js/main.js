// JS logic
// Minimal JS used across pages
document.addEventListener('DOMContentLoaded', () => {
  // ======================
  // 1. Mobile navigation toggle
  // ======================
  const btn = document.querySelector('#mobile-toggle');
  const menu = document.querySelector('#mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }

  // ======================
  // 2. Fade-up animation trigger
  // ======================
  document.querySelectorAll('.fade-up').forEach((el, i) => {
    el.style.animationDelay = (i * 80) + 'ms';
    el.classList.add('fade-up');
  });

  // ======================
  // 3. Contact form submission with EmailJS
  // ======================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (typeof emailjs === 'undefined') {
        alert('EmailJS not loaded. Configure your email sending method.');
        return;
      }

      // Initialize EmailJS (replace with your user ID)
      emailjs.init("Wo6IUsK3yAOZ-zIvW");

      emailjs.sendForm('service_iq6spvo', 'template_5g838rg', contactForm)
        .then(() => alert('Message sent successfully!'))
        .catch((error) => {
          alert('Failed to send message. Please try again.');
          console.error('EmailJS error:', error);
        });
    });
  }
});