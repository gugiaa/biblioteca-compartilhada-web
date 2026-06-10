# Smart Library — Frontend

Este repositório concentra a implementação do frontend da aplicação Smart Library.

O desenvolvimento do sistema segue uma arquitetura cliente-servidor, na qual o frontend foi construído utilizando **Angular 21** e o backend é implementado de forma independente em **Java / Spring Boot**.

---

## 🚀 Tecnologias Utilizadas

- **Core:** Angular 21 (utilização de Componentes Standalone e Signals para gerenciamento de estado moderno).
- **Design System:** Angular Material para os componentes de interface (UI) e SCSS para customizações.
- **Estilização:** CSS Vanilla com variáveis customizadas para facilitar a manutenção de cores e espaçamentos.
- **Tipografia:** Fonte *Inter* integrada diretamente do Google Fonts.
- **Testes:** Vitest.
- **Gerenciador de Pacotes:** npm.

---

## 📂 Estrutura de Pastas

O projeto está estruturado de acordo com o padrão modular recomendado para o Angular moderno:

```text
src/
├── app/
│   ├── core/                  # Recursos globais e comuns da aplicação
│   │   ├── layout/            # Estrutura de layout (Header, Sidebar, MainLayout)
│   │   └── models/            # Interfaces que representam as entidades (Livro, Usuário, Empréstimo)
│   ├── features/              # Funcionalidades e telas com carregamento via Lazy Loading
│   │   ├── auth/              # Estrutura para autenticação e login
│   │   ├── books/             # Visualização, cadastro e edição de livros
│   │   ├── dashboard/         # Dashboard estatístico e logs de auditoria
│   │   ├── loans/             # Listagem e controle de empréstimos
│   │   └── users/             # Gerenciamento de perfis e usuários
│   ├── shared/                # Recursos compartilhados
│   │   └── services/          # MockDataService para simulação local de APIs
│   ├── app.component.ts       # Componente raiz da aplicação
│   ├── app.config.ts          # Configurações globais do sistema
│   └── app.routes.ts          # Configuração das rotas da aplicação
├── assets/                    # Arquivos estáticos da aplicação
├── index.html                 # Index HTML principal da aplicação
├── main.ts                    # Arquivo de inicialização do Angular
└── styles.scss                # Variáveis de estilo, resets e estilização de diálogos globais
```

---

## 📋 Status das Tarefas (Requisitos Funcionais)

Lista de funcionalidades mapeadas e o status atual da implementação no frontend:

| ID | Requisito | O que foi feito / O que resta | Status |
| :--- | :--- | :--- | :---: |
| **RF01** | Cadastrar usuários | Desenvolvidas as operações de cadastro, edição e controle de bloqueio de usuários no frontend | ✅ **Concluído** |
| **RF02** | Cadastrar livros | Desenvolvido o formulário reativo e as operações de cadastro, edição e remoção de livros | ✅ **Concluído** |
| **RF03** | Registrar empréstimos | Desenvolvido o fluxo de registro, renovação e devolução de empréstimos na interface administrativa | ✅ **Concluído** |
| **RF04** | Registrar devoluções | Implementada a interface de devolução de livros com impacto em tempo real nas cópias do acervo | ✅ **Concluído** |
| **RF05** | Fila de espera | Planejado para a próxima sprint | 📋 *Planejado* |
| **RF06** | Enviar notificações | Planejado para a próxima sprint | 📋 *Planejado* |
| **RF07** | Permitir reservas online | Planejado para a próxima sprint | 📋 *Planejado* |
| **RF08** | Histórico de utilização | Desenvolvida a tabela de histórico de empréstimos do usuário | ✅ **Concluído** |
| **RF09** | Múltiplas bibliotecas | Adicionado suporte a filiais e seletores no Sidebar/Cadastro | ✅ **Concluído** |
| **RF10** | Recomendação inteligente | Modelagem dos dados preparada nas classes de modelo da aplicação | ✅ **Concluído** |

---

## ⚙️ Como rodar o projeto localmente

Para executar e testar a aplicação localmente:

1. Clonar o repositório da branch principal.
2. Acessar a pasta do projeto:
   ```bash
   cd smart-library-web
   ```
3. Instalar as dependências:
   ```bash
   npm install
   ```
4. Executar o servidor de desenvolvimento:
   ```bash
   npm start
   ```
5. Acessar `http://localhost:4200/` no navegador. O servidor dispõe de live-reload e é atualizado automaticamente a cada alteração salva.

---

## 🎨 Convenções e Padrões Adotados

Diretrizes e padrões adotados no desenvolvimento para garantir a padronização do código:
- **Nomes de pastas e arquivos:** Sempre em inglês e em formato kebab-case (ex: `user-profile.component.ts`).
- **Nomes no código:** camelCase para variáveis/métodos e PascalCase para classes/interfaces.
- **Signals:** Utilização de Signals (`signal()`) do Angular em todas as reatividades locais.
- **Estruturas no HTML:** Utilização da nova sintaxe de control flow (`@if`, `@for`, `@switch`) do Angular 21.
- **Internacionalização:** Configuração da localização global para `pt-BR` no `app.config.ts`, permitindo a formatação automática de datas e meses em português.
