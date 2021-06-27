Front end criado utilizando as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Apollo Client](https://www.apollographql.com/docs/react/)

- O Nextjs foi escolhido devido a praticidade e a intimidade com o framework, além de da suporte ao TypeScript.
- Utilizei o Eslint e o prettier para ajudar manter o código organizado, além da ajuda com o typeScript, indicando onde não foi devidamente tipado.
- Typescript - Tipado somente onde o próprio Typescript não consegue inferir o tipo. Assim evitando que o código fique verboso e seja chato e repetitivo ficar tipando.
- O Styled components foi escolhido devido a praticidade em stylizar componentes.
- Apollo Client foi escolhido para consumir a api, sou curioso. Ousei me desafiar e utilizar uma tecnologia diferente além do REST. Foi de grande aprendizado sobre a tecnologia.
- Alguns components eu mesmo fiz, utilizando um padrão que aprendi, separando o CSS do components. Achei que facilita a leitura e venho usando nos meus projetos. A medida que o prazo foi acabando, decidi utilizar o Ant Design. A escolha foi pela intimidade com a tecnlogia;
## Instalação

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code


## usuarios
- Usuario para teste "agente@ticket.com" te levará para a rota '/tikets' rotas dos agentes.
- Usuario para teste "cliente@ticket.com" te levará para a rota '/ticketsclient' rotas do clientes.
- Infelizmente não consegui finalizar a parte de edição e criação de Tickets via FrontEnd, ele só lista os Tikets criados no banco via api
