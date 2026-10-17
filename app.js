/**
 * BR Bakery - Sweet Order & Cake Production Dispatch Application
 * Complete 30-item Sweet Catalog, Box Packaging, and Cake Counter WhatsApp Dispatch
 * Responsive, Mobile-friendly, Desktop-friendly with Dynamic Price Settings
 */

// Official Sweets & Snacks Baseline Price List (All 30 Items)
const INITIAL_SWEETS = [
  { id: 'besan_laddu', name: 'Besan Laddu', price: 15, unit: 'per piece', category: 'laddu' },
  { id: 'motichoor_laddu', name: 'Motichoor Laddu', price: 15, unit: 'per piece', category: 'laddu' },
  { id: 'godi_laddu', name: 'Godi Laddu', price: 15, unit: 'per piece', category: 'laddu' },
  { id: 'dinki_laddu', name: 'Dinki Laddu', price: 15, unit: 'per piece', category: 'laddu' },
  { id: 'kaddi', name: 'Kaddi', price: 10, unit: 'per piece', category: 'traditional' },
  { id: 'special_laddu', name: 'Special Laddu', price: 12, unit: 'per piece', category: 'laddu' },
  { id: 'normal_laddu', name: 'Normal Laddu', price: 10, unit: 'per piece', category: 'laddu' },
  { id: 'halwa', name: 'Halwa', price: 20, unit: 'per piece', category: 'peda' },
  { id: 'chocolate_barfi', name: 'Chocolate Barfi', price: 20, unit: 'per piece', category: 'barfi' },
  { id: 'dharwad_peda', name: 'Dharwad Peda', price: 20, unit: 'per piece', category: 'peda' },
  { id: 'seal_peda', name: 'Seal Peda', price: 20, unit: 'per piece', category: 'peda' },
  { id: 'dry_fruits_barfi', name: 'Dry Fruits Barfi', price: 20, unit: 'per piece', category: 'barfi' },
  { id: 'kaju_barfi', name: 'Kaju Barfi', price: 30, unit: 'per piece', category: 'barfi' },
  { id: 'milk_cake', name: 'Milk Cake', price: 20, unit: 'per piece', category: 'barfi' },
  { id: 'ghee_mysore_pak', name: 'Ghee Mysore Pak', price: 20, unit: 'per piece', category: 'pak' },
  { id: 'horlicks_mysore_pak', name: 'Horlicks Mysore Pak', price: 20, unit: 'per piece', category: 'pak' },
  { id: 'milk_mysore_pak', name: 'Milk Mysore Pak', price: 20, unit: 'per piece', category: 'pak' },
  { id: 'dates_mysore_pak', name: 'Dates Mysore Pak', price: 20, unit: 'per piece', category: 'pak' },
  { id: 'badam_barfi', name: 'Badam Barfi', price: 20, unit: 'per piece', category: 'barfi' },
  { id: 'kesar_peda', name: 'Kesar Peda', price: 20, unit: 'per piece', category: 'peda' },
  { id: 'kalkandh_peda', name: 'Kalkandh Peda', price: 20, unit: 'per piece', category: 'peda' },
  { id: 'jilebi', name: 'Jilebi', price: 10, unit: 'per piece', category: 'traditional' },
  { id: 'jahangir', name: 'Jahangir', price: 15, unit: 'per piece', category: 'traditional' },
  { id: 'dates_roll', name: 'Dates Roll', price: 20, unit: 'per piece', category: 'traditional' },
  { id: 'saat', name: 'Saat', price: 10, unit: 'per piece', category: 'traditional' },
  { id: 'kashoor', name: 'Kashoor', price: 12, unit: 'per piece', category: 'traditional' },
  { id: 'normal_mysore_pak', name: 'Normal Mysore Pak', price: 12, unit: 'per piece', category: 'pak' },
  { id: 'malpuri', name: 'Malpuri', price: 10, unit: 'per piece', category: 'traditional' },
  { id: 'masala_cookies', name: 'Masala Cookies', price: 10, unit: 'per piece', category: 'traditional' },
  { id: 'soan_papdi', name: 'Soan Papdi', price: 15, unit: 'per piece', category: 'traditional' },
];

// Official Box Packaging Baseline
const INITIAL_BOXES = [
  { id: 'box_3', name: '3-item boxes', capacity: 3, price: 10, description: '₹10 each' },
  { id: 'box_5', name: '5-item boxes', capacity: 5, price: 10, description: '₹10 each' },
  { id: 'box_7', name: '7-item boxes', capacity: 7, price: 15, description: '₹15 each' },
];

// Popular Cake Flavors Catalog for Cake Maker Dispatch
const INITIAL_CAKE_FLAVORS = [
  { id: 'blackforest', name: 'Black Forest', icon: 'cherry', desc: 'Classic chocolate sponge with cherries & cream' },
  { id: 'whiteforest', name: 'White Forest', icon: 'sparkles', desc: 'Vanilla sponge with white chocolate flakes' },
  { id: 'chocolate_truffle', name: 'Chocolate Truffle', icon: 'cookie', desc: 'Rich Dutch dark chocolate ganache' },
  { id: 'red_velvet', name: 'Red Velvet', icon: 'heart', desc: 'Velvet sponge with cream cheese frosting' },
  { id: 'pineapple', name: 'Pineapple', icon: 'citrus', desc: 'Fresh whipped cream & pineapple chunks' },
  { id: 'butterscotch', name: 'Butterscotch', icon: 'zap', desc: 'Crunchy praline & butterscotch sauce' },
  { id: 'blueberry', name: 'Blueberry', icon: 'circle-dot', desc: 'Fresh blueberry compote & soft sponge' },
  { id: 'mango_rasmalai', name: 'Mango / Rasmalai', icon: 'sun', desc: 'Fusion Indian delicacy cake' },
  { id: 'fresh_fruit', name: 'Fresh Fruit', icon: 'apple', desc: 'Seasonal mixed fruits & light cream' },
  { id: 'choco_vanilla', name: 'Choco Vanilla', icon: 'layers', desc: 'Marble dual-layer favorite' },
];

// Active mutable inventories
let currentSweets = JSON.parse(JSON.stringify(INITIAL_SWEETS));
let currentBoxes = JSON.parse(JSON.stringify(INITIAL_BOXES));

// Sweets App State
const state = {
  currentMode: 'sweets', // 'sweets' | 'cakes'
  customer: {
    name: '',
    phone: '',
    date: '',
    notes: '',
  },
  activeCategory: 'all',
  searchQuery: '',
  sweets: {},       // { sweetId: quantity }
  customSweets: [], // [ { id, name, price, quantity } ]
  boxes: {},        // { boxId: quantity }
  advancePaid: 0,
  orderHistory: [],
};

// Cakes App State (For Cake Maker Kitchen Dispatch)
const cakeState = {
  makerName: 'Cake Maker (Chef)',
  makerPhone: '',
  requiredTime: 'Tomorrow Morning (9:00 AM)',
  notes: '',
  searchQuery: '',
  items: {},        // { flavorId: { '0.5': 0, '1.0': 0, '1.5': 0, '2.0': 0, eggless: true, shape: 'Round', message: '', notes: '' } }
  customCakes: [],  // [ { id, name, weights: { '0.5': 0, '1.0': 0, '1.5': 0, '2.0': 0 }, eggless: true, message: '', notes: '' } ]
};

// Initialize cake flavors state
INITIAL_CAKE_FLAVORS.forEach(f => {
  cakeState.items[f.id] = {
    '0.5': 0,
    '1.0': 0,
    '1.5': 0,
    '2.0': 0,
    eggless: true,
    shape: 'Round',
    message: '',
    notes: '',
    showOptions: false,
  };
});

// Initialize default sweet & box quantities
currentSweets.forEach(s => state.sweets[s.id] = 0);
currentBoxes.forEach(b => state.boxes[b.id] = 0);

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Set default delivery date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formattedDate = tomorrow.toISOString().split('T')[0];
  state.customer.date = formattedDate;

  const dateInput = document.getElementById('delivery-date');
  if (dateInput) {
    dateInput.value = formattedDate;
  }

  // 1. Load saved settings and history from localStorage
  loadPricesFromStorage();
  loadHistoryFromStorage();
  loadCakeMakerPhoneFromStorage();

  // 2. Render initial views
  renderSweetsList();
  renderBoxesList();
  renderCakeFlavorsList();
  renderCustomCakesList();
  setupEventListeners();

  // 3. Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 4. Update initial calculations
  updateCalculations();
  updateCakeSummaryAndSlip();
});

// ==========================================
// MODE SWITCHER (Sweets Billing vs Cake Maker Order)
// ==========================================
function switchAppMode(mode) {
  state.currentMode = mode;
  const sweetsBtn = document.getElementById('nav-mode-sweets');
  const cakesBtn = document.getElementById('nav-mode-cakes');
  const sweetsView = document.getElementById('sweets-order-view');
  const cakesView = document.getElementById('cakes-order-view');
  const mobileSweetsBar = document.getElementById('mobile-sweets-bar');
  const mobileCakesBar = document.getElementById('mobile-cakes-bar');

  const activeClass = 'mode-tab-btn active flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-5 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition shadow-sm bg-burgundy-950 text-cream-100 border border-burgundy-900';
  const inactiveClass = 'mode-tab-btn flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-5 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition text-stone-600 hover:text-burgundy-950 hover:bg-cream-100 border border-transparent';

  if (mode === 'sweets') {
    if (sweetsBtn) sweetsBtn.className = activeClass;
    if (cakesBtn) cakesBtn.className = inactiveClass;
    if (sweetsView) sweetsView.classList.remove('hidden');
    if (cakesView) cakesView.classList.add('hidden');
    if (mobileSweetsBar) mobileSweetsBar.classList.remove('hidden');
    if (mobileCakesBar) mobileCakesBar.classList.add('hidden');
  } else {
    if (cakesBtn) cakesBtn.className = activeClass;
    if (sweetsBtn) sweetsBtn.className = inactiveClass;
    if (sweetsView) sweetsView.classList.add('hidden');
    if (cakesView) cakesView.classList.remove('hidden');
    if (mobileSweetsBar) mobileSweetsBar.classList.add('hidden');
    if (mobileCakesBar) mobileCakesBar.classList.remove('hidden');
    updateCakeSummaryAndSlip();
  }

  if (window.lucide) lucide.createIcons();
}

// ==========================================
// CAKE COUNTER ORDER ENGINE
// ==========================================
function loadCakeMakerPhoneFromStorage() {
  try {
    const savedPhone = localStorage.getItem('br_bakery_chef_phone');
    const savedName = localStorage.getItem('br_bakery_chef_name');
    if (savedPhone) {
      cakeState.makerPhone = savedPhone;
      const phoneInput = document.getElementById('cake-maker-phone');
      if (phoneInput) phoneInput.value = savedPhone;
    }
    if (savedName) {
      cakeState.makerName = savedName;
      const nameInput = document.getElementById('cake-maker-name');
      if (nameInput) nameInput.value = savedName;
    }
  } catch (e) {
    console.error('Storage error', e);
  }
}

