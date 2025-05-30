// Para visualização dos PDFs de forma responsiva (celular):
// Tela grande, abre em nova página; tela pequena, exibe em uma div iframe abaixo do botão.

document.querySelectorAll('.pdf-download').forEach(function(section) {
    const link = section.querySelector('.pdf-btn');
    const visualizacao = section.nextElementSibling; // Pega a div seguinte, que é .pdf-visualizacao

    link.addEventListener('click', function(e) {
        const larguraTela = window.innerWidth;

        if (larguraTela <= 580) { // Se for celular
            e.preventDefault(); // Impede abrir nova aba

            // Alterna visibilidade
            if (visualizacao.style.display === 'none' || visualizacao.style.display === '') {
                visualizacao.style.display = 'block';
                // Faz a rolagem suave até o iframe
                visualizacao.scrollIntoView({ behavior: "smooth" });
            } else {
                visualizacao.style.display = 'none';
            }
        }
        // Se não, funciona normal, abre em nova aba
    });
});