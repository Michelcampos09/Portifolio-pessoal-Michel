# MSC | Portfólio Pessoal — Michel Serejo Campos

Portfólio profissional moderno, minimalista e responsivo desenvolvido com **React** e **Vite**, reproduzindo fielmente a identidade visual e o design autoral planejado.

---

## 🌐 Acesse o site online

<!-- SUBSTITUA O LINK ABAIXO PELO LINK DO SEU DEPLOY NA VERCEL -->
**[https://seu-portfolio.vercel.app/](https://seu-portfolio.vercel.app/)** *(Link em breve)*

O site está configurado para deploy contínuo e rápido na plataforma **Vercel**.

---

## 📌 Sobre o Projeto

Este projeto foi construído para apresentar o perfil profissional, a stack de tecnologias, a filosofia de trabalho e os principais projetos práticos desenvolvidos por **Michel Serejo Campos**, estudante de Informática no IFRJ com foco em desenvolvimento web Front-End e interfaces modernas.

O código foi arquitetado com foco em:
- **Simplicidade e Clareza**: componentes pequenos, organizados e fáceis de estudar e manter.
- **Fidelidade Visual Absoluta**: paleta de cores equilibrada (creme, marrom editorial, azul profundo e verde oliva suave), tipografia elegante (*Manrope* via Google Fonts) e proporções cuidadosas.
- **Responsividade Real**: adaptabilidade fluida para desktops ultrawide (escala proporcional em `rem`), tablets e smartphones, sem rolagem horizontal indesejada.
- **Interatividade & Microinterações**: cabeçalho *sticky* com efeito de vidro fosco (*glassmorphism*), cartões flutuantes (*hover lift*) e selo de disponibilidade interativo.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/) (v19)** — biblioteca para estruturação reativa da interface em componentes funcionais.
- **[Vite](https://vite.dev/)** — ferramenta de build rápida com recarregamento em tempo real (HMR).
- **JavaScript (ES6+)** — linguagem principal, com manipulação de arrays e eventos do DOM.
- **CSS Vanilla (CSS3 puro)** — estilização com variáveis CSS (`:root`), Grid, Flexbox, media queries e funções modernas como `clamp()`.
- **SVGs Puros** — ícones de redes sociais, setas e favicon autoral criados em código vetorial leve, sem bibliotecas pesadas de ícones.

---

## 🧭 Estrutura e Seções do Site

O site é organizado como uma **Single Page Application (SPA)** com navegação suave por âncoras:

1. **Cabeçalho (Navbar Sticky)**
   - Logo `MSC`.
   - Links de navegação direta (`Projetos`, `Sobre mim`, `Contato`) com espaçamento compensado contra sobreposição (`scroll-margin-top`).
   - Selo interativo com indicador visual verde: `● DISPONÍVEL PARA TRABALHO`.
   - Efeito *glassmorphism* com transparência creme e desfoque (`backdrop-filter: blur(10px)`).
   - Menu hambúrguer adaptado para dispositivos móveis.

2. **Início (Hero)**
   - Moldura fotográfica autoral com a foto do desenvolvedor e legenda de localização (`Rio de Janeiro, BR — 2026`).
   - Título principal com quebra harmoniosa: *"Olá, sou Michel Serejo Campos."*
   - Descrição objetiva do perfil e objetivos profissionais.
   - Pílulas com a lista de tecnologias dominadas.
   - Botão para leitura do currículo e indicador sutil de rolagem.

3. **Projetos Selecionados**
   - Disposição autoral em **dois cartões quadrados proporcionais (1:1)** centralizados.
   - Efeito moderno de elevação flutuante (`translateY(-8px)`) e sombra suave ao passar o cursor.
   - **Projeto 01 — Gerenciador de Tarefas:** aplicação desenvolvida em puro React.js, com captura de tela e link direto para demonstração na Vercel ([lista-de-tarefas-six.vercel.app](https://lista-de-tarefas-six.vercel.app/)).
   - **Projeto 02 — Restaurante Saint-Michel:** página institucional com estética e culinária franco-brasileira, desenvolvida com foco em HTML/CSS semântico e responsivo ([restaurante-saint-michel.vercel.app](https://restaurante-saint-michel.vercel.app/)).

4. **Sobre Mim (Perfil Profissional)**
   - Apresentação inicial sobre trajetória de hardware a software.
   - Experiência em infraestrutura e voluntariado em redes e manutenção no IFRJ.
   - Foco atual em componentização, responsividade e código limpo.
   - Destaque para proficiência em **Inglês Avançado (C1)** com **Medalha de Prata na Olimpíada Brasileira de Língua Inglesa (OBLI)**.
   - Bloco sintetizado **"Como eu trabalho"**:
     - *Código limpo:* organização e legibilidade antes de tudo.
     - *Foco no usuário:* interfaces rápidas, intuitivas e responsivas.
     - *Aprendizado contínuo:* estudo diário e evolução a cada projeto.

5. **Contato ("Vamos trabalhar juntos?")**
   - Links diretos com ícones para **WhatsApp**, **Instagram** e **LinkedIn**.
   - Abertura segura em nova aba utilizando `target="_blank"` e `rel="noopener noreferrer"`.

6. **Rodapé**
   - Logo e assinatura de design: *"Desenvolvido com intenção e atenção aos detalhes."*
   - Botão para retorno suave ao topo da página.

---

## 📁 Organização de Pastas

```text
portfolio-michel-pessoal-app/
├── public/
│   └── favicon.svg              # Favicon personalizado com logotipo autoral
├── src/
│   ├── assets/                  # Imagens e capturas dos projetos e perfil
│   │   ├── gerenciador-tarefas.png
│   │   ├── michel-perfil.jpg
│   │   └── restaurante-saint-michel.jpg
│   ├── componentes/             # Componentes modulares da interface
│   │   ├── Cabecalho.jsx        # Navbar sticky e menu mobile
│   │   ├── Inicio.jsx           # Seção principal de apresentação (Hero)
│   │   ├── Projetos.jsx         # Cards quadrados de projetos com links externos
│   │   ├── SobreMim.jsx         # Trajetória, stack e bloco "Como eu trabalho"
│   │   ├── Contato.jsx          # Links de contato e redes sociais
│   │   └── Rodape.jsx           # Rodapé e link de voltar ao topo
│   ├── App.jsx                  # Composição principal das seções
│   ├── index.css                # Sistema de design, cores, escala em rem e media queries
│   └── main.jsx                 # Ponto de montagem no DOM com React StrictMode
├── index.html                   # HTML base com meta tags, CSP e fontes Google Fonts
├── package.json                 # Scripts e dependências do projeto
└── vite.config.js               # Configuração do Vite e compilador React
```

---

## 🔒 Boas Práticas e Segurança

- **Content Security Policy (CSP)**: configurada no `<meta http-equiv="Content-Security-Policy">` do `index.html`, restringindo a execução e carregamento apenas a scripts locais e fontes oficiais da Google Fonts.
- **Proteção contra Reverse Tabnabbing**: todos os links que abrem em nova aba utilizam o atributo `rel="noopener noreferrer"`.
- **Prevenção de XSS**: ausência intencional de inserção de HTML cru (`dangerouslySetInnerHTML`), aproveitando o escape padrão e seguro do JSX no React.
- **Zero Segredos Expostos**: o projeto não armazena credenciais, senhas ou chaves de API sensíveis no código client-side.
- **Auditoria de Pacotes**: dependências atualizadas e auditadas sem vulnerabilidades conhecidas (`npm audit: 0 vulnerabilities`).

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado na máquina (versão 18 ou superior recomendada).
- Gerenciador de pacotes `npm`.

### Passo a Passo

1. **Acesse a pasta da aplicação no terminal:**
   ```bash
   cd portfolio-michel-pessoal-app
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Abra no seu navegador:**
   O terminal exibirá o endereço local, geralmente:
   ```text
   http://localhost:5173
   ```

5. **Para gerar o build de produção:**
   ```bash
   npm run build
   ```
   Os arquivos otimizados serão gerados na pasta `dist/`.

---

## 👨‍💻 Autor

**Michel Serejo Campos**  
Estudante de Informática — IFRJ  
- **WhatsApp:** [+55 21 97313-7911](https://wa.me/5521973137911)  
- **Instagram:** [@michel_campos0](https://www.instagram.com/michel_campos0)  
- **LinkedIn:** [Michel Serejo Campos](https://www.linkedin.com/)
