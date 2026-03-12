/* works.js — Works page with category filtering for iPad */

(function() {
  'use strict';

  var currentFilter = 'all';

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

  updateClock();
  setInterval(updateClock, 60000);

  // ============================================================================
  // Render Filter Tabs
  // ============================================================================

  function renderFilterTabs() {
    const tabsEl = document.getElementById('filterTabs');
    if (!tabsEl) return;

    CATEGORIES.forEach(category => {
      const tab = document.createElement('button');
      tab.className = 'filter__tab';
      tab.textContent = category.label;
      tab.dataset.category = category.id;

      if (category.id === 'all') {
        tab.classList.add('filter__tab--active');
      }

      tab.addEventListener('click', function() {
        currentFilter = this.dataset.category;

        // Update active state
        document.querySelectorAll('.filter__tab').forEach(t => {
          t.classList.remove('filter__tab--active');
        });
        this.classList.add('filter__tab--active');

        // Re-render grid
        renderWorksGrid();
      });

      tabsEl.appendChild(tab);
    });
  }

  // ============================================================================
  // Render Works Grid
  // ============================================================================

  function renderWorksGrid() {
    const gridEl = document.getElementById('worksGrid');
    if (!gridEl) return;

    // Clear existing
    gridEl.innerHTML = '';

    // Filter projects
    const filteredProjects = currentFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter(p => p.categories.includes(currentFilter));

    // Render project cards
    filteredProjects.forEach(project => {
      const card = document.createElement('a');
      card.href = `project.html?id=${project.id}`;
      card.className = 'project-card fade-in';

      const img = document.createElement('img');
      img.src = project.image.src;
      img.alt = project.image.alt;
      img.className = 'project-card__image';
      img.loading = 'lazy';

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
  // Touch Feedback
  // ============================================================================

  function addTouchFeedback() {
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
  // Prevent Default Behaviors
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
    renderFilterTabs();
    renderWorksGrid();
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
