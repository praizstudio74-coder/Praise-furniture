/**
 * PRAISE FURNITURE - GLOBAL INTERACTIONS & UI LOGIC
 * Handles: Sticky Header, Mobile Navigation, Global Search Overlay,
 * Consultation Booking Modal, Category Filtering, Form Validations & Newsletter
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initGlobalSearch();
  initConsultationModal();
  initNewsletterForm();
  initCategoryFilters();
  initGalleryFilters();
  initContactForm();
});

// --- 1. STICKY HEADER ---
function initStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('bg-espresso/95', 'backdrop-blur-md', 'shadow-2xl', 'border-b', 'border-mocha/20', 'py-3');
      header.classList.remove('bg-transparent', 'py-5');
    } else {
      header.classList.remove('bg-espresso/95', 'backdrop-blur-md', 'shadow-2xl', 'border-b', 'border-mocha/20', 'py-3');
      header.classList.add('bg-transparent', 'py-5');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// --- 2. MOBILE MENU ---
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-menu-drawer');
  const overlay = document.getElementById('mobile-menu-overlay');

  if (!toggleBtn || !drawer || !overlay) return;

  const openMenu = () => {
    drawer.classList.remove('-translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    document.body.classList.add('overflow-hidden');
  };

  const closeMenu = () => {
    drawer.classList.add('-translate-x-full');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  };

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// --- 3. GLOBAL SEARCH OVERLAY ---
function initGlobalSearch() {
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('global-search-input');
  const searchResults = document.getElementById('search-results-container');
  if (!searchModal || !searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!searchResults) return;

    if (!query) {
      searchResults.innerHTML = `
        <div class="py-12 text-center text-sand/50 text-xs">
          Type to search our handcrafted collection, interior design services, or showroom specifications...
        </div>
      `;
      return;
    }

    // Filter products
    const matchedProducts = (window.PRAISE_PRODUCTS || []).filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.categoryName.toLowerCase().includes(query) ||
      p.materials.toLowerCase().includes(query)
    );

    if (matchedProducts.length === 0) {
      searchResults.innerHTML = `
        <div class="py-12 text-center">
          <p class="font-serif-luxury text-xl text-ivory">No pieces matched "${query}"</p>
          <p class="text-xs text-sand/60 mt-1">Our interior curators can craft custom designs according to your exact requirements.</p>
        </div>
      `;
      return;
    }

    searchResults.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        ${matchedProducts.map(p => `
          <div class="flex items-center gap-3 p-3 rounded-lg bg-espresso border border-mocha/20 hover:border-gold transition-colors cursor-pointer" onclick="closeSearch(); openQuickView('${p.id}');">
            <img src="${p.image}" alt="${p.name}" class="w-16 h-16 rounded object-cover flex-shrink-0" />
            <div class="min-w-0">
              <span class="text-[10px] uppercase text-gold font-medium">${p.categoryName}</span>
              <h5 class="text-xs font-serif-luxury text-ivory truncate mt-0.5">${p.name}</h5>
              <p class="text-xs text-sand font-semibold mt-1">${formatPrice(p.price)}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  });
}

function openSearch() {
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('global-search-input');
  if (searchModal && searchInput) {
    searchModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    setTimeout(() => searchInput.focus(), 100);
  }
}

function closeSearch() {
  const searchModal = document.getElementById('search-modal');
  if (searchModal) {
    searchModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// --- 4. CONSULTATION REQUEST MODAL ---
function initConsultationModal() {
  const modal = document.getElementById('consultation-modal');
  if (!modal) return;

  const form = document.getElementById('consultation-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-espresso inline" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
          Scheduling with Principal Designer...
        `;
      }

      setTimeout(() => {
        closeConsultationModal();
        if (typeof showToast === 'function') {
          showToast('Consultation request received! Our Senior Interior Consultant will reach out within 24 hours.');
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Schedule Design Consultation';
        }
      }, 1000);
    });
  }
}

function openConsultationModal(serviceName = null) {
  const modal = document.getElementById('consultation-modal');
  if (!modal) return;

  if (serviceName) {
    const serviceSelect = document.getElementById('consultation-service-select');
    if (serviceSelect) {
      serviceSelect.value = serviceName;
    }
  }

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeConsultationModal() {
  const modal = document.getElementById('consultation-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// --- 5. CATEGORY FILTERS (Featured Collection on Home Page) ---
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('[data-category-filter]');
  const productContainer = document.getElementById('featured-products-grid');
  if (!filterButtons.length || !productContainer) return;

  const renderProducts = (category = 'all') => {
    const products = window.PRAISE_PRODUCTS || [];
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);

    productContainer.innerHTML = filtered.map(product => `
      <div class="luxury-card rounded-2xl overflow-hidden group flex flex-col transition-all duration-500">
        <!-- Image Container -->
        <div class="relative overflow-hidden aspect-[4/3] bg-espresso">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" loading="lazy" />
          
          <!-- Badge -->
          <div class="absolute top-4 left-4 z-10">
            <span class="px-3 py-1 bg-espresso/80 backdrop-blur-md border border-mocha/40 text-sand text-[10px] font-semibold tracking-wider uppercase rounded-full shadow-lg">
              ${product.badge}
            </span>
          </div>

          <!-- Wishlist Button -->
          <button onclick="toggleWishlist('${product.id}')" data-wishlist-btn="${product.id}" class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-espresso/80 backdrop-blur-md border border-mocha/40 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-colors" title="Save to Wishlist">
            <svg class="w-4 h-4" fill="${(typeof getWishlist === 'function' && getWishlist().includes(product.id)) ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>

          <!-- Hover Overlay Actions -->
          <div class="absolute inset-0 bg-espresso/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
            <button onclick="openQuickView('${product.id}')" class="px-4 py-2.5 rounded-full bg-ivory text-espresso text-xs font-semibold uppercase tracking-wider hover:bg-gold hover:text-white transition-all shadow-xl">
              View Details
            </button>
            <button onclick="addToCart('${product.id}')" class="p-2.5 rounded-full bg-gold text-espresso hover:bg-white transition-all shadow-xl" title="Add to Cart">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            </button>
          </div>
        </div>

        <!-- Product Card Body -->
        <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <div class="flex items-center justify-between text-xs text-sand/70 mb-1">
              <span>${product.categoryName}</span>
              <div class="flex items-center text-gold">
                <span>★</span>
                <span class="ml-1 text-ivory text-[11px]">${product.rating}</span>
              </div>
            </div>
            <h4 class="font-serif-luxury text-xl text-ivory group-hover:text-gold transition-colors leading-snug">${product.name}</h4>
            <p class="text-xs text-sand/70 line-clamp-2 mt-1 leading-relaxed">${product.description}</p>
          </div>

          <div class="pt-3 border-t border-mocha/20 flex items-center justify-between">
            <div>
              <span class="text-xs text-sand/60 block">Price</span>
              <div class="flex items-baseline gap-2">
                <span class="text-lg font-bold text-gold font-serif-luxury" data-product-price="${product.price}">${formatPrice(product.price)}</span>
                ${product.originalPrice ? `<span class="text-xs line-through text-sand/40">${formatPrice(product.originalPrice)}</span>` : ''}
              </div>
            </div>
            <button onclick="addToCart('${product.id}')" class="btn-luxury-outline px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5">
              <span>Add to Bag</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  };

  // Initial render
  renderProducts('all');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active', 'border-gold', 'bg-gold', 'text-espresso');
        b.classList.add('border-mocha/30', 'text-sand');
      });
      btn.classList.add('active', 'border-gold', 'bg-gold', 'text-espresso');
      btn.classList.remove('border-mocha/30', 'text-sand');

      const cat = btn.getAttribute('data-category-filter');
      renderProducts(cat);
    });
  });
}

// --- 6. GALLERY FILTERS (Interior Design Showcase) ---
function initGalleryFilters() {
  const filterButtons = document.querySelectorAll('[data-gallery-filter]');
  const galleryItems = document.querySelectorAll('[data-gallery-item]');
  if (!filterButtons.length || !galleryItems.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active', 'border-gold', 'bg-gold/20', 'text-gold');
        b.classList.add('border-mocha/30', 'text-sand');
      });
      btn.classList.add('active', 'border-gold', 'bg-gold/20', 'text-gold');
      btn.classList.remove('border-mocha/30', 'text-sand');

      const filter = btn.getAttribute('data-gallery-filter');
      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-gallery-item');
        if (filter === 'all' || itemCat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// --- 7. CONTACT FORM VALIDATION ---
function initContactForm() {
  const form = document.getElementById('contact-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const feedbackBox = document.getElementById('contact-feedback');

    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-espresso inline" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
        Transmitting Inquiry to Showroom Concierge...
      `;
    }

    setTimeout(() => {
      if (feedbackBox) {
        feedbackBox.classList.remove('hidden');
        feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = 'Message Dispatched Successfully';
        setTimeout(() => {
          btn.innerHTML = 'Submit Message';
        }, 4000);
      }
      if (typeof showToast === 'function') {
        showToast('Your message has been safely received. A dedicated design advisor will contact you within 24 hours.');
      }
    }, 1200);
  });
}

// --- 8. NEWSLETTER SUBSCRIPTION ---
function initNewsletterForm() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast(`Thank you! You are now subscribed to Praise Furniture Private Releases.`);
        input.value = '';
      }
    });
  });
}
