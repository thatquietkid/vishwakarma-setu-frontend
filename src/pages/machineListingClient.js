// src/pages/machineListingClient.js
// Extracted & adapted client for machine_listing_page.html
// Now includes a cleanup function to remove event listeners when the React component unmounts.

let allMachines = [];
let filteredMachines = [];
let currentPage = 1;
const machinesPerPage = 3;

// Keep track of listeners we attach so we can remove them later
const _listeners = [];

/**
 * Helper to add and record event listeners for later cleanup.
 * @param {Element} el
 * @param {string} type
 * @param {Function} handler
 */
function addListener(el, type, handler) {
  if (!el || !el.addEventListener) return;
  el.addEventListener(type, handler);
  _listeners.push({ el, type, handler });
}

/**
 * Remove all recorded listeners and clear the registry.
 */
export function cleanupMachineListing() {
  _listeners.forEach(({ el, type, handler }) => {
    try {
      el.removeEventListener(type, handler);
    } catch (e) {
      // ignore
    }
  });
  _listeners.length = 0;
}

/**
 * Public: call this after the HTML is injected into DOM
 */
export function runMachineListing() {
  loadMachines();
  setupEventListeners();
  updatePriceLabels();
}

function loadMachines() {
  const dataElement = document.getElementById('machines-data');
  if (!dataElement) {
    console.error('machines-data element not found in DOM.');
    allMachines = [];
    filteredMachines = [];
    renderMachines();
    updatePagination();
    return;
  }
  try {
    allMachines = JSON.parse(dataElement.textContent).machines;
  } catch (e) {
    console.error('Failed to parse machines-data JSON', e);
    allMachines = [];
  }
  filteredMachines = [...allMachines];
  renderMachines();
  updatePagination();
}

function setupEventListeners() {
  const minPriceEl = document.getElementById('minPrice');
  const maxPriceEl = document.getElementById('maxPrice');
  const priceSliderEl = document.getElementById('priceSlider');
  const sortByEl = document.getElementById('sortBy');
  const verificationRadios = document.querySelectorAll('input[name="verification"]');
  const categoryChecks = document.querySelectorAll('.category-filter');
  const locationFilter = document.getElementById('locationFilter');

  if (minPriceEl) addListener(minPriceEl, 'input', updatePriceSlider);
  if (maxPriceEl) addListener(maxPriceEl, 'input', updatePriceSlider);
  if (priceSliderEl) addListener(priceSliderEl, 'input', updatePriceFromSlider);
  if (sortByEl) addListener(sortByEl, 'change', applyFilters);

  verificationRadios.forEach(radio => addListener(radio, 'change', applyFilters));
  categoryChecks.forEach(checkbox => addListener(checkbox, 'change', applyFilters));
  if (locationFilter) addListener(locationFilter, 'change', applyFilters);
}

function updatePriceSlider() {
  const minPrice = parseInt(document.getElementById('minPrice')?.value) || 0;
  const maxPrice = parseInt(document.getElementById('maxPrice')?.value) || 10000000;

  const priceSlider = document.getElementById('priceSlider');
  if (priceSlider) priceSlider.value = maxPrice;
  updatePriceLabels();
}

function updatePriceFromSlider() {
  const sliderValue = document.getElementById('priceSlider')?.value;
  if (sliderValue !== undefined) {
    const maxPriceEl = document.getElementById('maxPrice');
    if (maxPriceEl) maxPriceEl.value = sliderValue;
  }
  updatePriceLabels();
}

function updatePriceLabels() {
  const sliderValue = parseInt(document.getElementById('priceSlider')?.value) || 10000000;
  const minLabel = document.getElementById('minPriceLabel');
  const maxLabel = document.getElementById('maxPriceLabel');
  if (minLabel) minLabel.textContent = '₹0';
  if (maxLabel) {
    maxLabel.textContent = sliderValue >= 10000000 ? '₹1,00,00,000+' : `₹${parseInt(sliderValue).toLocaleString('en-IN')}`;
  }
}

function applyFilters() {
  const minPrice = parseInt(document.getElementById('minPrice')?.value) || 0;
  const maxPrice = parseInt(document.getElementById('maxPrice')?.value) || Number.MAX_VALUE;
  const verificationStatus = document.querySelector('input[name="verification"]:checked')?.value || 'all';
  const location = document.getElementById('locationFilter')?.value || '';
  const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked')).map(cb => cb.value);
  const sortBy = document.getElementById('sortBy')?.value || 'newest';

  filteredMachines = allMachines.filter(machine => {
    if (machine.price < minPrice || machine.price > maxPrice) return false;
    if (verificationStatus !== 'all' && machine.status !== verificationStatus) return false;
    if (location && machine.location !== location) return false;
    if (selectedCategories.length > 0 && !selectedCategories.includes(machine.category)) return false;
    return true;
  });

  switch (sortBy) {
    case 'price-low':
      filteredMachines.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredMachines.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      filteredMachines.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'newest':
    default:
      filteredMachines.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
      break;
  }

  currentPage = 1;
  renderMachines();
  updatePagination();
  updateResultsCount();
}

