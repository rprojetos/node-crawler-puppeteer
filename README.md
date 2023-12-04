<h1>
  Boilerplate Typescript / NodeJs
</h1>
<p>Desenvolvido para prover agilidade no desenvolvimento de código Typescript / NodeJs.</p>
<p>Os passos de uso são clonar o projeto e instalar as dependências:</p>

# Puppeteer

Puppeteer é uma biblioteca Node.js que fornece uma API de alto nível para controlar o Chrome/Chromium através do protocolo DevTools. O Puppeteer é executado no modo headless por padrão, mas pode ser configurado para ser executado no Chrome/Chromium completo ("headful").

ref.: https://pptr.dev/

```javascript
  // instala o puppeteer mais todas dependicia do boilerplate
    npm i puppeteer 
 
  // Install @types em dev
    npm i -D @types/puppeteer

  // Run Dev
    npm run start:dev

  // Run Build
    npm run build

  // Run Prod
    npm run start

  // Run Prettier
    npm run prettier

  // Run Eslint
    npm run eslint

  // Run Jest ( test )
    npm run test

  // Run Jest ( test CI )
    npm run test:ci
```

---

<h2>
  Conteúdo do repositório:
</h2>
<ul>
  <li>Typescript com NodeJS</li>
  <li>Prettier</li>
  <li>Eslint</li>
  <li>Jest</li>
</ul>

---

<h2>
  Typescript com NodeJS
</h2>
<p>Iniciando uma aplicação NodeJs utilizando Typescript como base:</p>

```javascript
  // Typescript
  npm i -D typescript @types/node tsx tsup
```

---

<h2>
  Prettier
</h2>
<p>
  O Prettier é uma ferramenta de formatação de código que ajuda a manter a consistência e a legibilidade do código em projetos de desenvolvimento de software. 
</p>

<p>
  Ele é amplamente utilizado em várias linguagens de programação/marcadores, incluindo JavaScript, TypeScript, CSS, HTML, JSON e muito mais.
</p>

```javascript
  // Prettier
  npm i -D prettier
```

---

<h2>
  Eslint
</h2>
<p>
O ESLint é uma ferramenta de análise de código estática amplamente utilizada na comunidade de desenvolvimento de software. 
</p>

<p>
Ele é projetado para ajudar os desenvolvedores a identificar e corrigir problemas de qualidade, erros de sintaxe e padrões de código inconsistentes em projetos JavaScript e TypeScript.
</p>

```javascript
  // Eslint
  npm i -D eslint
  npm i -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-import
  npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

---

<h2>
  Jest
</h2>
<p>
O Jest é um framework de testes de JavaScript amplamente utilizado para testar aplicativos e bibliotecas JavaScript. 
</p>

<p>
Ele foi desenvolvido para ser fácil de configurar e usar, fornecendo uma ampla gama de recursos para escrever testes automatizados.
</p>

```javascript
  // Jest
  npm i -D jest ts-jest @types/jest
  npx ts-jest config:init
```

---

Por ♥ Ricardo Poleto 👋 [Linkedin!](https://www.linkedin.com/in/ricardo-poleto/)
