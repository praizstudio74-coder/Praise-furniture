/**
 * PRAISE FURNITURE - CINEMATIC SLIDER REVOLUTION ENGINE
 * Features:
 * - GSAP-powered staggered text reveals & smooth opacity/transform transitions
 * - Ken Burns image zoom & pan
 * - Continuous progress bar timer
 * - Interactive slide indicators & custom bronze navigation arrows
 * - Touch & swipe support for mobile
 * - Parallax depth layers & floating luxury badge accents
 * - Autoplay with pause on hover
 */

class HeroSliderRevolution {
  constructor(containerSelector, options = {}) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;

    this.slides = this.container.querySelectorAll('.hero-slide');
    this.totalSlides = this.slides.length;
    this.currentIndex = 0;
    this.duration = options.duration || 7500; // 7.5 seconds per slide
    this.isTransitioning = false;
    this.timer = null;
    this.startTime = null;
    this.remainingTime = this.duration;
    this.isPaused = false;

    // Controls
    this.prevBtn = this.container.querySelector('.slider-nav-prev');
    this.nextBtn = this.container.querySelector('.slider-nav-next');
    this.indicators = this.container.querySelectorAll('.slide-indicator');
    this.progressBar = this.container.querySelector('.slider-progress-bar');

    this.init();
  }

  init() {
    if (this.totalSlides === 0) return;

    // Set first slide active
    this.goToSlide(0, false);

    // Event Listeners for navigation buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        this.prevSlide();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        this.nextSlide();
      });
    }

    // Indicators click
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        if (this.currentIndex !== index) {
          this.goToSlide(index);
        }
      });
    });

    // Pause on Hover
    this.container.addEventListener('mouseenter', () => this.pause());
    this.container.addEventListener('mouseleave', () => this.resume());

    // Touch / Swipe gestures for mobile
    this.initTouch();

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prevSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
    });

    // Start auto timer
    this.startTimer();
  }

  goToSlide(index, animate = true) {
    if (this.isTransitioning && animate) return;
    this.isTransitioning = true;

    // Previous active slide
    const currentSlide = this.slides[this.currentIndex];
    const nextSlide = this.slides[index];

    // Reset progress bar
    if (this.progressBar) {
      this.progressBar.style.transition = 'none';
      this.progressBar.style.width = '0%';
    }

    // Toggle active class
    this.slides.forEach((slide, i) => {
      slide.classList.remove('active');
    });

    nextSlide.classList.add('active');

    // Trigger GSAP animations if GSAP is available
    if (window.gsap) {
      const texts = nextSlide.querySelectorAll('.stagger-el');
      gsap.fromTo(texts, 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.18, ease: "power3.out", delay: 0.2 }
      );

      const badges = nextSlide.querySelectorAll('.floating-layer');
      if (badges.length > 0) {
        gsap.fromTo(badges,
          { y: 25, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 1.3, ease: "power2.out", delay: 0.4 }
        );
      }
    }

    // Update indicator states
    this.indicators.forEach((ind, i) => {
      if (i === index) {
        ind.classList.add('active', 'border-gold', 'text-gold');
        ind.classList.remove('border-mocha/40', 'text-sand/50');
      } else {
        ind.classList.remove('active', 'border-gold', 'text-gold');
        ind.classList.add('border-mocha/40', 'text-sand/50');
      }
    });

    this.currentIndex = index;

    setTimeout(() => {
      this.isTransitioning = false;
      this.startTimer();
    }, 800);
  }

  nextSlide() {
    const next = (this.currentIndex + 1) % this.totalSlides;
    this.goToSlide(next);
  }

  prevSlide() {
    const prev = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.goToSlide(prev);
  }

  startTimer() {
    this.clearTimer();
    if (this.isPaused) return;

    if (this.progressBar) {
      // Force repaint
      void this.progressBar.offsetWidth;
      this.progressBar.style.transition = `width ${this.duration}ms linear`;
      this.progressBar.style.width = '100%';
    }

    this.startTime = Date.now();
    this.timer = setTimeout(() => {
      this.nextSlide();
    }, this.duration);
  }

  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  pause() {
    this.isPaused = true;
    this.clearTimer();
    if (this.progressBar) {
      const computedStyle = window.getComputedStyle(this.progressBar);
      const currentWidth = computedStyle.getPropertyValue('width');
      this.progressBar.style.transition = 'none';
      this.progressBar.style.width = currentWidth;
    }
  }

  resume() {
    this.isPaused = false;
    this.startTimer();
  }

  initTouch() {
    let startX = 0;
    let endX = 0;

    this.container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    this.container.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.nextSlide(); // Swiped left -> next
        } else {
          this.prevSlide(); // Swiped right -> prev
        }
      }
    }, { passive: true });
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const sliderEl = document.querySelector('.hero-slider-container');
  if (sliderEl) {
    window.heroSlider = new HeroSliderRevolution('.hero-slider-container', { duration: 7500 });
  }
});
