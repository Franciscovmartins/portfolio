// Dropdown Menu Logic (shared across all pages)
const menuToggle = document.getElementById('menu-toggle');
const dropdown = document.getElementById('dropdown');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    dropdown.classList.toggle('open');
});

// Close the dropdown after a link is clicked (useful on multi-page nav)
document.querySelectorAll('#dropdown a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        dropdown.classList.remove('open');
    });
});

// Expandable project cards (Academic page) — harmless no-op on pages without them
document.querySelectorAll('.card-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.project-card');
        const details = card.querySelector('.card-details');
        const isOpen = card.classList.toggle('is-open');
        details.hidden = !isOpen;
        btn.setAttribute('aria-expanded', String(isOpen));
        btn.querySelector('.toggle-label').textContent = isOpen ? 'Show less' : 'Read more';
    });
});