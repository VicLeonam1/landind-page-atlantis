const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About",
    "nav-signup": "Sign Up",
    "nav-governance": "Governance",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "home-subtitle": "We have the solution for your business",
    "home-main": "Meet our successful work",
    "home-button": "Come and See",
    "about-import": "Importation",
    "about-import-description":
      "We perform the importation of goods and raw materials from international markets to meet local needs efficiently.",
    "about-export": "Exportation",
    "about-export-description":
      "Complete export services, helping companies take their products to the global market.",
    "partners-title": "Partner Companies",
    "contact-title": "Contact Us!",
    footer: "Atlantis Commodities © 2020.",
    "contact-name-placeholder": "Name",
    "contact-email-placeholder": "Email",
    "contact-message-placeholder": "How can we help? Write your message.",
    "contact-submit": "Submit",
  },
  pt: {
    "nav-home": "Home",
    "nav-about": "Sobre",
    "nav-signup": "Cadastrar-se",
    "nav-governance": "Governança",
    "nav-projects": "Projetos",
    "nav-contact": "Contato",
    "home-subtitle": "Nós temos a solução para seu negócio",
    "home-main": "Conheça nosso trabalho de sucesso",
    "home-button": "Venha Conhecer",
    "about-import": "Importação",
    "about-import-description":
      "Realizamos a importação de mercadorias e matérias-primas de mercados internacionais para atender às necessidades locais com eficiência.",
    "about-export": "Exportação",
    "about-export-description":
      "Serviços completos de exportação, ajudando empresas a levar seus produtos ao mercado global.",
    "partners-title": "Empresas parceiras",
    "contact-title": "Fale conosco!",
    footer: "Atlantis Commodities © 2020.",
    "contact-name-placeholder": "Nome",
    "contact-email-placeholder": "Email",
    "contact-message-placeholder": "Como podemos ajudar? Escreva sua mensagem.",
    "contact-submit": "Enviar",
  },
};

const elements = document.querySelectorAll("[data-key]");
elements.forEach((element) => {
  const key = element.getAttribute("data-key");
  if (translations[language][key]) {
    if (element.placeholder) {
      element.placeholder = translations[language][key]; // Para inputs e placeholders
    } else if (element.value !== undefined) {
      element.value = translations[language][key]; // Para campos com 'value' (inputs, selects)
    } else {
      element.textContent = translations[language][key]; // Para textos comuns
    }
  }
});

function changeLanguage(language) {
  // Atualiza a bandeira e o idioma exibido
  const idiomaImg = document.getElementById("bandeira");
  const idiomaText = document.querySelector(".idioma p");
  const venhaConhecer = document.getElementById("texto");

  if (language === "pt") {
    idiomaImg.src = "assets/images/portugues.png"; // Bandeira do Brasil
    idiomaText.textContent = "PT-BR";
    venhaConhecer.textContent = "Venha Conhecer";
  } else if (language === "en") {
    idiomaImg.src = "assets/images/ingles.png"; // Bandeira dos EUA/Reino Unido
    idiomaText.textContent = "EN-US";
    venhaConhecer.textContent = "Come and see";
  }

  // Atualiza os textos da página conforme a tradução
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[language][key]) {
      // Para inputs, selects, e outros campos de formulário com value
      if (element.placeholder) {
        element.placeholder = translations[language][key]; // Para inputs e placeholders
      } else if (element.value !== undefined) {
        element.value = translations[language][key]; // Para campos com 'value' (inputs, selects)
      } else {
        element.textContent = translations[language][key]; // Para textos comuns
      }
    }
  });

  // Fecha a lista de idiomas após a troca
  const lista = document.querySelector(".lista-idioma");
  const seta = document.querySelector(".material-symbols-outlined");
  lista.style.opacity = "0"; // Fecha a lista de idiomas
  seta.style.transform = "rotate(0deg)"; // Restaura a seta para sua posição original
}

// Função para alternar a visibilidade da lista de idiomas
function listaIdiomas() {
  const lista = document.querySelector(".lista-idioma");
  const seta = document.querySelector(".material-symbols-outlined");

  // Altera a visibilidade da lista e a rotação da seta
  if (lista.style.opacity === "0" || lista.style.opacity === "") {
    lista.style.opacity = "1";
    seta.style.transform = "rotate(180deg)";
    seta.style.transition = "transform 0.5s ease";
  } else {
    lista.style.opacity = "0";
    seta.style.transform = "rotate(0deg)";
  }
}
