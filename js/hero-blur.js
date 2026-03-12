/* hero-blur.js — Scroll-linked hero blur for iPad
 * Adapted for touch devices with optimized performance
 */

(function () {
  'use strict';

  var hero = document.querySelector('.hero__content');
  if (!hero) return;

  var MAX_SCROLL = 400;
  var MAX_BLUR = 20;
  var MIN_OPACITY = 0.2;
  var MIN_SCALE = 0.95;

  var ticking = false;
  var lastScrollY = 0;

  function update() {
    var scrollY = window.scrollY || window.pageYOffset;
    var progress = Math.min(scrollY / MAX_SCROLL, 1);

    var blur = progress * MAX_BLUR;
    var opacity = 1 - progress * (1 - MIN_OPACITY);
    var scale = 1 - progress * (1 - MIN_SCALE);

    hero.style.filter = 'blur(' + blur + 'px)';
    hero.style.opacity = opacity;
    hero.style.transform = 'scale(' + scale + ') translateZ(0)';

    lastScrollY = scrollY;
    ticking = false;
  }

  // Use scroll event for iPad
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  // Initial state
  update();
})();
