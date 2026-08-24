// Shared behavior for every Memo article page's HERO, "More From Marco"
// (Recommended Reads) section, and the article body's TOC/CTA layout.
// Each page must set `window.MEMO_CURRENT_ARTICLE = '<its own filename>.html'`
// and load memo-articles-data.js BEFORE this script, so the carousel below
// knows which article to exclude from its own "More From Marco" list.

/* ── Nav height → CSS variable (keeps thumbnail flush with nav bottom) ── */
(function() {
  function setNavH() {
    var h = document.querySelector('.nav').getBoundingClientRect().height;
    document.documentElement.style.setProperty('--nav-h', h + 'px');
  }
  setNavH();
  window.addEventListener('resize', setNavH);
})();

/* ── More From Marco carousel (data-driven) ── */
(function() {
  var track = document.getElementById('moreTrack');
  if (!track) return;

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  var articles = (window.MEMO_ARTICLES_DATA || []).filter(function(a) {
    return a.file !== window.MEMO_CURRENT_ARTICLE;
  });

  track.innerHTML = articles.map(function(a) {
    var title = escapeHtml(a.title);
    return (
      '<div class="more-card">' +
        '<a href="' + a.file + '" class="more-card-overlay" aria-label="' + title + '"></a>' +
        '<div class="more-card-thumb"><img src="' + a.img + '" alt="' + title + '" /></div>' +
        '<div class="more-card-body">' +
          '<div class="more-card-meta">' +
            '<span class="more-card-read-time">' + escapeHtml(a.readTime) + '</span>' +
            '<p class="more-card-title">' + title + '</p>' +
          '</div>' +
          '<a href="' + a.file + '" class="more-card-cta">Read more <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#162351" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>' +
        '</div>' +
      '</div>'
    );
  }).join('');

  var CARDS_PER_PAGE = 3;
  var TOTAL_CARDS = articles.length;
  var NUM_PAGES = Math.max(1, TOTAL_CARDS - CARDS_PER_PAGE + 1);
  var currentPage = 0;
  var chevLeft = document.getElementById('moreChevLeft');
  var chevRight = document.getElementById('moreChevRight');
  var chevLeftImg = document.getElementById('moreChevLeftImg');
  var chevRightImg = document.getElementById('moreChevRightImg');
  var scrollThumb = document.getElementById('moreScrollThumb');
  var viewport = document.getElementById('moreViewport');

  function getPageScroll() {
    var firstCard = track.querySelector('.more-card');
    if (!firstCard) return 0;
    var cardWidth = firstCard.getBoundingClientRect().width;
    var gap = parseFloat(getComputedStyle(track).gap) || 0;
    return cardWidth + gap;
  }

  function updateMore() {
    track.style.transform = 'translateX(-' + (currentPage * getPageScroll()) + 'px)';
    var thumbPct = 100 / NUM_PAGES;
    scrollThumb.style.width = thumbPct + '%';
    scrollThumb.style.left = (currentPage * thumbPct) + '%';
    var atStart = currentPage === 0;
    var atEnd = currentPage === NUM_PAGES - 1;
    chevLeft.disabled = atStart;
    chevLeftImg.src = atStart
      ? 'assets/HR Knowledge Hub/Memo/assets/chevron-left-inactive.svg'
      : 'assets/HR Knowledge Hub/Memo/assets/chevron-left-active.svg';
    chevRight.disabled = atEnd;
    chevRightImg.src = atEnd
      ? 'assets/HR Knowledge Hub/Memo/assets/chevron-right-inactive.svg'
      : 'assets/HR Knowledge Hub/Memo/assets/chevron-right-active.svg';
  }

  chevLeft.addEventListener('click', function() {
    if (currentPage > 0) { currentPage--; updateMore(); }
  });
  chevRight.addEventListener('click', function() {
    if (currentPage < NUM_PAGES - 1) { currentPage++; updateMore(); }
  });

  viewport.addEventListener('wheel', function(e) {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) e.preventDefault();
  }, { passive: false });

  window.addEventListener('resize', updateMore);

  // ── Swipe/drag support ──
  track.querySelectorAll('a, img').forEach(function(el) { el.draggable = false; });

  var dragging = false;
  var dragStartX = 0;
  var dragBaseX = 0;
  var dragCurrentX = 0;
  var didDrag = false;

  function currentTranslateX() {
    var m = getComputedStyle(track).transform;
    if (m === 'none') return 0;
    var parts = m.match(/matrix\(([^)]+)\)/);
    if (!parts) return 0;
    var vals = parts[1].split(',');
    return parseFloat(vals[4]) || 0;
  }

  track.addEventListener('pointerdown', function(e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragging = true;
    didDrag = false;
    dragStartX = e.clientX;
    dragBaseX = currentTranslateX();
    dragCurrentX = dragBaseX;
    track.style.transition = 'none';
  });

  window.addEventListener('pointermove', function(e) {
    if (!dragging) return;
    var dx = e.clientX - dragStartX;
    if (Math.abs(dx) > 5) didDrag = true;
    var next = dragBaseX + dx;
    var minX = -((NUM_PAGES - 1) * getPageScroll());
    var maxX = 0;
    if (next > maxX) next = maxX + (next - maxX) / 3;
    if (next < minX) next = minX + (next - minX) / 3;
    dragCurrentX = next;
    track.style.transform = 'translateX(' + next + 'px)';
  });

  track.addEventListener('click', function(e) {
    if (didDrag) { e.preventDefault(); e.stopPropagation(); }
  }, true);

  function endDrag(e) {
    if (!dragging) return;
    dragging = false;
    track.style.transition = '';
    var pageScroll = getPageScroll();
    var draggedBy = dragCurrentX - dragBaseX;
    var threshold = pageScroll * 0.2;
    if (draggedBy < -threshold && currentPage < NUM_PAGES - 1) {
      currentPage++;
    } else if (draggedBy > threshold && currentPage > 0) {
      currentPage--;
    }
    updateMore();
  }

  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);

  updateMore();
})();

/* ── Tablet TOC top-bar: click-to-expand toggle (ported from country-guide-carousel.js) ── */
(function() {
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
})();

/* ── CTA copy-link button ── */
(function() {
  var copyBtn = document.getElementById('copyLinkBtn');
  if (!copyBtn) return;
  copyBtn.addEventListener('click', function() {
    var url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(function() { flashCopied(); });
    } else {
      var ta = document.createElement('textarea');
      ta.value = url; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
      flashCopied();
    }
    function flashCopied() {
      copyBtn.classList.add('cta-copied');
      setTimeout(function() { copyBtn.classList.remove('cta-copied'); }, 1500);
    }
  });
})();
