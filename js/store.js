/**
 * PRAISE FURNITURE - E-COMMERCE STORE ENGINE
 * Manages Products, Currencies, Shopping Cart, Wishlist, Quick View & Checkout
 */

const PRAISE_PRODUCTS = [
  // --- LIVING ROOM ---
  {
    id: 'sofa-aurelia',
    name: 'Aurelia Curved Bouclé Sofa',
    category: 'living-room',
    categoryName: 'Living Room Furniture',
    price: 3850,
    originalPrice: 4500,
    rating: 4.9,
    reviewCount: 34,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Sculptural organic silhouette wrapped in ultra-soft Belgian bouclé with handcrafted kiln-dried European hardwood framing. An icon of timeless modern luxury.',
    materials: 'Belgian Bouclé, Solid Kiln-Dried Beechwood, High-Density Down-Blend Cushioning',
    dimensions: '98"W × 42"D × 31"H (Seat Height: 17.5")',
    finishes: ['Ivory Bouclé', 'Warm Taupe Wool', 'Charcoal Bouclé'],
    inStock: true,
    delivery: 'White-Glove Delivery in 1–2 Weeks'
  },
  {
    id: 'sofa-serena',
    name: 'Serena Italian Leather Sectional',
    category: 'living-room',
    categoryName: 'Living Room Furniture',
    price: 5400,
    originalPrice: null,
    rating: 5.0,
    reviewCount: 19,
    badge: 'Limited Edition',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Supple Italian full-grain aniline leather tailored with precision double-stitched seams and generous proportions for uncompromising relaxation.',
    materials: 'Italian Full-Grain Leather, Smoked Ash Base, Layered Goose Down',
    dimensions: '124"W × 68"D × 32"H (Seat Height: 18")',
    finishes: ['Cognac Vintage', 'Dark Mocha', 'Warm Sandstone'],
    inStock: true,
    delivery: 'White-Glove Delivery in 2–3 Weeks'
  },
  {
    id: 'table-kyoto',
    name: 'Kyoto Fluted Oak Coffee Table',
    category: 'living-room',
    categoryName: 'Living Room Furniture',
    price: 1850,
    originalPrice: 2150,
    rating: 4.8,
    reviewCount: 27,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Architectural tambour fluted detailing around a low-profile drum silhouette, crowned with hand-selected Roman travertine marble.',
    materials: 'Roman Travertine Top, Fluted American White Oak, Brushed Bronze Trim',
    dimensions: '44"Dia × 15.5"H',
    finishes: ['Smoked Oak & Travertine', 'Natural Oak & Calacatta', 'Ebonized Oak & Nero Marquina'],
    inStock: true,
    delivery: 'Complimentary Freight Delivery'
  },
  {
    id: 'console-palermo',
    name: 'Palermo Walnut & Travertine Media Console',
    category: 'living-room',
    categoryName: 'Living Room Furniture',
    price: 2950,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 15,
    badge: 'New Arrival',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Seamless push-to-open fluted slats conceal acoustic media bays, topped with monolithic honed natural travertine slab.',
    materials: 'Solid Smoked Walnut, Honed Beige Travertine, Soft-Close German Hardware',
    dimensions: '82"W × 19"D × 22"H',
    finishes: ['Smoked Walnut', 'Warm White Oak'],
    inStock: true,
    delivery: 'White-Glove Delivery in 1–2 Weeks'
  },
  {
    id: 'chair-montclair',
    name: 'Montclair Sculptural Accent Chair',
    category: 'living-room',
    categoryName: 'Living Room Furniture',
    price: 1650,
    originalPrice: 1950,
    rating: 5.0,
    reviewCount: 42,
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1580481077195-c3288b507858?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1580481077195-c3288b507858?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'An architectural lounge armchair with sweeping curves, cocooning comfort, and tactile woven wool texture.',
    materials: 'Chunky Wool Blend, Curved Plywood Frame, Matte Bronze Sled Base',
    dimensions: '34"W × 35"D × 30"H',
    finishes: ['Soft Taupe', 'Oatmeal Ivory', 'Caramel Velvet'],
    inStock: true,
    delivery: 'In Stock - Ships in 48 Hours'
  },

  // --- BEDROOM ---
  {
    id: 'bed-bolster-platform',
    name: 'Bolster Tufted Leather Platform Bed',
    category: 'bedroom',
    categoryName: 'Bedroom Furniture',
    price: 4200,
    originalPrice: 4900,
    rating: 5.0,
    reviewCount: 38,
    badge: 'Flyer Featured',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Directly echoing our signature campaign showcase: a low-profile rounded perimeter platform wrapped in saddle caramel leather with plush channeled headboard bolsters.',
    materials: 'Full-Grain Caramel Saddle Leather, Solid Ash Internal Frame, Ergonomic Slat Support',
    dimensions: 'King: 88"W × 94"L × 36"H | Queen: 72"W × 94"L × 36"H',
    finishes: ['Cognac Saddle Leather', 'Muted Mocha Leather', 'Ivory Cashmere Bouclé'],
    inStock: true,
    delivery: 'White-Glove In-Home Assembly Included'
  },
  {
    id: 'nightstand-sienna',
    name: 'Sienna Smoked Oak Nightstand',
    category: 'bedroom',
    categoryName: 'Bedroom Furniture',
    price: 980,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 22,
    badge: 'Essential',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Clean floating lines, rounded chamfered corners, wireless charging integration, and velvety suede-lined drawer interior.',
    materials: 'Smoked French Oak, Bronze Inset Pulls, Integrated Fast-Charge Inductive Pad',
    dimensions: '24"W × 18"D × 20"H',
    finishes: ['Smoked Oak', 'Bleached Dune Oak', 'Rich Espresso'],
    inStock: true,
    delivery: 'Ships in 3–5 Business Days'
  },
  {
    id: 'wardrobe-verona',
    name: 'Verona Modular Glass & Wood Wardrobe',
    category: 'bedroom',
    categoryName: 'Bedroom Furniture',
    price: 6800,
    originalPrice: 7900,
    rating: 4.9,
    reviewCount: 11,
    badge: 'Bespoke',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Custom architectural armoire featuring fluted bronze-tinted glass doors, integrated warm LED interior illumination, and customizable leather-lined jewelry drawers.',
    materials: 'Tempered Smoked Bronze Glass, Powder-Coated Metal Frames, Italian Oak Shelving',
    dimensions: '96"W × 24"D × 92"H',
    finishes: ['Smoked Bronze Glass', 'Fluted Frosted Glass', 'Solid Slatted Oak'],
    inStock: true,
    delivery: 'Custom Fabricated - 4–6 Weeks Delivery & Installation'
  },
  {
    id: 'vanity-geneva',
    name: 'Geneva Fluted Vanity & Dressing Table',
    category: 'bedroom',
    categoryName: 'Bedroom Furniture',
    price: 2450,
    originalPrice: null,
    rating: 5.0,
    reviewCount: 16,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Delicate tambour curves with a backlit architectural vanity mirror and concealed cashmere-lined cosmetics organizer.',
    materials: 'Warm Taupe Lacquer, Natural Ash Tambour, Dimmable Halo Mirror',
    dimensions: '52"W × 20"D × 30"H',
    finishes: ['Warm Taupe & Brass', 'Muted Mocha & Bronze'],
    inStock: true,
    delivery: 'White-Glove Delivery in 1–2 Weeks'
  },

  // --- DINING ROOM ---
  {
    id: 'dining-carrara',
    name: 'Carrara Marble & Walnut Dining Table',
    category: 'dining-room',
    categoryName: 'Dining Room Furniture',
    price: 4600,
    originalPrice: 5200,
    rating: 4.9,
    reviewCount: 29,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Sublime boat-shaped Italian Carrara marble surface with bullnose edges, anchored on dual sculptural fluted walnut pedestal bases.',
    materials: 'Honed Italian Carrara Marble, Solid Black Walnut, Internal Steel Reinforcement',
    dimensions: '96"L × 44"W × 30"H (Comfortably seats 8–10)',
    finishes: ['Carrara White Marble', 'Calacatta Gold Marble', 'Nero Marquina Black'],
    inStock: true,
    delivery: 'White-Glove In-Home Placement & Leveling'
  },
  {
    id: 'chair-ravello',
    name: 'Ravello Ergonomic Dining Chair (Set of 2)',
    category: 'dining-room',
    categoryName: 'Dining Room Furniture',
    price: 1350,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 45,
    badge: 'Set of 2',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Curved ergonomic backrest cradling the posture, dressed in stain-resistant performance bouclé and slender solid ash legs.',
    materials: 'High-Performance Bouclé, Solid Smoked Ash, Dual-Density Ergonomic Foam',
    dimensions: '22"W × 23"D × 32"H (Seat Height: 19")',
    finishes: ['Ivory Performance Bouclé', 'Sand Linen', 'Mocha Velvet'],
    inStock: true,
    delivery: 'In Stock - Ships in 48 Hours'
  },
  {
    id: 'dining-set-bellagio',
    name: 'Bellagio 8-Piece Contemporary Dining Set',
    category: 'dining-room',
    categoryName: 'Dining Room Furniture',
    price: 7900,
    originalPrice: 9400,
    rating: 5.0,
    reviewCount: 14,
    badge: 'Complete Set',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'The definitive dining ensemble: 1 monolithic solid walnut extendable dining table paired with 6 Ravello chairs and 1 matching bench.',
    materials: 'Solid Smoked Walnut, Italian Performance Bouclé, Bronze Detailing',
    dimensions: 'Table: 102" to 126" Extended × 42"W × 30"H',
    finishes: ['Smoked Walnut & Sand Bouclé', 'Natural Oak & Ivory Bouclé'],
    inStock: true,
    delivery: 'White-Glove Delivery & Complete Assembly Included'
  },

  // --- OFFICE ---
  {
    id: 'desk-nordic',
    name: 'Nordic Executive Smoked Walnut Desk',
    category: 'office',
    categoryName: 'Office Furniture',
    price: 3450,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 18,
    badge: 'Executive',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'A monument to modern productivity: cantilevered architecture, soft leather writing inlay, hidden cable management raceways, and locking privacy drawers.',
    materials: 'Solid Smoked Walnut, Italian Saddle Leather Inlay, Brushed Gunmetal Accents',
    dimensions: '74"W × 34"D × 30"H',
    finishes: ['Smoked Walnut & Black Leather', 'Natural Oak & Tan Leather'],
    inStock: true,
    delivery: 'White-Glove Delivery in 1–2 Weeks'
  },
  {
    id: 'chair-elysium',
    name: 'Elysium Ergonomic Italian Leather Office Chair',
    category: 'office',
    categoryName: 'Office Furniture',
    price: 1850,
    originalPrice: 2200,
    rating: 5.0,
    reviewCount: 31,
    badge: 'Ergonomic',
    image: 'https://images.unsplash.com/photo-1580481077195-c3288b507858?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1580481077195-c3288b507858?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Where executive prestige meets ergonomic science: synchronized tilt tension, pneumatic elevation, lumbar contour, and supple perforated top-grain leather.',
    materials: 'Perforated Italian Top-Grain Leather, Die-Cast Polished Bronze Base, German Gas Lift',
    dimensions: '28"W × 28"D × 42"–46"H',
    finishes: ['Cognac Leather & Bronze', 'Espresso Leather & Gunmetal', 'Cream Leather & Gold'],
    inStock: true,
    delivery: 'In Stock - Ships Next Business Day'
  },
  {
    id: 'credenza-metropolitan',
    name: 'Metropolitan Bronze & Glass Storage Credenza',
    category: 'office',
    categoryName: 'Office Furniture',
    price: 3100,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 12,
    badge: 'Storage',
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=85'
    ],
    description: 'Architectural executive storage featuring fluted reeded glass doors, dimmable LED illuminated display shelves, and integrated filing drawers.',
    materials: 'Reeded Bronze Glass, Smoked Oak Veneer, Brushed Brass Hardware',
    dimensions: '78"W × 20"D × 34"H',
    finishes: ['Smoked Oak & Bronze Glass', 'Ebonized Wood & Smoked Glass'],
    inStock: true,
    delivery: 'White-Glove Delivery in 2 Weeks'
  }
];

