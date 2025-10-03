# Editora React - Sistema de Controle 

![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18.0-green?logo=node.js)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?logo=mysql)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-blue?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Demonstração

Assista ao vídeo demonstrativo do sistema em funcionamento:

<video src="videoexemplo.mkv" controls width="600" poster="poster.png">
  Seu navegador não suporta o elemento de vídeo.
</video>

---

## Sobre o Projeto
Este projeto consiste em um controlador de artigos de uma editora, onde o usuário administrador consegue adicionar, listar, filtrar, excluir e publicar artigos.

A estrutura está dividida em duas pastas principais:

-  backend/ → responsável pela API REST desenvolvida em Node.js + Express, que faz a ponte entre o banco de dados MySQL e a aplicação React.

 Dentro do arquivo server.js estão implementadas as rotas do CRUD de artigos, utilizando requisições HTTP (GET, POST, PUT, DELETE) combinadas com consultas SQL.

- editora-ui/ → responsável pela interface do usuário, construída em React com componentes JSX.

A comunicação entre o frontend e o backend é feita através do http-common.js, que usa a biblioteca Axios para consumir a API.

Este sistema é uma adaptação de um projeto desenvolvido em sala de aula pelo professor FerrasA
.
No projeto original, a API estava ligada a um servidor externo em um IP público. Nesta versão, foi feita a adaptação para que a API seja executada em um ambiente local, controlando diretamente um banco de dados MySQL criado na própria máquina do desenvolvedor.

### Funcionalidades:

- Visualização de artigos cadastrados no banco

- Filtro de busca por titulo do artigo

- Publicação ou despublicação de artigos

- Cadastro, edição e exclusão de artigos via interface

---

##  Tecnologias

- *Frontend:* React, Tailwind CSS
- *Backend:* Node.js, Express
- *Banco de Dados:* MySQL
- *Controle de Versão:* Git + GitHub
- *Outras Ferramentas:* VSCode, Postman

---

##  Como rodar

Para executar o projeto, é necessário configurar três partes principais:

- Banco de Dados (MySQL)

O projeto utiliza o MySQL como banco de dados, que pode ser executado via XAMPP ou outra ferramenta equivalente.

Certifique-se de criar o banco de dados editora_db e importar as tabelas antes de iniciar a aplicação:

```
CREATE DATABASE editora_db
USE editora_db

CREATE TABLE `artigos` (

  `id` int(11) NOT NULL,

  `titulo` varchar(255) NOT NULL,

  `resumo` text DEFAULT NULL,

  `publicado` tinyint(1) DEFAULT 0

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

```

- Servidor Backend (Node.js + Express)

Acesse a pasta raiz do backend no terminal.

Instale as dependências (se ainda não instalou):

```
npm install

```
Inicie o servidor com:
```
node server.js
```

O backend ficará disponível em: http://localhost:8000

- Servidor Frontend (React)

Acesse a pasta editora-ui no terminal.

Instale as dependências (se ainda não instalou):

```
npm install
```

Execute o frontend com:
```
npm run dev
```

A interface ficará disponível em: http://localhost:5173
 (ou a porta indicada pelo Vite).


---
## Autores

- [@bernardobernardo23](https://github.com/bernardobernardo23)

## Créditos

 - [Professor ferrasa](https://github.com/ferrasa/dw)