function renderCakeFlavorsList() {
  const container = document.getElementById('cake-flavors-list');
  if (!container) return;

  const search = (cakeState.searchQuery || '').trim().toLowerCase();
  const filtered = INITIAL_CAKE_FLAVORS.filter(f => f.name.toLowerCase().includes(search));

  if (filtered.length === 0) {
    container.innerHTML = `<div class="p-6 text-center text-stone-400 bg-stone-50 rounded-xl">No cake flavor found matching "${search}"</div>`;
    return;
  }

  container.innerHTML = filtered.map(cake => {
    const item = cakeState.items[cake.id] || { '0.5': 0, '1.0': 0, '1.5': 0, '2.0': 0, eggless: true, shape: 'Round', message: '', notes: '', showOptions: false };
    const totalCount = (item['0.5'] || 0) + (item['1.0'] || 0) + (item['1.5'] || 0) + (item['2.0'] || 0);
    const isActive = totalCount > 0;

    return `
      <div class="cake-item-row p-4 rounded-xl border ${isActive ? 'cake-item-active' : 'border-stone-200 bg-white'} transition-all hover:border-burgundy-300 space-y-3" data-cake-id="${cake.id}">
        
        <!-- Flavor Header & Total Badge -->
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2.5">
            <div class="w-8 h-8 rounded-lg bg-burgundy-50 text-burgundy-900 border border-burgundy-100 flex items-center justify-center font-bold text-sm">
              🎂
            </div>
            <div>
              <h4 class="font-bold text-stone-900 text-sm sm:text-base">${cake.name}</h4>
              <p class="text-[11px] text-stone-500">${cake.desc}</p>
            </div>
          </div>
          <div class="text-right">
            ${totalCount > 0 ? `
              <span class="text-xs font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200">
                ${totalCount} cake${totalCount === 1 ? '' : 's'}
              </span>
            ` : `
              <span class="text-xs text-stone-400">0 selected</span>
            `}
          </div>
        </div>

        <!-- Weight Stepper Matrix (0.5 kg, 1.0 kg, 1.5 kg, 2.0 kg) -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
          
          <!-- 0.5 kg (Half Kg) -->
          <div class="p-2 rounded-xl bg-cream-50/80 border border-cream-200 flex flex-col items-center">
            <span class="text-[11px] font-bold text-burgundy-950 mb-1">0.5 kg <span class="text-[10px] text-stone-500 font-normal">(Half Kg)</span></span>
            <div class="flex items-center bg-white rounded-lg border border-stone-300 p-0.5 shadow-sm">
              <button type="button" onclick="adjustCakeWeightQty('${cake.id}', '0.5', -1)" class="w-6 h-6 rounded bg-stone-100 hover:bg-burgundy-900 hover:text-white transition flex items-center justify-center font-bold text-xs">-</button>
              <input type="number" min="0" value="${item['0.5'] || 0}" 
                oninput="setCakeWeightQty('${cake.id}', '0.5', this.value)"
                class="w-10 text-center font-bold text-stone-900 text-xs bg-transparent border-0 focus:ring-0 p-0">
              <button type="button" onclick="adjustCakeWeightQty('${cake.id}', '0.5', 1)" class="w-6 h-6 rounded bg-stone-100 hover:bg-burgundy-900 hover:text-white transition flex items-center justify-center font-bold text-xs">+</button>
            </div>
          </div>

          <!-- 1.0 kg (1 Kg) -->
          <div class="p-2 rounded-xl bg-cream-50/80 border border-cream-200 flex flex-col items-center">
            <span class="text-[11px] font-bold text-burgundy-950 mb-1">1.0 kg <span class="text-[10px] text-stone-500 font-normal">(1 Kg)</span></span>
            <div class="flex items-center bg-white rounded-lg border border-stone-300 p-0.5 shadow-sm">
              <button type="button" onclick="adjustCakeWeightQty('${cake.id}', '1.0', -1)" class="w-6 h-6 rounded bg-stone-100 hover:bg-burgundy-900 hover:text-white transition flex items-center justify-center font-bold text-xs">-</button>
              <input type="number" min="0" value="${item['1.0'] || 0}" 
                oninput="setCakeWeightQty('${cake.id}', '1.0', this.value)"
                class="w-10 text-center font-bold text-stone-900 text-xs bg-transparent border-0 focus:ring-0 p-0">
              <button type="button" onclick="adjustCakeWeightQty('${cake.id}', '1.0', 1)" class="w-6 h-6 rounded bg-stone-100 hover:bg-burgundy-900 hover:text-white transition flex items-center justify-center font-bold text-xs">+</button>
            </div>
          </div>

          <!-- 1.5 kg -->
          <div class="p-2 rounded-xl bg-cream-50/80 border border-cream-200 flex flex-col items-center">
            <span class="text-[11px] font-bold text-burgundy-950 mb-1">1.5 kg</span>
            <div class="flex items-center bg-white rounded-lg border border-stone-300 p-0.5 shadow-sm">
              <button type="button" onclick="adjustCakeWeightQty('${cake.id}', '1.5', -1)" class="w-6 h-6 rounded bg-stone-100 hover:bg-burgundy-900 hover:text-white transition flex items-center justify-center font-bold text-xs">-</button>
              <input type="number" min="0" value="${item['1.5'] || 0}" 
                oninput="setCakeWeightQty('${cake.id}', '1.5', this.value)"
                class="w-10 text-center font-bold text-stone-900 text-xs bg-transparent border-0 focus:ring-0 p-0">
              <button type="button" onclick="adjustCakeWeightQty('${cake.id}', '1.5', 1)" class="w-6 h-6 rounded bg-stone-100 hover:bg-burgundy-900 hover:text-white transition flex items-center justify-center font-bold text-xs">+</button>
            </div>
          </div>

          <!-- 2.0 kg -->
          <div class="p-2 rounded-xl bg-cream-50/80 border border-cream-200 flex flex-col items-center">
            <span class="text-[11px] font-bold text-burgundy-950 mb-1">2.0 kg</span>
            <div class="flex items-center bg-white rounded-lg border border-stone-300 p-0.5 shadow-sm">
              <button type="button" onclick="adjustCakeWeightQty('${cake.id}', '2.0', -1)" class="w-6 h-6 rounded bg-stone-100 hover:bg-burgundy-900 hover:text-white transition flex items-center justify-center font-bold text-xs">-</button>
              <input type="number" min="0" value="${item['2.0'] || 0}" 
                oninput="setCakeWeightQty('${cake.id}', '2.0', this.value)"
                class="w-10 text-center font-bold text-stone-900 text-xs bg-transparent border-0 focus:ring-0 p-0">
              <button type="button" onclick="adjustCakeWeightQty('${cake.id}', '2.0', 1)" class="w-6 h-6 rounded bg-stone-100 hover:bg-burgundy-900 hover:text-white transition flex items-center justify-center font-bold text-xs">+</button>
            </div>
          </div>

        </div>

        <!-- Optional Special Specifics Toggle (Message on Cake, Eggless, Shape) -->
        <div class="pt-1">
          <button type="button" onclick="toggleCakeDetails('${cake.id}')" class="text-[11px] text-burgundy-800 hover:text-burgundy-950 font-semibold flex items-center gap-1">
            <span>${item.showOptions ? '▲ Hide specifics' : '▼ Add message, shape, or eggless tag (optional)'}</span>
          </button>
          
          <div id="cake-options-${cake.id}" class="mt-2.5 p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-2.5 ${item.showOptions ? '' : 'hidden'} text-xs">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label class="block text-[10px] font-bold text-stone-600 mb-1">Dietary Type</label>
                <select onchange="updateCakeDetailField('${cake.id}', 'eggless', this.value === 'true')" class="w-full px-2 py-1 text-xs rounded border border-stone-300 bg-white">
                  <option value="true" ${item.eggless ? 'selected' : ''}>🟢 Eggless (Pure Veg)</option>
                  <option value="false" ${!item.eggless ? 'selected' : ''}>🟡 With Egg</option>
                </select>
              </div>
              <div>
                <label class="block text-[10px] font-bold text-stone-600 mb-1">Shape</label>
                <select onchange="updateCakeDetailField('${cake.id}', 'shape', this.value)" class="w-full px-2 py-1 text-xs rounded border border-stone-300 bg-white">
                  <option value="Round" ${item.shape === 'Round' ? 'selected' : ''}>Round (Standard)</option>
                  <option value="Heart" ${item.shape === 'Heart' ? 'selected' : ''}>Heart Shape</option>
                  <option value="Square" ${item.shape === 'Square' ? 'selected' : ''}>Square Shape</option>
                </select>
              </div>
            </div>
            <div>
              <label class="block text-[10px] font-bold text-stone-600 mb-1">Message on Cake</label>
              <input type="text" placeholder="e.g. Happy Birthday Aarav" value="${item.message || ''}"
                oninput="updateCakeDetailField('${cake.id}', 'message', this.value)"
                class="w-full px-2.5 py-1 text-xs rounded border border-stone-300 bg-white">
            </div>
          </div>
        </div>

      </div>
    `;
  }).join('');
}

window.adjustCakeWeightQty = function(cakeId, weight, delta) {
  if (!cakeState.items[cakeId]) {
    cakeState.items[cakeId] = { '0.5': 0, '1.0': 0, '1.5': 0, '2.0': 0, eggless: true, shape: 'Round', message: '', notes: '', showOptions: false };
  }
  const current = cakeState.items[cakeId][weight] || 0;
  cakeState.items[cakeId][weight] = Math.max(0, current + delta);
  renderCakeFlavorsList();
  updateCakeSummaryAndSlip();
};

window.setCakeWeightQty = function(cakeId, weight, val) {
  if (!cakeState.items[cakeId]) {
    cakeState.items[cakeId] = { '0.5': 0, '1.0': 0, '1.5': 0, '2.0': 0, eggless: true, shape: 'Round', message: '', notes: '', showOptions: false };
  }
  const parsed = parseInt(val, 10);
  cakeState.items[cakeId][weight] = isNaN(parsed) || parsed < 0 ? 0 : parsed;
  updateCakeSummaryAndSlip();

  // highlight visually
  const row = document.querySelector(`.cake-item-row[data-cake-id="${cakeId}"]`);
  const total = (cakeState.items[cakeId]['0.5'] || 0) + (cakeState.items[cakeId]['1.0'] || 0) + (cakeState.items[cakeId]['1.5'] || 0) + (cakeState.items[cakeId]['2.0'] || 0);
  if (row) {
    if (total > 0) row.classList.add('cake-item-active');
    else row.classList.remove('cake-item-active');
  }
};

