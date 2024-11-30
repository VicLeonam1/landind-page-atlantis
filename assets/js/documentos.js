const corpo = document.getElementsByTagName('html')[0];
const documentos = {
    1: document.getElementById('documento1'),
    2: document.getElementById('documento2'),
    3: document.getElementById('documento3'),
    4: document.getElementById('documento4') // Adicionado para o 4º documento
};
const funpreto = document.querySelector('.funpreto');
let isDocumentoVisible = [false, false, false, false]; // Agora com 4 valores

// Função para abrir o documento
function abrirDocumento(numero) {
    if (!isDocumentoVisible[numero - 1]) {  // Verifica se o documento não está visível
        // Esconde todos os documentos antes de mostrar o novo
        documentos[1].style.display = "none";
        documentos[2].style.display = "none";
        documentos[3].style.display = "none";
        documentos[4].style.display = "none";
        isDocumentoVisible = [false, false, false, false]; // Resetar todos os valores

        // Exibe o documento correspondente
        documentos[numero].style.display = "block";
        corpo.style.overflow = "hidden";    // Impede rolagem do body
        funpreto.style.display = "block";   // Exibe o fundo escuro
        isDocumentoVisible[numero - 1] = true;  // Marca como visível
        console.log(`Documento ${numero} aberto`);

        document.querySelector('.imagens').scrollTo({ top: 0 }); // Rola a imagem para o topo
    }
}

// Função para fechar o documento
function fecharDocumento() {
    // Esconde todos os documentos
    documentos[1].style.display = "none";
    documentos[2].style.display = "none";
    documentos[3].style.display = "none";
    documentos[4].style.display = "none";

    // Resetar o estado de visibilidade
    isDocumentoVisible = [false, false, false, false];
    corpo.style.overflow = "auto";     // Restaura a rolagem do body
    funpreto.style.display = "none";   // Esconde o fundo escuro
    console.log("Documento fechado");
}

// Prevenir o clique direito nas imagens
document.querySelectorAll('.imagens img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();  // Impede o menu de contexto (botão direito)
        alert("A ação de baixar a imagem foi desabilitada!");
    });
});
