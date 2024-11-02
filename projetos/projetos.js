// script.js

function expandProject(card) {
    const fullDescription = card.querySelector(".full-description");
    const isVisible = fullDescription.style.display === "block";
    
    // Oculta todas as descrições completas antes de exibir a clicada
    document.querySelectorAll(".full-description").forEach(desc => {
        desc.style.display = "none";
    });

    // Alterna a visibilidade da descrição completa do card clicado
    fullDescription.style.display = isVisible ? "none" : "block";
}

// Fecha as descrições completas ao clicar fora dos cards
document.addEventListener("click", function(event) {
    const isCard = event.target.closest(".project-card");
    if (!isCard) {
        document.querySelectorAll(".full-description").forEach(desc => {
            desc.style.display = "none";
        });
    }
});
