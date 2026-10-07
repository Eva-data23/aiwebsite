/**
 * Marvy Editorial Magazine — Main Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initReadingProgressBar();
  initMobileNavigation();
  initHeaderScrollEffect();
  initBookmarkCounter();
  initArticleReaderModal();
  initNewsletterForms();
  initPageSpecificLogic();
});

/* --------------------------------------------------------------------------
   1. Reading Progress Bar
   -------------------------------------------------------------------------- */
function initReadingProgressBar() {
  const progressBar = document.getElementById('reading-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   2. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');
  const closeBtn = document.getElementById('mobile-drawer-close');

  if (!toggleBtn || !drawer || !overlay) return;

  function toggleMenu(isOpen) {
    toggleBtn.classList.toggle('active', isOpen);
    drawer.classList.toggle('open', isOpen);
    overlay.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    toggleMenu(!isOpen);
  });

  overlay.addEventListener('click', () => toggleMenu(false));
  if (closeBtn) {
    closeBtn.addEventListener('click', () => toggleMenu(false));
  }

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}

/* --------------------------------------------------------------------------
   3. Header Sticky & Blur Scroll Effect
   -------------------------------------------------------------------------- */
function initHeaderScrollEffect() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 80) {
      header.style.backgroundColor = 'rgba(10, 12, 14, 0.95)';
    } else {
      header.style.backgroundColor = 'rgba(10, 12, 14, 0.88)';
    }
    lastScrollY = currentScrollY;
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   4. Bookmarks System
   -------------------------------------------------------------------------- */
function initBookmarkCounter() {
  updateBookmarkBadges();

  const bookmarkBtn = document.getElementById('bookmark-counter-btn');
  if (bookmarkBtn) {
    bookmarkBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentUrl = window.location.pathname;
      if (!currentUrl.includes('blogs.html')) {
        window.location.href = 'blogs.html?filter=bookmarked';
      } else {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('filter') === 'bookmarked') {
          // toggle off
          window.location.href = 'blogs.html';
        } else {
          window.location.href = 'blogs.html?filter=bookmarked';
        }
      }
    });
  }
}

function updateBookmarkBadges() {
  const bookmarks = getStoredBookmarks();
  const badges = document.querySelectorAll('.badge-bookmark-count');
  badges.forEach(badge => {
    badge.textContent = bookmarks.length;
  });
}

/* --------------------------------------------------------------------------
   5. Article Reader Modal
   -------------------------------------------------------------------------- */
let activeReaderPostId = null;

function initArticleReaderModal() {
  const overlay = document.getElementById('reader-modal-overlay');
  const closeBtn = document.getElementById('reader-close-btn');

  if (!overlay) return;

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    activeReaderPostId = null;
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Delegated click handler for "Read Story" or card clicks
  document.addEventListener('click', (e) => {
    const readTrigger = e.target.closest('[data-action="read-story"]');
    if (readTrigger) {
      e.preventDefault();
      const postId = readTrigger.getAttribute('data-post-id');
      if (postId) {
        openArticleReader(postId);
      }
      return;
    }

    const bookmarkTrigger = e.target.closest('[data-action="bookmark"]');
    if (bookmarkTrigger) {
      e.preventDefault();
      e.stopPropagation();
      const postId = bookmarkTrigger.getAttribute('data-post-id');
      if (postId) {
        handleBookmarkClick(postId, bookmarkTrigger);
      }
      return;
    }

    const likeTrigger = e.target.closest('[data-action="like"]');
    if (likeTrigger) {
      e.preventDefault();
      e.stopPropagation();
      const postId = likeTrigger.getAttribute('data-post-id');
      if (postId) {
        handleLikeClick(postId, likeTrigger);
      }
      return;
    }
  });

  // Modal Share button
  const shareBtn = document.getElementById('reader-share-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        showToast('Article URL copied to clipboard!', 'success');
      } else {
        showToast('Sharing link prepared!', 'info');
      }
    });
  }

  // Modal Bookmark button
  const modalBookmarkBtn = document.getElementById('reader-bookmark-btn');
  if (modalBookmarkBtn) {
    modalBookmarkBtn.addEventListener('click', () => {
      if (activeReaderPostId) {
        handleBookmarkClick(activeReaderPostId, modalBookmarkBtn);
      }
    });
  }

  // Modal Like button
  const modalLikeBtn = document.getElementById('reader-like-btn');
  if (modalLikeBtn) {
    modalLikeBtn.addEventListener('click', () => {
      if (activeReaderPostId) {
        handleLikeClick(activeReaderPostId, modalLikeBtn);
      }
    });
  }
}