// --- CURRENCY CONVERSIONS ---
const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' }
};

let currentCurrency = localStorage.getItem('praise_currency') || 'USD';

function setCurrency(currencyCode) {
  if (CURRENCIES[currencyCode]) {
    currentCurrency = currencyCode;
    localStorage.setItem('praise_currency', currencyCode);
    window.dispatchEvent(new CustomEvent('currencyChanged', { detail: { currency: currencyCode } }));
    renderCart();
    // Update displayed prices on current page
    document.querySelectorAll('[data-product-price]').forEach(el => {
      const basePrice = parseFloat(el.getAttribute('data-product-price'));
      el.textContent = formatPrice(basePrice);
    });
    showToast(`Currency updated to ${CURRENCIES[currencyCode].label}`);
  }
}

function formatPrice(amountInUSD) {
  const curr = CURRENCIES[currentCurrency] || CURRENCIES.USD;
  const converted = Math.round(amountInUSD * curr.rate);
  return `${curr.symbol}${converted.toLocaleString()}`;
}

// --- CART & WISHLIST STORAGE ---
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('praise_cart')) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('praise_cart', JSON.stringify(cart));
  updateBadges();
  renderCart();
}

function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem('praise_wishlist')) || [];
  } catch (e) {
    return [];
  }
}

