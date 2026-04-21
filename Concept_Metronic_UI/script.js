/**
 * Metronic UI Reference — Main Script
 * Handles navigation, dark mode, search, and scroll behavior
 */

document.addEventListener('DOMContentLoaded', () => {
    // =================== Page Loader ===================
    const loader = document.getElementById('pageLoader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 600);

    // =================== Sidebar Navigation ===================
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarClose = document.getElementById('sidebarClose');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    const sections = document.querySelectorAll('.content-section');
    const breadcrumbActive = document.getElementById('breadcrumbActive');

    // Section name mapping for breadcrumb
    const sectionNames = {
        'overview': 'ภาพรวม',
        'color-system': 'ระบบสี',
        'typography': 'Typography',
        'spacing': 'Spacing & Grid',
        'buttons': 'Buttons',
        'cards': 'Cards',
        'forms': 'Forms & Inputs',
        'tables': 'Tables',
        'badges': 'Badges & Indicators',
        'modals': 'Modals & Drawers',
        'layout-system': 'Layout System',
        'sidebar-nav': 'Sidebar & Navigation',
        'header-toolbar': 'Header & Toolbar',
        'widgets': 'Widgets & Charts',
        'dark-mode': 'Dark Mode',
        'utilities': 'Utilities & Helpers',
        'sass-structure': 'SASS Structure'
    };

    function closeSidebar() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
    }

    function openSidebar() {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
    }

    function showSection(sectionId) {
        // Hide all sections
        sections.forEach(sec => sec.classList.remove('active'));

        // Show selected section
        const target = document.getElementById(sectionId);
        if (target) {
            target.classList.add('active');

            // Highlight code blocks in the section
            target.querySelectorAll('pre code:not(.hljs)').forEach(block => {
                hljs.highlightElement(block);
            });
        }

        // Update active nav link
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
        if (activeLink) activeLink.classList.add('active');

        // Update breadcrumb
        breadcrumbActive.textContent = sectionNames[sectionId] || sectionId;

        // Scroll to top of content
        document.querySelector('.content-wrapper').scrollTop = 0;
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Close sidebar on mobile
        if (window.innerWidth <= 991) {
            closeSidebar();
        }
    }

    // Nav link click handler
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
            history.pushState(null, '', `#${sectionId}`);
        });
    });

    // Menu toggle (mobile)
    menuToggle.addEventListener('click', openSidebar);

    // Close sidebar
    sidebarClose.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    // Load section from URL hash
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    } else {
        // Initialize hljs for default section
        const activeSection = document.querySelector('.content-section.active');
        if (activeSection) {
            activeSection.querySelectorAll('pre code:not(.hljs)').forEach(block => {
                hljs.highlightElement(block);
            });
        }
    }

    // =================== Dark Mode Toggle ===================
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem('metronic-ref-theme');
    if (savedTheme) {
        html.setAttribute('data-bs-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'bi bi-sun-fill';
        } else {
            themeIcon.className = 'bi bi-moon-fill';
        }
    }

    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-bs-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-bs-theme', next);
        localStorage.setItem('metronic-ref-theme', next);
        updateThemeIcon(next);
    });

    // =================== Search Functionality ===================
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query.length === 0) {
            // Show default section
            return;
        }

        // Search through nav links
        let foundSection = null;

        navLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            const sectionId = link.getAttribute('data-section');

            if (text.includes(query)) {
                if (!foundSection) foundSection = sectionId;
                link.style.display = 'flex';
            } else {
                link.style.display = 'none';
            }
        });

        // If found, show first matched section
        if (foundSection) {
            showSection(foundSection);
        }
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            navLinks.forEach(link => link.style.display = 'flex');
        }
    });

    // =================== Scroll to Top ===================
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // =================== Handle browser back/forward ===================
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.substring(1);
        if (hash && document.getElementById(hash)) {
            showSection(hash);
        }
    });

    // =================== Keyboard Shortcuts ===================
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });
});
