function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a placeholder for actual form submission logic)');
    form.reset();
  });
});
