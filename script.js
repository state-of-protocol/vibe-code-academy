/*!
 * Vibe Code Academy – Main Script
 * Mematuhi Design.md / SKILL.md : semua interaksi menggunakan
 * fokus-papan kekunci, aria, dan sasaran sentuh.
 */
(function () {
  'use strict';

  // =========================================================================
  // 1. Mobile Navigation Toggle (dengan aria-expanded & aria-controls)
  // =========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');

  if (mobileToggle && mainNav) {
    /**
     * Buka/tutup navigasi mudah alih
     * @param {boolean} [open] - paksa buka/tutup; jika tiada, togol
     */
    function toggleMobileNav(open) {
      const isOpen = open ?? !mainNav.classList.contains('active');
      mobileToggle.classList.toggle('active', isOpen);
      mainNav.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
      // Kunci tatal badan apabila menu dibuka (pilihan)
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    mobileToggle.addEventListener('click', function () {
      toggleMobileNav();
    });

    // Tutup menu apabila mana-mana pautan di dalamnya diklik
    const navLinks = mainNav.querySelectorAll('.nav-link, .btn-nav');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (mainNav.classList.contains('active')) {
          toggleMobileNav(false);
        }
      });
    });

    // Tutup menu dengan kekunci Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        toggleMobileNav(false);
        mobileToggle.focus(); // Kembali ke butang togol
      }
    });
  }

  // =========================================================================
  // 2. Header Scroll Effect (latar belakang kabur ketika ditatal)
  // =========================================================================
  const siteHeader = document.getElementById('siteHeader');
  if (siteHeader) {
    window.addEventListener('scroll', function () {
      const scrolled = window.scrollY > 50;
      siteHeader.classList.toggle('scrolled', scrolled);
    });
  }

  // =========================================================================
  // 3. FAQ Accordion (satu item dibuka pada satu masa)
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length) {
    faqItems.forEach(function (item) {
      const questionBtn = item.querySelector('.faq-question');
      if (!questionBtn) return;

      questionBtn.addEventListener('click', function () {
        const isActive = item.classList.contains('active');

        // Tutup semua item lain
        faqItems.forEach(function (otherItem) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAnswer) otherAnswer.setAttribute('aria-hidden', 'true');
        });

        // Buka item semasa jika belum aktif
        if (!isActive) {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
          const answer = item.querySelector('.faq-answer');
          if (answer) answer.setAttribute('aria-hidden', 'false');
        }
      });
    });
  }

  // =========================================================================
  // 4. Smooth Scroll untuk Pautan Anchor (fallback)
  // =========================================================================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // =========================================================================
  // 5. Skip-to-content (pautan skip)
  // =========================================================================
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(skipLink.getAttribute('href'));
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        target.scrollIntoView({ behavior: 'smooth' });
        // Bersihkan tabindex selepas kehilangan fokus
        target.addEventListener('blur', function () {
          target.removeAttribute('tabindex');
        }, { once: true });
      }
    });
  }
})();