document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os certificados
    const certificates = document.querySelectorAll(".certificate img");
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const closeModal = document.getElementsByClassName("close")[0];

    // Adiciona evento de clique em cada imagem de certificado
    certificates.forEach((certificate) => {
        certificate.addEventListener("click", function() {
            modal.style.display = "block"; // Exibe o modal
            modalImg.src = this.src;       // Define a imagem do modal como a imagem clicada
            captionText.innerHTML = this.alt; // Define a legenda como o atributo alt da imagem
        });
    });

    // Evento de clique para fechar o modal
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    // Fecha o modal ao clicar fora da imagem (opcional)
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

const toggleButton = document.getElementById('darkModeToggle');
        let isDarkMode = false;

        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            isDarkMode = !isDarkMode;
            toggleButton.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
        });