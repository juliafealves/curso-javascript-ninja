// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma (parcela1, parcela2)
{
  return parcela1 + parcela2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = soma(5, 5) + 5;

// Qual o valor atualizado dessa variável?
// 15
resultado;

// Declare uma nova variável, sem valor.
var valor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function novoValor(valor)
{
  return 'O valor da variável agora é ' + valor + '.';
}

// Invoque a função criada acima.
valor = novoValor(10);

// Qual o retorno da função? (Use comentários de bloco).
/**
 * O valor da variável agora é 10.
 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function calculos(argumento1, argumento2, argumento3)
{
  if(argumento1 === undefined || argumento2 === undefined || argumento3 === undefined)
    return 'Preencha todos os valores corretamente!';

  return (argumento1 * argumento2 * argumento3) + 2

}

// Invoque a função criada acima, passando só dois números como argumento.
calculos(3,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
calculos(3, 5, 7);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 107

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function novosCalculos(argumento1, argumento2, argumento3)
{
  if((argumento1 !== undefined && argumento2 === undefined && argumento3 === undefined)){
    return argumento1;
  } else if(argumento2 !== undefined && argumento1 === undefined && argumento3 === undefined){
    return argumento2;
  } else if(argumento3 !== undefined && argumento1 === undefined && argumento2 === undefined){
    return argumento3;
  } else if(argumento1 !== undefined && argumento2 !== undefined && argumento3 === undefined){
    return argumento1 + argumento2;
  } else if(argumento2 !== undefined && argumento3 !== undefined && argumento1 === undefined){
    return argumento2 + argumento3;
  } else if(argumento3 !== undefined && argumento1 !== undefined && argumento2 === undefined){
    return argumento3 + argumento1;
  } else if(argumento1 !== undefined && argumento2 !== undefined && argumento3 !== undefined) {
    return (argumento1 + argumento2) / argumento3;
  } else if(argumento1 === undefined && argumento2 === undefined && argumento3 === undefined){
    return false;
  } else {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
novosCalculos();
novosCalculos(10);
novosCalculos(10, 20);
novosCalculos(10, 20, 30);
