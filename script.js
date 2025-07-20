// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

// Apply stored or system preference
if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
  document.body.classList.add('dark');
  darkToggle.checked = true;
}

// Update theme on toggle
darkToggle.addEventListener('change', () => {
  if (darkToggle.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});

//aos
AOS.init({ duration: 1000, once: true });

 // Form handler (optional)
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = e.target.name.value;
      alert(`Thank you for your message, ${name}!`);
      e.target.reset();
    });