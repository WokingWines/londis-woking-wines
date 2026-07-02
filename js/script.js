// ============================================================
// Londis Woking Wines — interactions
// ============================================================

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Sticky header shadow on scroll
const header = document.getElementById('site-header');
const onScroll = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('is-open');
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mainNav.classList.remove('is-open'));
});

// Scroll reveal animations
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el) => revealObserver.observe(el));

// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-q');
  const answer = item.querySelector('.faq-a');
  const inner = item.querySelector('.faq-a-inner');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');

    // Close all other items
    faqItems.forEach((other) => {
      if (other !== item) {
        other.classList.remove('is-open');
        other.querySelector('.faq-a').style.maxHeight = null;
      }
    });

    if (isOpen) {
      item.classList.remove('is-open');
      answer.style.maxHeight = null;
    } else {
      item.classList.add('is-open');
      answer.style.maxHeight = inner.offsetHeight + 'px';
    }
  });
});