function saveWishlist(wishlist) {
  localStorage.setItem('praise_wishlist', JSON.stringify(wishlist));
  updateBadges();
}

function toggleWishlist(productId) {
  let wishlist = getWishlist();
  const product = PRAISE_PRODUCTS.find(p => p.id === productId);
  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter(id => id !== productId);
    showToast(`Removed "${product ? product.name : 'Item'}" from wishlist.`);
  } else {
    wishlist.push(productId);
    showToast(`Added "${product ? product.name : 'Item'}" to your wishlist.`);
  }
  saveWishlist(wishlist);
  updateWishlistButtons();
}

function addToCart(productId, quantity = 1, selectedFinish = null) {
  const product = PRAISE_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const finish = selectedFinish || (product.finishes && product.finishes[0]) || 'Standard Finish';
  let cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === productId && item.finish === finish);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      categoryName: product.categoryName,
      finish: finish,
      quantity: quantity
    });
  }

  saveCart(cart);
  showToast(`Added "${product.name}" (${finish}) to your bag.`);
  openCart();
}

function updateCartQuantity(productId, finish, newQty) {
  let cart = getCart();
  if (newQty <= 0) {
    cart = cart.filter(item => !(item.id === productId && item.finish === finish));
  } else {
    const item = cart.find(i => i.id === productId && i.finish === finish);
    if (item) item.quantity = newQty;
  }
  saveCart(cart);
}

function removeFromCart(productId, finish) {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === productId && item.finish === finish));
  saveCart(cart);
  showToast('Item removed from your bag.');
}

// Discount Code Logic
let activePromo = localStorage.getItem('praise_promo') ? JSON.parse(localStorage.getItem('praise_promo')) : null;

