// Scroll Reveal básico
const hiddenElements = document.querySelectorAll('.hidden');

window.addEventListener('scroll', () => {
  hiddenElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});
