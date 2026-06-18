/* ══════════════════════════════════════════════════════
   Marco Website — Language Loader v3

   File structure:
     cn-shared.js   nav, footer, shared keys  (every page)
     cn-index.js    homepage content
     cn-services.js all service-*.html pages
     cn-compliance.js
     cn-company.js
     cn-price.js
     cn-hub.js      hr-knowledge-hub-*.html pages

   This file also handles:
     - Nav language indicator update (flag + label + active row)
     - Language row clicks → persist to localStorage + reload
   ══════════════════════════════════════════════════════ */

(function () {
  var lang = localStorage.getItem('marco-lang') || 'en';

  var LANG_CONFIG = {
    en: { label: 'EN', flagSrc: 'assets/flag-en.png' },
    cn: { label: 'CN', flagSrc: 'assets/flag-cn.webp' }
  };

  /* ── Update nav language indicator on every page ── */
  function updateNavUI() {
    var cfg = LANG_CONFIG[lang] || LANG_CONFIG.en;

    /* Update flag image + label text in both desktop and mobile triggers */
    ['nav-lang-trigger', 'nav-mobile-lang-trigger'].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      var flagImg = el.querySelector('.nav-lang-flag img');
      /* Use span:not(.nav-lang-dd-label) to avoid matching dropdown labels */
      var labelEl = el.querySelector('span:not(.nav-lang-dd-label)');
      if (flagImg) flagImg.src = cfg.flagSrc;
      if (labelEl) labelEl.textContent = cfg.label;
    });

    /* Update is-active state on all dropdown rows */
    document.querySelectorAll('.nav-lang-dropdown').forEach(function (dd) {
      dd.querySelectorAll('.nav-lang-dd-row').forEach(function (row) {
        var lbl = row.querySelector('.nav-lang-dd-label');
        if (lbl) {
          row.classList.toggle('is-active', lbl.textContent.trim().toLowerCase() === lang);
        }
      });
    });

    /* Wire language-row clicks (guard with data attribute to prevent duplicates) */
    document.querySelectorAll('.nav-lang-dropdown:not([data-lang-wired])').forEach(function (dd) {
      dd.setAttribute('data-lang-wired', '1');
      dd.querySelectorAll('.nav-lang-dd-row').forEach(function (row) {
        row.addEventListener('click', function (e) {
          e.stopPropagation();
          var lbl = row.querySelector('.nav-lang-dd-label');
          if (!lbl) return;
          var selected = lbl.textContent.trim().toLowerCase();
          if (selected !== lang) {
            localStorage.setItem('marco-lang', selected);
            location.reload();
          } else {
            /* Close dropdown if same lang selected */
            dd.classList.remove('is-open');
            dd.setAttribute('aria-hidden', 'true');
          }
        });
      });
    });
  }

  /* Run immediately — script sits before </body> so DOM is fully parsed */
  updateNavUI();

  /* ── Translation loading (only for non-EN) ── */
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