function applyPromoCode(code) {
  const cleanCode = (code || '').trim().toUpperCase();
  if (cleanCode === 'LUXURY40') {
    activePromo = { code: 'LUXURY40', percent: 40, description: 'Exclusive 40% Promotional Discount' };
    localStorage.setItem('praise_promo', JSON.stringify(activePromo));
    showToast('Success! 40% promotional discount applied.');
    renderCart();
    return true;
  } else if (cleanCode === 'PRAISE10') {
    activePromo = { code: 'PRAISE10', percent: 10, description: '10% Welcome Discount' };
    localStorage.setItem('praise_promo', JSON.stringify(activePromo));
    showToast('Success! 10% welcome discount applied.');
    renderCart();
    return true;
  } else {
    showToast('Invalid promotional code. Try LUXURY40 or PRAISE10.', 'error');
    return false;
  }
}

function removePromoCode() {
  activePromo = null;
  localStorage.removeItem('praise_promo');
  renderCart();
  showToast('Promotional code removed.');
}

function calculateCartTotals() {
  const cart = getCart();
  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  let discount = 0;
  if (activePromo && subtotal > 0) {
    discount = (subtotal * activePromo.percent) / 100;
  }

  // Free white-glove delivery on orders over $3000 USD
  const freeShippingThreshold = 3000;
  const shipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 250;
  const tax = (subtotal - discount) * 0.08; // 8% estimated luxury tax
  const total = subtotal - discount + shipping + tax;

  return {
    subtotal,
    discount,
    shipping,
    tax,
    total,
    freeShippingThreshold,
    progress: Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100))
  };
}

// --- BADGE UPDATES ---
function updateBadges() {
  const cart = getCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.querySelectorAll('.cart-badge-count').forEach(el => {
    el.textContent = totalItems;
    el.classList.toggle('hidden', totalItems === 0);
  });

  const wishlist = getWishlist();
  document.querySelectorAll('.wishlist-badge-count').forEach(el => {
    el.textContent = wishlist.length;
    el.classList.toggle('hidden', wishlist.length === 0);
  });
}

function updateWishlistButtons() {
  const wishlist = getWishlist();
  document.querySelectorAll('[data-wishlist-btn]').forEach(btn => {
    const id = btn.getAttribute('data-wishlist-btn');
    const isSaved = wishlist.includes(id);
    btn.classList.toggle('text-gold', isSaved);
    btn.classList.toggle('text-white/60', !isSaved);
    const svg = btn.querySelector('svg');
    if (svg) {
      svg.setAttribute('fill', isSaved ? 'currentColor' : 'none');
    }
  });
}

