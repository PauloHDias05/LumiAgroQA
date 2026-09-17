# Plano de Teste - Lumi

## 1. Identificação do Projeto

Projeto: Lumi Agro

Tipo de aplicação: Aplicação Web

Responsável pelos testes: QA

Objetivo: Validar as principais funcionalidades do sistema, garantindo que os fluxos de cadastro, login, visualização de planos e acesso ao checkout funcionem conforme o esperado.


## 2. Objetivo do Plano de Teste

Este plano de teste tem como objetivo definir a estratégia, o escopo e os critérios utilizados para validar as principais funcionalidades da aplicação Lumi.

Os testes contemplam cenários funcionais positivos e negativos, validações de campos, autenticação, navegação entre páginas, visualização de planos e redirecionamento para o checkout.

Os cenários definidos serão validados por meio de testes manuais e testes automatizados utilizando Cypress.


## 3. Escopo dos Testes

Serão testados os seguintes épicos:

Cadastro

Login

Planos


## 4. Funcionalidades Testadas

### 4.1 Cadastro

Serão validados os seguintes cenários:

CT-001 - Criar conta com sucesso

CT-002 - Criar conta com e-mail inválido

CT-003 - Criar conta sem informar o nome

CT-004 - Criar conta com senha menor que 8 caracteres

CT-005 - Criar conta com e-mail já cadastrado

Tipo de execução: Automatizada

Ferramenta de automação: Cypress


### 4.2 Login

Serão validados os seguintes cenários:

CT-001 - Realizar login com e-mail inválido

CT-002 - Realizar login com senha inválida

CT-003 - Realizar login com senha menor que 8 caracteres

CT-004 - Realizar login com sucesso

Tipo de execução: Automatizada

Ferramenta de automação: Cypress


### 4.3 Planos

Serão validados os seguintes cenários:

CT-001 - Visualizar planos mensais

CT-002 - Acessar checkout do plano mensal 1

CT-003 - Acessar checkout do plano mensal 2

CT-004 - Acessar checkout do plano mensal 3

CT-005 - Visualizar planos anuais

CT-006 - Acessar checkout do plano anual 1

CT-007 - Acessar checkout do plano anual 2

CT-008 - Acessar checkout do plano anual 3

Tipo de execução: Automatizada

Ferramenta de automação: Cypress


## 5. Tipos de Teste

Serão executados:

Testes funcionais

Testes positivos

Testes negativos

Testes de validação de campos

Testes de autenticação

Testes de navegação

Testes de redirecionamento

Testes automatizados

Testes End-to-End (E2E)

Testes de regressão dos fluxos automatizados


## 6. Ambiente de Teste

## Aplicação

Lumi Agro

## Navegador

Google Chrome

## Automação

Cypress

## Editor de código

Visual Studio Code

## Integração Contínua

GitHub Actions


## 7. Estratégia de Teste

### Testes Automatizados

Os principais fluxos dos épicos Cadastro, Login e Planos serão executados utilizando Cypress.

Os testes automatizados deverão validar:

Preenchimento e validação dos formulários

Mensagens de erro

Regras de validação dos campos

Criação de conta

Autenticação de usuários

Redirecionamento entre páginas

URLs esperadas

Valores apresentados nos planos

Alternância entre planos mensais e anuais

Redirecionamento para o checkout

Os testes automatizados serão utilizados principalmente nos fluxos que podem ser executados repetidamente durante testes de regressão.

As execuções automatizadas também poderão ser realizadas através do GitHub Actions.



## 8. Dados de Teste

Serão utilizados dados válidos e inválidos para validar diferentes comportamentos da aplicação.

Entre os dados utilizados estão:

E-mails válidos

E-mails inválidos

E-mails já cadastrados

E-mails gerados dinamicamente

Senhas válidas

Senhas inválidas

Senhas com menos de 8 caracteres

Nome de usuário

Credenciais de usuários cadastrados

