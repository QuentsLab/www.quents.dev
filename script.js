/* ===================================================
   QUENTS — shared behavior (nav, theme, mobile menu)
   =================================================== */

/* Theme toggle */
(function(){
  const btn = document.getElementById('themeBtn');
  if(!btn) return;
  const saved = sessionStorage.getItem('quents-theme');
  if(saved === 'dark') document.body.classList.add('dark');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    sessionStorage.setItem('quents-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
})();

/* Desktop dropdown — click to open, click outside to close */
document.querySelectorAll('.nav-item').forEach(item => {
  const link = item.querySelector('.nav-link');
  if(!link || !item.querySelector('.dropdown')) return;
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.nav-item.open').forEach(o => o.classList.remove('open'));
    if(!isOpen) item.classList.add('open');
  });
});
document.addEventListener('click', (e) => {
  if(!e.target.closest('.nav-item')){
    document.querySelectorAll('.nav-item.open').forEach(o => o.classList.remove('open'));
  }
});

/* Mobile menu */
(function(){
  const burger = document.getElementById('burgerBtn');
  const panel = document.getElementById('mobilePanel');
  if(!burger || !panel) return;
  burger.addEventListener('click', () => panel.classList.toggle('show'));

  document.querySelectorAll('.mobile-panel [data-toggle]').forEach(t => {
    t.addEventListener('click', (e) => {
      e.preventDefault();
      const sub = document.getElementById(t.dataset.toggle);
      sub.classList.toggle('show');
    });
  });

  panel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => panel.classList.remove('show'));
  });
})();

/* Auth form preview note (no backend yet) */
document.querySelectorAll('.auth-form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = form.querySelector('.auth-note');
    if(note) note.classList.add('show');
  });
});