// --- CART DRAWER RENDERING ---
function renderCart() {
  const drawerBody = document.getElementById('cart-drawer-items');
  const summaryBox = document.getElementById('cart-drawer-summary');
  if (!drawerBody || !summaryBox) return;

  const cart = getCart();
  const totals = calculateCartTotals();

  if (cart.length === 0) {
    drawerBody.innerHTML = `
      <div class="py-16 text-center">
        <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-taupe/20 border border-mocha/30 flex items-center justify-center text-gold">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
          </svg>
        </div>
        <h4 class="font-serif-luxury text-2xl text-ivory mb-2">Your Bag is Empty</h4>
        <p class="text-sand/70 text-sm max-w-xs mx-auto mb-6">Discover our curated showcase of masterfully handcrafted luxury furniture.</p>
        <button onclick="closeCart();" class="btn-luxury-gold px-6 py-3 rounded-full text-xs font-semibold">
          Explore Collection
        </button>
      </div>
    `;
    summaryBox.innerHTML = '';
    return;
  }

  // Render Items
  let itemsHtml = `
    <!-- Free Shipping Progress -->
    <div class="mb-6 p-4 rounded-lg bg-taupe/20 border border-mocha/20 text-xs">
      <div class="flex justify-between items-center mb-2">
        <span class="text-sand">${totals.subtotal >= totals.freeShippingThreshold ? '✨ You qualify for Complimentary White-Glove In-Home Delivery!' : `Add ${formatPrice(totals.freeShippingThreshold - totals.subtotal)} more for Complimentary White-Glove Delivery`}</span>
        <span class="text-gold font-medium">${totals.progress}%</span>
      </div>
      <div class="w-full bg-espresso h-1.5 rounded-full overflow-hidden">
        <div class="bg-gradient-to-r from-mocha to-gold h-full transition-all duration-500" style="width: ${totals.progress}%"></div>
      </div>
    </div>

    <div class="space-y-4">
  `;

  cart.forEach(item => {
    itemsHtml += `
      <div class="flex gap-4 p-3 rounded-lg bg-espresso/60 border border-mocha/20 hover:border-mocha/40 transition-colors">
        <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-md flex-shrink-0 bg-dark-taupe/40" />
        <div class="flex-1 min-w-0">
          <div class="flex justify-between items-start gap-2">
            <h5 class="text-ivory font-serif-luxury text-lg leading-tight truncate">${item.name}</h5>
            <button onclick="removeFromCart('${item.id}', '${item.finish}')" class="text-sand/50 hover:text-red-400 transition-colors p-1" title="Remove">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <p class="text-xs text-sand/70 mb-2 truncate">${item.finish}</p>
          <div class="flex items-center justify-between mt-2">
            <div class="flex items-center border border-mocha/40 rounded bg-espresso">
              <button onclick="updateCartQuantity('${item.id}', '${item.finish}', ${item.quantity - 1})" class="px-2 py-0.5 text-sand hover:text-white transition-colors">-</button>
              <span class="px-2 py-0.5 text-xs text-ivory font-medium">${item.quantity}</span>
              <button onclick="updateCartQuantity('${item.id}', '${item.finish}', ${item.quantity + 1})" class="px-2 py-0.5 text-sand hover:text-white transition-colors">+</button>
            </div>
            <div class="text-sm font-semibold text-gold">
              ${formatPrice(item.price * item.quantity)}
            </div>
          </div>
        </div>
      </div>
    `;
  });

  itemsHtml += `</div>`;
  drawerBody.innerHTML = itemsHtml;

  // Render Order Summary & Promo Code
  summaryBox.innerHTML = `
    <!-- Promo Code Input -->
    <div class="pt-4 border-t border-mocha/20 mb-4">
      ${activePromo ? `
        <div class="flex items-center justify-between bg-gold/10 border border-gold/30 rounded p-2.5 text-xs">
          <div class="flex items-center gap-2">
            <span class="text-gold font-semibold">${activePromo.code}</span>
            <span class="text-sand">(${activePromo.percent}% OFF)</span>
          </div>
          <button onclick="removePromoCode()" class="text-sand/60 hover:text-red-400 font-medium">Remove</button>
        </div>
      ` : `
        <div class="flex gap-2">
          <input type="text" id="promo-input" placeholder="Promo Code (e.g. LUXURY40)" class="flex-1 bg-espresso/80 border border-mocha/30 rounded px-3 py-2 text-xs text-ivory placeholder-sand/40 focus:outline-none focus:border-gold uppercase" />
          <button onclick="const val = document.getElementById('promo-input').value; applyPromoCode(val);" class="btn-luxury-outline px-3 py-2 text-xs rounded font-medium">
            Apply
          </button>
        </div>
      `}
    </div>

    <!-- Calculations -->
    <div class="space-y-2 text-xs text-sand/80 mb-4">
      <div class="flex justify-between">
        <span>Subtotal</span>
        <span class="text-ivory font-medium">${formatPrice(totals.subtotal)}</span>
      </div>
      ${totals.discount > 0 ? `
        <div class="flex justify-between text-gold">
          <span>Promotional Savings (${activePromo.percent}%)</span>
          <span>-${formatPrice(totals.discount)}</span>
        </div>
      ` : ''}
      <div class="flex justify-between">
        <span>White-Glove In-Home Delivery</span>
        <span class="text-ivory font-medium">${totals.shipping === 0 ? '<span class="text-green-400">Complimentary</span>' : formatPrice(totals.shipping)}</span>
      </div>
      <div class="flex justify-between">
        <span>Estimated Luxury Tax</span>
        <span class="text-ivory font-medium">${formatPrice(totals.tax)}</span>
      </div>
      <div class="flex justify-between pt-3 border-t border-mocha/20 text-base font-serif-luxury text-ivory">
        <span class="font-semibold">Estimated Total</span>
        <span class="font-bold text-gold text-lg">${formatPrice(totals.total)}</span>
      </div>
    </div>

    <!-- Actions -->
    <button onclick="openCheckoutModal()" class="w-full btn-luxury-gold py-3.5 rounded-lg text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg shadow-gold/10">
      <span>Proceed to Luxury Checkout</span>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
    </button>
    <p class="text-[10px] text-center text-sand/50 mt-2">White-Glove Delivery • Comprehensive Warranty • 30-Day Return</p>
  `;
}

// --- DRAWER CONTROLS ---
function openCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    renderCart();
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    document.body.classList.add('overflow-hidden');
  }
}

function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    drawer.classList.add('translate-x-full');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  }
}