window.toggleCakeDetails = function(cakeId) {
  if (cakeState.items[cakeId]) {
    cakeState.items[cakeId].showOptions = !cakeState.items[cakeId].showOptions;
    const el = document.getElementById(`cake-options-${cakeId}`);
    if (el) el.classList.toggle('hidden');
  }
};

window.updateCakeDetailField = function(cakeId, field, val) {
  if (cakeState.items[cakeId]) {
    cakeState.items[cakeId][field] = val;
    updateCakeSummaryAndSlip();
  }
};

// Custom Cake Flavors
function renderCustomCakesList() {
  const container = document.getElementById('custom-cakes-container');
  if (!container) return;

  if (cakeState.customCakes.length === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = cakeState.customCakes.map((custom, idx) => {
    return `
      <div class="p-3 bg-cream-50 rounded-xl border border-cream-200 space-y-2">
        <div class="flex items-center justify-between gap-2">
          <input type="text" placeholder="Custom Flavor Name (e.g. Irish Coffee)" value="${custom.name}"
            oninput="updateCustomCakeField(${idx}, 'name', this.value)"
            class="flex-1 px-2.5 py-1 text-xs rounded border border-stone-300 bg-white font-bold">
          <button type="button" onclick="removeCustomCake(${idx})" class="text-red-500 hover:text-red-700 p-1" title="Delete">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div class="flex items-center gap-1">
            <span class="text-[10px] text-stone-500">0.5 kg:</span>
            <input type="number" min="0" value="${custom.weights['0.5'] || 0}"
              oninput="updateCustomCakeWeight(${idx}, '0.5', this.value)"
              class="w-12 px-1 py-0.5 text-center font-bold rounded border border-stone-300 bg-white">
          </div>
          <div class="flex items-center gap-1">
            <span class="text-[10px] text-stone-500">1.0 kg:</span>
            <input type="number" min="0" value="${custom.weights['1.0'] || 0}"
              oninput="updateCustomCakeWeight(${idx}, '1.0', this.value)"
              class="w-12 px-1 py-0.5 text-center font-bold rounded border border-stone-300 bg-white">
          </div>
          <div class="flex items-center gap-1">
            <span class="text-[10px] text-stone-500">1.5 kg:</span>
            <input type="number" min="0" value="${custom.weights['1.5'] || 0}"
              oninput="updateCustomCakeWeight(${idx}, '1.5', this.value)"
              class="w-12 px-1 py-0.5 text-center font-bold rounded border border-stone-300 bg-white">
          </div>
          <div class="flex items-center gap-1">
            <span class="text-[10px] text-stone-500">2.0 kg:</span>
            <input type="number" min="0" value="${custom.weights['2.0'] || 0}"
              oninput="updateCustomCakeWeight(${idx}, '2.0', this.value)"
              class="w-12 px-1 py-0.5 text-center font-bold rounded border border-stone-300 bg-white">
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

window.updateCustomCakeField = function(idx, field, val) {
  if (cakeState.customCakes[idx]) {
    cakeState.customCakes[idx][field] = val;
    updateCakeSummaryAndSlip();
  }
};

window.updateCustomCakeWeight = function(idx, weight, val) {
  if (cakeState.customCakes[idx]) {
    const parsed = parseInt(val, 10);
    cakeState.customCakes[idx].weights[weight] = isNaN(parsed) || parsed < 0 ? 0 : parsed;
    updateCakeSummaryAndSlip();
  }
};

window.removeCustomCake = function(idx) {
  cakeState.customCakes.splice(idx, 1);
  renderCustomCakesList();
  updateCakeSummaryAndSlip();
};

// Generate Cake Order WhatsApp Text & Kitchen Ticket Summary
function calculateCakeOrderData() {
  let totalCakes = 0;
  let totalWeightKg = 0;
  const activeFlavors = [];

  // Standard Flavors
  INITIAL_CAKE_FLAVORS.forEach(flavor => {
    const item = cakeState.items[flavor.id];
    if (!item) return;

    const weightsList = [];
    let flavorCakesCount = 0;
    let flavorWeight = 0;

    ['0.5', '1.0', '1.5', '2.0'].forEach(w => {
      const count = item[w] || 0;
      if (count > 0) {
        weightsList.push({ weight: w, count: count });
        flavorCakesCount += count;
        flavorWeight += count * parseFloat(w);
      }
    });

    if (flavorCakesCount > 0) {
      totalCakes += flavorCakesCount;
      totalWeightKg += flavorWeight;
      activeFlavors.push({
        id: flavor.id,
        name: flavor.name,
        weights: weightsList,
        flavorCakesCount: flavorCakesCount,
        flavorWeight: flavorWeight,
        eggless: item.eggless,
        shape: item.shape,
        message: item.message,
        notes: item.notes,
      });
    }
  });

  // Custom Flavors
  cakeState.customCakes.forEach(c => {
    if (!c.name) return;
    const weightsList = [];
    let flavorCakesCount = 0;
    let flavorWeight = 0;

    ['0.5', '1.0', '1.5', '2.0'].forEach(w => {
      const count = c.weights[w] || 0;
      if (count > 0) {
        weightsList.push({ weight: w, count: count });
        flavorCakesCount += count;
        flavorWeight += count * parseFloat(w);
      }
    });

    if (flavorCakesCount > 0) {
      totalCakes += flavorCakesCount;
      totalWeightKg += flavorWeight;
      activeFlavors.push({
        id: c.id,
        name: c.name,
        weights: weightsList,
        flavorCakesCount: flavorCakesCount,
        flavorWeight: flavorWeight,
        eggless: true,
        shape: 'Round',
        message: '',
        notes: '',
      });
    }
  });

  return { totalCakes, totalWeightKg, activeFlavors };
}

function generateCakeWhatsAppText() {
  const { totalCakes, totalWeightKg, activeFlavors } = calculateCakeOrderData();
  const chefName = cakeState.makerName || 'Cake Maker (Chef)';
  const requiredTime = cakeState.requiredTime || 'Immediate / ASAP';
  const generalNotes = cakeState.notes ? `\n📝 *Notes for Chef:* ${cakeState.notes}` : '';

  let text = `🎂 *BR BAKERY - CAKE PRODUCTION ORDER* 🎂\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `👨‍🍳 *To:* ${chefName}\n`;
  text += `⏰ *Required By:* ${requiredTime}\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `📋 *CAKES TO PREPARE:*\n\n`;

  if (activeFlavors.length === 0) {
    text += `(No cakes selected yet)\n`;
  } else {
    activeFlavors.forEach((f, idx) => {
      const dietTag = f.eggless ? '🟢 Eggless' : '🟡 With Egg';
      const shapeTag = f.shape && f.shape !== 'Round' ? ` (${f.shape} Shape)` : '';
      text += `${idx + 1}️⃣ *${f.name}* [${dietTag}${shapeTag}]\n`;
      f.weights.forEach(w => {
        const weightLabel = w.weight === '0.5' ? '0.5 kg (Half Kg)' : `${w.weight} kg`;
        text += `   • ${weightLabel} : *${w.count} cake${w.count === 1 ? '' : 's'}*\n`;
      });
      if (f.message) {
        text += `   ✍️ Message: "${f.message}"\n`;
      }
      text += `   ↳ Subtotal: ${f.flavorCakesCount} cakes (${f.flavorWeight.toFixed(1)} kg)\n\n`;
    });
  }

  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `🎂 *TOTAL CAKES:* ${totalCakes} cakes (${totalWeightKg.toFixed(1)} kg total)\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━${generalNotes}\n`;
  text += `_Sent by Sales Counter, BR Bakery_ 🙏`;

  return text;
}

function updateCakeSummaryAndSlip() {
  const { totalCakes, totalWeightKg } = calculateCakeOrderData();
  const previewText = generateCakeWhatsAppText();

  const previewBox = document.getElementById('cake-whatsapp-preview');
  const totalBadge = document.getElementById('cake-total-badge');
  const slipTotalCakes = document.getElementById('slip-total-cakes');
  const slipTotalWeight = document.getElementById('slip-total-weight');
  const mobileCakeTotalSummary = document.getElementById('mobile-cake-total-summary');

  if (previewBox) previewBox.textContent = previewText;
  if (totalBadge) totalBadge.textContent = `${totalCakes} cake${totalCakes === 1 ? '' : 's'}`;
  if (slipTotalCakes) slipTotalCakes.textContent = totalCakes;
  if (slipTotalWeight) slipTotalWeight.textContent = `${totalWeightKg.toFixed(1)} kg`;
  if (mobileCakeTotalSummary) mobileCakeTotalSummary.textContent = `${totalCakes} cakes (${totalWeightKg.toFixed(1)} kg)`;
}

function sendCakeWhatsApp() {
  const { totalCakes } = calculateCakeOrderData();
  if (totalCakes === 0) {
    alert('Please select at least one cake quantity before sending to the cake maker.');
    return;
  }

  const phoneInput = document.getElementById('cake-maker-phone');
  let rawPhone = phoneInput ? phoneInput.value.trim() : (cakeState.makerPhone || '');
  const rememberCheckbox = document.getElementById('save-chef-default');

  if (rememberCheckbox && rememberCheckbox.checked && rawPhone) {
    try {
      localStorage.setItem('br_bakery_chef_phone', rawPhone);
      localStorage.setItem('br_bakery_chef_name', cakeState.makerName);
    } catch (e) {
      console.error(e);
    }
  }

  const cleanedPhone = rawPhone.replace(/[^0-9]/g, '');
  const text = generateCakeWhatsAppText();

  let url = '';
  if (cleanedPhone && cleanedPhone.length >= 10) {
    url = `https://wa.me/${cleanedPhone}?text=${encodeURIComponent(text)}`;
  } else {
    url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  window.open(url, '_blank');
  showToast('Opening WhatsApp with Cake Order!');
}

function copyCakeOrderSlip() {
  const text = generateCakeWhatsAppText();
  navigator.clipboard.writeText(text).then(() => {
    showToast('Cake Order Slip copied to clipboard!');
  }).catch(() => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('Cake Order Slip copied to clipboard!');
  });
}

function openCakeKOTModal() {
  const { totalCakes, totalWeightKg, activeFlavors } = calculateCakeOrderData();
  if (totalCakes === 0) {
    alert('Please select cake quantities first before generating KOT ticket.');
    return;
  }

  const ticketId = `KOT-${Math.floor(1000 + Math.random() * 9000)}`;
  const ticketIdElem = document.getElementById('kot-ticket-id');
  const makerNameElem = document.getElementById('kot-maker-name');
  const requiredTimeElem = document.getElementById('kot-required-time');
  const placedTimeElem = document.getElementById('kot-placed-time');
  const tbody = document.getElementById('kot-items-tbody');
  const totalCountElem = document.getElementById('kot-total-count');
  const notesBox = document.getElementById('kot-notes-box');
  const notesText = document.getElementById('kot-notes-text');

  if (ticketIdElem) ticketIdElem.textContent = `#${ticketId}`;
  if (makerNameElem) makerNameElem.textContent = cakeState.makerName || 'Raju Chef';
  if (requiredTimeElem) requiredTimeElem.textContent = cakeState.requiredTime || 'Tomorrow 9:00 AM';
  if (placedTimeElem) placedTimeElem.textContent = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

  if (tbody) {
    let rows = '';
    activeFlavors.forEach(f => {
      f.weights.forEach(w => {
        const weightLabel = w.weight === '0.5' ? '0.5 kg (Half Kg)' : `${w.weight} kg`;
        const extraNote = f.message ? `<div class="text-[10px] text-stone-500 italic">Msg: "${f.message}"</div>` : '';
        rows += `
          <tr>
            <td class="py-1.5 font-bold">${f.name} ${f.eggless ? '<span class="text-emerald-700 font-normal">(Eggless)</span>' : ''} ${extraNote}</td>
            <td class="py-1.5 text-center">${weightLabel}</td>
            <td class="py-1.5 text-right font-extrabold text-burgundy-950">${w.count} pcs</td>
          </tr>
        `;
      });
    });
    tbody.innerHTML = rows;
  }

  if (totalCountElem) totalCountElem.textContent = `${totalCakes} cakes (${totalWeightKg.toFixed(1)} kg)`;

  if (cakeState.notes) {
    if (notesBox) notesBox.classList.remove('hidden');
    if (notesText) notesText.textContent = cakeState.notes;
  } else {
    if (notesBox) notesBox.classList.add('hidden');
  }

  document.getElementById('cake-kot-modal').classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function loadCakeExampleOrder() {
  // Exactly matching what the salesperson writes on paper as requested by the user:
  // "Blackforest half kg 3 cakes 1 kg 2 cakes"
  INITIAL_CAKE_FLAVORS.forEach(f => {
    if (cakeState.items[f.id]) {
      cakeState.items[f.id]['0.5'] = 0;
      cakeState.items[f.id]['1.0'] = 0;
      cakeState.items[f.id]['1.5'] = 0;
      cakeState.items[f.id]['2.0'] = 0;
    }
  });

  cakeState.items['blackforest']['0.5'] = 3;
  cakeState.items['blackforest']['1.0'] = 2;
  cakeState.items['blackforest'].eggless = true;
  cakeState.requiredTime = 'Tomorrow Morning (9:00 AM)';
  cakeState.notes = 'Counter display restock. Please ensure fresh cherries and rich chocolate shavings.';

  const timeInput = document.getElementById('cake-required-time');
  const notesInput = document.getElementById('cake-general-notes');
  if (timeInput) timeInput.value = cakeState.requiredTime;
  if (notesInput) notesInput.value = cakeState.notes;

  renderCakeFlavorsList();
  updateCakeSummaryAndSlip();
  showToast('✓ Loaded Blackforest: 0.5kg (3), 1kg (2) example!');
}

function clearCakeOrder() {
  if (confirm('Clear all cake quantities?')) {
    INITIAL_CAKE_FLAVORS.forEach(f => {
      if (cakeState.items[f.id]) {
        cakeState.items[f.id]['0.5'] = 0;
        cakeState.items[f.id]['1.0'] = 0;
        cakeState.items[f.id]['1.5'] = 0;
        cakeState.items[f.id]['2.0'] = 0;
        cakeState.items[f.id].message = '';
      }
    });
    cakeState.customCakes = [];
    cakeState.notes = '';
    const notesInput = document.getElementById('cake-general-notes');
    if (notesInput) notesInput.value = '';

    renderCakeFlavorsList();
    renderCustomCakesList();
    updateCakeSummaryAndSlip();
    showToast('Cake order cleared');
  }
}

// ==========================================
// SWEETS ENGINE (Catalog, Boxes & Calculations)
// ==========================================
function loadPricesFromStorage() {
  try {
    const saved = localStorage.getItem('br_bakery_price_settings');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.sweets && Array.isArray(parsed.sweets)) {
        parsed.sweets.forEach(ps => {
          const item = currentSweets.find(s => s.id === ps.id);
          if (item && typeof ps.price === 'number') {
            item.price = ps.price;
          }
        });
      }
      if (parsed.boxes && Array.isArray(parsed.boxes)) {
        parsed.boxes.forEach(pb => {
          const box = currentBoxes.find(b => b.id === pb.id);
          if (box) {
            if (typeof pb.price === 'number') box.price = pb.price;
            if (typeof pb.capacity === 'number') box.capacity = pb.capacity;
            box.description = `₹${box.price} each`;
          }
        });
      }
    }
  } catch (e) {
    console.error('Failed to load price settings:', e);
  }
}

function renderSweetsList() {
  const container = document.getElementById('sweets-list');
  if (!container) return;

  const search = (state.searchQuery || '').trim().toLowerCase();
  const category = state.activeCategory;

  const filtered = currentSweets.filter(sweet => {
    const matchesSearch = sweet.name.toLowerCase().includes(search);
    if (!matchesSearch) return false;

    if (category === 'all') return true;
    if (category === 'selected') {
      return (state.sweets[sweet.id] || 0) > 0;
    }
    return sweet.category === category;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center bg-stone-50 rounded-2xl border border-stone-200">
        <div class="w-12 h-12 rounded-full bg-cream-100 mx-auto flex items-center justify-center text-stone-400 mb-2">
          <i data-lucide="search-x" class="w-6 h-6"></i>
        </div>
        <p class="font-bold text-stone-700 text-sm">No sweets found</p>
        <p class="text-xs text-stone-400 mt-1">Try searching for a different sweet name or select "All" category.</p>
        <button type="button" onclick="resetCategoryFilter()" class="mt-3 text-xs font-semibold px-3 py-1.5 rounded-lg bg-burgundy-900 text-cream-100">
          Show All Sweets
        </button>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(sweet => {
    const qty = state.sweets[sweet.id] || 0;
    const subtotal = qty * sweet.price;
    const isActive = qty > 0;

    return `
      <div class="sweet-item-row p-3 sm:p-4 rounded-xl border ${isActive ? 'sweet-item-active' : 'border-stone-200 bg-white'} transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 hover:border-burgundy-300" data-id="${sweet.id}">
        <!-- Item Name & Price -->
        <div class="flex items-center justify-between sm:justify-start gap-2">
          <div class="min-w-0">
            <h4 class="font-bold text-stone-900 text-sm sm:text-base leading-snug">${sweet.name}</h4>
            <div class="flex items-center gap-1.5 mt-0.5">
              <span class="text-xs font-semibold text-burgundy-900 bg-burgundy-50 px-2 py-0.5 rounded border border-burgundy-100">
                ₹${sweet.price} ${sweet.unit}
              </span>
            </div>
          </div>
          <!-- Mobile subtotal view -->
          <div class="sm:hidden text-right shrink-0">
            <span class="text-[10px] uppercase font-semibold text-stone-400 block tracking-wider">Subtotal</span>
            <span class="font-bold text-burgundy-950 text-sm">₹${subtotal.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <!-- Controls & Subtotal -->
        <div class="flex items-center justify-between sm:justify-end gap-2 sm:gap-4 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-0 border-cream-100">
          
          <!-- Stepper buttons + Direct Number Input -->
          <div class="flex items-center bg-[#FAF7F2] rounded-xl border border-stone-300 p-0.5 sm:p-1">
            <button type="button" class="w-8 h-8 rounded-lg bg-white text-stone-700 hover:bg-burgundy-900 hover:text-white transition flex items-center justify-center font-bold text-base shadow-sm border border-stone-200/80 active:scale-95" 
              onclick="adjustSweetQty('${sweet.id}', -1)" title="Decrease">
              -
            </button>
            <input type="number" min="0" value="${qty}" 
              class="w-14 sm:w-20 text-center font-bold text-stone-900 text-sm bg-transparent border-0 focus:ring-0 p-0"
              onchange="setSweetQty('${sweet.id}', this.value)"
              oninput="setSweetQty('${sweet.id}', this.value)">
            <button type="button" class="w-8 h-8 rounded-lg bg-white text-stone-700 hover:bg-burgundy-900 hover:text-white transition flex items-center justify-center font-bold text-base shadow-sm border border-stone-200/80 active:scale-95" 
              onclick="adjustSweetQty('${sweet.id}', 1)" title="Increase">
              +
            </button>
          </div>

          <!-- Quick Presets -->
          <div class="flex items-center gap-1">
            <button type="button" onclick="adjustSweetQty('${sweet.id}', 10)" class="text-xs font-semibold px-2 py-1.5 bg-cream-100 hover:bg-cream-200 active:bg-cream-300 rounded-lg text-stone-700 transition border border-cream-200" title="Add 10 pcs">+10</button>
            <button type="button" onclick="adjustSweetQty('${sweet.id}', 50)" class="text-xs font-semibold px-2 py-1.5 bg-cream-100 hover:bg-cream-200 active:bg-cream-300 rounded-lg text-stone-700 transition border border-cream-200 hidden sm:inline-block" title="Add 50 pcs">+50</button>
            ${qty > 0 ? `<button type="button" onclick="setSweetQty('${sweet.id}', 0); renderSweetsList();" class="text-xs font-bold px-2 py-1.5 text-stone-400 hover:text-red-600 rounded-lg transition" title="Clear">✕</button>` : ''}
          </div>

          <!-- Desktop Subtotal Column -->
          <div class="hidden sm:block w-20 text-right">
            <span class="font-extrabold text-stone-900 text-sm sm:text-base">
              ₹${subtotal.toLocaleString('en-IN')}
            </span>
          </div>

        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

window.resetCategoryFilter = function() {
  state.activeCategory = 'all';
  state.searchQuery = '';
  const searchInput = document.getElementById('sweet-search');
  if (searchInput) searchInput.value = '';
  updateCategoryPillsUI();
  renderSweetsList();
};

function updateCategoryPillsUI() {
  document.querySelectorAll('.category-pill').forEach(pill => {
    const cat = pill.getAttribute('data-cat');
    if (cat === state.activeCategory) {
      pill.className = 'category-pill active px-3 py-1 rounded-full font-semibold transition shrink-0 bg-burgundy-900 text-cream-100 border border-burgundy-900 shadow-sm';
    } else if (cat === 'selected') {
      pill.className = 'category-pill px-3 py-1 rounded-full font-semibold transition shrink-0 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 ml-auto';
    } else {
      pill.className = 'category-pill px-3 py-1 rounded-full font-semibold transition shrink-0 bg-cream-100 hover:bg-cream-200 text-stone-700 border border-cream-200';
    }
  });
}

window.adjustSweetQty = function(id, delta) {
  const current = state.sweets[id] || 0;
  const next = Math.max(0, current + delta);
  state.sweets[id] = next;
  renderSweetsList();
  updateCalculations();
};

window.setSweetQty = function(id, value) {
  const parsed = parseInt(value, 10);
  state.sweets[id] = isNaN(parsed) || parsed < 0 ? 0 : parsed;
  updateCalculations();
  
  const row = document.querySelector(`.sweet-item-row[data-id="${id}"]`);
  if (row) {
    if (state.sweets[id] > 0) row.classList.add('sweet-item-active');
    else row.classList.remove('sweet-item-active');
  }
};

function renderBoxesList() {
  const container = document.getElementById('boxes-list');
  if (!container) return;

  container.innerHTML = currentBoxes.map(box => {
    const qty = state.boxes[box.id] || 0;
    const subtotal = qty * box.price;
    const isActive = qty > 0;

    return `
      <div class="p-3 sm:p-4 rounded-xl border ${isActive ? 'sweet-item-active' : 'border-stone-200 bg-white'} transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 hover:border-burgundy-300">
        <div class="flex items-center justify-between sm:justify-start gap-2">
          <div class="min-w-0">
            <h4 class="font-bold text-stone-900 text-sm sm:text-base leading-snug">${box.name}</h4>
            <div class="flex items-center gap-1.5 mt-0.5">
              <span class="text-xs font-semibold text-stone-600 bg-cream-100 px-2 py-0.5 rounded border border-cream-200">
                ₹${box.price} each
              </span>
              <span class="text-[11px] text-stone-400">Holds ${box.capacity} pcs</span>
            </div>
          </div>
          <div class="sm:hidden text-right shrink-0">
            <span class="text-[10px] uppercase font-semibold text-stone-400 block tracking-wider">Subtotal</span>
            <span class="font-bold text-burgundy-950 text-sm">₹${subtotal.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <div class="flex items-center justify-between sm:justify-end gap-2 sm:gap-4 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-0 border-cream-100">
          <div class="flex items-center bg-[#FAF7F2] rounded-xl border border-stone-300 p-0.5 sm:p-1">
            <button type="button" class="w-8 h-8 rounded-lg bg-white text-stone-700 hover:bg-burgundy-900 hover:text-white transition flex items-center justify-center font-bold text-base shadow-sm border border-stone-200/80 active:scale-95" 
              onclick="adjustBoxQty('${box.id}', -1)" title="Decrease">
              -
            </button>
            <input type="number" min="0" value="${qty}" 
              class="w-14 sm:w-20 text-center font-bold text-stone-900 text-sm bg-transparent border-0 focus:ring-0 p-0"
              onchange="setBoxQty('${box.id}', this.value)"
              oninput="setBoxQty('${box.id}', this.value)">
            <button type="button" class="w-8 h-8 rounded-lg bg-white text-stone-700 hover:bg-burgundy-900 hover:text-white transition flex items-center justify-center font-bold text-base shadow-sm border border-stone-200/80 active:scale-95" 
              onclick="adjustBoxQty('${box.id}', 1)" title="Increase">
              +
            </button>
          </div>

          <div class="flex items-center gap-1">
            <button type="button" onclick="adjustBoxQty('${box.id}', 5)" class="text-xs font-semibold px-2 py-1.5 bg-cream-100 hover:bg-cream-200 active:bg-cream-300 rounded-lg text-stone-700 transition border border-cream-200" title="Add 5 boxes">+5</button>
            <button type="button" onclick="adjustBoxQty('${box.id}', 10)" class="text-xs font-semibold px-2 py-1.5 bg-cream-100 hover:bg-cream-200 active:bg-cream-300 rounded-lg text-stone-700 transition border border-cream-200 hidden sm:inline-block" title="Add 10 boxes">+10</button>
            ${qty > 0 ? `<button type="button" onclick="setBoxQty('${box.id}', 0); renderBoxesList();" class="text-xs font-bold px-2 py-1.5 text-stone-400 hover:text-red-600 rounded-lg transition" title="Clear">✕</button>` : ''}
          </div>

          <div class="hidden sm:block w-20 text-right">
            <span class="font-extrabold text-stone-900 text-sm sm:text-base">
              ₹${subtotal.toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.adjustBoxQty = function(id, delta) {
  const current = state.boxes[id] || 0;
  const next = Math.max(0, current + delta);
  state.boxes[id] = next;
  renderBoxesList();
  updateCalculations();
};

window.setBoxQty = function(id, value) {
  const parsed = parseInt(value, 10);
  state.boxes[id] = isNaN(parsed) || parsed < 0 ? 0 : parsed;
  updateCalculations();
};

function renderCustomSweets() {
  const container = document.getElementById('custom-sweets-container');
  if (!container) return;

  if (state.customSweets.length === 0) {
    container.innerHTML = `
      <div class="p-3 bg-stone-50 rounded-xl border border-dashed border-stone-300 text-xs text-stone-500 text-center">
        No custom items added. Click "Add Item" above to specify custom sweets.
      </div>
    `;
    return;
  }

  container.innerHTML = state.customSweets.map((item, index) => {
    return `
      <div class="p-3.5 bg-cream-50/70 rounded-xl border border-cream-200 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
        <div class="sm:col-span-5">
          <input type="text" placeholder="Sweet name (e.g. Dryfruit Halwa)" value="${item.name}"
            oninput="updateCustomSweet(${index}, 'name', this.value)"
            class="w-full px-3 py-1.5 text-xs rounded-lg border border-stone-300 bg-white focus:ring-1 focus:ring-burgundy-800">
        </div>
        <div class="sm:col-span-3 flex items-center">
          <span class="text-xs text-stone-400 mr-1">₹</span>
          <input type="number" min="0" placeholder="Price / pc" value="${item.price || ''}"
            oninput="updateCustomSweet(${index}, 'price', this.value)"
            class="w-full px-2 py-1.5 text-xs rounded-lg border border-stone-300 bg-white focus:ring-1 focus:ring-burgundy-800">
        </div>
        <div class="sm:col-span-3 flex items-center">
          <input type="number" min="0" placeholder="Qty pcs" value="${item.quantity || ''}"
            oninput="updateCustomSweet(${index}, 'quantity', this.value)"
            class="w-full px-2 py-1.5 text-xs rounded-lg border border-stone-300 bg-white focus:ring-1 focus:ring-burgundy-800">
        </div>
        <div class="sm:col-span-1 text-right flex items-center justify-end gap-2">
          <button type="button" onclick="removeCustomSweet(${index})" class="text-red-500 hover:text-red-700 p-1" title="Delete">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

window.updateCustomSweet = function(index, field, value) {
  if (!state.customSweets[index]) return;
  if (field === 'price' || field === 'quantity') {
    state.customSweets[index][field] = parseFloat(value) || 0;
  } else {
    state.customSweets[index][field] = value;
  }
  updateCalculations();
};

window.removeCustomSweet = function(index) {
  state.customSweets.splice(index, 1);
  renderCustomSweets();
  updateCalculations();
};

function updateCalculations() {
  let sweetPieces = 0;
  let sweetSubtotal = 0;
  let selectedItemsCount = 0;
  const activeSweetsList = [];

  currentSweets.forEach(s => {
    const qty = state.sweets[s.id] || 0;
    if (qty > 0) {
      selectedItemsCount++;
      sweetPieces += qty;
      const amount = qty * s.price;
      sweetSubtotal += amount;
      activeSweetsList.push({
        name: s.name,
        price: s.price,
        quantity: qty,
        amount: amount,
      });
    }
  });

  state.customSweets.forEach(c => {
    const qty = c.quantity || 0;
    const price = c.price || 0;
    if (qty > 0 && price > 0 && c.name) {
      selectedItemsCount++;
      sweetPieces += qty;
      const amount = qty * price;
      sweetSubtotal += amount;
      activeSweetsList.push({
        name: c.name,
        price: price,
        quantity: qty,
        amount: amount,
      });
    }
  });

  const selectedPillCount = document.getElementById('selected-filter-count');
  if (selectedPillCount) {
    selectedPillCount.textContent = selectedItemsCount;
  }

  let boxCharges = 0;
  let totalBoxCapacity = 0;
  let totalBoxesCount = 0;
  const activeBoxesList = [];

  currentBoxes.forEach(b => {
    const qty = state.boxes[b.id] || 0;
    if (qty > 0) {
      const amount = qty * b.price;
      boxCharges += amount;
      totalBoxCapacity += qty * b.capacity;
      totalBoxesCount += qty;
      activeBoxesList.push({
        name: b.name,
        price: b.price,
        quantity: qty,
        capacity: b.capacity,
        amount: amount,
      });
    }
  });

  const grandTotal = sweetSubtotal + boxCharges;
  const advance = state.advancePaid || 0;
  const balanceDue = Math.max(0, grandTotal - advance);

  const summaryList = document.getElementById('summary-items-list');
  const itemsCountBadge = document.getElementById('summary-items-count');
  if (itemsCountBadge) {
    itemsCountBadge.textContent = `${activeSweetsList.length} sweet${activeSweetsList.length === 1 ? '' : 's'}`;
  }

  if (summaryList) {
    if (activeSweetsList.length === 0 && activeBoxesList.length === 0) {
      summaryList.innerHTML = `<div class="py-4 text-center text-stone-400 italic">No sweets selected yet</div>`;
    } else {
      let html = '';
      activeSweetsList.forEach(item => {
        html += `
          <div class="py-1.5 flex justify-between items-center text-xs">
            <div>
              <span class="font-bold text-stone-800">${item.name}</span>
              <span class="text-stone-400 ml-1">× ${item.quantity}</span>
            </div>
            <span class="font-semibold text-stone-900">₹${item.amount.toLocaleString('en-IN')}</span>
          </div>
        `;
      });
      activeBoxesList.forEach(box => {
        html += `
          <div class="py-1.5 flex justify-between items-center text-xs text-burgundy-900 bg-burgundy-50/50 px-2 rounded">
            <div>
              <span class="font-bold">${box.name}</span>
              <span class="text-burgundy-700/80 ml-1">× ${box.quantity}</span>
            </div>
            <span class="font-bold">₹${box.amount.toLocaleString('en-IN')}</span>
          </div>
        `;
      });
      summaryList.innerHTML = html;
    }
  }

  const packSweets = document.getElementById('pack-total-sweets');
  const packCap = document.getElementById('pack-total-capacity');
  const packStatus = document.getElementById('pack-status-badge');
  if (packSweets) packSweets.textContent = `${sweetPieces} pcs`;
  if (packCap) packCap.textContent = `${totalBoxCapacity} pcs`;
  if (packStatus) {
    if (totalBoxCapacity === 0 && sweetPieces === 0) {
      packStatus.className = 'ml-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-stone-200 text-stone-700';
      packStatus.textContent = '0 boxes';
    } else if (totalBoxCapacity === sweetPieces) {
      packStatus.className = 'ml-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800';
      packStatus.textContent = '✓ Perfectly Packed';
    } else if (totalBoxCapacity < sweetPieces) {
      const remaining = sweetPieces - totalBoxCapacity;
      packStatus.className = 'ml-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800';
      packStatus.textContent = `⚠ ${remaining} pcs unpackaged`;
    } else {
      const extra = totalBoxCapacity - sweetPieces;
      packStatus.className = 'ml-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800';
      packStatus.textContent = `+${extra} extra box capacity`;
    }
  }

  const sweetSubElem = document.getElementById('summary-sweet-subtotal');
  const boxChargesElem = document.getElementById('summary-box-charges');
  const grandTotalElem = document.getElementById('summary-grand-total');
  const mobileGrandTotal = document.getElementById('mobile-grand-total');
  const balanceDueElem = document.getElementById('summary-balance-due');
  const balanceDueLabel = document.getElementById('balance-due-label');

  if (sweetSubElem) sweetSubElem.textContent = `₹${sweetSubtotal.toLocaleString('en-IN')}`;
  if (boxChargesElem) boxChargesElem.textContent = `₹${boxCharges.toLocaleString('en-IN')}`;
  if (grandTotalElem) grandTotalElem.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
  if (mobileGrandTotal) mobileGrandTotal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

  if (advance > 0) {
    if (balanceDueElem) {
      balanceDueElem.classList.remove('hidden');
      balanceDueElem.textContent = `Balance Due: ₹${balanceDue.toLocaleString('en-IN')}`;
    }
    if (balanceDueLabel) {
      balanceDueLabel.textContent = `Advance: ₹${advance.toLocaleString('en-IN')}`;
    }
  } else {
    if (balanceDueElem) balanceDueElem.classList.add('hidden');
    if (balanceDueLabel) balanceDueLabel.textContent = `Full amount due`;
  }

  const previewCustName = document.getElementById('preview-cust-name');
  const previewCustPhone = document.getElementById('preview-cust-phone');
  const previewCustDate = document.getElementById('preview-cust-date');
  if (previewCustName) previewCustName.textContent = state.customer.name || '-';
  if (previewCustPhone) previewCustPhone.textContent = state.customer.phone || '-';
  if (previewCustDate) previewCustDate.textContent = state.customer.date || '-';

  return {
    sweetPieces,
    sweetSubtotal,
    boxCharges,
    grandTotal,
    advance,
    balanceDue,
    activeSweetsList,
    activeBoxesList,
  };
}

// ==========================================
// PRICE SETTINGS MANAGEMENT
// ==========================================
let tempSweetPrices = {};
let tempBoxSettings = {};

function openSettingsModal() {
  tempSweetPrices = {};
  currentSweets.forEach(s => {
    tempSweetPrices[s.id] = s.price;
  });

  tempBoxSettings = {};
  currentBoxes.forEach(b => {
    tempBoxSettings[b.id] = { price: b.price, capacity: b.capacity };
  });

  switchSettingsTab('sweets');
  renderSettingsSweetsList();
  renderSettingsBoxesList();

  const countElem = document.getElementById('settings-sweets-count');
  if (countElem) countElem.textContent = currentSweets.length;

  const modal = document.getElementById('settings-modal');
  if (modal) modal.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function closeSettingsModal() {
  const modal = document.getElementById('settings-modal');
  if (modal) modal.classList.add('hidden');
}

function switchSettingsTab(tabName) {
  const sweetsBtn = document.getElementById('tab-btn-sweets');
  const boxesBtn = document.getElementById('tab-btn-boxes');
  const sweetsPanel = document.getElementById('settings-tab-sweets-panel');
  const boxesPanel = document.getElementById('settings-tab-boxes-panel');

  if (tabName === 'sweets') {
    if (sweetsBtn) sweetsBtn.className = 'settings-tab-btn active pb-2.5 border-b-2 border-burgundy-900 text-burgundy-950 flex items-center gap-1.5 transition';
    if (boxesBtn) boxesBtn.className = 'settings-tab-btn pb-2.5 border-b-2 border-transparent text-stone-500 hover:text-stone-800 flex items-center gap-1.5 transition';
    if (sweetsPanel) sweetsPanel.classList.remove('hidden');
    if (boxesPanel) boxesPanel.classList.add('hidden');
  } else {
    if (boxesBtn) boxesBtn.className = 'settings-tab-btn active pb-2.5 border-b-2 border-burgundy-900 text-burgundy-950 flex items-center gap-1.5 transition';
    if (sweetsBtn) sweetsBtn.className = 'settings-tab-btn pb-2.5 border-b-2 border-transparent text-stone-500 hover:text-stone-800 flex items-center gap-1.5 transition';
    if (boxesPanel) boxesPanel.classList.remove('hidden');
    if (sweetsPanel) sweetsPanel.classList.add('hidden');
  }
}

function renderSettingsSweetsList(searchTerm = '') {
  const container = document.getElementById('settings-sweets-list');
  if (!container) return;

  const search = searchTerm.trim().toLowerCase();
  const filtered = currentSweets.filter(s => s.name.toLowerCase().includes(search));

  if (filtered.length === 0) {
    container.innerHTML = `<div class="p-4 text-center text-stone-400 text-xs">No sweets found matching "${searchTerm}"</div>`;
    return;
  }

  container.innerHTML = filtered.map(sweet => {
    const currentPrice = tempSweetPrices[sweet.id] !== undefined ? tempSweetPrices[sweet.id] : sweet.price;
    return `
      <div class="p-2.5 bg-stone-50/80 rounded-xl border border-stone-200/90 flex items-center justify-between gap-3 hover:bg-cream-50 transition">
        <div>
          <span class="font-bold text-stone-900 text-xs sm:text-sm block">${sweet.name}</span>
          <span class="text-[10px] uppercase font-semibold text-stone-400 tracking-wider">${sweet.category}</span>
        </div>
        <div class="flex items-center">
          <span class="text-xs font-bold text-stone-500 mr-1.5">₹</span>
          <input type="number" min="0" value="${currentPrice}" 
            oninput="updateTempSweetPrice('${sweet.id}', this.value)"
            class="w-20 px-2.5 py-1 text-xs font-bold text-stone-900 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-burgundy-800 text-right">
          <span class="text-[11px] text-stone-400 ml-1.5">/ pc</span>
        </div>
      </div>
    `;
  }).join('');
}

window.updateTempSweetPrice = function(id, val) {
  const parsed = parseFloat(val);
  tempSweetPrices[id] = isNaN(parsed) || parsed < 0 ? 0 : parsed;
};

function renderSettingsBoxesList() {
  const container = document.getElementById('settings-boxes-list');
  if (!container) return;

  container.innerHTML = currentBoxes.map(box => {
    const cfg = tempBoxSettings[box.id] || { price: box.price, capacity: box.capacity };
    return `
      <div class="p-3.5 bg-stone-50/80 rounded-xl border border-stone-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h5 class="font-bold text-stone-900 text-sm">${box.name}</h5>
          <span class="text-xs text-stone-400">Packaging Box</span>
        </div>
        <div class="flex items-center gap-4">
          <div class="flex items-center">
            <span class="text-xs text-stone-500 mr-1 font-medium">Price: ₹</span>
            <input type="number" min="0" value="${cfg.price}" 
              oninput="updateTempBoxSetting('${box.id}', 'price', this.value)"
              class="w-16 px-2 py-1 text-xs font-bold text-stone-900 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-burgundy-800 text-right">
          </div>
          <div class="flex items-center">
            <span class="text-xs text-stone-500 mr-1 font-medium">Capacity:</span>
            <input type="number" min="1" value="${cfg.capacity}" 
              oninput="updateTempBoxSetting('${box.id}', 'capacity', this.value)"
              class="w-14 px-2 py-1 text-xs font-bold text-stone-900 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-burgundy-800 text-center">
            <span class="text-xs text-stone-400 ml-1">pcs</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.updateTempBoxSetting = function(id, field, val) {
  if (!tempBoxSettings[id]) {
    const box = currentBoxes.find(b => b.id === id);
    tempBoxSettings[id] = { price: box.price, capacity: box.capacity };
  }
  const parsed = parseInt(val, 10);
  tempBoxSettings[id][field] = isNaN(parsed) || parsed < 0 ? 0 : parsed;
};

function savePriceSettings() {
  currentSweets.forEach(s => {
    if (tempSweetPrices[s.id] !== undefined) {
      s.price = tempSweetPrices[s.id];
    }
  });

  currentBoxes.forEach(b => {
    if (tempBoxSettings[b.id]) {
      b.price = tempBoxSettings[b.id].price;
      b.capacity = tempBoxSettings[b.id].capacity;
      b.description = `₹${b.price} each`;
    }
  });

  const payload = {
    sweets: currentSweets.map(s => ({ id: s.id, price: s.price })),
    boxes: currentBoxes.map(b => ({ id: b.id, price: b.price, capacity: b.capacity })),
  };

  try {
    localStorage.setItem('br_bakery_price_settings', JSON.stringify(payload));
  } catch (e) {
    console.error('Error saving price settings:', e);
  }

  renderSweetsList();
  renderBoxesList();
  updateCalculations();
  closeSettingsModal();
  showToast('✓ Prices updated and saved successfully!');
}

function resetDefaultPrices() {
  if (!confirm('Are you sure you want to restore all sweet and box prices to official default rates?')) {
    return;
  }

  localStorage.removeItem('br_bakery_price_settings');
  currentSweets = JSON.parse(JSON.stringify(INITIAL_SWEETS));
  currentBoxes = JSON.parse(JSON.stringify(INITIAL_BOXES));

  openSettingsModal();
  renderSweetsList();
  renderBoxesList();
  updateCalculations();
  showToast('✓ Default official rates restored!');
}

// ==========================================
// SETUP EVENT LISTENERS
// ==========================================
function setupEventListeners() {
  // Navigation Mode Switcher
  const navSweets = document.getElementById('nav-mode-sweets');
  const navCakes = document.getElementById('nav-mode-cakes');
  if (navSweets) navSweets.addEventListener('click', () => switchAppMode('sweets'));
  if (navCakes) navCakes.addEventListener('click', () => switchAppMode('cakes'));

  // Cake Inputs
  const cakeMakerName = document.getElementById('cake-maker-name');
  const cakeMakerPhone = document.getElementById('cake-maker-phone');
  const cakeReqTime = document.getElementById('cake-required-time');
  const cakeNotes = document.getElementById('cake-general-notes');
  const cakeSearch = document.getElementById('cake-flavor-search');

  if (cakeMakerName) {
    cakeMakerName.addEventListener('input', (e) => {
      cakeState.makerName = e.target.value.trim();
      updateCakeSummaryAndSlip();
    });
  }

  if (cakeMakerPhone) {
    cakeMakerPhone.addEventListener('input', (e) => {
      cakeState.makerPhone = e.target.value.trim();
      updateCakeSummaryAndSlip();
    });
  }

  if (cakeReqTime) {
    cakeReqTime.addEventListener('input', (e) => {
      cakeState.requiredTime = e.target.value.trim();
      updateCakeSummaryAndSlip();
    });
  }

  if (cakeNotes) {
    cakeNotes.addEventListener('input', (e) => {
      cakeState.notes = e.target.value.trim();
      updateCakeSummaryAndSlip();
    });
  }

  if (cakeSearch) {
    cakeSearch.addEventListener('input', (e) => {
      cakeState.searchQuery = e.target.value;
      renderCakeFlavorsList();
    });
  }

  // Cake Quick Time Buttons
  document.querySelectorAll('.cake-quick-time-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      cakeState.requiredTime = btn.textContent.trim();
      if (cakeReqTime) cakeReqTime.value = cakeState.requiredTime;
      updateCakeSummaryAndSlip();
    });
  });

  // Cake Actions
  const sendCakeWaBtn = document.getElementById('send-cake-whatsapp-btn');
  const copyCakeBtn = document.getElementById('copy-cake-order-btn');
  const printKotBtn = document.getElementById('print-cake-kot-btn');
  const mobileCakeWaBtn = document.getElementById('mobile-cake-whatsapp-btn');
  const mobileCakeCopyBtn = document.getElementById('mobile-cake-copy-btn');
  const loadCakeSampleBtn = document.getElementById('load-sample-cake-btn');
  const clearCakeBtn = document.getElementById('clear-cake-order-btn');

  if (sendCakeWaBtn) sendCakeWaBtn.addEventListener('click', sendCakeWhatsApp);
  if (copyCakeBtn) copyCakeBtn.addEventListener('click', copyCakeOrderSlip);
  if (printKotBtn) printKotBtn.addEventListener('click', openCakeKOTModal);
  if (mobileCakeWaBtn) mobileCakeWaBtn.addEventListener('click', sendCakeWhatsApp);
  if (mobileCakeCopyBtn) mobileCakeCopyBtn.addEventListener('click', copyCakeOrderSlip);
  if (loadCakeSampleBtn) loadCakeSampleBtn.addEventListener('click', loadCakeExampleOrder);
  if (clearCakeBtn) clearCakeBtn.addEventListener('click', clearCakeOrder);

  // Close KOT Modal
  const closeKotBtn = document.getElementById('close-cake-kot-modal');
  const kotPrintAction = document.getElementById('kot-print-action-btn');
  if (closeKotBtn) closeKotBtn.addEventListener('click', () => document.getElementById('cake-kot-modal').classList.add('hidden'));
  if (kotPrintAction) kotPrintAction.addEventListener('click', () => window.print());

  // Add Custom Cake Flavor
  const addCustomCakeBtn = document.getElementById('add-custom-cake-flavor-btn');
  if (addCustomCakeBtn) {
    addCustomCakeBtn.addEventListener('click', () => {
      cakeState.customCakes.push({
        id: `custom_cake_${Date.now()}`,
        name: '',
        weights: { '0.5': 0, '1.0': 0, '1.5': 0, '2.0': 0 },
      });
      renderCustomCakesList();
    });
  }

  // Settings Button & Modal
  const openSettingsBtn = document.getElementById('open-settings-btn');
  const closeSettingsBtn = document.getElementById('close-settings-modal');
  const cancelSettingsBtn = document.getElementById('cancel-settings-btn');
  const saveSettingsBtn = document.getElementById('save-settings-btn');
  const resetPricesBtn = document.getElementById('reset-default-prices-btn');

  if (openSettingsBtn) openSettingsBtn.addEventListener('click', openSettingsModal);
  if (closeSettingsBtn) closeSettingsBtn.addEventListener('click', closeSettingsModal);
  if (cancelSettingsBtn) cancelSettingsBtn.addEventListener('click', closeSettingsModal);
  if (saveSettingsBtn) saveSettingsBtn.addEventListener('click', savePriceSettings);
  if (resetPricesBtn) resetPricesBtn.addEventListener('click', resetDefaultPrices);

  const tabSweets = document.getElementById('tab-btn-sweets');
  const tabBoxes = document.getElementById('tab-btn-boxes');
  if (tabSweets) tabSweets.addEventListener('click', () => switchSettingsTab('sweets'));
  if (tabBoxes) tabBoxes.addEventListener('click', () => switchSettingsTab('boxes'));

  const settingsSearch = document.getElementById('settings-sweet-search');
  if (settingsSearch) {
    settingsSearch.addEventListener('input', (e) => {
      renderSettingsSweetsList(e.target.value);
    });
  }

  // Sweets Category tabs
  document.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const cat = pill.getAttribute('data-cat');
      state.activeCategory = cat;
      updateCategoryPillsUI();
      renderSweetsList();
    });
  });

  // Customer inputs
  const nameInput = document.getElementById('customer-name');
  const phoneInput = document.getElementById('customer-phone');
  const dateInput = document.getElementById('delivery-date');
  const notesInput = document.getElementById('additional-notes');
  const advanceInput = document.getElementById('advance-paid-input');

  if (nameInput) {
    nameInput.addEventListener('input', (e) => {
      state.customer.name = e.target.value.trim();
      updateCalculations();
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      state.customer.phone = e.target.value.trim();
      updateCalculations();
    });
  }

  if (dateInput) {
    dateInput.addEventListener('change', (e) => {
      state.customer.date = e.target.value;
      updateCalculations();
    });
  }

  if (notesInput) {
    notesInput.addEventListener('input', (e) => {
      state.customer.notes = e.target.value.trim();
    });
  }

  if (advanceInput) {
    advanceInput.addEventListener('input', (e) => {
      state.advancePaid = parseFloat(e.target.value) || 0;
      updateCalculations();
    });
  }

  document.querySelectorAll('.date-quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const days = parseInt(btn.getAttribute('data-days'), 10) || 0;
      const d = new Date();
      d.setDate(d.getDate() + days);
      const str = d.toISOString().split('T')[0];
      state.customer.date = str;
      if (dateInput) dateInput.value = str;
      updateCalculations();
    });
  });

  const searchInput = document.getElementById('sweet-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderSweetsList();
    });
  }

  const addCustomBtn = document.getElementById('add-custom-sweet-btn');
  if (addCustomBtn) {
    addCustomBtn.addEventListener('click', () => {
      state.customSweets.push({ id: `custom_${Date.now()}`, name: '', price: 0, quantity: 0 });
      renderCustomSweets();
    });
  }

  const clearBtn = document.getElementById('clear-items-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      currentSweets.forEach(s => state.sweets[s.id] = 0);
      currentBoxes.forEach(b => state.boxes[b.id] = 0);
      state.customSweets = [];
      renderSweetsList();
      renderBoxesList();
      renderCustomSweets();
      updateCalculations();
      showToast('Items cleared successfully');
    });
  }

  const resetBtn = document.getElementById('reset-order-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to start a new order? This will reset customer details and quantities.')) {
        resetEntireOrder();
        showToast('Form reset for new order');
      }
    });
  }

  const loadSampleBtn = document.getElementById('load-sample-btn');
  if (loadSampleBtn) {
    loadSampleBtn.addEventListener('click', () => {
      loadScreenshotSampleOrder();
      showToast('Loaded sample order from screenshot!');
    });
  }

  const copyBtn = document.getElementById('copy-order-btn');
  const mobileCopyBtn = document.getElementById('mobile-copy-btn');
  if (copyBtn) copyBtn.addEventListener('click', copyCompleteOrder);
  if (mobileCopyBtn) mobileCopyBtn.addEventListener('click', copyCompleteOrder);

  const waBtn = document.getElementById('whatsapp-order-btn');
  const mobileWaBtn = document.getElementById('mobile-whatsapp-btn');
  if (waBtn) waBtn.addEventListener('click', sendWhatsAppOrder);
  if (mobileWaBtn) mobileWaBtn.addEventListener('click', sendWhatsAppOrder);

  const receiptBtn = document.getElementById('prepare-receipt-btn');
  const mobileReceiptBtn = document.getElementById('mobile-receipt-btn');
  if (receiptBtn) receiptBtn.addEventListener('click', openReceiptModal);
  if (mobileReceiptBtn) mobileReceiptBtn.addEventListener('click', openReceiptModal);

  const closeReceiptBtn = document.getElementById('close-receipt-modal');
  if (closeReceiptBtn) {
    closeReceiptBtn.addEventListener('click', () => {
      document.getElementById('receipt-modal').classList.add('hidden');
    });
  }

  const printBtn = document.getElementById('modal-print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  const modalWaBtn = document.getElementById('modal-whatsapp-share-btn');
  if (modalWaBtn) modalWaBtn.addEventListener('click', sendWhatsAppOrder);

  const viewHistoryBtn = document.getElementById('view-history-btn');
  const closeHistoryBtn = document.getElementById('close-history-modal');
  if (viewHistoryBtn) viewHistoryBtn.addEventListener('click', openHistoryModal);
  if (closeHistoryBtn) {
    closeHistoryBtn.addEventListener('click', () => {
      document.getElementById('history-modal').classList.add('hidden');
    });
  }
}

