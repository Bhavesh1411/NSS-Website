/*
  NSS TSEC Mumbai — Events Timeline Interactions
  Horizontal Calendar Strip · Click-to-reveal cards · Lightbox
*/

/* ─── Category → Emoji map ─── */
const CATEGORY_ICON = {
  'hackathon':       '💻',
  'health drive':    '❤️',
  'cultural event':  '🎭',
  'awareness':       '📢',
  'seminar':         '🎓',
  'event series':    '🗓️',
  'patriotic event': '🇮🇳',
  'sports':          '🏅',
  'environment':     '🌱',
  'rally':           '📣',
  'ceremony':        '🏆',
  'celebration':     '🎉',
  'orientation':     '🎯',
};

function getCategoryIcon(tag) {
  return CATEGORY_ICON[tag.toLowerCase()] || '📌';
}

/* ─── All NSS Events Data ─── */
const NSS_EVENTS = [
  /* February 2026 */
  { date: '21 Feb 2026', title: "Day 2 Hackspark's 2.0",          tag: 'Hackathon'       },
  { date: '20 Feb 2026', title: "Day 1 Hackspark's 2.0",          tag: 'Hackathon'       },
  { date: '06 Feb 2026', title: 'Blood Donation Camp',             tag: 'Health Drive'    },

  /* January 2026 */
  { date: '31 Jan 2026', title: 'AAROHAN',                         tag: 'Cultural Event'  },
  { date: '30 Jan 2026', title: 'AAROHAN',                         tag: 'Cultural Event'  },
  { date: '30 Jan 2026', title: 'Medical Checkup Camp',            tag: 'Health Drive'    },
  { date: '29 Jan 2026', title: 'FE SSC Awareness Program',        tag: 'Awareness'       },
  { date: '29 Jan 2026', title: 'AAROHAN',                         tag: 'Cultural Event'  },
  { date: '28 Jan 2026', title: 'TPC Guide on Future Seminar',     tag: 'Seminar'         },
  { date: '17 Jan 2026', title: 'Aventura',                        tag: 'Event Series'    },
  { date: '15 Jan 2026', title: 'Aventura',                        tag: 'Event Series'    },
  { date: '14 Jan 2026', title: 'Aventura',                        tag: 'Event Series'    },
  { date: '13 Jan 2026', title: 'Aventura',                        tag: 'Event Series'    },
  { date: '12 Jan 2026', title: 'Aventura',                        tag: 'Event Series'    },
  { date: '07 Jan 2026', title: 'Women Health Awareness',          tag: 'Awareness'       },
  { date: '05 Jan 2026', title: 'Voting Awareness',                tag: 'Awareness'       },

  /* December 2025 */
  { date: '22 Dec 2025', title: 'Youth Mental Health & Suicide Prevention Awareness', tag: 'Awareness' },
  { date: '19 Dec 2025', title: 'Awareness On Street Dogs',        tag: 'Awareness'       },

  /* November 2025 */
  { date: '19 Nov 2025', title: 'Reforming the Justice System',    tag: 'Seminar'         },
  { date: '07 Nov 2025', title: '150 Years Grand Vande Mataram Singing', tag: 'Patriotic Event' },

  /* October 2025 */
  { date: '30 Oct 2025', title: 'Pledge on National Unity Day',    tag: 'Patriotic Event' },
  { date: '17 Oct 2025', title: 'Prarambh Sports Day',             tag: 'Sports'          },
  { date: '03 Oct 2025', title: 'Tree Plantation Drive',           tag: 'Environment'     },

  /* September 2025 */
  { date: '28 Sep 2025', title: 'Rally on Swachha Bharat',         tag: 'Rally'           },
  { date: '27 Sep 2025', title: 'Rally on Swachha Bharat',         tag: 'Rally'           },
  { date: '26 Sep 2025', title: 'Smart India Hackathon',           tag: 'Hackathon'       },
  { date: '25 Sep 2025', title: 'Oath Ceremony',                   tag: 'Ceremony'        },
  { date: '24 Sep 2025', title: 'NSS Day',                         tag: 'Celebration'     },
  { date: '21 Sep 2025', title: 'Rally on Women Empowerment',      tag: 'Rally'           },
  { date: '20 Sep 2025', title: 'Beach Cleaning Drive',            tag: 'Environment'     },
  { date: '20 Sep 2025', title: 'Rally on Women Empowerment',      tag: 'Rally'           },
  { date: '16 Sep 2025', title: 'FE Orientation',                  tag: 'Orientation'     },
  { date: '14 Sep 2025', title: 'Rally on Peace and Anti-Violence',tag: 'Rally'           },
  { date: '13 Sep 2025', title: 'Rally on Peace and Anti-Violence',tag: 'Rally'           },
  { date: '05 Sep 2025', title: 'Teachers Day',                    tag: 'Celebration'     },

  /* August 2025 */
  { date: '02 Sep 2025', title: 'Ganpati Visarjan 7 Day',          tag: 'Cultural Event'  },
  { date: '31 Aug 2025', title: 'Rally on Cancer Awareness',       tag: 'Awareness'       },
  { date: '31 Aug 2025', title: 'Ganpati Visarjan 5 Day',          tag: 'Cultural Event'  },
  { date: '30 Aug 2025', title: 'Rally on Cancer Awareness',       tag: 'Awareness'       },
  { date: '25 Aug 2025', title: 'Seminar on Communication Skills', tag: 'Seminar'         },
  { date: '24 Aug 2025', title: 'Rally on Drugs and Anti-Alcohol', tag: 'Rally'           },
  { date: '23 Aug 2025', title: 'Rally on Drugs and Anti-Alcohol', tag: 'Rally'           },
  { date: '15 Aug 2025', title: 'Antiplastic Campaign',            tag: 'Environment'     },
  { date: '15 Aug 2025', title: 'Patriotic Rally',                 tag: 'Patriotic Event' },
  { date: '15 Aug 2025', title: 'Flag Hoisting',                   tag: 'Patriotic Event' },
  { date: '10 Aug 2025', title: 'Rally on Dengue and Malaria Awareness', tag: 'Awareness' },
  { date: '09 Aug 2025', title: 'Rally on Dengue and Malaria Awareness', tag: 'Awareness' },
  { date: '03 Aug 2025', title: 'Rally on Road Safety',            tag: 'Rally'           },
  { date: '02 Aug 2025', title: 'Rally on Road Safety',            tag: 'Rally'           },

  /* July 2025 */
  { date: '29 Jul 2025', title: 'Seminar on Preparing Engineers for Industry Expectations', tag: 'Seminar' },
  { date: '27 Jul 2025', title: 'Rally on Save Fuel Campaign',     tag: 'Rally'           },
  { date: '26 Jul 2025', title: 'Rally on Save Fuel Campaign',     tag: 'Rally'           },
  { date: '21 Jul 2025', title: 'Seminar on NPTEL',                tag: 'Seminar'         },
  { date: '20 Jul 2025', title: 'Rally on Save Water',             tag: 'Rally'           },
  { date: '19 Jul 2025', title: 'Rally on Save Water',             tag: 'Rally'           },
  { date: '11 Jul 2025', title: 'CPR Training',                    tag: 'Health Drive'    },
  { date: '11 Jul 2025', title: 'Health Checkup Camp',             tag: 'Health Drive'    },
];

