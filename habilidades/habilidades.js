document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".habilidade-card");
    const overlay = document.querySelector(".overlay");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            // Fechar outros cards
            cards.forEach(c => c.classList.remove("expanded"));
            // Expandir o card atual
            card.classList.add("expanded");
            overlay.classList.add("active");
        });
    });

    overlay.addEventListener("click", () => {
        // Remover a expansão de todos os cards
        cards.forEach((card) => {
            card.classList.remove("expanded");
        });
        overlay.classList.remove("active");
    });
});

const toggleButton = document.getElementById('darkModeToggle');
        let isDarkMode = false;

        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            isDarkMode = !isDarkMode;
            toggleButton.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
        });
