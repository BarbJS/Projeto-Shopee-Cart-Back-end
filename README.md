# 🛒 Shopee Cart Back end (Node.js)

Este repositório contém a implementação da lógica de backend, utilizando JavaScript, para um carrinho de compras de e-commerce (inspirado na Shopee). Este repositório foi desenvolvido como parte do desafio de projeto do curso de **Node.js** da plataforma **DIO (Digital Innovation One)**, proposto pelo professor Felipe Aguiar.

## 📋 Sobre o Projeto

O objetivo deste projeto foi aplicar conceitos fundamentais de JavaScript e Node.js para criar uma arquitetura modular e escalável. O sistema simula funções principais de um carrinho de compras, focando nas regras de negócio e manipulação de dados, sem interface gráfica para front end.

O código foi desenvolvido utilizando **Módulos ES (ECMAScript Modules)** para garantir a separação de responsabilidades e organização do código.

## 🚀 Tecnologias Utilizadas

* **JavaScript (ES6+)**
* **Node.js**
* **VS Code**

## ⚙️ Arquitetura e Estrutura de Arquivos

O projeto foi organizado em camadas de serviço para separar a criação dos objetos da lógica de manipulação:

* **`services/item.js`**: Responsável pela criação e modelagem dos itens (produtos). Implementa uma função que retorna um objeto contendo nome, preço, quantidade e um método para cálculo de subtotal.
* **`services/cart.js`**: Contém a inteligência central do carrinho. Exporta funções para manipular a lista de compras (adicionar item, deletar item, remover quantidades de item e calcular totais).
* **`index.js`**: Ponto de entrada da aplicação. Orquestra a execução, importando os módulos e simulando o fluxo de compra do usuário.

## 📦 Regras de Negócio

O sistema foi desenvolvido atendendo às seguintes premissas funcionais:

1.  **Criação de Itens**: Cada item deve possuir nome, valor unitário e quantidade inicial.
2.  **Adição ao Carrinho**: O sistema deve permitir a inclusão de múltiplos itens em um vetor (array) central.
3.  **Cálculo de Subtotal**: O valor é calculado dinamicamente (`preço * quantidade`) para cada item.
4.  **Cálculo Total**: O sistema deve iterar sobre o carrinho e somar os subtotais, apresentando o valor final formatado.
5.  **Remoção de Itens**:
    * **Decrementar**: Se um item possui quantidade > 1, apenas a quantidade é reduzida.
    * **Remover**: Se a quantidade for 1, o item é excluído da lista.
    * **Deletar**: Permite a exclusão direta de um item pelo nome, independentemente da quantidade.

## 🔧 Como Executar

Para rodar o projeto localmente, certifique-se de ter o Node.js instalado. CLone este repositório e abra a pasta no editor de código de preferência. Caso ainda não tenha instalado o módulo NPM, abra o terminal e digite 'npm install'. Aguarde o download e, em seguida, digite 'npm init -y'. Depois, é só executar o 'index.js' digitando 'node src/index.js' no terminal. Se quiser, pode alterar os itens, os preços e suas quantidades; além de também poder brincar com as funções de adicionar, deletar e remover quantidade de item, sempre mantendo a lógica de programação intacta para que não ocorra erros.

1. Clone o repositório:
```bash
git clone [https://github.com/SEU-USUARIO/nome-do-repositorio.git](https://github.com/SEU-USUARIO/nome-do-repositorio.git)
