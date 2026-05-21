# Smart Library — Frontend (Gustavo de Lima)

E aí, time! Criei esse repositório para concentrar toda a parte do frontend que eu (Guga) fiquei responsável de fazer para o nosso trabalho de Biblioteca Compartilhada (agora chamado de Smart Library). 

A arquitetura do projeto é cliente-servidor. Eu cuido dessa parte do app com **Angular 21**, e o João e o Geferson estão desenvolvendo o backend em **Java / Spring Boot**. O Raul é o nosso Tech Lead e está supervisionando tudo.


---

## 🚀 Tecnologias que usei

- **Core:** Angular 21 (estou usando Componentes Standalone e Signals para gerenciar os estados de forma moderna).
- **Design System:** Angular Material para os componentes prontos de UI + SCSS para customizar o visual.
- **Estilização:** CSS Vanilla com variáveis customizadas para facilitar a manutenção das cores e espaçamentos.
- **Tipografia:** Fonte *Inter* integrada direto do Google Fonts.
- **Testes:** Vitest.
- **Gerenciador de Pacotes:** npm.

---

## 📂 Estrutura de Pastas que montei

Organizei o projeto seguindo a estrutura modular padrão do Angular moderno. Ficou assim:

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
│   │   └── users/             # Meu perfil e histórico de uso
│   ├── shared/                # Recursos compartilhados
│   │   └── services/          # MockDataService (serviço que criei pra simular a API do João e Geferson)
│   ├── app.component.ts       # Componente raiz
│   ├── app.config.ts          # Configurações globais (registrei o locale pt-BR e animações aqui)
│   └── app.routes.ts          # Minhas rotas com lazy loading configurado
├── assets/                    # Assets estáticos
├── index.html                 # Index HTML (coloquei os links da fonte Inter aqui)
├── main.ts                    # Arquivo de bootstrap do Angular (corrigido a importação do AppComponent)
└── styles.scss                # Variáveis de cores, resets e temas globais
```

---

## 📋 Status das minhas tarefas (Requisitos Funcionais)

Aqui está a lista do que já implementei e o que ainda falta integrar com o backend dos meninos:

| ID | Requisito | O que fiz / O que falta | Status |
| :--- | :--- | :--- | :---: |
| **RF01** | Cadastrar usuários | Fiz a estrutura, falta criar a tela de edição | 🚧 *Fazendo* |
| **RF02** | Cadastrar livros | Desenvolvi o Drawer lateral com formulário de cadastro de livros | ✅ **Concluído** |
| **RF03** | Registrar empréstimos | Fiz a interface gráfica, falta a API do backend pra gravar | 🚧 *Aguardando API* |
| **RF04** | Registrar devoluções | Criei as badges de status na tabela, falta a lógica de devolução | 🚧 *Aguardando API* |
| **RF05** | Fila de espera | Planejado para a próxima sprint | 📋 *Planejado* |
| **RF06** | Enviar notificações | Planejado para a próxima sprint | 📋 *Planejado* |
| **RF07** | Permitir reservas online | Planejado para a próxima sprint | 📋 *Planejado* |
| **RF08** | Histórico de utilização | Desenvolvi a tabela de histórico de empréstimos do usuário | ✅ **Concluído** |
| **RF09** | Múltiplas bibliotecas | Adicionei suporte a filiais e seletores no Sidebar/Cadastro | ✅ **Concluído** |
| **RF10** | Recomendação inteligente | Modelagem dos dados já está preparada nas models | ✅ **Concluído** |

---

## ⚙️ Como rodar o projeto localmente

Se você quiser baixar e testar no seu computador:

1. Clone o projeto da branch principal.
2. Acesse a pasta do projeto:
   ```bash
   cd Biblioteca
   ```
3. Instale as dependências que usei:
   ```bash
   npm install
   ```
4. Rode o servidor de dev:
   ```bash
   npm start
   ```
5. Acesse `http://localhost:4200/` no seu navegador. O servidor tem live-reload e vai atualizar sozinho sempre que eu salvar um arquivo.

---

## 🎨 Padrões que adotei e convenções

Para manter o código limpo, estou seguindo essas regras:
- **Nomes de pastas e arquivos:** Sempre em inglês e em formato kebab-case (ex: `user-profile.component.ts`).
- **Nomes no código:** camelCase para variáveis/métodos e PascalCase para classes/interfaces.
- **Signals:** Estou usando Signals (`signal()`) do Angular em todas as reatividades locais.
- **Estruturas no HTML:** Estou usando a nova sintaxe (`@if`, `@for`, `@switch`) do Angular 21.
- **Internacionalização:** Configurei a localização global para `pt-BR` no `app.config.ts`, então datas e meses são formatados em português de forma automática.