// Reset Entire Order
function resetEntireOrder() {
  state.customer = { name: '', phone: '', date: '', notes: '' };
  currentSweets.forEach(s => state.sweets[s.id] = 0);
  currentBoxes.forEach(b => state.boxes[b.id] = 0);
  state.customSweets = [];
  state.advancePaid = 0;
  state.activeCategory = 'all';
  state.searchQuery = '';

  const nameInput = document.getElementById('customer-name');
  const phoneInput = document.getElementById('customer-phone');
  const notesInput = document.getElementById('additional-notes');
  const advInput = document.getElementById('advance-paid-input');
  const searchInput = document.getElementById('sweet-search');

  if (nameInput) nameInput.value = '';
  if (phoneInput) phoneInput.value = '';
  if (notesInput) notesInput.value = '';
  if (advInput) advInput.value = '';
  if (searchInput) searchInput.value = '';

  updateCategoryPillsUI();
  renderSweetsList();
  renderBoxesList();
  renderCustomSweets();
  updateCalculations();
}

function loadScreenshotSampleOrder() {
  state.customer.name = 'ram';
  state.customer.phone = '667377327782883';
  state.customer.date = '2026-10-23';
  state.customer.notes = 'Packed in 60 5-item sweet boxes. Fresh delivery requested.';

  currentSweets.forEach(s => state.sweets[s.id] = 0);
  currentBoxes.forEach(b => state.boxes[b.id] = 0);

  state.sweets['besan_laddu'] = 60;
  state.sweets['motichoor_laddu'] = 60;
  state.sweets['godi_laddu'] = 60;
  state.boxes['box_5'] = 60;

  const nameInput = document.getElementById('customer-name');
  const phoneInput = document.getElementById('customer-phone');
  const dateInput = document.getElementById('delivery-date');
  const notesInput = document.getElementById('additional-notes');

  if (nameInput) nameInput.value = state.customer.name;
  if (phoneInput) phoneInput.value = state.customer.phone;
  if (dateInput) dateInput.value = state.customer.date;
  if (notesInput) notesInput.value = state.customer.notes;

  renderSweetsList();
  renderBoxesList();
  renderCustomSweets();
  updateCalculations();
}