Para cenários que necessitam de um e-mail único, poderão ser utilizados dados gerados dinamicamente através da biblioteca Faker.


## 9. Critérios de Entrada

Os testes poderão ser iniciados quando:

A aplicação estiver disponível para acesso

As páginas necessárias estiverem carregando corretamente

O ambiente de testes estiver funcionando

Os elementos necessários para execução estiverem disponíveis

As credenciais de teste estiverem disponíveis

As variáveis de ambiente utilizadas na automação estiverem configuradas

O Cypress estiver instalado e configurado

As dependências do projeto estiverem instaladas


## 10. Critérios de Aprovação

Um caso de teste será considerado APROVADO quando:

O resultado obtido for igual ao resultado esperado

Não ocorrer erro durante o fluxo

As validações dos campos funcionarem corretamente

As mensagens esperadas forem apresentadas

O redirecionamento ocorrer para a página correta

Os valores apresentados estiverem de acordo com o esperado


Um caso de teste será considerado REPROVADO quando:

O resultado obtido for diferente do resultado esperado

Uma regra de validação não for respeitada

A funcionalidade não responder corretamente

Uma mensagem esperada não for apresentada

O sistema permitir uma operação que deveria ser bloqueada

O redirecionamento ocorrer para um destino incorreto

O sistema apresentar comportamento inesperado


## 11. Critérios de Saída

A execução será considerada concluída quando:

Todos os casos planejados forem executados

Os resultados obtidos forem registrados

Os casos reprovados possuírem bugs documentados

As evidências necessárias forem armazenadas

Os testes automatizados forem executados

Os defeitos encontrados estiverem documentados

O relatório final de execução estiver disponível


## 12. Registro de Bugs

Quando um caso de teste apresentar comportamento diferente do resultado esperado, deverá ser criado um registro de bug.

Cada bug deverá conter:

ID do bug

Título

Épico relacionado

Caso de teste relacionado

Descrição

Passos para reprodução

Resultado esperado

Resultado obtido

Severidade

Prioridade

Status

Evidências

Os bugs deverão possuir rastreabilidade com os respectivos casos de teste.

Exemplo:

CT-003 → BUG-001


## 13. Evidências

As evidências poderão ser registradas por meio de:

Capturas de tela

Vídeos

Relatórios de execução

Logs do Cypress

Screenshots gerados pelo Cypress

Vídeos gerados durante execução automatizada

Relatórios do GitHub Actions

As evidências relacionadas aos bugs deverão ser armazenadas junto ao arquivo correspondente.


## 14. Riscos

Alguns riscos que podem afetar a execução dos testes:

Indisponibilidade da aplicação

Instabilidade de rede

Alterações nos seletores da interface

Alterações no layout

Mudanças nas regras de negócio

Dados de teste inválidos

Alteração das mensagens apresentadas pelo sistema

Problemas com usuários utilizados nos testes

Alterações nos valores dos planos

Alterações no fluxo de autenticação

Alterações na integração com o checkout

Mudanças externas na página de checkout

Falhas em serviços ou integrações externas


## 15. Responsabilidades

### QA

Responsável por:

Planejar os testes

Criar os casos de teste

Executar os testes manuais

Desenvolver e manter os testes automatizados

Executar testes de regressão

Registrar bugs

Coletar evidências

Manter a rastreabilidade entre casos de teste e bugs

Atualizar a documentação

Analisar os resultados das execuções


## 16. Entregáveis

Ao final do processo de testes deverão estar disponíveis:

Plano de teste

Casos de teste documentados em BDD

Testes automatizados em Cypress

Bugs documentados

Evidências dos bugs

Relatório de execução dos testes

Código de automação versionado no GitHub

Histórico das execuções automatizadas através do GitHub Actions

README com a documentação geral do projeto


## 17. Status do Plano

Status: Em execução

O plano poderá ser atualizado conforme novos épicos, funcionalidades, casos de teste e bugs forem identificados durante o projeto.