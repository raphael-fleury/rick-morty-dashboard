# Rick & Morty Dashboard

Projeto desenvolvido com Angular 18 e Bootstrap 5 para um teste técnico. Utiliza a [Rick & Morty API](https://rickandmortyapi.com/) para listar todos os personagens, episódios e cenários da série. Possui um sistema de autenticação simulatório onde é necessário escolher um personagem para prosseguir para as páginas internas.

## Instalação e Execução
**Primeiramente é necessário ter o [NodeJS](https://nodejs.org/en) instalado.**

Para instalar dependências:
```bash
npm install
```

Para executar:
```bash
npm run start
```

Para gerar build do projeto:
```bash
npm run build
```

Para executar testes:
```bash
npm run test
```

## Páginas
Externas:

`/` - Página de Login.

Internas:

`/profile` - Página principal.

`/characters` - Lista todos os personagens.

`/characters/:id` - Mostra detalhes de um personagem específico e lista os episódios em que ele participa.

`/episodes` - Lista todos os episódios.

`/episodes/:id` - Mostra detalhes de um episódio específico e lista os personagens que participam do episódio.

`/locations` - Lista todos os cenários.

`/locations/:id` - Mostra detalhes de um cenário específico e lista os personagens que foram vistos pela última vez lá.

## Arquitetura

### Módulos
`app` - Módulo principal, responsável pelo funcionamento da aplicação.

`app-routing` - Gerencia o roteamento das páginas.

`core` - Inclui elementos essenciais em toda a aplicação como o sistema de autenticação e a barra de navegação.

`shared` - Contém componentes, diretivas e outros elementos que podem ser usados em diferentes páginas ou módulos.

`character` - Inclui todos os elementos que se referem aos personagens, como as páginas de listagem, de detalhes e chamadas à API.

`episode` - Inclui todos os elementos que se referem aos episódios, como as páginas de listagem, de detalhes e chamadas à API.

`location` - Inclui todos os elementos que se referem aos cenários, como as páginas de listagem, de detalhes e chamadas à API.