// --- QUICK VIEW MODAL ---
function openQuickView(productId) {
  const product = PRAISE_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quick-view-modal');
  const content = document.getElementById('quick-view-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 sm:p-8">
      <!-- Media Gallery -->
      <div class="space-y-4">
        <div class="relative overflow-hidden rounded-xl border border-mocha/30 bg-espresso aspect-[4/3]">
          <img id="qv-main-img" src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          <span class="absolute top-3 left-3 px-3 py-1 bg-mocha text-white text-[10px] font-semibold tracking-wider uppercase rounded-full shadow-md">
            ${product.badge}
          </span>
        </div>
        <div class="flex gap-3 overflow-x-auto pb-1">
          ${product.gallery.map((img, idx) => `
            <button onclick="document.getElementById('qv-main-img').src = '${img}'" class="w-16 h-16 rounded-lg overflow-hidden border border-mocha/30 flex-shrink-0 hover:border-gold transition-colors">
              <img src="${img}" alt="${product.name} ${idx}" class="w-full h-full object-cover" />
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Details -->
      <div class="space-y-4">
        <div>
          <span class="text-xs uppercase tracking-widest text-sand font-medium">${product.categoryName}</span>
          <h3 class="font-serif-luxury text-3xl sm:text-4xl text-ivory mt-1">${product.name}</h3>
          <div class="flex items-center gap-2 mt-2">
            <div class="flex text-gold text-sm">
              ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span class="text-xs text-sand/70">(${product.rating} • ${product.reviewCount} Reviews)</span>
          </div>
        </div>

        <div class="flex items-baseline gap-3 py-2 border-y border-mocha/20">
          <span class="text-3xl font-bold text-gold font-serif-luxury" data-product-price="${product.price}">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="text-sm line-through text-sand/50">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>

        <p class="text-sm text-sand/80 leading-relaxed">${product.description}</p>

        <!-- Finishes -->
        <div>
          <label class="block text-xs uppercase tracking-wider text-sand mb-2 font-medium">Select Finish / Upholstery</label>
          <div class="flex flex-wrap gap-2" id="qv-finish-options">
            ${product.finishes.map((f, i) => `
              <button onclick="selectFinishOption(this, '${f}')" class="qv-finish-btn px-3 py-1.5 text-xs rounded border transition-all ${i === 0 ? 'border-gold bg-gold/15 text-gold font-medium' : 'border-mocha/40 text-sand hover:border-gold'}">
                ${f}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Specifications -->
        <div class="text-xs space-y-1.5 py-3 border-t border-mocha/20 text-sand/70">
          <div><strong class="text-ivory">Materials:</strong> ${product.materials}</div>
          <div><strong class="text-ivory">Dimensions:</strong> ${product.dimensions}</div>
          <div><strong class="text-ivory">Fulfillment:</strong> <span class="text-green-400 font-medium">${product.delivery}</span></div>
        </div>

        <!-- Actions -->
        <div class="flex gap-4 pt-2">
          <div class="flex items-center border border-mocha/40 rounded bg-espresso">
            <button onclick="const q = document.getElementById('qv-qty'); q.value = Math.max(1, parseInt(q.value)-1);" class="px-3 py-2 text-sand hover:text-white">-</button>
            <input type="number" id="qv-qty" value="1" min="1" class="w-12 text-center bg-transparent text-sm text-ivory font-semibold focus:outline-none" />
            <button onclick="const q = document.getElementById('qv-qty'); q.value = parseInt(q.value)+1;" class="px-3 py-2 text-sand hover:text-white">+</button>
          </div>

          <button onclick="handleQuickViewAddToCart('${product.id}')" class="flex-1 btn-luxury-gold py-3 px-6 rounded-lg text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2">
            <span>Add to Cart</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          </button>
          <button onclick="toggleWishlist('${product.id}')" data-wishlist-btn="${product.id}" class="p-3 border border-mocha/40 rounded-lg text-sand hover:text-gold hover:border-gold transition-colors" title="Save to Wishlist">
            <svg class="w-5 h-5" fill="${getWishlist().includes(product.id) ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

let selectedQvFinish = null;

function selectFinishOption(btn, finish) {
  selectedQvFinish = finish;
  document.querySelectorAll('.qv-finish-btn').forEach(b => {
    b.classList.remove('border-gold', 'bg-gold/15', 'text-gold', 'font-medium');
    b.classList.add('border-mocha/40', 'text-sand');
  });
  btn.classList.add('border-gold', 'bg-gold/15', 'text-gold', 'font-medium');
  btn.classList.remove('border-mocha/40', 'text-sand');
}

function handleQuickViewAddToCart(productId) {
  const qtyInput = document.getElementById('qv-qty');
  const qty = parseInt(qtyInput ? qtyInput.value : 1) || 1;
  const finish = selectedQvFinish || (PRAISE_PRODUCTS.find(p => p.id === productId)?.finishes[0]);
  addToCart(productId, qty, finish);
  closeQuickView();
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    selectedQvFinish = null;
  }
}

// --- CHECKOUT INTERFACE & FLOW ---
function openCheckoutModal() {
  closeCart();
  const modal = document.getElementById('checkout-modal');
  const container = document.getElementById('checkout-flow-container');
  if (!modal || !container) return;

  const totals = calculateCartTotals();
  const cart = getCart();

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
      <!-- Checkout Form Column (8 cols) -->
      <div class="lg:col-span-7 space-y-6">
        <div>
          <span class="text-xs font-semibold uppercase tracking-widest text-gold">Exclusive Showroom Ordering</span>
          <h3 class="font-serif-luxury text-3xl text-ivory mt-1">Complete Your Acquisition</h3>
          <p class="text-xs text-sand/70">Please provide your destination details for scheduled white-glove logistics.</p>
        </div>

        <form id="checkout-order-form" onsubmit="event.preventDefault(); processCheckoutSubmission();" class="space-y-4">
          <!-- Step 1: Client & Delivery Information -->
          <div class="p-4 rounded-xl bg-espresso/80 border border-mocha/30 space-y-3">
            <h4 class="text-sm font-semibold uppercase tracking-wider text-sand flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs">1</span>
              <span>Client & Delivery Address</span>
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-[11px] text-sand/80 mb-1">First Name *</label>
                <input type="text" required value="Alexander" class="w-full bg-dark-taupe/40 border border-mocha/40 rounded px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label class="block text-[11px] text-sand/80 mb-1">Last Name *</label>
                <input type="text" required value="Vanderbilt" class="w-full bg-dark-taupe/40 border border-mocha/40 rounded px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold" />
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-[11px] text-sand/80 mb-1">Email Address *</label>
                <input type="email" required value="alexander.v@luxuryresidence.com" class="w-full bg-dark-taupe/40 border border-mocha/40 rounded px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label class="block text-[11px] text-sand/80 mb-1">Direct Phone *</label>
                <input type="tel" required value="+1 (555) 789-2340" class="w-full bg-dark-taupe/40 border border-mocha/40 rounded px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold" />
              </div>
            </div>
            <div>
              <label class="block text-[11px] text-sand/80 mb-1">Street Address *</label>
              <input type="text" required value="740 Park Avenue, Penthouse B" class="w-full bg-dark-taupe/40 border border-mocha/40 rounded px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold" />
            </div>
            <div class="grid grid-cols-3 gap-3">
              <div>
                <label class="block text-[11px] text-sand/80 mb-1">City</label>
                <input type="text" required value="New York" class="w-full bg-dark-taupe/40 border border-mocha/40 rounded px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label class="block text-[11px] text-sand/80 mb-1">State / Province</label>
                <input type="text" required value="NY" class="w-full bg-dark-taupe/40 border border-mocha/40 rounded px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label class="block text-[11px] text-sand/80 mb-1">Postal Code</label>
                <input type="text" required value="10021" class="w-full bg-dark-taupe/40 border border-mocha/40 rounded px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold" />
              </div>
            </div>
          </div>

          <!-- Step 2: White-Glove Preferences -->
          <div class="p-4 rounded-xl bg-espresso/80 border border-mocha/30 space-y-2">
            <h4 class="text-sm font-semibold uppercase tracking-wider text-sand flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs">2</span>
              <span>White-Glove Placement Preference</span>
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <label class="flex items-center gap-2 p-2.5 rounded border border-gold/40 bg-gold/10 cursor-pointer">
                <input type="radio" name="white_glove" checked class="text-gold" />
                <span>Room of Choice + Full Assembly & Packaging Removal (Included)</span>
              </label>
              <label class="flex items-center gap-2 p-2.5 rounded border border-mocha/30 hover:border-gold/40 cursor-pointer">
                <input type="radio" name="white_glove" class="text-gold" />
                <span>Interior Designer Staging Assistance</span>
              </label>
            </div>
          </div>

          <!-- Step 3: Payment Method Configuration -->
          <div class="p-4 rounded-xl bg-espresso/80 border border-mocha/30 space-y-3">
            <h4 class="text-sm font-semibold uppercase tracking-wider text-sand flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs">3</span>
              <span>Payment Demonstration Interface</span>
            </h4>
            
            <div class="bg-mocha/20 border border-gold/30 rounded-lg p-3 text-xs text-sand flex items-start gap-2">
              <svg class="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span><strong>Demonstration Environment Notice:</strong> No live payment gateway is currently attached. Real transactions will be available upon merchant credential integration. Feel free to submit this demo test order!</span>
            </div>

            <div class="grid grid-cols-3 gap-2">
              <button type="button" class="p-2.5 border border-gold bg-gold/15 text-gold rounded text-xs font-semibold flex items-center justify-center gap-1.5">
                <span>Credit Card</span>
              </button>
              <button type="button" class="p-2.5 border border-mocha/40 text-sand hover:border-gold rounded text-xs font-medium flex items-center justify-center gap-1.5">
                <span>Wire Transfer</span>
              </button>
              <button type="button" class="p-2.5 border border-mocha/40 text-sand hover:border-gold rounded text-xs font-medium flex items-center justify-center gap-1.5">
                <span>Apple Pay</span>
              </button>
            </div>

            <div class="space-y-2 pt-2">
              <div>
                <label class="block text-[11px] text-sand/80 mb-1">Card Number (Simulated)</label>
                <input type="text" value="•••• •••• •••• 4242" readonly class="w-full bg-dark-taupe/40 border border-mocha/40 rounded px-3 py-2 text-xs text-ivory font-mono focus:outline-none" />
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-[11px] text-sand/80 mb-1">Expires</label>
                  <input type="text" value="12/28" readonly class="w-full bg-dark-taupe/40 border border-mocha/40 rounded px-3 py-2 text-xs text-ivory font-mono focus:outline-none" />
                </div>
                <div>
                  <label class="block text-[11px] text-sand/80 mb-1">CVV</label>
                  <input type="text" value="888" readonly class="w-full bg-dark-taupe/40 border border-mocha/40 rounded px-3 py-2 text-xs text-ivory font-mono focus:outline-none" />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" id="checkout-submit-btn" class="w-full btn-luxury-gold py-4 rounded-xl text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-3 shadow-xl">
            <span>Authorize & Confirm Acquisition</span>
            <span class="text-espresso font-black">(${formatPrice(totals.total)})</span>
          </button>
        </form>
      </div>

      <!-- Order Summary Column (5 cols) -->
      <div class="lg:col-span-5">
        <div class="p-6 rounded-2xl bg-espresso border border-mocha/30 sticky top-4 space-y-4">
          <h4 class="font-serif-luxury text-xl text-ivory border-b border-mocha/20 pb-3">Acquisition Summary (${cart.length} ${cart.length === 1 ? 'Piece' : 'Pieces'})</h4>
          
          <div class="space-y-3 max-h-60 overflow-y-auto pr-1">
            ${cart.map(item => `
              <div class="flex items-center gap-3 text-xs">
                <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded object-cover border border-mocha/20" />
                <div class="flex-1 min-w-0">
                  <p class="text-ivory font-medium truncate">${item.name}</p>
                  <p class="text-sand/60 text-[10px]">${item.finish} • Qty: ${item.quantity}</p>
                </div>
                <div class="text-gold font-semibold">${formatPrice(item.price * item.quantity)}</div>
              </div>
            `).join('')}
          </div>

          <div class="space-y-2 pt-4 border-t border-mocha/20 text-xs text-sand/80">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span class="text-ivory">${formatPrice(totals.subtotal)}</span>
            </div>
            ${totals.discount > 0 ? `
              <div class="flex justify-between text-gold">
                <span>Promotional Discount (${activePromo.percent}%)</span>
                <span>-${formatPrice(totals.discount)}</span>
              </div>
            ` : ''}
            <div class="flex justify-between">
              <span>White-Glove Delivery & Assembly</span>
              <span>${totals.shipping === 0 ? '<span class="text-green-400">Complimentary</span>' : formatPrice(totals.shipping)}</span>
            </div>
            <div class="flex justify-between">
              <span>Estimated Luxury Tax</span>
              <span class="text-ivory">${formatPrice(totals.tax)}</span>
            </div>
            <div class="flex justify-between pt-3 border-t border-mocha/30 text-lg font-serif-luxury text-ivory font-bold">
              <span>Total Investment</span>
              <span class="text-gold">${formatPrice(totals.total)}</span>
            </div>
          </div>

          <div class="pt-4 border-t border-mocha/20 text-[11px] text-sand/60 space-y-2">
            <div class="flex items-center gap-2">
              <span class="text-gold">✓</span>
              <span>Handcrafted inspection report before dispatch</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-gold">✓</span>
              <span>Insured white-glove transport with scheduled arrival</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-gold">✓</span>
              <span>Praise Furniture 10-Year Structural Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function processCheckoutSubmission() {
  const btn = document.getElementById('checkout-submit-btn');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-espresso" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
      </svg>
      <span>Finalizing Acquisition Record...</span>
    `;
  }

  setTimeout(() => {
    // Generate order confirmation
    const orderNumber = 'PF-' + Math.floor(100000 + Math.random() * 900000);
    const totals = calculateCartTotals();
    const cart = getCart();

    const container = document.getElementById('checkout-flow-container');
    if (container) {
      container.innerHTML = `
        <div class="p-8 sm:p-14 text-center max-w-2xl mx-auto space-y-6">
          <div class="w-20 h-20 mx-auto rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold animate-bounce">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          </div>
          <div>
            <span class="text-xs font-semibold uppercase tracking-widest text-gold">Order Confirmed</span>
            <h3 class="font-serif-luxury text-4xl text-ivory mt-2">Thank You for Your Acquisition</h3>
            <p class="text-sm text-sand/80 mt-2">Your order <span class="text-gold font-mono font-semibold">${orderNumber}</span> has been logged with our master atelier.</p>
          </div>

          <div class="p-6 rounded-xl bg-espresso border border-mocha/30 text-left space-y-3 text-xs">
            <div class="flex justify-between border-b border-mocha/20 pb-2">
              <span class="text-sand">Status</span>
              <span class="text-green-400 font-semibold">Payment Authorized (Demo Simulation)</span>
            </div>
            <div class="flex justify-between border-b border-mocha/20 pb-2">
              <span class="text-sand">Estimated Delivery</span>
              <span class="text-ivory font-medium">10–14 Business Days</span>
            </div>
            <div class="flex justify-between border-b border-mocha/20 pb-2">
              <span class="text-sand">Delivery Address</span>
              <span class="text-ivory font-medium">740 Park Avenue, Penthouse B, New York, NY</span>
            </div>
            <div class="flex justify-between pt-1 text-sm font-semibold text-ivory">
              <span>Total Authorized</span>
              <span class="text-gold font-serif-luxury text-base">${formatPrice(totals.total)}</span>
            </div>
          </div>

          <p class="text-xs text-sand/60">A copy of your formal acquisition receipt and scheduled white-glove window has been dispatched to <strong class="text-ivory">alexander.v@luxuryresidence.com</strong>.</p>

          <div class="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <button onclick="closeCheckoutModal(); window.location.href='index.html';" class="btn-luxury-gold px-8 py-3 rounded-lg text-xs font-bold tracking-widest uppercase">
              Return to Showroom
            </button>
            <button onclick="window.print();" class="btn-luxury-outline px-6 py-3 rounded-lg text-xs font-bold tracking-widest uppercase">
              Print Receipt
            </button>
          </div>
        </div>
      `;

      // Clear Cart
      saveCart([]);
      if (activePromo) removePromoCode();
      showToast('Order confirmed successfully! White-glove concierge notified.');
    }
  }, 1200);
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// --- TOAST NOTIFICATION UTILITY ---
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const icon = type === 'error' ? 
    `<svg class="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>` :
    `<svg class="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`;

  toast.innerHTML = `
    ${icon}
    <div class="text-xs font-medium text-ivory flex-1">${message}</div>
    <button onclick="this.parentElement.remove()" class="text-sand/50 hover:text-ivory ml-2 text-sm">&times;</button>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  updateBadges();
  updateWishlistButtons();
});
