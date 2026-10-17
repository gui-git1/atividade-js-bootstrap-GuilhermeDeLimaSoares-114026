//1. Conexão com o JavaScript
console.log("Meu primeiro script foi executado!");

//2. Instruções e comentários
//Este é um comentário de uma linha.
console.log("Projeto: TechStore — Catálogo de Eletrônicos");
console.log("Operação matemática simples (10 + 5):", 10 + 5);
console.log("Carregando dados do catálogo...");

//3. Variáveis com const e let
//const: valores que NÃO mudam durante a execução (nome da loja, preços).
const nomeLoja = "TechStore";
const precoNotebook = 3500;
const precoSmartphone = 2200;
const precoFone = 350;

//let: valores que PODEM mudar (cliente, quantidades, subtotal).
let cliente = "Ana Souza";
let quantidadeNotebook = 1;
let quantidadeSmartphone = 2;

//Alterando uma variável let e exibindo o novo valor.
console.log(`Cliente inicial: ${cliente}`);
cliente = "Bruno Lima";
console.log(`Cliente atualizado: ${cliente}`);

//4. var como contexto histórico
//var era a única forma de declarar variáveis antes do ES6.
//Hoje é evitada porque tem escopo de função (não de bloco),
//o que provoca bugs difíceis de rastrear.
var exemploAntigo = "Declaração utilizada em códigos antigos";
console.log("Exemplo com var:", exemploAntigo);

//5. Tipos de dados
const tituloProjeto = "Catálogo de Eletrônicos";
const totalCategorias = 4;
const lojaAberta = true;
const cupomDesconto = null;

console.log("Tipo string:", tituloProjeto);
console.log("Tipo number:", totalCategorias);
console.log("Tipo boolean:", lojaAberta);
console.log("Tipo null:", cupomDesconto);

//6. Operadores matemáticos e de comparação
const subtotalNotebook   = quantidadeNotebook   * precoNotebook;
const subtotalSmartphone = quantidadeSmartphone * precoSmartphone;
const subtotalGeral = subtotalNotebook + subtotalSmartphone;
const economiaSimulada = subtotalGeral - 200;
const mediaPorProduto = subtotalGeral / (quantidadeNotebook + quantidadeSmartphone);

console.log("Subtotal Notebook:", subtotalNotebook);
console.log("Subtotal Smartphone:", subtotalSmartphone);
console.log("Subtotal geral (soma):", subtotalGeral);
console.log("Economia simulada (subtração):", economiaSimulada);
console.log("Média por produto (divisão):", mediaPorProduto);

//Comparações
const pedidoGrande = subtotalGeral >= 5000;
const temDesconto = subtotalGeral !== 0;
const poucoEstoque = quantidadeNotebook <= 1;

console.log("Pedido >= R$ 5.000?", pedidoGrande);
console.log("Tem desconto? (subtotal !== 0):", temDesconto);
console.log("Pouco estoque? (qtd <= 1):", poucoEstoque);

//7. Strings e template literals
//A mensagem é montada a partir de 3+ variáveis.
const resumoPedido = `O cliente ${cliente} está comprando ${quantidadeSmartphone} smartphones na loja ${nomeLoja}, totalizando R$ ${subtotalGeral.toFixed(2)}.`;
console.log(resumoPedido);

//8. Decisão com if/else
let quantidadeDesejada = 2;
const estoqueDisponivel = 5;

console.log("Teste de estoque (caminho verdadeiro)");
console.log(`Desejado: ${quantidadeDesejada} | Estoque: ${estoqueDisponivel}`);
if (quantidadeDesejada <= estoqueDisponivel) {
  console.log("Produto disponível em estoque.");
} else {
  console.log("Estoque insuficiente para atender o pedido.");
}

//Alterando o valor para forçar o caminho falso.
quantidadeDesejada = 10;
console.log("Teste de estoque (caminho falso)");
console.log(`Desejado: ${quantidadeDesejada} | Estoque: ${estoqueDisponivel}`);
if (quantidadeDesejada <= estoqueDisponivel) {
  console.log("Produto disponível em estoque.");
} else {
  console.log("Estoque insuficiente para atender o pedido.");
}

//10. Desafio integrador 
console.log("DESAFIO INTEGRADOR: Fechamento do pedido");

//1) Dados com let e const
const produtoDestaque = "Notebook Dell Inspiron";
const precoUnitario = 3500;
let unidades = 2;
const limiteDesconto = 5000;
const percentualDesconto = 10;

//2) Pelo menos dois cálculos
const totalPedido = precoUnitario * unidades;
const valorDesconto = totalPedido * (percentualDesconto / 100);
const totalComDesconto = totalPedido - valorDesconto;

//3) Mensagem com template literal
const mensagemFinal = `Pedido: ${unidades}x ${produtoDestaque}. Total bruto: R$ ${totalPedido.toFixed(2)}. Total com desconto: R$ ${totalComDesconto.toFixed(2)}.`;
console.log(mensagemFinal);

//4) Decisão com if/else
if (totalPedido >= limiteDesconto) {
  console.log(`Desconto de ${percentualDesconto}% aplicado! Economia de R$ ${valorDesconto.toFixed(2)}.`);
} else {
  console.log("Sem desconto. Adicione mais itens para atingir R$ 5.000,00.");
}