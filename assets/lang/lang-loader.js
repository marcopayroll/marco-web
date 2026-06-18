/* ══════════════════════════════════════════════════════
   Marco Website — Language Loader v2

   File structure:
     cn-shared.js   nav, footer, shared keys  (every page)
     cn-index.js    homepage content
     cn-services.js all service-*.html pages
     cn-compliance.js
     cn-company.js
     cn-price.js
     cn-hub.js      hr-knowledge-hub-*.html pages

   To add a new language (e.g. Japanese):
     - Create ja-shared.js, ja-index.js, etc.
     - Add 'ja' as an option in the language dropdown
   ══════════════════════════════════════════════════════ */

(function () {
  var lang = localStorage.getItem('marco-lang') || 'en';
  if (lang === 'en') return;

  function applyPack(pack) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (pack[key] !== undefined && pack[key] !== '') {
        el.textContent = pack[key];
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (pack[key] !== undefined && pack[key] !== '') {
        el.setAttribute('placeholder', pack[key]);
      }
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (pack[key] !== undefined && pack[key] !== '') {
        el.setAttribute('title', pack[key]);
      }
    });
  }

  function loadScript(src, globalName, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = function () {
      var pack = window[globalName];
      if (pack) {
        applyPack(pack);
        document.documentElement.setAttribute('data-lang', lang);
      } else {
        console.warn('[lang-loader] Pack not found: ' + globalName);
      }
      if (callback) callback();
    };
    script.onerror = function () {
      console.warn('[lang-loader] Could not load: ' + src);
      if (callback) callback();
    };
    document.head.appendChild(script);
  }

  /* Detect which section file to load from the page filename */
  var filename = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var L = lang.toUpperCase();
  var base = 'assets/lang/' + lang;
  var sectionFile = null;
  var sectionGlobal = null;

  if (!filename || filename === 'index.html') {
    sectionFile   = base + '-index.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_INDEX';
  } else if (filename.indexOf('service-') === 0) {
    sectionFile   = base + '-services.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_SERVICES';
  } else if (filename.indexOf('compliance-') === 0) {
    sectionFile   = base + '-compliance.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_COMPLIANCE';
  } else if (filename.indexOf('company-') === 0) {
    sectionFile   = base + '-company.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_COMPANY';
  } else if (filename.indexOf('price-') === 0) {
    sectionFile   = base + '-price.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_PRICE';
  } else if (filename.indexOf('hr-knowledge-hub-') === 0) {
    sectionFile   = base + '-hub.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_HUB';
  }

  /* Load shared (nav + footer) first, then page section */
  loadScript(
    base + '-shared.js',
    'MARCO_LANG_' + L + '_SHARED',
    function () {
      if (sectionFile) {
        loadScript(sectionFile, sectionGlobal, null);
      }
    }
  );
})();
