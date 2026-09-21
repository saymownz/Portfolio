// Hamburger menu 
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  const setOpen = (open) => {
    hamburger.classList.toggle('is-open', open);
    navLinks.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  };

  hamburger.addEventListener('click', () => {
    setOpen(!navLinks.classList.contains('is-open'));
  });

  navLinks.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => setOpen(false))
  );

  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) setOpen(false);
  });
}

// Contact form 
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formStatus.hidden = false;
    contactForm.reset();
    setTimeout(() => { formStatus.hidden = true; }, 4000);
  });
}
