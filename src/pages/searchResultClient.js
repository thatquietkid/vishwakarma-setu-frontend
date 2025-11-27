// src/pages/searchResultClient.js
// Extracted & adapted from inline script in search_result_page.html
// Now includes a cleanup function to remove event listeners when the React component unmounts.

let itemsPerPage = 6;
let totalItems = 0;
let totalPages = 0;
let currentPage = 1;

// Track listeners for cleanup
const _listeners = [];

/** Add listener and record for cleanup */
function addListener(el, type, handler) {
  if (!el || !el.addEventListener) return;
  el.addEventListener(type, handler);
  _listeners.push({ el, type, handler });
}

/** Remove all recorded listeners */
export function cleanupSearchResult() {
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
 * Public: call this once the search page HTML is present in the DOM.
 */
export function runSearchResult() {
  // Determine totalItems by counting machine cards present in the DOM (ids machine-card-1..N)
  totalItems = Array.from(document.querySelectorAll('[id^="machine-card-"]')).length;
  if (totalItems === 0) {
    // Fallback if no explicit machine-card-* elements found: try to infer from the grid children
    const grid = document.querySelector('.grid');
    totalItems = grid ? grid.children.length : 0;
  }

  // Guard: nothing to do
  if (totalItems === 0) {
    console.warn("runSearchResult: no machine cards found in DOM.");
    return;
  }

  itemsPerPage = itemsPerPage || 6;
  totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  currentPage = 1;

  // Initialize UI
  renderPage();
  updatePagination();
  setupPaginationEvents();
}

/* ----- Internal helpers ----- */

function renderPage() {
  // Show/hide machine cards with smooth transition
  for (let i = 1; i <= totalItems; i++) {
    const card = document.getElementById(`machine-card-${i}`);
    if (card) {
      const shouldShow = (i > (currentPage - 1) * itemsPerPage) && (i <= currentPage * itemsPerPage);
      card.style.display = shouldShow ? "block" : "none";
    }
  }

  // Update results text
  updateResultsText();
}

function updateResultsText() {
  const showingSpan = document.getElementById("showing-count");
  if (showingSpan) {
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, totalItems);
    showingSpan.textContent = `${start}-${end}`;
  }
}

function updatePagination() {
  // Update numbered buttons (btns are expected as page-btn-1, page-btn-2, ...)
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.getElementById(`page-btn-${i}`);
    if (btn) {
      if (i === currentPage) {
        btn.classList.remove("text-secondary", "dark:text-gray-300", "hover:bg-gray-200", "dark:hover:bg-gray-700");
        btn.classList.add("text-white", "bg-primary");
      } else {
        btn.classList.add("text-secondary", "dark:text-gray-300", "hover:bg-gray-200", "dark:hover:bg-gray-700");
        btn.classList.remove("text-white", "bg-primary");
      }
    }
  }

  // Update prev/next buttons
  const prevBtn = document.getElementById("page-btn-prev");
  const nextBtn = document.getElementById("page-btn-next");

  if (prevBtn) {
    if (currentPage === 1) {
      prevBtn.classList.add("opacity-50", "pointer-events-none");
    } else {
      prevBtn.classList.remove("opacity-50", "pointer-events-none");
    }
  }

  if (nextBtn) {
    if (currentPage === totalPages) {
      nextBtn.classList.add("opacity-50", "pointer-events-none");
    } else {
      nextBtn.classList.remove("opacity-50", "pointer-events-none");
    }
  }
}

function setupPaginationEvents() {
  // Numbered buttons
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.getElementById(`page-btn-${i}`);
    if (btn) {
      // remove previous listeners if any by cloning node (defensive)
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
      addListener(newBtn, "click", function (e) {
        e.preventDefault();
        currentPage = i;
        renderPage();
        updatePagination();
        scrollToTop();
      });
    }
  }

  // Previous button
  const prevBtn = document.getElementById("page-btn-prev");
  if (prevBtn) {
    const newPrev = prevBtn.cloneNode(true);
    prevBtn.parentNode.replaceChild(newPrev, prevBtn);
    addListener(newPrev, "click", function (e) {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        renderPage();
        updatePagination();
        scrollToTop();
      }
    });
  }

  // Next button
  const nextBtn = document.getElementById("page-btn-next");
  if (nextBtn) {
    const newNext = nextBtn.cloneNode(true);
    nextBtn.parentNode.replaceChild(newNext, nextBtn);
    addListener(newNext, "click", function (e) {
      e.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        renderPage();
        updatePagination();
        scrollToTop();
      }
    });
  }
}

function scrollToTop() {
  const main = document.querySelector("main");
  if (main) main.scrollIntoView({ behavior: "smooth", block: "start" });
}