function openArticleReader(postId) {
  const post = BLOG_POSTS.find(p => p.id === postId);
  if (!post) return;

  activeReaderPostId = postId;
  const overlay = document.getElementById('reader-modal-overlay');
  if (!overlay) return;

  // Populate data
  document.getElementById('reader-post-category').textContent = post.category;
  document.getElementById('reader-post-date').textContent = post.date;
  document.getElementById('reader-post-readtime').textContent = post.readTime;
  document.getElementById('reader-post-title').textContent = post.title;
  document.getElementById('reader-post-subtitle').textContent = post.subtitle;
  document.getElementById('reader-post-cover').src = post.coverImage;
  document.getElementById('reader-post-cover').alt = post.title;
  document.getElementById('reader-post-author-name').textContent = post.author.name;
  document.getElementById('reader-post-author-role').textContent = post.author.role;
  document.getElementById('reader-post-author-avatar').src = post.author.avatar;
  document.getElementById('reader-post-content').innerHTML = post.content;

  // Tags
  const tagsContainer = document.getElementById('reader-post-tags');
  if (tagsContainer) {
    tagsContainer.innerHTML = post.tags.map(t => `<span class="reader-tag">#${t}</span>`).join('');
  }

  // Bookmark & Like states
  updateModalActionButtons(postId);

  // Open modal
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Scroll reader drawer to top
  const drawer = overlay.querySelector('.reader-modal-drawer');
  if (drawer) drawer.scrollTop = 0;
}

function updateModalActionButtons(postId) {
  const bookmarks = getStoredBookmarks();
  const likes = getStoredLikes();
  const isBookmarked = bookmarks.includes(postId);
  const isLiked = likes.includes(postId);

  const modalBookmarkBtn = document.getElementById('reader-bookmark-btn');
  if (modalBookmarkBtn) {
    modalBookmarkBtn.classList.toggle('active', isBookmarked);
    modalBookmarkBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
      </svg>
      <span>${isBookmarked ? 'Saved to Reading List' : 'Save to Reading List'}</span>
    `;
  }

  const modalLikeBtn = document.getElementById('reader-like-btn');
  if (modalLikeBtn) {
    const post = BLOG_POSTS.find(p => p.id === postId);
    const likeCount = (post ? post.likes : 0) + (isLiked ? 1 : 0);
    modalLikeBtn.classList.toggle('active', isLiked);
    modalLikeBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="${isLiked ? '#ff5733' : 'none'}" stroke="${isLiked ? '#ff5733' : 'currentColor'}" stroke-width="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
      <span>${likeCount} Applaud</span>
    `;
  }
}

function handleBookmarkClick(postId, buttonElement) {
  const { isBookmarked } = toggleBookmarkStorage(postId);
  updateBookmarkBadges();

  // If in modal
  if (activeReaderPostId === postId) {
    updateModalActionButtons(postId);
  }

  // Update card buttons across the page
  const cardButtons = document.querySelectorAll(`[data-action="bookmark"][data-post-id="${postId}"]`);
  cardButtons.forEach(btn => {
    btn.classList.toggle('active', isBookmarked);
    const svg = btn.querySelector('svg');
    if (svg) {
      svg.setAttribute('fill', isBookmarked ? 'currentColor' : 'none');
    }
  });

  showToast(
    isBookmarked ? 'Article added to your Reading List.' : 'Article removed from Reading List.',
    'success'
  );

  // If on blogs.html in bookmarked filter, re-render
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('filter') === 'bookmarked' && typeof renderFilteredArticles === 'function') {
    renderFilteredArticles();
  }
}

