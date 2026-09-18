# 🛒 Node.js Shopee Cart

Projeto de carrinho de compras inspirado na Shopee, desenvolvido com **Node.js** como parte de um desafio prático da **Formação Node.js da DIO**.

A aplicação simula operações fundamentais de um carrinho de compras, aplicando conceitos de modularização, manipulação de arrays, organização de regras de negócio, gerenciamento de dependências e estilização da saída no terminal.

Além da implementação proposta originalmente no desafio, o projeto recebeu novas funcionalidades desenvolvidas durante meus estudos.

---

## 🎯 Objetivo

Desenvolver a lógica de um carrinho de compras capaz de gerenciar produtos, quantidades, valores e descontos, mantendo as responsabilidades da aplicação separadas em módulos.

O projeto também é utilizado para praticar conceitos do ecossistema Node.js, como utilização de pacotes NPM, dependências externas e organização de projetos.

---

## 🚀 Funcionalidades

Atualmente, o carrinho permite:

- Adicionar produtos;
- Remover uma unidade de um produto;
- Excluir produtos do carrinho;
- Exibir os produtos adicionados;
- Calcular o subtotal de cada item;
- Calcular o valor total do carrinho;
- Aplicar cupons de desconto;
- Validar cupons;
- Identificar cupons inválidos;
- Calcular o percentual de desconto;
- Calcular o valor descontado;
- Calcular o valor final da compra;
- Exibir o checkout formatado no terminal;
- Exibir mensagens estilizadas de acordo com o resultado da operação.

---

## 🎟️ Sistema de cupons

O projeto possui um sistema de cupons responsável por validar o código informado e aplicar o desconto correspondente durante o checkout.

O sistema diferencia três situações:

- **Cupom válido:** aplica o percentual de desconto e calcula o novo valor da compra;
- **Cupom inválido:** mantém o valor original e informa que o cupom não é válido;
- **Nenhum cupom informado:** mantém o valor original e informa que nenhum cupom foi aplicado.

Quando um cupom válido é utilizado, o checkout apresenta:

- Valor total do carrinho;
- Cupom aplicado;
- Percentual de desconto;
- Valor descontado;
- Valor final a pagar.

---

## 📁 Estrutura do projeto

```text
Shopee-Cart/
├── src/
│   ├── services/
│   │   ├── cart.js
│   │   ├── cupoms.js
│   │   └── items.js
│   └── main.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### `src/main.js`

Responsável pela execução da aplicação e integração entre os diferentes serviços do projeto.

### `src/services/items.js`

Responsável pela criação e estrutura dos produtos utilizados pelo carrinho.

### `src/services/cart.js`

Contém as principais regras de negócio e operações realizadas sobre o carrinho, como:

- Adição de produtos;
- Remoção de unidades;
- Exclusão de produtos;
- Exibição do carrinho;
- Cálculo do valor total.

### `src/services/cupoms.js`

Responsável pelas regras relacionadas ao sistema de cupons e checkout, incluindo:

- Validação de cupons;
- Definição do percentual de desconto;
- Cálculo do valor descontado;
- Cálculo do valor final;
- Exibição das informações do checkout.

---

## ⚙️ Conceitos aplicados

Durante o desenvolvimento foram utilizados conceitos como:

- JavaScript;
- Node.js;
- ES Modules;
- NPM;
- Modularização;
- Funções;
- Objetos;
- Manipulação de arrays;
- Callbacks;
- Template literals;
- Condicionais;
- Formatação de strings;
- Gerenciamento de dependências;
- Pacotes externos;
- `findIndex()`;
- `splice()`;
- `forEach()`;
- `reduce()`;
- `padStart()`;
- `padEnd()`;
- `toFixed()`.

---

## 🔄 Operações do carrinho

O projeto organiza as principais operações em funções específicas:

```text
addItem()
removeItem()
deleteItem()
displayCart()
calculateTotal()
```

Essa separação permite manter cada operação responsável por uma parte específica da lógica do carrinho.

O sistema de cupons também possui funções específicas para validação, cálculo do desconto e apresentação do checkout.

---

## 📦 Dependências

O projeto utiliza dependências externas instaladas e gerenciadas através do **NPM**.

As dependências necessárias estão registradas no arquivo:

```text
package.json
```

As versões utilizadas também são registradas pelo:

```text
package-lock.json
```

Dessa forma, não é necessário enviar a pasta `node_modules` para o repositório.

Ao clonar o projeto, basta executar:

```bash
npm install
```

O NPM utilizará os arquivos do projeto para instalar automaticamente as dependências necessárias.

---

## 🎨 Chalk

O projeto utiliza o **Chalk** para estilizar as mensagens exibidas no terminal.

Ele é utilizado para aplicar:

- Cores;
- Destaques;
- Textos em negrito;
- Diferenciação visual entre mensagens;
- Indicação de cupons válidos e inválidos;
- Destaque dos valores apresentados no checkout.

### Instalação manual

Caso seja necessário instalar o Chalk manualmente:

```bash
npm install chalk
```

### Documentação

- [Chalk no NPM](https://www.npmjs.com/package/chalk)
- [Repositório oficial do Chalk](https://github.com/chalk/chalk)

---

## 📥 Instalação

Clone o repositório:

```bash
git clone https://github.com/elvisondev/shopee-cart.git
```

Acesse o diretório do projeto:

```bash
cd shopee-cart
```

Instale todas as dependências:

```bash
npm install
```

---

## ▶️ Executando o projeto

Após instalar as dependências, execute:

```bash
node src/main.js
```

O Node.js executará o arquivo principal da aplicação e exibirá o carrinho e o checkout diretamente no terminal.

---

## 📦 NPM e `node_modules`

As dependências utilizadas pelo projeto são instaladas localmente dentro da pasta:

```text
node_modules/
```

Essa pasta não deve ser enviada ao GitHub, pois pode ser reconstruída através do:

```bash
npm install
```

Por esse motivo, `node_modules/` é adicionada ao arquivo `.gitignore`.

Os arquivos que devem permanecer versionados são:

```text
package.json
package-lock.json
```

Eles permitem que outra pessoa clone o projeto e instale as dependências necessárias.

---

## 🛠️ Tecnologias

- **JavaScript**
- **Node.js**
- **NPM**
- **Chalk**
- **Git**
- **GitHub**

---

## 📚 Contexto

Projeto desenvolvido como parte de um desafio da **Formação Node.js da DIO**, com foco na aplicação prática dos fundamentos da linguagem e na organização de regras de negócio utilizando Node.js.

A implementação original do desafio foi expandida durante meus estudos com funcionalidades adicionais, incluindo:

- Sistema de cupons;
- Validação de descontos;
- Checkout;
- Formatação da tabela do carrinho;
- Estilização do terminal;
- Utilização de dependências externas através do NPM.

O projeto continuará sendo utilizado para aplicar novos conceitos conforme avanço nos estudos de Node.js e desenvolvimento back-end.

---

## 🚧 Status

**Em desenvolvimento**

A implementação base do desafio está concluída e novas funcionalidades foram adicionadas.

O projeto poderá continuar recebendo melhorias, refatorações e novas funcionalidades durante meus estudos.