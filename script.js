document.getElementById('verEspeciesBtn').addEventListener('click', function () {
  document.getElementById('especies').scrollIntoView({ behavior: 'smooth' });
});

const navLinks = document.querySelectorAll('.nav-link');
const sections = [
  { id: 'info-ebro', link: navLinks[0] },
  { id: 'especies', link: navLinks[1] }
];

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(({ id }) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = id;
      }
    }
  });
  navLinks.forEach(link => link.classList.remove('active'));
  if (current) {
    const activeSection = sections.find(sec => sec.id === current);
    if (activeSection) {
      activeSection.link.classList.add('active');
    }
  }
});
