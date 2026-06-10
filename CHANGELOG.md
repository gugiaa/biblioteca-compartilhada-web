# Histórico de Alterações — Smart Library

Registro de todas as alterações realizadas no projeto para controle interno e acompanhamento da equipe.

## [2026-06-10] — Painel de Administração e Operações Completas (Mocks)

### Adicionado
- **Operações de Empréstimos:**
  - Desenvolvido formulário reativo de Novo Empréstimo para cadastro de transações.
  - Implementadas ações de "Devolver" e "Renovar" empréstimo diretamente no modal de detalhes, atualizando dinamicamente o status e a quantidade de exemplares disponíveis do livro.
- **Operações de Acervo de Livros:**
  - Implementadas ações de edição e exclusão de livros na listagem.
  - Adaptado o Drawer lateral de livros para operar de forma híbrida (cadastro e edição de dados).
- **Operações de Membros/Usuários:**
  - Implementado o cadastro e edição de membros com formulário reativo em modal.
  - Adicionada a ação rápida de "Bloquear/Desbloquear" usuários com reatividade de tela imediata.
- **Dashboard Admin & Auditoria:**
  - Desenvolvidos gráficos estatísticos estilizados via CSS e SVG para distribuição por categorias e resumo de status de empréstimos.
  - Adicionado feed de logs de atividades (auditoria simples) exibindo as últimas ações tomadas pelos administradores em tempo real.
- **Estilos Globais:**
  - Movidas as classes de estilização de modais e diálogos para o arquivo de estilo global (`styles.scss`) para reutilização unificada.

### Corrigido
- **Tipagem no TypeScript:** Corrigida a assinatura do método de criação de usuários no mock de dados para omitir propriedades geradas de forma interna.

## [2026-05-23] — Detalhes de Empréstimo e Modal de Visualização

### Adicionado
- **Modal de Detalhes do Empréstimo:** Implementada a exibição de um modal detalhado (diálogo) ao clicar em qualquer registro de empréstimo na tabela.
- **Campos do Empréstimo:** Inclusão de dados no modal como ID do livro, ID do usuário, data de empréstimo, data de devolução prevista, data efetiva de devolução, status e o operador responsável que aceitou a operação.
- **Modelos e Simulação:** Adicionado o campo `acceptedBy` na interface `Loan` e preenchidos os dados de teste correspondentes no `MockDataService`.

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

### Corrigido
- **Navegação Geral:** Corrigido o roteamento de empréstimos na barra lateral e ajustado o destaque de abas ativas para evitar a marcação simultânea indesejada de abas relacionadas a usuários.
