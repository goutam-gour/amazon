// Amazon Clone Responsive Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // 1. Back to Top Smooth Scroll
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Keyboard accessibility
        backToTopBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }

    // 2. Mobile Drawer Navigation
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const panelAllBtn = document.getElementById('panelAllBtn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');

    function openSidebar() {
        if (sidebar && sidebarOverlay) {
            sidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    }

    function closeSidebar() {
        if (sidebar && sidebarOverlay) {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', openSidebar);
    }

    if (panelAllBtn) {
        panelAllBtn.addEventListener('click', openSidebar);
    }

    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', closeSidebar);
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });

    // 3. Search Interactivity
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('navSearch');

    if (searchForm && searchInput) {
        const searchBtn = searchForm.querySelector('.search-icon');
        const handleSearch = () => {
            const query = searchInput.value.trim();
            if (query) {
                // Smooth feedback
                console.log(`Searching for: ${query}`);
                searchInput.placeholder = `Searching "${query}"...`;
                setTimeout(() => {
                    searchInput.placeholder = 'Search Amazon';
                }, 1500);
            } else {
                searchInput.focus();
            }
        };

        if (searchBtn) {
            searchBtn.addEventListener('click', handleSearch);
        }

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
            }
        });
    }

    // 4. Interactive Cart Demo
    const cartCountEl = document.getElementById('cartCount');
    const boxLinks = document.querySelectorAll('.box-link');
    let cartItems = 0;

    boxLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            cartItems++;
            if (cartCountEl) {
                cartCountEl.textContent = cartItems;
                cartCountEl.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    cartCountEl.style.transform = 'scale(1)';
                }, 200);
            }
        });
    });
});
