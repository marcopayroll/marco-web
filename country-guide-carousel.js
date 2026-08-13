/* ── Explore More carousel — Country Guide ── */
(function() {
  /* Responsive card size — matches CSS breakpoints in country-guide.css */
  function getMetrics() {
    var vw = window.innerWidth;
    if (vw <= 500) return { CARD_WIDTH: 224, GAP: 16, CARDS_PER_VIEW: 1 };
    if (vw <= 900) return { CARD_WIDTH: 224, GAP: 16, CARDS_PER_VIEW: 3 };
    return { CARD_WIDTH: 340, GAP: 40, CARDS_PER_VIEW: 3 };
  }
  var m = getMetrics();
  var CARD_WIDTH = m.CARD_WIDTH;
  var GAP = m.GAP;
  var PAGE_SCROLL = CARD_WIDTH + GAP;
  var CARDS_PER_VIEW = m.CARDS_PER_VIEW;
  var currentPage = 0;
  var filtered = [];

  var EXPLORE_COUNTRIES = COUNTRY_GUIDE_COUNTRIES_DATA;

  var track        = document.getElementById('exploreTrack');
  var chevLeft     = document.getElementById('exploreChevLeft');
  var chevRight    = document.getElementById('exploreChevRight');
  var chevLeftImg  = document.getElementById('exploreChevLeftImg');
  var chevRightImg = document.getElementById('exploreChevRightImg');
  var scrollThumb  = document.getElementById('exploreScrollThumb');
  var emptyEl      = document.getElementById('exploreEmpty');
  var searchInput  = document.getElementById('exploreSearch');
  var searchClear  = document.getElementById('exploreSearchClear');

  function t(key, fallback) {
    var p = window.__marcoPack;
    return (p && p[key] !== undefined && p[key] !== '') ? p[key] : fallback;
  }
  function countrySlug(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }
  function normalize(str) {
    return str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]/g, '');
  }

  function buildCard(c) {
    var a = document.createElement('a');
    a.className = 'explore-card';
    a.href = c.url || '#';
    var thumbHtml = c.img
      ? '<img src="' + c.img + '" alt="' + c.name + '" loading="lazy" />'
      : '';
    a.innerHTML =
      '<div class="explore-card-thumb">' + thumbHtml + '</div>' +
      '<div class="explore-card-body">' +
        '<div class="explore-card-title-row">' +
          '<span class="explore-card-name">' + t('cg.country.' + countrySlug(c.name), c.name) + '</span>' +
          '<span class="explore-card-currency">' + c.currency + '</span>' +
        '</div>' +
        '<span class="explore-card-date">' + t('cg.card.updated', 'Last Updated by,') + ' ' + t('cg.date.' + countrySlug(c.name), c.date || '1 January 2026') + '</span>' +
      '</div>';
    return a;
  }

  function updateCarousel() {
    var numPos = Math.max(1, filtered.length - CARDS_PER_VIEW + 1);
    if (currentPage >= numPos) currentPage = numPos - 1;
    if (currentPage < 0) currentPage = 0;
    var atStart = currentPage === 0;
    var atEnd   = filtered.length <= CARDS_PER_VIEW || currentPage >= numPos - 1;

    track.style.transform = 'translateX(-' + (currentPage * PAGE_SCROLL) + 'px)';

    if (numPos > 1) {
      var pct = 100 / numPos;
      scrollThumb.style.width = pct + '%';
      scrollThumb.style.left  = (currentPage * pct) + '%';
    } else {
      scrollThumb.style.width = '100%';
      scrollThumb.style.left  = '0%';
    }

    chevLeft.disabled = atStart;
    chevLeftImg.src = atStart
      ? 'assets/HR Knowledge Hub/Country Guide/icons/chevron-left-inactive.svg'
      : 'assets/HR Knowledge Hub/Country Guide/icons/chevron-left-active.svg';
    chevRight.disabled = atEnd;
    chevRightImg.src = atEnd
      ? 'assets/HR Knowledge Hub/Country Guide/icons/chevron-right-inactive.svg'
      : 'assets/HR Knowledge Hub/Country Guide/icons/chevron-right-active.svg';
  }

  function render(query) {
    var q = normalize(query || '');
    var currentUrl = window.location.href.split('/').pop().split('?')[0].replace(/\.html$/, '');
    filtered = EXPLORE_COUNTRIES.filter(function(c) {
      if (!c.date || c.date === 'Content Coming Soon') return false;
      return c.url.replace(/\.html$/, '') !== currentUrl && (!q || normalize(c.name).indexOf(q) !== -1 || normalize(t('cg.country.' + countrySlug(c.name), c.name)).indexOf(q) !== -1);
    });
    track.innerHTML = '';
    filtered.forEach(function(c) { track.appendChild(buildCard(c)); });
    emptyEl.style.display = filtered.length === 0 ? 'block' : 'none';
    currentPage = 0;
    updateCarousel();
  }

  chevLeft.addEventListener('click', function() {
    if (currentPage > 0) { currentPage--; updateCarousel(); }
  });
  chevRight.addEventListener('click', function() {
    var numPos = Math.max(1, filtered.length - CARDS_PER_VIEW + 1);
    if (currentPage < numPos - 1) { currentPage++; updateCarousel(); }
  });

  searchInput.addEventListener('input', function() {
    searchClear.classList.toggle('visible', searchInput.value.length > 0);
    render(searchInput.value);
  });
  searchClear.addEventListener('click', function() {
    searchInput.value = '';
    searchClear.classList.remove('visible');
    render('');
    searchInput.focus();
  });

  document.getElementById('exploreViewport').addEventListener('wheel', function(e) {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) e.preventDefault();
  }, { passive: false });

  render('');

  document.addEventListener('marcolangready', function() {
    render(searchInput ? searchInput.value : '');
  });

  /* Recompute metrics on resize so carousel snaps to the correct card+gap */
  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      var next = getMetrics();
      if (next.CARD_WIDTH !== CARD_WIDTH || next.GAP !== GAP || next.CARDS_PER_VIEW !== CARDS_PER_VIEW) {
        CARD_WIDTH = next.CARD_WIDTH;
        GAP = next.GAP;
        PAGE_SCROLL = CARD_WIDTH + GAP;
        CARDS_PER_VIEW = next.CARDS_PER_VIEW;
        currentPage = 0;
        updateCarousel();
      }
    }, 150);
  });
})();

