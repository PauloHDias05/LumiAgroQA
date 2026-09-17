# 🧪 Projeto de QA — Lumi Agro

Projeto completo de **Quality Assurance (QA)** aplicado a uma aplicação web, reunindo **testes manuais, testes automatizados, documentação de casos de teste, registro de bugs, evidências e execução automatizada em CI/CD**.

O objetivo deste repositório é demonstrar meus conhecimentos adquiridos até o momento, para que assim eu possa ingressar na vaga de Analista de Testes JR.

---

## 🎯 Objetivo

Validar as principais funcionalidades da aplicação através de testes manuais e automatizados, identificando possíveis falhas e documentando os resultados encontrados.

O projeto contempla:

- 🤖 Testes automatizados
- 🥒 Cenários utilizando BDD
- 🐞 Registro de bugs
- 📸 Evidências de testes
- 📊 Relatórios de execução
- 🔄 Integração contínua com GitHub Actions

---

## 🛠️ Tecnologias e Ferramentas

Cypress  
Faker  
GitHub Actions  

**Práticas utilizadas:**

Testes Automatizados • Testes Funcionais • E2E • BDD • Cypress • Bug Reporting • CI/CD

---

## 🧪 Testes Manuais

Os testes manuais foram documentados utilizando uma estrutura padronizada contendo:

- ID
- Épico
- Pré-condição
- Cenário BDD
- Resultado esperado
- Resultado obtido
- Status
- Indicação se o cenário está automatizado

Os testes foram organizados nos seguintes épicos:

- Cadastro
- Login
- Planos

### Exemplo

```gherkin
Dado que o usuário esteja na página de cadastro

Quando preencher um e-mail válido e uma senha válida sem informar o nome

Então o sistema deve impedir a criação da conta e informar que o nome completo é obrigatório
```

---

## 🤖 Testes Automatizados

Parte dos cenários do projeto foi automatizada utilizando **Cypress**.

Os testes automatizados validam fluxos da aplicação diretamente pelo navegador, verificando elementos, validações de formulários, mensagens de erro, autenticação, navegação e redirecionamentos.

Entre os fluxos automatizados estão:

- Criação de conta
- Validação de campos do cadastro
- Login
- Validação de credenciais
- Visualização de planos mensais
- Visualização de planos anuais
- Redirecionamento para o checkout

---

## 🔄 CI/CD — GitHub Actions

O projeto possui integração com **GitHub Actions**.

A cada `push` realizado na branch `master`, o pipeline executa automaticamente os testes Cypress.

Isso permite identificar automaticamente se alguma alteração causou falha nos cenários cobertos pela automação.

Os relatórios das execuções também podem ser publicados através do **GitHub Pages**.

---

## 🐞 Bugs Encontrados

Durante os testes da funcionalidade de cadastro foi identificado **1 bug**.

**BUG-001 — Sistema permite criar conta sem informar o nome**

O sistema permite a criação de uma conta mesmo quando o campo de nome, definido como obrigatório, não é preenchido.

O bug foi documentado com **caso de teste relacionado, passos para reprodução, resultado esperado, resultado obtido, severidade, prioridade e evidência**.

---

## 📸 Evidências

Os bugs possuem evidências visuais armazenadas junto à documentação.

As evidências permitem registrar o comportamento encontrado durante a execução dos testes e facilitar a reprodução dos problemas identificados.

---

## 💡 Conhecimentos Aplicados

Durante o desenvolvimento deste projeto foram aplicados conhecimentos em:

- Planejamento de testes
- Criação de casos de teste
- BDD
- Testes positivos e negativos
- Testes funcionais
- Testes E2E
- Validação de formulários
- Automação com Cypress
- Geração de dados de teste com Faker
- Validação de redirecionamentos
- Registro e documentação de bugs
- Evidências de testes
- CI/CD
- GitHub Actions
- GitHub Pages

---

## 👨‍💻 Autor

**Paulo Dias**

Projeto desenvolvido para estudo e construção de portfólio profissional na área de **Quality Assurance (QA)**.

---
