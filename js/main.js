document.addEventListener('DOMContentLoaded', () => {

    // 1. Navegação entre Tela 1 (Home) e Tela 2 (Atendimento)
    const screenHome = document.getElementById('screen-home');
    const screenAtendimento = document.getElementById('screen-atendimento');
    
    const btnGoAtendimento = document.getElementById('btn-go-atendimento');
    const btnBackHome = document.getElementById('btn-back-home');

    function showScreen(screenToShow) {
        // Esconde todas as telas
        screenHome.classList.remove('active');
        screenAtendimento.classList.remove('active');

        // Ativa a tela desejada
        screenToShow.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (btnGoAtendimento) {
        btnGoAtendimento.addEventListener('click', (e) => {
            e.preventDefault();
            showScreen(screenAtendimento);
        });
    }

    if (btnBackHome) {
        btnBackHome.addEventListener('click', (e) => {
            e.preventDefault();
            showScreen(screenHome);
        });
    }

    // 2. Accordion para expandir/recolher Categorias
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        const header = card.querySelector('.category-header');
        header.addEventListener('click', () => {
            // Se quiser fechar os outros ao abrir um novo:
            categoryCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('open');
                }
            });

            card.classList.toggle('open');
        });
    });

    // 3. Envio do Formulário Personalizado via WhatsApp
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = document.getElementById('form-nome').value;
            const email = document.getElementById('form-email').value;
            const whatsapp = document.getElementById('form-whatsapp').value;
            const descricao = document.getElementById('form-descricao').value;
            const prazo = document.getElementById('form-prazo').value;

            const mensagem = `Olá, meu nome é ${nome}.%0A%0A*Solicitação Personalizada:*%0A${descricao}%0A%0A*Email:* ${email}%0A*WhatsApp:* ${whatsapp}%0A*Prazo Desejado:* ${prazo}`;

            const urlWhatsapp = `https://wa.me/5573999049586?text=${mensagem}`;
            window.open(urlWhatsapp, '_blank');
        });
    }

});