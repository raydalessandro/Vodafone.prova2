(function(){
  // anno
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // menu mobile
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.style.display = open ? 'none' : 'flex';
    });
  }

  // form contatti: preveniamo invio reale in demo
  const form = document.querySelector('form[name="prenota"]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Richiesta inviata! Ti ricontattiamo a breve su WhatsApp o Email.');
      form.reset();
    });
  }
})();
