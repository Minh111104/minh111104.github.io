// Dark Mode Toggle with MUI-style Switch
(function() {
    'use strict';

    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme on page load
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Initialize the switch when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        const themeSwitch = document.getElementById('theme-switch');
        
        if (!themeSwitch) return;

        // Set initial switch state
        themeSwitch.checked = savedTheme === 'dark';

        // Handle theme switch
        themeSwitch.addEventListener('change', function() {
            if (this.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
    });
})();