function clearFilters() {
  const minPriceEl = document.getElementById('minPrice');
  const maxPriceEl = document.getElementById('maxPrice');
  const priceSlider = document.getElementById('priceSlider');
  const sortByEl = document.getElementById('sortBy');
  const allRadio = document.querySelector('input[value="all"]');

  if (minPriceEl) minPriceEl.value = '';
  if (maxPriceEl) maxPriceEl.value = '';
  if (priceSlider) priceSlider.value = 10000000;
  if (allRadio) allRadio.checked = true;
  document.querySelectorAll('.category-filter').forEach(cb => cb.checked = false);
  if (sortByEl) sortByEl.value = 'newest';
  const locationFilter = document.getElementById('locationFilter');
  if (locationFilter) locationFilter.value = '';

  filteredMachines = [...allMachines];
  currentPage = 1;
  renderMachines();
  updatePagination();
  updateResultsCount();
  updatePriceLabels();
}

function renderMachines() {
  const grid = document.getElementById('machineGrid');
  if (!grid) return;
  const startIndex = (currentPage - 1) * machinesPerPage;
  const endIndex = startIndex + machinesPerPage;
  const machinesToShow = filteredMachines.slice(startIndex, endIndex);

  grid.innerHTML = '';

  machinesToShow.forEach(machine => {
    const statusClass = machine.status === 'verified' ? 'text-status-pass' : 'text-status-attention';
    const statusText = machine.status === 'verified' ? 'Verified' : 'Pending';
    const priceText = `₹${machine.price.toLocaleString('en-IN')}`;

    const machineCard = `
      <a href="#" class="block group">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-primary">
          <div class="aspect-[4/3] bg-center bg-no-repeat bg-cover" style="background-image: url('${machine.image}')"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-text-light dark:text-white group-hover:text-primary transition-colors">${machine.title}</h3>
            <p class="text-text-muted-light dark:text-text-muted-dark text-sm mb-4">${machine.description}</p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-primary">${priceText}</span>
              <span class="text-sm ${statusClass} font-medium">${statusText}</span>
            </div>
          </div>
        </div>
      </a>
    `;
    grid.innerHTML += machineCard;
  });

  updateResultsCount();
}

function updatePagination() {
  const totalPages = Math.ceil(filteredMachines.length / machinesPerPage);
  const pageNumbersContainer = document.getElementById('pageNumbers');
  const prevButton = document.getElementById('prevPage');
  const nextButton = document.getElementById('nextPage');

  if (!pageNumbersContainer) return;

  pageNumbersContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.onclick = () => goToPage(i);

    if (i === currentPage) {
      pageButton.className = 'px-4 py-2 bg-primary text-white rounded-lg font-semibold';
    } else {
      pageButton.className = 'px-4 py-2 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors';
    }

    pageNumbersContainer.appendChild(pageButton);
  }

  if (prevButton) prevButton.disabled = currentPage === 1;
  if (nextButton) nextButton.disabled = currentPage === totalPages || totalPages === 0;
}

function changePage(direction) {
  const totalPages = Math.ceil(filteredMachines.length / machinesPerPage);
  const newPage = currentPage + direction;

  if (newPage >= 1 && newPage <= totalPages) {
    goToPage(newPage);
  }
}

function goToPage(page) {
  currentPage = page;
  renderMachines();
  updatePagination();

  const grid = document.getElementById('machineGrid');
  if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateResultsCount() {
  const countElement = document.getElementById('resultsCount');
  const totalMachines = filteredMachines.length;
  const startIndex = Math.min((currentPage - 1) * machinesPerPage + 1, totalMachines);
  const endIndex = Math.min(currentPage * machinesPerPage, totalMachines);

  if (!countElement) return;

  if (totalMachines === 0) {
    countElement.textContent = 'No machines found';
  } else if (totalMachines <= machinesPerPage) {
    countElement.textContent = `Showing ${totalMachines} of ${totalMachines} machines`;
  } else {
    countElement.textContent = `Showing ${startIndex}-${endIndex} of ${totalMachines} machines`;
  }
}

export function toggleMobileMenu() {
  alert('Mobile menu toggle - Add your mobile menu implementation here');
}
