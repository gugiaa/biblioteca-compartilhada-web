# Meu Histórico de Alterações (Changelog — Gustavo de Lima)

Aqui vou registrar tudo que andei mexendo no projeto, pra equipe saber o que está pronto e o que mudou.

## [2026-05-21] — Correções de Navegação e Criação de Telas de Empréstimos/Usuários

### Adicionado
- **Tela de Empréstimos (`/loans`):** Criei uma tela dedicada contendo todos os empréstimos cadastrados, suporte a filtro por status e busca reativa por título de livro ou nome de usuário.
- **Tela de Listagem de Usuários (`/users`):** Criei a tela de listagem de membros do sistema que carrega os dados mockados, permitindo visualizar nome, matrícula, e-mail, tipo de usuário e status (Ativo/Inativo).

### Corrigido
- **Navegação de Empréstimos:** Corrigi o link da barra lateral que antes voltava para o Dashboard por falta da rota `/loans`.
- **Destaque de Links Ativos (Sidebar):** Configurei correspondência de rota exata (`exact: true`) na sidebar para evitar que as abas de "Usuários" e "Meu Perfil" ficassem ativas ao mesmo tempo quando o usuário estivesse visualizando o perfil.

## [2026-05-21] — Ajuste de Nome do Repositório e Setup Inicial

### Alterado
- **Nome do Projeto:** Ajustei a padronização do nome do repositório remoto para `smart-library-web` no GitHub a pedido do Raul.

### O que eu criei (Adicionado)


- **Estrutura de Rotas:** Configurei as rotas base do app com Lazy Loading no `app.routes.ts` usando componentes standalone do Angular.
- **Modelos de Dados:** Criei as interfaces em `src/app/core/models/` para representar as entidades de `User`, `Book`, `Loan` e `Library`.
- **Serviço de Mock:** Montei o `MockDataService` em `src/app/shared/services/` para simular a API de backend com dados fictícios para podermos testar as telas.
- **Layout do App:**
  - Ajustei o `index.html` para carregar a fonte *Inter*.
  - Configurei variáveis de cores e layouts comuns no `styles.scss` (temas azul, cinza e laranja).
  - Criei o componente de `HeaderComponent` (cabeçalho) com barra de busca e menu do usuário.
  - Criei o componente de `SidebarComponent` (menu lateral) com links de navegação.
  - Criei o `MainLayoutComponent` que envelopa todas as rotas logadas.
- **Telas Prontas:**
  - **Dashboard:** Montei os cards de resumo e uma tabela com os empréstimos recentes do sistema.
  - **Meu Perfil:** Tela com informações pessoais do usuário, estatísticas de uso e histórico de livros que ele pegou.
  - **Livros:** Lista de acervo com busca por texto, filtro de categorias e o Drawer lateral para cadastro de novos livros.
  - **Login (Esqueleto):** Criei a tela de login simples com validações de e-mail e senha. Está pronta para o colega novo adicionar a lógica de integração com o backend.

### O que eu alterei (Alterado)

### O que eu consertei (Corrigido)

