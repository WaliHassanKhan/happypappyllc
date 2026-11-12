// Animate header logo on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.background = '#0d47a1';
    } else {
      header.style.background = 'linear-gradient(to right, #1565c0, #0d47a1)';
    }
  });
  