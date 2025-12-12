// Header Navigation Script
document.addEventListener('DOMContentLoaded', function() {
    // Get current page path
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'home.html';
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Update active link based on current page
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        const linkPage = linkPath.split('/').pop();
        const pageData = link.getAttribute('data-page');
        
        // Remove active class from all links
        link.classList.remove('active');
        
        // Add active class to current page link
        if (currentPage === linkPage || 
            (currentPage === 'index.html' && pageData === 'home') ||
            (currentPage === '' && pageData === 'home') ||
            (currentPath.includes(pageData))) {
            link.classList.add('active');
        }
    });
    
    // Search button functionality
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            // You can implement search functionality here
            alert('Search functionality coming soon!');
        });
    }
    
    // Fix quote button link paths
    const quoteBtn = document.querySelector('.quote-btn');
    if (quoteBtn) {
        const currentPath = window.location.pathname;
        if (currentPath.includes('home') || currentPath.endsWith('index.html') || currentPath.endsWith('/')) {
            quoteBtn.setAttribute('href', '../contact/contact.html');
        } else {
            quoteBtn.setAttribute('href', '../contact/contact.html');
        }
    }
});

