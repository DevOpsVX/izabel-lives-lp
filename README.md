# Landing Page - Izabel de Paula Lives

Landing page para coleta de inscrições nas lives da Izabel de Paula.

## 🌐 URL do Site

**https://devopsvx.github.io/izabel-lives-lp/**

## 📋 Funcionalidades

- Formulário de inscrição com validação
- Campos obrigatórios: Nome Completo, E-mail e Telefone
- Máscara automática para telefone brasileiro
- Integração com webhook Make.com para processamento dos dados
- Design responsivo para desktop e mobile
- Mensagens de sucesso e erro após envio

## 🔗 Webhook Integrado

O formulário envia os dados para o webhook Make.com:
```
https://hook.us1.make.com/ssa51hjea63mkys3u42talo36gj0vocf
```

Os dados são enviados no formato JSON:
```json
{
  "nome": "Nome Completo",
  "email": "email@exemplo.com",
  "telefone": "(11) 98765-4321"
}
```

## 🎨 Design

A landing page foi criada com base no design fornecido, incluindo:
- Logo "IZABEL de Paula"
- Título principal: "Participe das Nossas Lives"
- Descrição sobre as lives e método europeu
- Formulário clean e profissional
- Botão de call-to-action: "Quero Participar das Lives"
- Disclaimer sobre consentimento de comunicações

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com design responsivo)
- JavaScript (Vanilla)
- GitHub Pages para hospedagem

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- Desktop (acima de 768px)
- Tablet (até 768px)
- Mobile (até 480px)

## 📦 Estrutura de Arquivos

```
izabel-lives-lp/
├── index.html      # Estrutura HTML da página
├── styles.css      # Estilos e design responsivo
├── script.js       # Lógica do formulário e integração com webhook
└── README.md       # Este arquivo
```

## 🚀 Deploy

O site está hospedado no GitHub Pages através da branch `gh-pages`.

Para atualizar o site:
1. Faça as alterações necessárias nos arquivos
2. Commit e push para a branch `gh-pages`
3. O GitHub Pages atualizará automaticamente em alguns minutos

## ✅ Teste Realizado

O formulário foi testado com sucesso e está enviando corretamente os dados para o webhook Make.com.

