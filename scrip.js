const contactForm = document.querySelector('.contact-form');
const contactBtn = document.getElementById('contactBtn');

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