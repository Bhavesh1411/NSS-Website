/* NSS TSEC Mumbai — Option 4: event card grid only (Academic Year 2026–27). */
(() => {
  'use strict';

  const NSS_EVENTS_2026_27 = [
  /* September 2026 */
  { date: '27 Sep 2026', title: 'Beach Cleaning Gorai',                    tag: 'Environment',     venue: 'Gorai',                      photo: 'assets/Events/beach-cleaning.jpeg' },
  { date: '25 Sep 2026', title: 'Helping Traffic Management in Visarjan',  tag: 'Social Service',  venue: 'Mumbai',                     photo: 'assets/Events/traffic management ganpati vishrajan.jpg' },
  { date: '24 Sep 2026', title: 'Karuna',                                  tag: 'Celebration',     venue: 'TSEC',                       photo: 'assets/Events/Karuna 2026.jpg' },
  { date: '18 Sep 2026', title: 'Ganpati Visarjan',                        tag: 'Cultural Event',  venue: 'Mumbai',                     photo: 'assets/Events/ganpati vishrajan.jpg' },
  { date: '15 Sep 2026', title: 'Ganpati Visarjan',                        tag: 'Cultural Event',  venue: 'Mumbai',                     photo: 'assets/Events/ganpati vishrajan.jpg' },

  /* August 2026 */
  { date: '25 Aug 2026', title: 'SGNP Kanheri Caves Visit',                tag: 'Environment',     venue: 'Sanjay Gandhi National Park', photo: 'assets/Events/kanheri caves.jpg' },
  { date: '15 Aug 2026', title: 'Independence Day',                        tag: 'Patriotic Event', venue: 'TSEC',                       photo: 'assets/Events/independence day.jpg' },
  { date: '14 Aug 2026', title: 'Health Checkup Camp',                     tag: 'Health Drive',    venue: 'TSEC',                       photo: 'assets/Events/health-checkup.jpg' },
  { date: '12 Aug 2026', title: 'Tree Plantation Drive',                   tag: 'Environment',     venue: 'Borivali West',              photo: 'assets/Events/tree plantation.jpg' },
  { date: '08 Aug 2026', title: 'SGNP Awareness Program',                  tag: 'Awareness',       venue: 'Sanjay Gandhi National Park', photo: 'assets/Events/sgnp awareness.jpg' },

  /* July 2026 */
  { date: '31 Jul 2026', title: 'NSS Orientation',                         tag: 'Orientation',     venue: 'TSEC',                       photo: 'assets/Events/nss-orientation.jpg' },
  { date: '30 Jul 2026', title: 'Nasha Mukti Awareness',                   tag: 'Awareness',       venue: 'TSEC',                       photo: 'assets/Events/nasha-mukti.jpg' },
  { date: '24 Jul 2026', title: 'Kargil Diwas Celebration',                tag: 'Patriotic Event', venue: 'TSEC',                       photo: 'assets/Events/Kargil Diwas.jpg' },

  /* June 2026 */
  { date: '21 Jun 2026', title: 'International Yoga Day',                  tag: 'Health Drive',    venue: 'TSEC',                       photo: 'assets/Events/international-yoga day.jpg' }
];
  const grid = document.getElementById('events-grid');
  const searchInput = document.getElementById('event-search');
  const clearButton = document.getElementById('filter-clear');
  const chipsContainer = document.getElementById('filter-chips');
  const noResults = document.getElementById('filter-no-results');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  let activeTag = 'all';

  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);

  const sortedEvents = [...NSS_EVENTS_2026_27].sort((a, b) => {
    const parseDate = (date) => new Date(date.replace(/^(\d{1,2}) ([A-Za-z]{3}) (\d{4})$/, '$2 $1, $3'));
    return parseDate(b.date) - parseDate(a.date);
  });

  function buildFilters() {
    if (!chipsContainer) return;
    const tags = [...new Set(sortedEvents.map(event => event.tag).filter(Boolean))].sort();
    chipsContainer.innerHTML = '<button class="filter-chip is-active" data-tag="all" id="chip-all">All</button>' +
      tags.map(tag => `<button class="filter-chip" data-tag="${escapeHTML(tag.toLowerCase())}">${escapeHTML(tag)}</button>`).join('');
  }

  function renderEvents() {
    if (!grid) return;
    const query = (searchInput?.value || '').trim().toLowerCase();
    const filtered = sortedEvents.filter(event => {
      const matchesTag = activeTag === 'all' || String(event.tag || '').toLowerCase() === activeTag;
      const matchesSearch = [event.title, event.tag, event.date, event.venue].some(value => String(value || '').toLowerCase().includes(query));
      return matchesTag && matchesSearch;
    });

    grid.innerHTML = filtered.map(event => {
      const image = event.photo ? escapeHTML(event.photo) : '';
      const imageMarkup = image
        ? `<img class="event-card-image" src="${image}" alt="${escapeHTML(event.title)}" loading="lazy" onerror="this.closest('.event-card-media').classList.add('image-unavailable'); this.remove();">`
        : '';
      return `<article class="event-card">
        <div class="event-card-media${image ? '' : ' image-unavailable'}">
          ${imageMarkup}
          <span class="event-card-date">${escapeHTML(event.date)}</span>
          ${image ? `<button class="event-card-zoom" type="button" data-img="${image}" data-title="${escapeHTML(event.title)}" aria-label="View photo for ${escapeHTML(event.title)}" title="View photo">⤢</button>` : ''}
        </div>
        <div class="event-card-content">
          <span class="event-card-category">${escapeHTML(event.tag || 'NSS Event')}</span>
          <h3 class="event-card-title">${escapeHTML(event.title)}</h3>
          ${event.venue ? `<p class="event-card-venue">📍 ${escapeHTML(event.venue)}</p>` : ''}
        </div>
      </article>`;
    }).join('');

    if (noResults) noResults.hidden = filtered.length !== 0;
    if (clearButton) clearButton.hidden = !query;
  }

  function openLightbox(src, title) {
    if (!lightbox || !lightboxImg || !src) return;
    lightboxImg.src = src;
    lightboxImg.alt = title || 'Event photo';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    if (lightboxImg) lightboxImg.src = '';
  }

  buildFilters();
  renderEvents();
  searchInput?.addEventListener('input', renderEvents);
  clearButton?.addEventListener('click', () => {
    if (searchInput) { searchInput.value = ''; searchInput.focus(); }
    renderEvents();
  });
  chipsContainer?.addEventListener('click', event => {
    const chip = event.target.closest('[data-tag]');
    if (!chip) return;
    activeTag = chip.dataset.tag || 'all';
    chipsContainer.querySelectorAll('.filter-chip').forEach(button => {
      const selected = button === chip;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    renderEvents();
  });
  grid?.addEventListener('click', event => {
    const button = event.target.closest('.event-card-zoom');
    if (button) openLightbox(button.dataset.img, button.dataset.title);
  });
  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeLightbox(); });
})();