function handleLikeClick(postId, buttonElement) {
  const { isLiked } = toggleLikeStorage(postId);
  const post = BLOG_POSTS.find(p => p.id === postId);

  if (activeReaderPostId === postId) {
    updateModalActionButtons(postId);
  }

  const cardButtons = document.querySelectorAll(`[data-action="like"][data-post-id="${postId}"]`);
  cardButtons.forEach(btn => {
    btn.classList.toggle('active', isLiked);
    const svg = btn.querySelector('svg');
    if (svg) {
      svg.setAttribute('fill', isLiked ? '#ff5733' : 'none');
      svg.setAttribute('stroke', isLiked ? '#ff5733' : 'currentColor');
    }
    const countSpan = btn.querySelector('.like-count-display');
    if (countSpan && post) {
      countSpan.textContent = post.likes + (isLiked ? 1 : 0);
    }
  });

  showToast(isLiked ? 'Thank you for applauding this dispatch!' : 'Applaud removed.', 'info');
}

/* --------------------------------------------------------------------------
   6. Toast Notifications
   -------------------------------------------------------------------------- */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast-pill toast-${type}`;
  toast.innerHTML = `
    <span class="toast-dot" style="width: 8px; height: 8px; border-radius: 50%; background: ${type === 'success' ? 'var(--accent-secondary)' : 'var(--accent-primary)'}; display: inline-block;"></span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'all 250ms ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 250);
  }, 3800);
}

/* --------------------------------------------------------------------------
   7. Newsletter Subscription Forms
   -------------------------------------------------------------------------- */
function initNewsletterForms() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        showToast(`Subscribed! Dispatch dispatches will be sent to ${input.value.trim()}`, 'success');
        input.value = '';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. Page Specific Logic
   -------------------------------------------------------------------------- */
function initPageSpecificLogic() {
  const currentPath = window.location.pathname.toLowerCase();

  // If on blogs.html
  if (currentPath.includes('blogs.html') || document.getElementById('blogs-archive-container')) {
    initBlogsArchivePage();
  }

  // If on contact.html
  if (currentPath.includes('contact.html') || document.getElementById('editorial-contact-form')) {
    initContactPage();
  }
}

/* --------------------------------------------------------------------------
   Blogs Archive Page Logic
   -------------------------------------------------------------------------- */
let activeCategoryFilter = 'all';
let currentSearchQuery = '';
let currentViewLayout = 'grid';

function initBlogsArchivePage() {
  const container = document.getElementById('blogs-archive-container');
  if (!container) return;

  const searchInput = document.getElementById('archive-search-input');
  const searchClear = document.getElementById('archive-search-clear');
  const categoryChips = document.querySelectorAll('.category-chip-filter');
  const btnGrid = document.getElementById('btn-view-grid');
  const btnList = document.getElementById('btn-view-list');

  // Check URL parameters for bookmark filter
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');
  const categoryParam = urlParams.get('category');

  if (categoryParam) {
    activeCategoryFilter = categoryParam.toLowerCase();
    categoryChips.forEach(chip => {
      chip.classList.toggle('active', chip.dataset.category.toLowerCase() === activeCategoryFilter);
    });
  }

  // Category filter clicks
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategoryFilter = chip.dataset.category.toLowerCase();
      renderFilteredArticles();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      if (searchClear) {
        searchClear.style.display = currentSearchQuery ? 'block' : 'none';
      }
      renderFilteredArticles();
    });

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        currentSearchQuery = '';
        searchClear.style.display = 'none';
        searchInput.focus();
        renderFilteredArticles();
      });
    }
  }

  // Layout switcher
  if (btnGrid && btnList) {
    btnGrid.addEventListener('click', () => {
      currentViewLayout = 'grid';
      btnGrid.classList.add('active');
      btnList.classList.remove('active');
      container.className = 'magazine-grid';
    });

    btnList.addEventListener('click', () => {
      currentViewLayout = 'list';
      btnList.classList.add('active');
      btnGrid.classList.remove('active');
      container.className = 'magazine-grid list-view';
    });
  }

  renderFilteredArticles();
}