/* ── Standardized TOC labels across every country page ── */
(function() {
  var TOC_LABELS = {
    'toc-text-cost':        'Cost of Living',
    'toc-text-salary':      'Salary Benchmark',
    'toc-text-benefits':    'Statutory Benefits',
    'toc-text-tax':         'Income Tax',
    'toc-text-hours':       'Working Hours',
    'toc-text-contract':    'Employment Contracts',
    'toc-text-leave':       'Leave Entitlements',
    'toc-text-holidays':    '2026 Public Holiday',
    'toc-text-regulations': 'Key Regulations'
  };
  function applyLabels() {
    Object.keys(TOC_LABELS).forEach(function(id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.textContent = TOC_LABELS[id];
      el.removeAttribute('data-i18n');  // prevent lang loader from overriding
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyLabels);
  } else {
    applyLabels();
  }
  // Re-apply after lang loader finishes, in case it ran between our removal and load
  document.addEventListener('marcolangready', applyLabels);
})();

/* ── Tablet TOC top-bar: click-to-expand toggle ── */
(function() {
  function init() {
    var toc = document.querySelector('.article-toc');
    if (!toc) return;
    var title = toc.querySelector('.toc-title');
    if (!title) return;
    title.addEventListener('click', function(e) {
      e.stopPropagation();
      toc.classList.toggle('is-expanded');
    });
    document.addEventListener('click', function(e) {
      if (toc.classList.contains('is-expanded') && !toc.contains(e.target)) {
        toc.classList.remove('is-expanded');
      }
    });
    toc.querySelectorAll('.toc-item').forEach(function(link) {
      link.addEventListener('click', function() {
        toc.classList.remove('is-expanded');
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
