
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop actual form submission

    const name = form.elements['name'].value;
    alert(`Thank you for your message, ${name}!`);
    form.reset(); // Optional: Clears the form
  });


  const toggleButton = document.getElementById('toggleMode');

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