function generateOrderText() {
  const calc = updateCalculations();
  const custName = state.customer.name || 'Valued Customer';
  const custPhone = state.customer.phone || 'N/A';
  const delivDate = state.customer.date || 'Not specified';
  const notes = state.customer.notes ? `\n📝 Notes: ${state.customer.notes}` : '';

  let text = `🍬 *BR BAKERY - SWEET ORDER* 🍬\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `👤 *Customer:* ${custName}\n`;
  text += `📞 *Phone:* ${custPhone}\n`;
  text += `📅 *Delivery Date:* ${delivDate}\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `📋 *SWEETS ORDERED:*\n`;

  if (calc.activeSweetsList.length === 0) {
    text += `(No sweets specified)\n`;
  } else {
    calc.activeSweetsList.forEach(item => {
      text += `• ${item.name}: ${item.quantity} pcs @ ₹${item.price} = ₹${item.amount}\n`;
    });
  }

  if (calc.activeBoxesList.length > 0) {
    text += `\n📦 *PACKAGING BOXES:*\n`;
    calc.activeBoxesList.forEach(b => {
      text += `• ${b.name}: ${b.quantity} boxes @ ₹${b.price} = ₹${b.amount}\n`;
    });
  }

  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `💰 *Sweet Subtotal:* ₹${calc.sweetSubtotal.toLocaleString('en-IN')}\n`;
  text += `📦 *Box Charges:* ₹${calc.boxCharges.toLocaleString('en-IN')}\n`;
  if (calc.advance > 0) {
    text += `💳 *Advance Paid:* ₹${calc.advance.toLocaleString('en-IN')}\n`;
    text += `💵 *Balance Due:* ₹${calc.balanceDue.toLocaleString('en-IN')}\n`;
  }
  text += `✨ *GRAND TOTAL:* ₹${calc.grandTotal.toLocaleString('en-IN')}\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━${notes}\n`;
  text += `Thank you for choosing BR Bakery! 🙏`;

  return text;
}

