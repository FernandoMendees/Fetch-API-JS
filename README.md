# User Fetch (Vanilla JavaScript)

Aplicação simples para consumo de API, com foco em requisições assíncronas, tratamento de erros e manipulação de dados no DOM.

---

## Funcionalidades

* Requisição de dados de usuário via API
* Exibição dinâmica dos dados na interface
* Tratamento de erros de requisição
* Controle de estado (mensagem de erro e estado vazio)

---

## Tecnologias

* JavaScript (ES Modules)
* HTML
* CSS

---

## Destaques Técnicos

* Uso de `async/await` para requisições assíncronas
* Tratamento de erros com `try/catch`
* Manipulação dinâmica do DOM
* Separação de responsabilidades com funções (`searchUser`, `createDataItem`)
* Controle de estado da interface (loading, erro, vazio)

---

## Lógica

* Disparo de requisição ao clicar no botão
* Validação da resposta da API
* Limpeza da lista antes de renderizar novos dados
* Criação dinâmica de elementos com base na resposta
* Exibição de mensagem em caso de erro

---

## Próximos Passos

* Adicionar loading state
* Permitir múltiplos usuários na lista
* Implementar debounce ou controle de requisições
* Melhorar feedback visual de erro

---

## Execução

```bash
git clone <repo-url>
cd <nome-do-projeto>
```

Abra o arquivo `index.html` no navegador.

---

## Objetivo

Demonstrar conhecimento em consumo de APIs, manipulação de dados assíncronos e atualização dinâmica de interface com JavaScript.
