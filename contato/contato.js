document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Aqui você pode adicionar lógica para enviar os dados para um servidor

    // Mostra a mensagem de sucesso
    document.getElementById('successMessage').style.display = 'block';

    // Limpa o formulário após o envio
    this.reset();
});

const toggleButton = document.getElementById('darkModeToggle');
        let isDarkMode = false;

        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            isDarkMode = !isDarkMode;
            toggleButton.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
        });