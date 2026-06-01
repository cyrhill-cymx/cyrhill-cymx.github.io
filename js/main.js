const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

const sections = document.querySelectorAll('section[id]');
const navAnchors = navLinks.querySelectorAll('a');

function highlightActiveLink() {
    let current = '';

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
            current = section.getAttribute('id');
        }
    });

    navAnchors.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightActiveLink);

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    btn.textContent = 'Message Sent!';
    btn.style.background = '#22c55e';

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 3000);

    this.reset();
});
