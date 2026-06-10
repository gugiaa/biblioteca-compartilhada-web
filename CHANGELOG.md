# Histórico de Alterações — Smart Library

Registro de todas as alterações realizadas no projeto para controle interno e acompanhamento da equipe.

## [2026-06-10] — Painel de Administração, Sistema de Permissões e Controle de Acesso

### Adicionado
- **Autenticação Temporária:**
  - Criado o `AuthService` para gerenciamento de sessão local (Signals e `localStorage`) com suporte a login rápido de Admin e Membro.
  - Reestruturada a interface de Login com cards interativos de acesso rápido para simplificação dos testes de homologação.
  - Desenvolvidos os guards funcionais `AuthGuard` e `AdminGuard` para proteção de rotas privadas e validação de acessos administrativos.
- **Diferenciação de Papéis de Acesso:**
  - Adaptada a Sidebar para computar reativamente os links visíveis conforme o nível do usuário logado (Membros comuns visualizam apenas acervo e empréstimos próprios).
  - Adaptada a visualização do Header para exibir dinamicamente iniciais no avatar, nome e e-mail no menu, e implementar a ação de Logout.
  - Ocultados recursos de criação, edição e exclusão de livros para usuários comuns na listagem de acervo.
  - Restringido o histórico de empréstimos ao ID do usuário ativo quando logado como Membro, com ocultação dos botões de devolução/renovação/registro de empréstimos.
- **Operações Administrativas completas:**
  - Desenvolvido formulário reativo de Novo Empréstimo para cadastro de transações.
  - Implementadas ações de "Devolver" e "Renovar" empréstimo diretamente no modal de detalhes, atualizando dinamicamente o status e a quantidade de exemplares disponíveis do livro.
  - Implementadas ações de edição e exclusão de livros na listagem.
  - Adaptado o Drawer lateral de livros para operar de forma híbrida (cadastro e edição de dados).
  - Implementado o cadastro e edição de membros com formulário reativo em modal.
  - Adicionada a ação rápida de "Bloquear/Desbloquear" usuários com reatividade de tela imediata.
- **Dashboard Admin & Auditoria:**
  - Desenvolvidos gráficos estatísticos estilizados via CSS e SVG para distribuição por categorias e resumo de status de empréstimos.
  - Adicionado feed de logs de atividades (auditoria simples) exibindo as últimas ações tomadas pelos administradores em tempo real.
- **Estilos Globais:**
  - Movidas as classes de estilização de modais e diálogos para o arquivo de estilo global (`styles.scss`) para reutilização unificada.

### Corrigido
- **Importações e Tipagem:**
  - Corrigida a assinatura do método de criação de usuários no mock de dados para omitir propriedades geradas de forma interna.
  - Corrigida a importação ausente da função `inject` no componente de empréstimos.

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
