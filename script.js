// Máscara para telefone
document.getElementById('telefone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    }
    
    e.target.value = value;
});

// Envio do formulário
document.getElementById('liveForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const form = e.target;
    
    // Desabilitar botão durante o envio
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    
    // Esconder mensagens anteriores
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    
    // Coletar dados do formulário
    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value
    };
    
    try {
        // Enviar para o webhook
        const response = await fetch('https://hook.us1.make.com/ssa51hjea63mkys3u42talo36gj0vocf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            // Sucesso
            successMessage.style.display = 'block';
            form.reset();
            
            // Scroll suave para a mensagem de sucesso
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            throw new Error('Erro ao enviar formulário');
        }
    } catch (error) {
        console.error('Erro:', error);
        errorMessage.style.display = 'block';
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Quero Participar das Lives';
    }
});