function copyCompleteOrder() {
  const text = generateOrderText();
  navigator.clipboard.writeText(text).then(() => {
    showToast('Complete order copied to clipboard!');
  }).catch(() => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('Complete order copied to clipboard!');
  });
}

function sendWhatsAppOrder() {
  const text = generateOrderText();
  const phone = (state.customer.phone || '').replace(/[^0-9]/g, '');
  let url = '';
  if (phone && phone.length >= 10) {
    url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  } else {
    url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  }
  window.open(url, '_blank');
}

function openReceiptModal() {
  const calc = updateCalculations();

  if (calc.grandTotal === 0 && !state.customer.name) {
    alert('Please enter customer details or select sweets before preparing receipt.');
    return;
  }

  const orderId = `BR-${Math.floor(1000 + Math.random() * 9000)}`;

  const modalName = document.getElementById('modal-cust-name');
  const modalPhone = document.getElementById('modal-cust-phone');
  const modalDate = document.getElementById('modal-delivery-date');
  const modalOrderId = document.getElementById('modal-order-id');

  if (modalName) modalName.textContent = state.customer.name || 'Counter Customer';
  if (modalPhone) modalPhone.textContent = state.customer.phone || '-';
  if (modalDate) modalDate.textContent = state.customer.date || 'Immediate / On Demand';
  if (modalOrderId) modalOrderId.textContent = `#${orderId}`;

  const tbody = document.getElementById('modal-items-tbody');
  if (tbody) {
    let rows = '';
    calc.activeSweetsList.forEach(s => {
      rows += `
        <tr>
          <td class="py-2 font-medium">${s.name}</td>
          <td class="py-2 text-center text-stone-600">₹${s.price}</td>
          <td class="py-2 text-center font-bold">${s.quantity} pcs</td>
          <td class="py-2 text-right font-bold">₹${s.amount.toLocaleString('en-IN')}</td>
        </tr>
      `;
    });

    calc.activeBoxesList.forEach(b => {
      rows += `
        <tr class="bg-stone-50/60">
          <td class="py-2 font-medium text-burgundy-900">${b.name} (Packaging)</td>
          <td class="py-2 text-center text-stone-600">₹${b.price}</td>
          <td class="py-2 text-center font-bold">${b.quantity} boxes</td>
          <td class="py-2 text-right font-bold text-burgundy-900">₹${b.amount.toLocaleString('en-IN')}</td>
        </tr>
      `;
    });

    if (calc.activeSweetsList.length === 0 && calc.activeBoxesList.length === 0) {
      rows = `<tr><td colspan="4" class="py-4 text-center text-stone-400 italic">No sweets selected</td></tr>`;
    }

    tbody.innerHTML = rows;
  }

  const sweetSub = document.getElementById('modal-sweet-subtotal');
  const boxCharges = document.getElementById('modal-box-charges');
  const grandTotal = document.getElementById('modal-grand-total');
  const advRow = document.getElementById('modal-advance-row');
  const advPaid = document.getElementById('modal-advance-paid');
  const balRow = document.getElementById('modal-balance-row');
  const balDue = document.getElementById('modal-balance-due');

  if (sweetSub) sweetSub.textContent = `₹${calc.sweetSubtotal.toLocaleString('en-IN')}`;
  if (boxCharges) boxCharges.textContent = `₹${calc.boxCharges.toLocaleString('en-IN')}`;
  if (grandTotal) grandTotal.textContent = `₹${calc.grandTotal.toLocaleString('en-IN')}`;

  if (calc.advance > 0) {
    if (advRow) advRow.classList.remove('hidden');
    if (advPaid) advPaid.textContent = `-₹${calc.advance.toLocaleString('en-IN')}`;
    if (balRow) balRow.classList.remove('hidden');
    if (balDue) balDue.textContent = `₹${calc.balanceDue.toLocaleString('en-IN')}`;
  } else {
    if (advRow) advRow.classList.add('hidden');
    if (balRow) balRow.classList.add('hidden');
  }

  const notesContainer = document.getElementById('modal-notes-container');
  const notesText = document.getElementById('modal-notes-text');
  if (state.customer.notes) {
    if (notesContainer) notesContainer.classList.remove('hidden');
    if (notesText) notesText.textContent = state.customer.notes;
  } else {
    if (notesContainer) notesContainer.classList.add('hidden');
  }

  saveOrderToHistory({
    id: orderId,
    timestamp: new Date().toISOString(),
    customer: { ...state.customer },
    calc: calc,
  });

  document.getElementById('receipt-modal').classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function saveOrderToHistory(order) {
  state.orderHistory.unshift(order);
  if (state.orderHistory.length > 25) {
    state.orderHistory.pop();
  }
  try {
    localStorage.setItem('br_bakery_orders', JSON.stringify(state.orderHistory));
  } catch (e) {
    console.error('LocalStorage save error', e);
  }
  updateHistoryBadge();
}

function loadHistoryFromStorage() {
  try {
    const saved = localStorage.getItem('br_bakery_orders');
    if (saved) {
      state.orderHistory = JSON.parse(saved);
    }
  } catch (e) {
    state.orderHistory = [];
  }
  updateHistoryBadge();
}

function updateHistoryBadge() {
  const badge = document.getElementById('history-count-badge');
  if (badge) {
    badge.textContent = state.orderHistory.length;
  }
}

function openHistoryModal() {
  const container = document.getElementById('history-list');
  const emptyState = document.getElementById('history-empty');

  if (state.orderHistory.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (container) container.innerHTML = '';
  } else {
    if (emptyState) emptyState.classList.add('hidden');
    if (container) {
      container.innerHTML = state.orderHistory.map((item, idx) => {
        const dateStr = new Date(item.timestamp).toLocaleString('en-IN', {
          dateStyle: 'medium',
          timeStyle: 'short',
        });
        return `
          <div class="p-4 rounded-xl border border-stone-200 bg-white hover:border-burgundy-300 transition flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono font-bold text-burgundy-900 text-xs">#${item.id}</span>
                <span class="font-bold text-stone-900 text-sm">${item.customer.name || 'Counter Customer'}</span>
              </div>
              <p class="text-xs text-stone-500 mt-1">Delivery: ${item.customer.date || 'N/A'} • Created: ${dateStr}</p>
            </div>
            <div class="text-right flex items-center gap-3">
              <div>
                <span class="text-sm font-extrabold text-emerald-700 block">₹${(item.calc.grandTotal || 0).toLocaleString('en-IN')}</span>
                <span class="text-[10px] text-stone-400">${item.calc.activeSweetsList?.length || 0} items</span>
              </div>
              <button type="button" onclick="loadOrderFromHistory(${idx})" class="px-2.5 py-1 text-xs rounded-lg bg-burgundy-50 text-burgundy-900 font-semibold hover:bg-burgundy-100 transition border border-burgundy-200">
                Load
              </button>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  document.getElementById('history-modal').classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

window.loadOrderFromHistory = function(idx) {
  const order = state.orderHistory[idx];
  if (!order) return;

  state.customer = { ...order.customer };
  currentSweets.forEach(s => state.sweets[s.id] = 0);
  currentBoxes.forEach(b => state.boxes[b.id] = 0);

  if (order.calc && order.calc.activeSweetsList) {
    order.calc.activeSweetsList.forEach(s => {
      const match = currentSweets.find(item => item.name === s.name);
      if (match) {
        state.sweets[match.id] = s.quantity;
      }
    });
  }

  if (order.calc && order.calc.activeBoxesList) {
    order.calc.activeBoxesList.forEach(b => {
      const match = currentBoxes.find(item => item.name === b.name);
      if (match) {
        state.boxes[match.id] = b.quantity;
      }
    });
  }

  const nameInput = document.getElementById('customer-name');
  const phoneInput = document.getElementById('customer-phone');
  const dateInput = document.getElementById('delivery-date');
  const notesInput = document.getElementById('additional-notes');

  if (nameInput) nameInput.value = state.customer.name;
  if (phoneInput) phoneInput.value = state.customer.phone;
  if (dateInput) dateInput.value = state.customer.date;
  if (notesInput) notesInput.value = state.customer.notes;

  renderSweetsList();
  renderBoxesList();
  renderCustomSweets();
  updateCalculations();

  document.getElementById('history-modal').classList.add('hidden');
  showToast(`Loaded Order #${order.id}`);
};

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
  }, 2800);
}
