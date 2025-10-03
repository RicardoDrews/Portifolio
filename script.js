const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

const sections = document.querySelectorAll('.page-section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Lógica da Troca de Tema
const themeToggleButton = document.querySelector('.theme-toggle-button');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Troca o ícone
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = '☀️';
    } else {
        themeToggleButton.textContent = '🌑';
    }
});