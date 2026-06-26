const btn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  btn.classList.toggle('is-visible', window.scrollY > 320);
});

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55%', threshold: 0 });

sections.forEach(s => sectionObserver.observe(s));


const bars = document.querySelectorAll('.skill-bar');
bars.forEach(b => {
  const w = b.style.width;
  b.style.width = '0';
  b._target = w;
});

const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar').forEach(b => {
        b.style.width = b._target;
      });
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('#habilidades .col-lg-4').forEach(c => barObserver.observe(c));

