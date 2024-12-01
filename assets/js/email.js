// Inicialize o EmailJS
emailjs.init("FyqCN7tgh-YFui8uECe-_");

// Adicione o listener ao formulário correto
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Envio de e-mail via EmailJS
    emailjs.send("service_qoyli68", "template_lbyyot5", {
        nome: nome,
        email: email,
        mensagem: mensagem,
    })
    .then(() => {
        document.getElementById("status").innerText = "Mensagem enviada com sucesso!";
    })
    .catch((error) => {
        document.getElementById("status").innerText = "Erro ao enviar mensagem: " + error.text;
    });
});