/* ─── Group events by "Month YYYY" ─── */
function groupByMonth(events) {
  const monthNames = ['January','February','March','April','May','June',
                      'July','August','September','October','November','December'];
  const map = new Map();
  events.forEach(ev => {
    const parts = ev.date.split(' '); // ["21", "Feb", "2026"]
    const mon = new Date(`${parts[1]} ${parts[0]}, ${parts[2]}`);
    const key = `${monthNames[mon.getMonth()]} ${mon.getFullYear()}`;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(ev);
  });
  return map;
}

/* Module-level grouped Map so click handlers can access it */
const GROUPED = groupByMonth(NSS_EVENTS);

/* ─── Build card inner HTML ─── */
function buildCardHTML(ev) {
  const icon = getCategoryIcon(ev.tag);
  return `
    <div class="card-icon">${icon}</div>
    <div class="card-body">
      <span class="card-date-badge">${ev.date}</span>
      <h4 class="card-title">${ev.title}</h4>
      <p class="card-tag">${ev.tag}</p>
    </div>
    <button
      class="card-view-btn"
      aria-label="View photo for ${ev.title}"
      title="View Photo"
      data-img="https://placehold.co/800x600"
    >&#128247;</button>`;
}

/* ─── Build HTML for one month block ─── */
function buildMonthBlock(monthLabel, events, monthIndex) {
  const [monthName, year] = monthLabel.split(' ');

  const nodes = events.map((ev, i) => {
    // Strip year from date label: "21 Feb 2026" → "21 Feb"
    const dateParts = ev.date.split(' ');
    const dateShort = `${dateParts[0]} ${dateParts[1]}`;
    const isFirst = i === 0;
    return `<button
        class="strip-node${isFirst ? ' is-active' : ''}"
        data-month="${monthIndex}"
        data-event="${i}"
        aria-label="View event: ${ev.title} on ${ev.date}"
        aria-pressed="${isFirst ? 'true' : 'false'}"
        id="node-m${monthIndex}-e${i}"
      ><div class="node-dot"></div><div class="node-tick"></div><div class="node-date">${dateShort}</div><div class="node-title">${ev.title}</div></button>`;
  }).join('\n');

  const firstCardHTML = buildCardHTML(events[0]);

  return `<div class="month-block" data-month="${monthIndex}">
      <div class="month-meta">
        <h3 class="month-heading">${monthName} <span>${year}</span></h3>
        <span class="event-count-badge">${events.length} event${events.length > 1 ? 's' : ''}</span>
      </div>
      <div class="strip-scroll-wrapper" role="region" aria-label="${monthLabel} events timeline">
        <div class="strip-track">${nodes}</div>
      </div>
      <div class="month-event-display" id="display-m${monthIndex}" aria-live="polite">
        <div class="cal-event-card is-visible" id="card-m${monthIndex}">${firstCardHTML}</div>
      </div>
    </div>`;
}

