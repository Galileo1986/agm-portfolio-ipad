/* main.js — Core functionality for iPad portfolio */

(function() {
  'use strict';

  // ============================================================================
  // Clock
  // ============================================================================

  function updateClock() {
    const now = new Date();
    const options = {
      timeZone: SITE_CONFIG.timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    const timeString = now.toLocaleTimeString('en-US', options);
    const clockEl = document.getElementById('clock');
    if (clockEl) {
      clockEl.textContent = `${timeString} ${SITE_CONFIG.timezoneLabel}`;
    }
  }

  // Update clock every minute
  updateClock();
  setInterval(updateClock, 60000);

  // ============================================================================
  // Selected Works (Featured Projects Only)
  // ============================================================================

  function renderWorksGrid() {
    const gridEl = document.getElementById('worksGrid');
    if (!gridEl) return;

    // Only show featured projects
    const featuredProjects = PROJECTS.filter(p => p.featured);

    featuredProjects.forEach(project => {
      const card = document.createElement('a');
      card.href = `project.html?id=${project.id}`;
      card.className = 'project-card';

      const img = document.createElement('img');
      img.src = project.image.src;
      img.alt = project.image.alt;
      img.className = 'project-card__image';
      img.loading = 'lazy';

      // Handle image load
      img.addEventListener('load', function() {
        this.classList.add('loaded');
      });

      const name = document.createElement('h3');
      name.className = 'project-card__name';
      name.textContent = project.name;

      const tagline = document.createElement('p');
      tagline.className = 'project-card__tagline';
      tagline.textContent = project.tagline;

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(tagline);
      gridEl.appendChild(card);
    });
  }

  // ============================================================================
  // Services Grid
  // ============================================================================

  function renderServices() {
    const gridEl = document.getElementById('servicesGrid');
    if (!gridEl) return;

    SERVICES.forEach(service => {
      const card = document.createElement('div');
      card.className = 'service-card';

      const img = document.createElement('img');
      img.src = service.image.src;
      img.alt = service.image.alt;
      img.className = 'service-card__image';
      img.loading = 'lazy';

      img.addEventListener('load', function() {
        this.classList.add('loaded');
      });

      const name = document.createElement('h3');
      name.className = 'service-card__name';
      name.textContent = service.name;

      const description = document.createElement('p');
      description.className = 'service-card__description';
      description.textContent = service.description;

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(description);
      gridEl.appendChild(card);
    });
  }

  // ============================================================================
  // About Section
  // ============================================================================

  function renderAbout() {
    const textEl = document.getElementById('aboutText');
    if (!textEl) return;

    BIO_TEXT.forEach(paragraph => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      textEl.appendChild(p);
    });

    // Handle portrait image loading
    const portraitImg = document.querySelector('.about__portrait');
    if (portraitImg) {
      portraitImg.addEventListener('load', function() {
        this.classList.add('loaded');
      });
      // If image is already cached/loaded
      if (portraitImg.complete) {
        portraitImg.classList.add('loaded');
      }
    }
  }

  // ============================================================================
  // Touch Feedback Enhancement
  // ============================================================================

  function addTouchFeedback() {
    // Add visual feedback for all interactive elements
    const interactiveElements = document.querySelectorAll('a, button');

    interactiveElements.forEach(el => {
      el.addEventListener('touchstart', function() {
        this.style.opacity = '0.7';
      }, { passive: true });

      el.addEventListener('touchend', function() {
        this.style.opacity = '1';
      }, { passive: true });

      el.addEventListener('touchcancel', function() {
        this.style.opacity = '1';
      }, { passive: true });
    });
  }

  // ============================================================================
  // Prevent default zoom/scroll behaviors for app-like feel
  // ============================================================================

  function preventDefaultBehaviors() {
    // Prevent double-tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    }, { passive: false });

    // Prevent pinch zoom on document (but allow on images)
    document.addEventListener('gesturestart', function(e) {
      if (e.target.tagName !== 'IMG') {
        e.preventDefault();
      }
    });
  }

  // ============================================================================
  // Initialize
  // ============================================================================

  function init() {
    renderWorksGrid();
    renderServices();
    renderAbout();
    addTouchFeedback();
    preventDefaultBehaviors();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
