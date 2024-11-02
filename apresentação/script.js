const toggleButton = document.getElementById('darkModeToggle');
        let isDarkMode = false;

        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            isDarkMode = !isDarkMode;
            toggleButton.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
        });