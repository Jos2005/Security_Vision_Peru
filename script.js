const contactForm = document.querySelector('.contact-form');
const contactBtn = document.getElementById('contactBtn');
const nav = document.querySelector('header nav');
const menuToggle = document.querySelector('.menu-toggle');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('nav-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.nav-links a, .nav-links .btn-contact-nav').forEach((item) => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        window.location.href = 'pages/contacto.html';
    });
}

// Manejo de Formulario de Contacto
if (contactForm) {
    contactForm.onsubmit = (e) => {
        e.preventDefault();
        const nombre = document.getElementById('contactName').value;
        alert(`Gracias ${nombre}. Un especialista técnico de Security Vision se contactará con usted en Sullana.`);
        contactForm.reset();
    }
}

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});