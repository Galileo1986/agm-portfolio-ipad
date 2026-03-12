/* project-detail.js — Project detail page functionality */

(function() {
  'use strict';

  // Get project ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');

  if (!projectId || !PROJECT_DETAILS[projectId]) {
    window.location.href = 'index.html';
    return;
  }

  const projectData = PROJECT_DETAILS[projectId];
  const projectIndex = PROJECTS.findIndex(p => p.id === projectId);

  // ============================================================================
  // Render Project Detail
  // ============================================================================

  function renderProjectDetail() {
    // Update page title
    document.getElementById('pageTitle').textContent = `${PROJECTS[projectIndex].name} — Atelier Galileo Morandi`;

    // Hero section
    document.getElementById('projTitle').textContent = PROJECTS[projectIndex].name;
    document.getElementById('projSubtitle').textContent = projectData.subtitle;

    // Hero image
    const heroImg = document.getElementById('projHeroImg');
    heroImg.src = projectData.heroImage.src;
    heroImg.alt = projectData.heroImage.alt;
    heroImg.addEventListener('load', function() {
      this.classList.add('loaded');
    });

    // Metadata left column
    const metaLeft = document.getElementById('projMetaLeft');

    Object.entries(projectData.meta).forEach(([key, value]) => {
      const metaGroup = document.createElement('div');
      metaGroup.className = 'project__meta-group';

      const label = document.createElement('span');
      label.className = 'project__label';
      label.textContent = key.toUpperCase();

      const valueEl = document.createElement('span');
      valueEl.className = 'project__meta-value';
      if (Array.isArray(value)) {
        valueEl.textContent = value.join(', ');
      } else {
        valueEl.textContent = value;
      }

      metaGroup.appendChild(label);
      metaGroup.appendChild(valueEl);
      metaLeft.appendChild(metaGroup);
    });

    // Info text
    document.getElementById('projInfo').textContent = projectData.info;

    // Gallery
    renderGallery();

    // Navigation
    setupNavigation();

    // Back button
    document.getElementById('backBtn').addEventListener('click', () => {
      window.history.back();
    });
  }

  // ============================================================================
  // Render Gallery
  // ============================================================================

  function renderGallery() {
    const galleryEl = document.getElementById('projGallery');

    projectData.gallery.forEach(item => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'project__gallery-item';

      // Add layout class
      if (item.layout === 'wide') {
        galleryItem.classList.add('project__gallery-item--wide');
      } else if (item.layout === 'portrait') {
        galleryItem.classList.add('project__gallery-item--portrait');
      }

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt;
      img.loading = 'lazy';

      img.addEventListener('load', function() {
        this.classList.add('loaded');
      });

      galleryItem.appendChild(img);
      galleryEl.appendChild(galleryItem);
    });
  }

  // ============================================================================
  // Navigation between projects
  // ============================================================================

  function setupNavigation() {
    const prevBtn = document.getElementById('prevProject');
    const nextBtn = document.getElementById('nextProject');
    const prevNameEl = document.getElementById('prevProjectName');
    const nextNameEl = document.getElementById('nextProjectName');

    // Get previous and next projects
    const prevIndex = projectIndex === 0 ? PROJECTS.length - 1 : projectIndex - 1;
    const nextIndex = projectIndex === PROJECTS.length - 1 ? 0 : projectIndex + 1;

    const prevProject = PROJECTS[prevIndex];
    const nextProject = PROJECTS[nextIndex];

    // Set names
    prevNameEl.textContent = prevProject.name;
    nextNameEl.textContent = nextProject.name;

    // Set click handlers
    prevBtn.addEventListener('click', () => {
      window.location.href = `project.html?id=${prevProject.id}`;
    });

    nextBtn.addEventListener('click', () => {
      window.location.href = `project.html?id=${nextProject.id}`;
    });
  }

  // ============================================================================
  // Swipe Navigation (Optional Enhancement)
  // ============================================================================

  function setupSwipeNavigation() {
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeThreshold = 100;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) < swipeThreshold) return;

      if (diff > 0) {
        // Swipe left - next project
        document.getElementById('nextProject').click();
      } else {
        // Swipe right - previous project
        document.getElementById('prevProject').click();
      }
    }
  }

  // ============================================================================
  // Initialize
  // ============================================================================

  function init() {
    renderProjectDetail();
    setupSwipeNavigation();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
