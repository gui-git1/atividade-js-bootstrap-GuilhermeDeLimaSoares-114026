# TechStore — Catálogo de Eletrônicos

## Nome e tema do projeto
**TechStore** é um catálogo fictício de produtos eletrônicos (notebooks,
smartphones, fones e smartwatches). O objetivo foi unir uma interface visual
em **Bootstrap via CDN** com a prática dos primeiros conceitos de
**JavaScript ES6**, executados no Console do navegador.

## Explicação da interface
A interface é composta por:

- **Navbar** com o nome "TechStore".
- **Seção inicial (hero)** com título, descrição e um botão de chamada.
- **Alert** informando a promoção de desconto e frete grátis.
- **Grid de cards** (4 cards) com imagem textual de produto, badges de
  estoque/categoria, preço e botão "Adicionar".
- **Alert secundário** orientando a abrir o Console (F12).
- **Footer** com copyright.

O layout é totalmente **responsivo**: em telas pequenas os cards ocupam a
linha inteira (`col-12`), em tablets ocupam metade (`col-md-6`) e em desktops
um quarto da largura (`col-lg-3`).

## Componentes Bootstrap utilizados
- `navbar` (com `navbar-dark` e `bg-dark`)
- `container`, `row`, `col-12`, `col-md-6`, `col-lg-3` (grid responsivo)
- `card`, `card-body`, `card-title`, `card-text`, `card-footer`
- `badge` (com variantes `bg-success`, `bg-primary`, `bg-warning`,
  `bg-danger`, `bg-secondary`, `bg-info`)
- `button` (`btn`, `btn-primary`, `btn-lg`, `btn-sm`, `btn-outline-primary`,
  `btn-outline-secondary`)
- `alert` (`alert-info` e `alert-secondary`)
- `footer`
- utilitários de espaçamento (`my-4`, `mt-4`, `g-4`, `py-3`), tipografia
  (`display-5`, `fw-bold`, `lead`, `text-*`) e `shadow-sm`

Nenhum arquivo `style.css` foi criado — toda a estilização vem do Bootstrap.

## Diferença entre `let`, `const` e `var`

| Declaração | Pode ser reatribuída? | Escopo | Quando usar |
|---|---|---|---|
| `const` | Não (referência fixa) | bloco | Valores que não mudam (preços, nome da loja, configurações). |
| `let` | Sim | bloco | Valores que mudam durante a execução (cliente, quantidades, subtotal). |
| `var` | Sim | função (não respeita blocos) | Legado. Era a única declaração antes do ES6. |

**Por que `const` ou `let`?**
- `nomeLoja`, `precoNotebook`, `precoSmartphone`, `precoFone` → `const`,
  porque são valores fixos do catálogo.
- `cliente`, `quantidadeNotebook`, `quantidadeSmartphone` → `let`, porque
  representam dados que podem mudar (o cliente foi alterado de "Ana Souza"
  para "Bruno Lima" durante a execução).

**Por que o `var` foi usado apenas como demonstração?**
A prática atual prioriza `let` e `const` porque `var` **não respeita o escopo
de bloco** (ex.: variáveis declaradas dentro de um `if` vazam para fora dele)
e permite **redeclaração silenciosa**, o que gera bugs difíceis de encontrar.
Além disso, o içamento (`hoisting`) do `var` faz com que a variável exista
antes mesmo da linha de declaração. Por isso, usamos `var` apenas para
registrar o contexto histórico.

## Tipos de dados utilizados
- **string** → `tituloProjeto = "Catálogo de Eletrônicos"`, `nomeLoja`, `cliente`
- **number** → `totalCategorias = 4`, `precoNotebook = 3500`
- **boolean** → `lojaAberta = true`, `pedidoGrande`, `temDesconto`
- **null** → `cupomDesconto = null` (nenhum cupom aplicado)

## Explicação da condição criada com `if/else`

**Item 8 — Estoque:**
```js
if (quantidadeDesejada <= estoqueDisponivel) {
  console.log("Produto disponível em estoque.");
} else {
  console.log("Estoque insuficiente para atender o pedido.");
}