# Smart Library — Frontend (Gustavo de Lima)

E aí, time! Repositório criado para concentrar toda a parte do frontend que ficou sob minha responsabilidade (Guga) no desenvolvimento do Smart Library. 

A arquitetura do projeto é cliente-servidor. Esta parte do app foi desenvolvida com **Angular 21**, enquanto o backend está sendo desenvolvido em **Java / Spring Boot** pela equipe de backend (João e Geferson), sob supervisão do Raul (Tech Lead).

---

## 🚀 Tecnologias Utilizadas

- **Core:** Angular 21 (utilização de Componentes Standalone e Signals para gerenciar os estados de forma moderna).
- **Design System:** Angular Material para os componentes prontos de UI + SCSS para customizar o visual.
- **Estilização:** CSS Vanilla com variáveis customizadas para facilitar a manutenção das cores e espaçamentos.
- **Tipografia:** Fonte *Inter* integrada direto do Google Fonts.
- **Testes:** Vitest.
- **Gerenciador de Pacotes:** npm.

---

## 📂 Estrutura de Pastas

O projeto foi estruturado seguindo o padrão modular do Angular moderno:

```text
src/
├── app/
│   ├── core/                  # O que é global ou comum a todo o app
│   │   ├── layout/            # Layout principal, Header e Sidebar
│   │   └── models/            # Interfaces que representam as entidades (Livro, Usuário, Empréstimo)
│   ├── features/              # Nossas telas divididas por features (carregadas via Lazy Loading)
│   │   ├── auth/              # Esqueleto da tela de Login (pro novo membro terminar)
│   │   ├── books/             # Tela com a lista de livros e cadastro lateral (Drawer)
│   │   ├── dashboard/         # Dashboard com cards e tabela de empréstimos recentes
│   │   ├── loans/             # Tela de listagem e controle de empréstimos
│   │   └── users/             # Perfis e gerenciamento de usuários (Listagem e Meu Perfil)
│   ├── shared/                # Recursos compartilhados
│   │   └── services/          # MockDataService (serviço criado para simular a API do backend)
│   ├── app.component.ts       # Componente raiz
│   ├── app.config.ts          # Configurações globais (locale pt-BR e animações registrados aqui)
│   └── app.routes.ts          # Configuração das rotas com lazy loading
├── assets/                    # Assets estáticos
├── index.html                 # Index HTML (links da fonte Inter carregados aqui)
├── main.ts                    # Arquivo de bootstrap do Angular (importação do AppComponent corrigida)
└── styles.scss                # Variáveis de cores, resets e temas globais
```

---

## 📋 Status das Tarefas (Requisitos Funcionais)

Lista do que já foi implementado e o que resta integrar com o backend:

| ID | Requisito | O que foi feito / O que resta | Status |
| :--- | :--- | :--- | :---: |
| **RF01** | Cadastrar usuários | Criada a tela de listagem de usuários. Resta implementar a edição/cadastro | 🚧 *Fazendo* |
| **RF02** | Cadastrar livros | Desenvolvido o Drawer lateral com formulário de cadastro de livros | ✅ **Concluído** |
| **RF03** | Registrar empréstimos | Criada a interface de Empréstimos e o modal com informações detalhadas para visualização do administrador. Resta integrar a gravação | 🚧 *Aguardando API* |
| **RF04** | Registrar devoluções | Desenvolvida a tabela e as badges de status de empréstimos. Resta implementar a lógica de devolução | 🚧 *Aguardando API* |
| **RF05** | Fila de espera | Planejado para a próxima sprint | 📋 *Planejado* |
| **RF06** | Enviar notificações | Planejado para a próxima sprint | 📋 *Planejado* |
| **RF07** | Permitir reservas online | Planejado para a próxima sprint | 📋 *Planejado* |
| **RF08** | Histórico de utilização | Desenvolvida a tabela de histórico de empréstimos do usuário | ✅ **Concluído** |
| **RF09** | Múltiplas bibliotecas | Adicionado suporte a filiais e seletores no Sidebar/Cadastro | ✅ **Concluído** |
| **RF10** | Recomendação inteligente | Modelagem dos dados já está preparada nas models | ✅ **Concluído** |

---

## ⚙️ Como rodar o projeto localmente

Para baixar e testar no seu computador:

1. Clone o projeto da branch principal.
2. Acesse a pasta do projeto:
   ```bash
   cd smart-library-web
   ```
3. Instalar as dependências do projeto:
   ```bash
   npm install
   ```
4. Executar o servidor de desenvolvimento:
   ```bash
   npm start
   ```
5. Acessar `http://localhost:4200/` no navegador. O servidor possui live-reload e atualizará automaticamente a cada alteração salva.

---

## 🎨 Convenções e Padrões Adotados

Regras seguidas no desenvolvimento para manter a qualidade e padronização do código:
- **Nomes de pastas e arquivos:** Sempre em inglês e em formato kebab-case (ex: `user-profile.component.ts`).
- **Nomes no código:** camelCase para variáveis/métodos e PascalCase para classes/interfaces.
- **Signals:** Utilização de Signals (`signal()`) do Angular em todas as reatividades locais.
- **Estruturas no HTML:** Utilização da nova sintaxe de control flow (`@if`, `@for`, `@switch`) do Angular 21.
- **Internacionalização:** Configuração da localização global para `pt-BR` no `app.config.ts`, permitindo que datas e meses sejam formatados em português de forma automática.
