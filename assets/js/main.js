// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

(function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
})();

// Cursor hover effect
document.querySelectorAll('a, button, .work-item, .service-card, .exp-item, .nav-cta').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '6px';
    cursor.style.height = '6px';
    ring.style.width = '52px';
    ring.style.height = '52px';
    ring.style.borderColor = 'rgba(90,240,200,.9)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '10px';
    cursor.style.height = '10px';
    ring.style.width = '36px';
    ring.style.height = '36px';
    ring.style.borderColor = 'rgba(90,240,200,.5)';
  });
});

// Sticky nav
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', scrollY > 60);
});

// Ticker
const tickerItems = [
  'Python', 'Playwright', 'Pytest', 'RAG / LLM', 'LangChain',
  'Selenium', 'Docker', 'Jenkins', 'Appium', 'Cypress',
  'REST API', 'WebSocket', 'CI/CD', 'Vector DB', 'GitHub Actions', 'OT Security'
];
const ti = document.getElementById('ticker-inner');
const doubled = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];
ti.innerHTML = doubled.map(t => `<span class="ticker-item">${t}</span>`).join('');

// Scroll fade-up animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
