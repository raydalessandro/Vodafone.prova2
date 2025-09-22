(function(){
  const KEY = 'cookie-consent';
  const banner = document.getElementById('cookie-banner');
  const accept = document.getElementById('cookie-accept');
  const essentials = document.getElementById('cookie-essentials');

  if (!banner) return;

  const saved = localStorage.getItem(KEY);
  if (!saved) {
    banner.hidden = false;
  } else {
    banner.hidden = true;
    // se volessi attivare analytics anonimi SOLO se saved === 'all' lo faresti qui
  }

  const setConsent = (value) => {
    localStorage.setItem(KEY, value);
    banner.hidden = true;
  };

  accept && accept.addEventListener('click', () => setConsent('all'));
  essentials && essentials.addEventListener('click', () => setConsent('essential'));
})();
