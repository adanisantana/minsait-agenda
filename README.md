##Agenda de Contatos
Este projeto é uma aplicação web de agenda de lista de contatos desenvolvida com Angular 16 e Angular Material.

##Funcionalidades
Adicionar novos contatos com nome, endereço e informações de contato.
Listar todos os contatos existentes em uma tabela.
Interface amigável e responsiva com Angular Material.

##Tecnologias Utilizadas
Angular 16
Angular Material
TypeScript
HTML
SCSS
Pré-requisitos
Node.js (versão recomendada: 18 ou superior)
npm (geralmente instalado com Node.js)
Angular CLI (instalado globalmente)
Como Executar o Projeto
Clone este repositório:

Bash

git clone https://docs.github.com/articles/referencing-and-citing-content
Navegue até o diretório do projeto:

Bash

cd [nome do diretório do projeto]
Instale as dependências:

Bash

npm install
Execute o servidor de desenvolvimento:

Bash

ng serve
Abra o navegador e acesse http://localhost:4200/.

Estrutura do Projeto
agenda-contatos/
├── src/
│   ├── app/
│   │   ├── contatos/
│   │   │   ├── contatos.component.ts
│   │   │   ├── contatos.component.html
│   │   │   ├── contatos.component.scss
│   │   │   ├── pessoa-form/
│   │   │   │   ├── pessoa-form.component.ts
│   │   │   │   ├── pessoa-form.component.html
│   │   │   │   ├── pessoa-form.component.scss
│   │   │   ├── services/
│   │   │   │   ├── contatos.service.ts
│   │   │   ├── model/
│   │   │   │   ├── pessoa.ts
│   │   │   ├── contatos.module.ts
│   │   │   ├── contatos-routing.module.ts
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   ├── styles.scss
├── angular.json
├── package.json
├── README.md

##Componentes
ContatosComponent: Exibe a lista de contatos e o formulário de adição.
PessoaFormComponent: Formulário para adicionar ou editar contatos.
Considerações Finais
Este projeto foi desenvolvido com o objetivo de demonstrar o uso de Angular 16 e Angular Material na criação de uma aplicação de agenda de contatos.

##Próximos Passos
Adicionar funcionalidades de  adição, edição e exclusão de contatos.
Implementar validações de formulário.
Adicionar testes unitários e de integração.
Implementar paginação na tabela de contatos.
Melhorar a responsividade para diferentes tamanhos de tela.
