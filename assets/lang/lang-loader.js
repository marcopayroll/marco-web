/* ══════════════════════════════════════════════════════
   Marco Website — Language Loader v3

   File structure:
     cn-shared.js   nav, footer, shared keys  (every page)
     cn-index.js    homepage content
     cn-services.js all service-*.html pages
     cn-compliance.js
     cn-company.js
     cn-price.js
     cn-hub.js          hr-knowledge-hub.html (landing)
     cn-hub-country.js  hr-knowledge-hub-country-guide-*.html
     cn-hub-visa.js     hr-knowledge-hub-visa-guide-*.html
     cn-hub-articles.js all other hr-knowledge-hub-*.html pages

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

  var mergedPack = {};

  function applyPack(pack) {
    Object.assign(mergedPack, pack);
    window.__marcoPack = mergedPack;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (mergedPack[key] !== undefined && mergedPack[key] !== '') {
        el.textContent = mergedPack[key];
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (mergedPack[key] !== undefined && mergedPack[key] !== '') {
        el.innerHTML = mergedPack[key];
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (mergedPack[key] !== undefined && mergedPack[key] !== '') {
        el.setAttribute('placeholder', mergedPack[key]);
      }
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (mergedPack[key] !== undefined && mergedPack[key] !== '') {
        el.setAttribute('title', mergedPack[key]);
      }
    });
    document.dispatchEvent(new CustomEvent('marcolangready'));
  }

  /* Exposed for pages that re-render content dynamically (e.g. price pages) */
  window.__applyMarcoPack = function () {
    if (Object.keys(mergedPack).length) applyPack({});
  };

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
  /* Vite dev server strips .html — normalise so all routes can use .html consistently */
  if (filename && !filename.match(/\.[a-z]+$/)) filename += '.html';
  var L = lang.toUpperCase();
  var base = 'assets/lang/' + lang;
  var sectionFile = null;
  var sectionGlobal = null;
  var countryFile = null;
  var countryGlobal = null;

  if (!filename || filename === 'index.html') {
    sectionFile   = base + '-index.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_INDEX';
  } else if (filename.indexOf('service-') === 0) {
    sectionFile   = base + '-services.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_SERVICES';
  } else if (filename.indexOf('compliance-') === 0) {
    sectionFile   = base + '-compliance.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_COMPLIANCE';
  } else if (filename === 'company-terms-of-use.html') {
    sectionFile   = base + '-company-terms.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_COMPANY_TERMS';
  } else if (filename === 'company-cookies-policy.html') {
    sectionFile   = base + '-company-cookies.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_COMPANY_COOKIES';
  } else if (filename === 'company-privacy-policy.html') {
    sectionFile   = base + '-company-privacy.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_COMPANY_PRIVACY';
  } else if (filename.indexOf('company-') === 0) {
    sectionFile   = base + '-company.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_COMPANY';
  } else if (filename.indexOf('price-') === 0) {
    sectionFile   = base + '-price.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_PRICE';
  } else if (filename === 'marco-os.html' || filename === 'marco-os') {
    sectionFile   = base + '-marco-os.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_MARCO_OS';
  } else if (filename === 'hr-knowledge-hub.html') {
    sectionFile   = base + '-hub.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_HUB';
  } else if (filename.indexOf('hr-knowledge-hub-country-guide-') === 0) {
    sectionFile   = base + '-hub-country.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_HUB_COUNTRY';
  } else if (filename.indexOf('hr-knowledge-hub-visa-guide') === 0) {
    /* List page + every country page share the visa-guide pack.
       Visa-guide packs live in their own folder: assets/lang/<lang>-hub-visa/ */
    sectionFile   = base + '-hub-visa/' + lang + '-hub-visa.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_HUB_VISA';
    /* Country pages additionally load their own content pack (<lang>-vg-<country>.js) if present */
    var vgCountry = filename.match(/^hr-knowledge-hub-visa-guide-([a-z0-9-]+)\.html$/);
    if (vgCountry) {
      countryFile   = base + '-hub-visa/' + lang + '-vg-' + vgCountry[1] + '.js';
      countryGlobal = 'MARCO_LANG_' + L + '_VG_' + vgCountry[1].toUpperCase().replace(/-/g, '_');
    }
  } else if (filename === 'hr-knowledge-hub-labor-cost-calculator.html') {
    sectionFile   = base + '-hub-labor-cost.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_HUB_LABOR_COST';
  } else if (filename.indexOf('hr-knowledge-hub-payroll-guide') === 0) {
    /* List page + every country page share the payroll-guide pack.
       Payroll-guide packs live in their own folder: assets/lang/<lang>-hub-payroll-guide/ */
    sectionFile   = base + '-hub-payroll-guide/' + lang + '-hub-payroll-guide.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_HUB_PAYROLL_GUIDE';
    /* Country pages additionally load their own content pack (<lang>-pg-<country>.js) if present */
    var pgCountry = filename.match(/^hr-knowledge-hub-payroll-guide-([a-z0-9-]+)\.html$/);
    if (pgCountry) {
      countryFile   = base + '-hub-payroll-guide/' + lang + '-pg-' + pgCountry[1] + '.js';
      countryGlobal = 'MARCO_LANG_' + L + '_PG_' + pgCountry[1].toUpperCase().replace(/-/g, '_');
    }
  } else if (filename === 'hr-knowledge-hub-freelancer-guide.html') {
    sectionFile   = base + '-hub-freelancer-guide.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_HUB_FREELANCER_GUIDE';
  } else if (filename.indexOf('hr-knowledge-hub-employment-contract') === 0) {
    sectionFile   = base + '-hub-employment-contract.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_HUB_EMPLOYMENT_CONTRACT';
  } else if (filename.indexOf('hr-knowledge-hub-work-schedule') === 0) {
    sectionFile   = base + '-hub-work-schedule.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_HUB_WORK_SCHEDULE';
  } else if (filename.indexOf('hr-knowledge-hub-public-holiday') === 0) {
    sectionFile   = base + '-hub-public-holiday.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_HUB_PUBLIC_HOLIDAY';
  } else if (filename === 'hr-knowledge-hub-leave-policy.html') {
    sectionFile   = base + '-hub-leave-policy.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_HUB_LEAVE_POLICY';
  } else if (filename === 'hr-knowledge-hub-travel-expense-policy.html') {
    sectionFile   = base + '-hub-travel-expense.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_HUB_TRAVEL_EXPENSE';
  } else if (filename === 'hr-knowledge-hub-benefits-plan.html') {
    sectionFile   = base + '-hub-benefits-plan.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_HUB_BENEFITS_PLAN';
  } else if (filename.indexOf('hr-knowledge-hub-government-claim') === 0) {
    sectionFile   = base + '-hub-government-claim.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_HUB_GOVERNMENT_CLAIM';
  } else if (filename === 'hr-knowledge-hub-vendor-list.html') {
    sectionFile   = base + '-hub-vendor-list.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_HUB_VENDOR_LIST';
  } else if (filename.indexOf('hr-knowledge-hub-memo') === 0) {
    sectionFile   = base + '-hub-memo.js';
    sectionGlobal = 'MARCO_LANG_' + L + '_HUB_MEMO';
  }

  /* Load shared (nav + footer) first, then page section */
  loadScript(
    base + '-shared.js',
    'MARCO_LANG_' + L + '_SHARED',
    function () {
      if (sectionFile) {
        loadScript(sectionFile, sectionGlobal, function () {
          if (countryFile) {
            loadScript(countryFile, countryGlobal, null);
          }
        });
      }
    }
  );
})();
