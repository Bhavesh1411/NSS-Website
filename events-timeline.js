/*
  NSS TSEC Mumbai - Events Timeline Animations
  Powered by GSAP ScrollTrigger
*/

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // ═══════════════════════════════
  // HERO TEXT ENTRANCE
  // ═══════════════════════════════
  const heroTl = gsap.timeline({ delay: 0.3 });

  heroTl.to('.timeline-hero-title', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out'
  })
  .to('.timeline-hero-subtitle', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5');

  // ═══════════════════════════════
  // PROGRESSIVE TIMELINE SPINE FILL
  // ═══════════════════════════════
  const timelineFill = document.getElementById('timeline-fill');
  const timelineWrapper = document.querySelector('.timeline-wrapper');

  if (timelineFill && timelineWrapper) {
    ScrollTrigger.create({
      trigger: timelineWrapper,
      start: 'top 80%',
      end: 'bottom 20%',
      onUpdate: (self) => {
        const progress = Math.min(self.progress * 100, 100);
        timelineFill.style.height = progress + '%';
      }
    });
  }

  // ═══════════════════════════════
  // STAGGERED CARD REVEAL
  // ═══════════════════════════════
  const timelineItems = document.querySelectorAll('.timeline-item');

  timelineItems.forEach((item, index) => {
    // Determine slide direction based on alignment
    const isLeft = item.classList.contains('timeline-left');
    const xStart = isLeft ? 60 : -60;

    ScrollTrigger.create({
      trigger: item,
      start: 'top 88%',
      onEnter: () => {
        item.classList.add('is-visible');

        gsap.to(item, {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.05
        });
      },
      once: true
    });

    // Set initial horizontal offset for the zig-zag entrance
    gsap.set(item, {
      x: xStart
    });
  });

  // ═══════════════════════════════
  // IMAGE LIGHTBOX MODAL
  // ═══════════════════════════════
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightbox && lightboxImg && lightboxClose) {

    // Assign placeholder images to each card via data-img
    // (Replace these URLs with real event photos later)
    const cards = document.querySelectorAll('.timeline-card');
    cards.forEach((card, i) => {
      if (!card.dataset.img) {
        card.dataset.img = 'https://placehold.co/800x600';
      }
    });

    // Open lightbox on card click
    document.querySelectorAll('.timeline-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const imgSrc = card.dataset.img;
        if (imgSrc) {
          lightboxImg.src = imgSrc;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    // Close lightbox
    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      // Clear src after transition to prevent stale image flash
      setTimeout(() => {
        lightboxImg.src = '';
      }, 400);
    }

    lightboxClose.addEventListener('click', closeLightbox);

    // Close on overlay click (but not on image click)
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }
});
