// Cookie banner GDPR (tecnico + misurazione anonima)
(function(){
  const KEY = 'cookieConsent2025';
  if (localStorage.getItem(KEY)) return;
  const banner = document.createElement('div');
  banner.id = 'cookie';
  banner.setAttribute('role','dialog');
  banner.setAttribute('aria-live','polite');
  banner.style.cssText = "position:fixed;inset:auto 16px 16px 16px;background:#111;color:#fff;padding:14px 16px;border-radius:12px;display:flex;gap:8px;align-items:center;justify-content:space-between;z-index:9999";
  banner.innerHTML = `
    <span>Usiamo cookie tecnici e di misurazione anonima. <a href="cookie.html" style="color:#ffb199">Dettagli</a>.</span>
    <button id="okCookie" class="btn btn-primary" style="margin-left:12px">OK</button>
  `;
  document.body.appendChild(banner);
  document.getElementById('okCookie').onclick = function(){
    localStorage.setItem(KEY,"1");
    banner.remove();
  };
})();
