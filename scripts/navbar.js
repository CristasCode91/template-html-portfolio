document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav');

    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });
});