# 🛒 Node.js Shopee Cart

Projeto de carrinho de compras inspirado na Shopee, desenvolvido com **Node.js** como parte de um desafio prático da formação da DIO.

A aplicação simula operações fundamentais de um carrinho de compras, aplicando conceitos de modularização, manipulação de arrays e organização de regras de negócio.

---

## 🎯 Objetivo

Desenvolver a lógica de um carrinho de compras capaz de gerenciar produtos, suas quantidades e valores, mantendo as responsabilidades da aplicação separadas em módulos.

---

## 🚀 Funcionalidades

Atualmente, o carrinho permite:

- Adicionar produtos;
- Remover uma unidade de um produto;
- Excluir produtos do carrinho;
- Exibir os produtos adicionados;
- Calcular o subtotal de cada item;
- Calcular o valor total do carrinho.

---

## 📁 Estrutura do projeto

```text
src/
├── services/
│   ├── cart.js
│   └── items.js
└── main.js
```

### `main.js`

Responsável pela execução da aplicação e integração entre os serviços.

### `services/items.js`

Responsável pela criação e estrutura dos produtos utilizados pelo carrinho.

### `services/cart.js`

Contém as regras de negócio e operações realizadas sobre o carrinho.

---

## ⚙️ Conceitos aplicados

Durante o desenvolvimento foram utilizados conceitos como:

- JavaScript;
- Node.js;
- ES Modules;
- Modularização;
- Funções;
- Objetos;
- Manipulação de arrays;
- Callbacks;
- `findIndex()`;
- `splice()`;
- `forEach()`;
- `reduce()`.

---

## 🔄 Operações do carrinho

O projeto organiza as principais operações em funções específicas:

```js
addItem()
removeItem()
deleteItem()
displayCart()
calculateTotal()
```

Essa separação permite manter cada operação responsável por uma parte específica da lógica do carrinho.

---

## ▶️ Executando o projeto

Clone o repositório:

```bash
git clone https://github.com/elvisondev/shopee-cart.git
```

Acesse o diretório:

```bash
cd shopee-cart
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
node src/main.js
```

---

## 🛠️ Tecnologias

- **JavaScript**
- **Node.js**
- **NPM**
- **Git**
- **GitHub**

---

## 📚 Contexto

Projeto desenvolvido como parte de um desafio da **Formação Node.js da DIO**, com foco na aplicação prática dos fundamentos da linguagem e na organização de regras de negócio utilizando Node.js.

Além da implementação proposta no desafio, o projeto poderá receber novas funcionalidades e melhorias desenvolvidas durante meus estudos.

---

## 🚧 Status

**Em desenvolvimento**

A implementação base do desafio está concluída, porém o projeto continuará recebendo melhorias e novas funcionalidades antes da publicação da versão final.