/* ─── Main DOMContentLoaded ─── */
document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Inject month blocks into the timeline section ── */
  const container = document.querySelector('#timeline .container');
  if (container) {
    let html = '';
    let monthIndex = 0;
    GROUPED.forEach((events, monthLabel) => {
      html += buildMonthBlock(monthLabel, events, monthIndex);
      monthIndex++;
    });
    container.innerHTML = html;
  }

  /* ── 2. Node click handler (event delegation) ── */
  document.addEventListener('click', (e) => {
    const node = e.target.closest('.strip-node');
    if (!node) return;

    const monthIndex = parseInt(node.dataset.month, 10);
    const eventIndex = parseInt(node.dataset.event, 10);
    const monthBlock = document.querySelector(`.month-block[data-month="${monthIndex}"]`);
    if (!monthBlock) return;

    /* Deactivate all nodes in this month */
    monthBlock.querySelectorAll('.strip-node').forEach(n => {
      n.classList.remove('is-active');
      n.setAttribute('aria-pressed', 'false');
    });

    /* Activate clicked node */
    node.classList.add('is-active');
    node.setAttribute('aria-pressed', 'true');

    /* Retrieve event from GROUPED map */
    const monthKeys = Array.from(GROUPED.keys());
    const monthLabel = monthKeys[monthIndex];
    const events = GROUPED.get(monthLabel);
    if (!events) return;
    const ev = events[eventIndex];
    if (!ev) return;

    /* Animate card swap */
    const cardEl = document.getElementById(`card-m${monthIndex}`);
    if (cardEl) {
      cardEl.classList.remove('is-visible');
      setTimeout(() => {
        cardEl.innerHTML = buildCardHTML(ev);
        // Double rAF ensures transition fires after paint
        requestAnimationFrame(() => requestAnimationFrame(() => {
          cardEl.classList.add('is-visible');
        }));
      }, 220);
    }
  });

  /* ── 3. Hero text entrance animation ── */
  const heroTitle = document.querySelector('.timeline-hero-title');
  const heroSub   = document.querySelector('.timeline-hero-subtitle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    if (heroTitle) { heroTitle.style.opacity = '1'; heroTitle.style.transform = 'none'; }
    if (heroSub)   { heroSub.style.opacity   = '1'; heroSub.style.transform   = 'none'; }
  } else {
    setTimeout(() => {
      if (heroTitle) {
        heroTitle.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        heroTitle.style.opacity    = '1';
        heroTitle.style.transform  = 'translateY(0)';
      }
      setTimeout(() => {
        if (heroSub) {
          heroSub.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          heroSub.style.opacity    = '1';
          heroSub.style.transform  = 'translateY(0)';
        }
      }, 400);
    }, 300);
  }

  /* ── 4. Lightbox ── */
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(src) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => { if (lightboxImg) lightboxImg.src = ''; }, 400);
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) closeLightbox();
  });

  /* Delegate camera-button clicks to open lightbox */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.card-view-btn');
    if (!btn) return;
    e.stopPropagation();
    openLightbox(btn.dataset.img || 'https://placehold.co/800x600');
  });
});
