// Função para validar o formulário
function validateForm(event) {
    let valid = true;
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    if (name.value.length < 2) {
        valid = false;
        alert('Nome deve ter pelo menos 2 caracteres.');
    }
    
    if (!email.value.includes('@')) {
        valid = false;
        alert('Email inválido.');
    }
    
    if (subject.value.length < 5) {
        valid = false;
        alert('Assunto deve ter pelo menos 5 caracteres.');
    }
    
    if (message.value.length < 10) {
        valid = false;
        alert('Mensagem deve ter pelo menos 10 caracteres.');
    }
    
    if (!valid) {
        event.preventDefault();
    }
}

// Função para alternar a visibilidade das FAQs
function setupFaqToggle() {
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

// Adiciona o ouvinte de evento ao formulário
document.querySelector('form').addEventListener('submit', validateForm);

// Configura o comportamento das FAQs ao carregar a página
document.addEventListener('DOMContentLoaded', setupFaqToggle);
