/* ── Explore More carousel — Payroll Guide ── */
(function() {
  var CARD_WIDTH = 340;
  var GAP = 40;
  var PAGE_SCROLL = CARD_WIDTH + GAP;
  var CARDS_PER_VIEW = 3;
  var currentPage = 0;
  var filtered = [];

  var EXPLORE_COUNTRIES = PAYROLL_GUIDE_COUNTRIES_DATA;

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
    a.href = c.link || '#';
    var thumbHtml = c.img
      ? '<img src="' + c.img + '" alt="' + c.name + '" loading="lazy" />'
      : '';
    var dateText = c.date
      ? t('pg.card.updated', 'Last Updated by,') + ' ' + t('pg.date.' + countrySlug(c.name), c.date)
      : 'Content Coming Soon';
    a.innerHTML =
      '<div class="explore-card-thumb">' + thumbHtml + '</div>' +
      '<div class="explore-card-body">' +
        '<div class="explore-card-title-row">' +
          '<span class="explore-card-name">' + t('pg.country.' + countrySlug(c.name), c.name) + '</span>' +
          '<span class="explore-card-currency">' + c.currency + '</span>' +
        '</div>' +
        '<span class="explore-card-date">' + dateText + '</span>' +
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
      ? 'assets/HR Knowledge Hub/Payroll Guide/assets/chevron-left-inactive.svg'
      : 'assets/HR Knowledge Hub/Payroll Guide/assets/chevron-left-active.svg';
    chevRight.disabled = atEnd;
    chevRightImg.src = atEnd
      ? 'assets/HR Knowledge Hub/Payroll Guide/assets/chevron-right-inactive.svg'
      : 'assets/HR Knowledge Hub/Payroll Guide/assets/chevron-right-active.svg';
  }

  function render(query) {
    var q = normalize(query || '');
    var currentUrl = window.location.href.split('/').pop().split('?')[0].replace(/\.html$/, '');
    filtered = EXPLORE_COUNTRIES.filter(function(c) {
      if (!c.date) return false;
      return c.link.replace(/\.html$/, '') !== currentUrl && (!q || normalize(c.name).indexOf(q) !== -1 || normalize(t('pg.country.' + countrySlug(c.name), c.name)).indexOf(q) !== -1);
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
})();
