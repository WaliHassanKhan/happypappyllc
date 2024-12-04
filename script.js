// Animate header logo on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.background = '#2f80ed';
    } else {
      header.style.background = 'linear-gradient(to right, #56ccf2, #2f80ed)';
    }
  });
  