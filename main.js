//Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador

alert('Hello World!');

// Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

var var1 = prompt('Soma entre duas variáveis. Primeira variável: ');

var var2 = prompt('Soma entre duas variáveis. Segunda variável: ');

var soma = parseInt(var1) + parseInt(var2);

alert('A soma entre as duas variáveis foi de: '+soma);


//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

var var3 = prompt('Insira um dado para verificar se é númber ou não...');

var verificacao = parseInt(var3) * 1;

if(isNaN(verificacao)){ 
    alert('Não é um número')
}else{ alert('É um número') };

// Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

var var4 = prompt('Insira um dado para verificar se é string ou não...');

var verificacao2 = parseInt(var4) * 1;

if(isNaN(verificacao2)){
    alert('É uma string');
}else { alert('Não é uma string') };

// Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

var var5 = prompt('Insira um dado para verificar se é booleano ou não...');

if(var5 === 'true' || var5 === 'false') {
    alert('É um booleano')
}else {alert('Não é um booleano')};

// Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

var var6 = prompt('Subtração entre duas variáveis. Primeira variável: ');

var var7 = prompt('Subtração entre duas variáveis. Segunda variável: ');

var subtracao = parseInt(var6) - parseInt(var7);

alert('A subtracao entre as duas variáveis foi de: '+subtracao);

// Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

var var8 = prompt('Multiplicação entre duas variáveis. Primeira variável: ');

var var9 = prompt('Multiplicação entre duas variáveis. Segunda variável: ');

var multiplicacao = parseInt(var8) * parseInt(var9);

alert('A multiplicação entre as duas variáveis foi de: '+multiplicacao);

// Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

var var10 = prompt('Divisão entre duas variáveis. Primeira variável: ');

var var11 = prompt('Divisão entre duas variáveis. Segunda variável: ');

var divisao = parseInt(var10) / parseInt(var11);

alert('A divisão entre as duas variáveis foi de: '+divisao);

// Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

var var12 = prompt('Verifique se o seu número é par:');

if(parseInt(var12) % 2 === 0) {
    alert('É um número par');
} else { alert('Não é número par') };

// Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

var var13 = prompt('Verifique se o seu número é impar:');

if(parseInt(var13) % 2 === 0) {
    alert('Não é um número ímpar');
} else { alert('É um número ímpar')};