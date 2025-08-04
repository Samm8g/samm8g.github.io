        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        function applyTheme(isDarkMode) {
            if (isDarkMode) {
                body.classList.add('dark-mode');
                darkModeToggle.querySelector('i').classList.remove('fa-moon');
                darkModeToggle.querySelector('i').classList.add('fa-sun');
            } else {
                body.classList.remove('dark-mode');
                darkModeToggle.querySelector('i').classList.remove('fa-sun');
                darkModeToggle.querySelector('i').classList.add('fa-moon');
            }
        }

        // Check system preference
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
        applyTheme(prefersDarkMode.matches);

        // Listen for changes in system preference
        prefersDarkMode.addEventListener('change', (e) => {
            applyTheme(e.matches);
        });

        darkModeToggle.addEventListener('click', () => {
            const isCurrentlyDarkMode = body.classList.contains('dark-mode');
            applyTheme(!isCurrentlyDarkMode); // Toggle the theme
        });

        const socialsToggle = document.getElementById('socialsToggle');
        const socialsContent = document.getElementById('socialsContent');
        const collapsibleHeader = document.querySelector('.collapsible-header');

        collapsibleHeader.addEventListener('click', () => {
            const isHidden = socialsContent.classList.contains('hidden');
            socialsContent.classList.toggle('hidden');
            socialsContent.classList.toggle('show');
            socialsToggle.classList.toggle('rotated');
            collapsibleHeader.setAttribute('aria-expanded', !isHidden);
        });