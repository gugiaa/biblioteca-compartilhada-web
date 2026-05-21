# Histórico de Alterações (Changelog — Gustavo de Lima)

Registro de todas as alterações realizadas no projeto para controle interno e acompanhamento da equipe.

## [2026-05-21] — Setup Inicial, Telas e Ajustes de Navegação

### Adicionado
- **Tela de Empréstimos (`/loans`):** Criada listagem de empréstimos ativos, atrasados e devolvidos, com suporte a busca dinâmica e filtros por status.
- **Tela de Membros/Usuários (`/users`):** Criada listagem de membros do sistema integrada com a simulação de dados de teste.
- **Esqueleto de Telas e Navegação:**
  - Desenvolvido Dashboard principal com os indicadores e empréstimos recentes.
  - Implementada tela de gerenciamento de livros do acervo, incluindo busca por texto, filtros de categoria e gaveta lateral (Drawer) para cadastro de novos livros.
  - Criada tela de exibição do Perfil com histórico de leituras.
  - Desenvolvida estrutura de login com as validações de campos preparadas para a integração com a API.
- **Estrutura Base do App:**
  - Configurado roteamento geral do app com Lazy Loading utilizando os componentes standalone do Angular 21.
  - Estruturados os modelos de dados principais para `User`, `Book`, `Loan` e `Library`.
  - Criado `MockDataService` para simulação das chamadas de API do backend.
  - Configurado layout principal do sistema (Header, Sidebar e MainLayout) usando a fonte Inter e o Angular Material.

### Alterado
- **Nome do Projeto:** Padronizada a nomenclatura do projeto e o repositório remoto para `smart-library-web`.

### Corrigido
- **Navegação Geral:** Corrigido o roteamento de empréstimos na barra lateral e ajustado o destaque de abas ativas para evitar a marcação simultânea indesejada de abas relacionadas a usuários.


