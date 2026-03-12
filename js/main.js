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
  // Projects Grid (Homepage)
  // ============================================================================

  function renderProjectsGrid() {
    const gridEl = document.getElementById('projectsGrid');
    if (!gridEl) return;

    // Sort projects: featured first, then rest
    const sortedProjects = [...PROJECTS].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

    sortedProjects.forEach(project => {
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
    renderProjectsGrid();
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
