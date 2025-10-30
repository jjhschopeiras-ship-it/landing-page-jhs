# **Projeto Landing Page \- JHS Chopeiras**

Este repositório contém o código-fonte da landing page oficial da JHS Chopeiras, focada em captação de leads (orçamentos e agendamentos de manutenção) através do WhatsApp e formulário de contato.

O projeto foi construído usando um template data-driven (orientado a dados), o que significa que **a maior parte do conteúdo, layout e estilo pode ser alterada sem tocar no código-fonte** dos componentes React.

## **Conceito Principal: Gerenciamento via JSON**

A filosofia deste projeto é a **separação total entre conteúdo e código**.

Para alterar textos, imagens, cores, fontes, seções do menu ou links do WhatsApp, **o único arquivo que você precisa editar é o config/landing-page.json**.

O sistema lê este arquivo e constrói a página dinamicamente.

## **Pilha Tecnológica**

* **Framework:** Next.js (com App Router)  
* **Estilização:** Tailwind v4 (arquitetura CSS-first)  
* **Componentes (Base):** shadcn/ui (Cards, Accordion, Inputs, etc.)  
* **Ícones:** Lucide React  
* **Tipagem:** TypeScript  
* **Backend do Formulário:** Google Apps Script (envia dados para um e-mail)

## **Como Editar o Conteúdo (O Manual)**

Para qualquer alteração de conteúdo ou visual, abra o arquivo config/landing-page.json.

### **1\. Configurações Globais (Tema, SEO, WhatsApp)**

Edite o objeto settings no topo do arquivo:

"settings": {  
  "theme": {  
    "primaryColor": "\#A0522D",     // Cor principal (Âmbar)  
    "secondaryColor": "\#F5F5DC",  // Cor secundária (Bege)  
    "backgroundColor": "\#FFFBF5", // Fundo principal  
    "textColor": "\#363636",       // Cor do texto principal  
    "borderRadius": "0.5rem"  
  },  
  "typography": {  
    "fontPrimary": "Merriweather", // Fonte dos Títulos  
    "fontBody": "Lato"           // Fonte dos Textos  
  },  
  "seo": {  
    "title": "JHS Chopeiras: Venda e Manutenção em Praia Grande/SP",  
    "description": "Especialistas em chopeiras..."  
  },  
  "whatsappLink": "\[https://wa.me/551128253637?text=Olá\](https://wa.me/551128253637?text=Olá)\! Vi o site..."  
}

* **theme**: Altere as cores da paleta "Classic Chope" aqui.  
* **typography**: Altere as fontes (requer atualização também em app/layout.tsx).  
* **seo**: Mude o título e a descrição que aparecem no Google.  
* **whatsappLink**: **IMPORTANTE\!** Este é o link usado pelo **botão flutuante** do WhatsApp.

### **2\. Header e Footer**

* **header**: Altere o logo (texto) e o ctaButton (botão "Fale Conosco"). Os links do menu são gerados automaticamente (veja abaixo).  
* **Footer (Seção no final)**: Altere o copyrightText e os socialLinks.

### **3\. Seções da Página (Conteúdo Principal)**

O array sections controla todo o corpo da página. Cada objeto {...} é uma seção.

#### **Para editar um texto:**

Encontre a seção (ex: "component": "Hero") e edite os valores de title ou subtitle.

{  
  "component": "Hero",  
  "data": {  
    "title": "O Chope Perfeito para Seu Bar, Evento ou Casa.", // \<-- Edite este texto  
    "subtitle": "Venda, instalação e manutenção...", // \<-- Edite este texto  
    "ctaButton": {  
      "text": "Fale com um Especialista no WhatsApp", // \<-- Edite este texto  
      "href": "\[https://wa.me/551128253637?text=Olá\](https://wa.me/551128253637?text=Olá)\! Quero falar..." // \<-- Edite este link  
    },  
    "backgroundImageSrc": "/images/hero-background-chope.jpg" // \<-- Mude o caminho da imagem  
  }  
}

#### **Para editar itens (Benefícios, Como Funciona, Portfólio, FAQ):**

Encontre a seção (ex: "component": "Features") e edite o array items.

"data": {  
  "title": "Venda e Manutenção: A Solução Completa",  
  "items": \[  
    {  
      "icon": "ShoppingCart",  
      "title": "Venda e Instalação", // \<-- Edite este texto  
      "description": "Oferecemos variedade de modelos..." // \<-- Edite este texto  
    },  
    {  
      "icon": "Wrench",  
      "title": "Manutenção Rápida", // \<-- Edite este texto  
      "description": "Problemas com refrigeração..." // \<-- Edite este texto  
    }  
  \]  
}

#### **Para editar os links do Menu de Navegação (Header):**

O menu é gerado dinamicamente. Para que uma seção apareça no menu, ela precisa ter duas chaves em seu objeto settings: id e menuTitle.

**Exemplo (Seção "Serviços"):**

{  
  "component": "Features",  
  "settings": {  
    "paddingTop": "lg",  
    "paddingBottom": "lg",  
    "id": "servicos",       // \<-- O link âncora (ex: \#servicos)  
    "menuTitle": "Serviços"  // \<-- O texto que aparece no menu  
  },  
  "data": { ... }  
}

* Para **remover** um item do menu, delete a chave "menuTitle".  
* Para **adicionar** um item, adicione id e menuTitle.  
* Para **reordenar** o menu, reordene os objetos das seções dentro do array sections.

## **Funcionalidades Especiais**

### **Formulário de Contato (via Google Apps Script)**

A seção "Contato" não usa um iframe. É um formulário HTML nativo que envia os dados para um script seguro no Google (Google Apps Script), que por sua vez formata e envia um e-mail.

**Como alterar o e-mail de destino:**

1. Abra config/landing-page.json.  
2. Encontre a seção "component": "Contact".  
3. Edite o valor da chave recipientEmail.

"data": {  
  "title": "Fale Conosco Agora Mesmo\!",  
  "subtitle": "Preencha o formulário abaixo...",  
  "recipientEmail": "email.da.jhs@example.com", // \<-- MUDE ESTE E-MAIL  
  "googleScriptUrl": "URL\_DO\_APPS\_SCRIPT\_CONFIGURADA" // \<-- Não mexa nesta URL  
}

**Importante:** Não altere a googleScriptUrl, pois ela é o "motor" que faz o envio funcionar.

### **Botão Flutuante de WhatsApp**

O botão verde fixo no canto da tela é controlado pela chave whatsappLink dentro do objeto settings no topo do landing-page.json.

## **Para Desenvolvedores (Rodando Localmente)**

1. **Instale as dependências:**  
   npm install

2. **Rode o servidor de desenvolvimento:**  
   npm run dev

3. Abra o projeto:  
   Acesse http://localhost:3000 no seu navegador.