function renderFilteredArticles() {
  const container = document.getElementById('blogs-archive-container');
  if (!container) return;

  const bookmarks = getStoredBookmarks();
  const likes = getStoredLikes();
  const urlParams = new URLSearchParams(window.location.search);
  const isOnlyBookmarked = urlParams.get('filter') === 'bookmarked';

  let filtered = BLOG_POSTS.filter(post => {
    // Bookmarked filter
    if (isOnlyBookmarked && !bookmarks.includes(post.id)) {
      return false;
    }

    // Category filter
    if (activeCategoryFilter !== 'all' && post.category.toLowerCase() !== activeCategoryFilter) {
      return false;
    }

    // Search query
    if (currentSearchQuery) {
      const matchTitle = post.title.toLowerCase().includes(currentSearchQuery);
      const matchSubtitle = post.subtitle.toLowerCase().includes(currentSearchQuery);
      const matchExcerpt = post.excerpt.toLowerCase().includes(currentSearchQuery);
      const matchAuthor = post.author.name.toLowerCase().includes(currentSearchQuery);
      const matchTag = post.tags.some(t => t.toLowerCase().includes(currentSearchQuery));
      return matchTitle || matchSubtitle || matchExcerpt || matchAuthor || matchTag;
    }

    return true;
  });

  const countDisplay = document.getElementById('archive-count-display');
  if (countDisplay) {
    if (isOnlyBookmarked) {
      countDisplay.textContent = `Showing ${filtered.length} Bookmarked Article${filtered.length === 1 ? '' : 's'}`;
    } else {
      countDisplay.textContent = `Displaying ${filtered.length} Dispatch${filtered.length === 1 ? '' : 'es'}`;
    }
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-results-state">
        <h3 class="no-results-title">No dispatches match your search</h3>
        <p class="text-secondary">Try searching for other keywords like "concrete", "analog", or clear active filters.</p>
        <button class="btn-header-cta" style="margin-top: 1.5rem;" onclick="resetArchiveFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(post => {
    const isBookmarked = bookmarks.includes(post.id);
    const isLiked = likes.includes(post.id);
    const currentLikes = post.likes + (isLiked ? 1 : 0);

    return `
      <article class="article-card" id="card-${post.id}">
        <div class="card-media-wrapper">
          <img src="${post.coverImage}" alt="${post.title}" loading="lazy">
          <div class="card-badge-overlay">
            <span class="badge-tag">${post.category}</span>
          </div>
          <div class="card-actions-overlay">
            <button class="icon-action-btn ${isBookmarked ? 'active' : ''}" data-action="bookmark" data-post-id="${post.id}" title="Save to Reading List">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
            <button class="icon-action-btn ${isLiked ? 'active' : ''}" data-action="like" data-post-id="${post.id}" title="Applaud">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="${isLiked ? '#ff5733' : 'none'}" stroke="${isLiked ? '#ff5733' : 'currentColor'}" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="card-content">
          <div class="card-meta-row">
            <span>${post.date}</span>
            <span>${post.readTime}</span>
          </div>
          <h3 class="card-title">
            <a href="#" data-action="read-story" data-post-id="${post.id}">${post.title}</a>
          </h3>
          <p class="card-excerpt">${post.excerpt}</p>
          <div class="card-footer">
            <span class="card-author-name">${post.author.name}</span>
            <button class="btn-read-story" data-action="read-story" data-post-id="${post.id}">
              Read Story
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function resetArchiveFilters() {
  activeCategoryFilter = 'all';
  currentSearchQuery = '';
  const searchInput = document.getElementById('archive-search-input');
  if (searchInput) searchInput.value = '';
  const chips = document.querySelectorAll('.category-chip-filter');
  chips.forEach(c => c.classList.toggle('active', c.dataset.category === 'all'));
  if (window.location.search) {
    window.history.pushState({}, document.title, window.location.pathname);
  }
  renderFilteredArticles();
}

/* --------------------------------------------------------------------------
   Contact Page Logic
   -------------------------------------------------------------------------- */
function initContactPage() {
  const form = document.getElementById('editorial-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('.btn-form-submit');
    const originalText = submitBtn.innerHTML;

    // Loading state
    submitBtn.innerHTML = `
      <span style="display:inline-block; animation: spin 1s linear infinite;">⟳</span>
      <span>Encrypting & Dispatching...</span>
    `;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = `<span>✓ Dispatch Sent to Editors</span>`;
      submitBtn.style.backgroundColor = 'var(--accent-secondary)';
      submitBtn.style.color = 'var(--text-inverse)';

      showToast('Your message has been dispatched to the editorial board. Expect a response within 48 hours.', 'success');
      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = '';
        submitBtn.style.color = '';
      }, 4000);
    }, 1200);
  });
}
