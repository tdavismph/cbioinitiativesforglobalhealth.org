/* Google Website Translator pull-down for cbioinitiativesforglobalhealth.org
   Loaded on every page with: <script src="js/translate.js" defer></script>
   To change the languages offered, edit LANGUAGES below (Google language codes, comma-separated). */
(function () {
  var LANGUAGES = 'fr,es,pt,ar,zh-CN,sw,ha,am,ht';

  var style = document.createElement('style');
  style.textContent =
    '#translate-bar{display:flex;justify-content:flex-end;align-items:center;gap:.5rem;' +
    'padding:.35rem 5%;background:#f5f7fa;border-bottom:1px solid #e3e7ec;font-size:.85rem}' +
    '#translate-bar .tb-label{color:#555}' +
    '#google_translate_element .goog-te-gadget{font-size:.85rem}' +
    '#google_translate_element .goog-te-gadget-simple{border-radius:4px;padding:3px 6px}' +
    '#translate-bar .tb-original{background:none;border:0;padding:0;font:inherit;color:#1a5f99;text-decoration:underline;cursor:pointer}';
  document.head.appendChild(style);

  var bar = document.createElement('div');
  bar.id = 'translate-bar';
  bar.className = 'notranslate';
  bar.innerHTML = '<span class="tb-label">Translate this page:</span><div id="google_translate_element"></div>' +
    '<button type="button" class="tb-original">English (original)</button>';
  document.body.insertBefore(bar, document.body.firstChild);

  // Google's menu does not list the page's own language, so this button returns to English:
  // it clears Google's "googtrans" cookie (set on the host and on the parent domain) and reloads.
  bar.querySelector('.tb-original').addEventListener('click', function () {
    var expired = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    var host = location.hostname;
    document.cookie = expired;
    document.cookie = expired + '; domain=' + host;
    document.cookie = expired + '; domain=.' + host;
    location.reload();
  });

  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: LANGUAGES,
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false
    }, 'google_translate_element');
  };

  var s = document.createElement('script');
  s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  s.async = true;
  document.body.appendChild(s);
})();
