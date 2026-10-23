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
    '#google_translate_element .goog-te-gadget-simple{border-radius:4px;padding:3px 6px}';
  document.head.appendChild(style);

  var bar = document.createElement('div');
  bar.id = 'translate-bar';
  bar.className = 'notranslate';
  bar.innerHTML = '<span class="tb-label">Translate this page:</span><div id="google_translate_element"></div>';
  document.body.insertBefore(bar, document.body.firstChild);

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
